<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo "Webhook is working! ✅";
    exit;
}

define('MERCHANT_KEY',    'GnB53-96U02-Yxpqkf-gUTCj-w5aei8');
define('MERCHANT_SALT',   'qsqlA-GQG0m-Y6UV9C!MxAgU-gjDOK3A');
define('MERCHANT_SECRET', 'nB532F@lAI96U02Uww5aei8SzGQG0#9CIR3mE5EycRKjk-tkKqsqlAI');
define('SYNNEFO_URL',     'https://ethen.synnefoims.com/synnefo/api.synnefoims.com');

$input   = json_decode(file_get_contents('php://input'), true);
$intent  = $input['queryResult']['intent']['displayName'] ?? '';
$params  = $input['queryResult']['parameters'] ?? [];
$session = $input['session'] ?? '';

$mobile        = $params['mobile_no'] ?? '';
$customer_name = $params['customer_name'] ?? $params['person']['name'] ?? '';
$pincode       = $params['pincode'] ?? '';
$address       = $params['address'] ?? $params['any'] ?? '';

$contextParams = [];
foreach (($input['queryResult']['outputContexts'] ?? []) as $ctx) {
    if (strpos($ctx['name'], 'customer_data') !== false) {
        $contextParams = $ctx['parameters'] ?? [];
        break;
    }
}

$mobile   = $mobile   ?: ($contextParams['mobile_no'] ?? '');
$username = $contextParams['username'] ?? '';

function base64url_encode($data)
{
    return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
}

function generateJWT($payload)
{
    $header    = base64url_encode(json_encode(["typ" => "JWT", "alg" => "HS256"]));
    $body      = base64url_encode(json_encode($payload));
    $signature = base64url_encode(hash_hmac('sha256', "$header.$body", MERCHANT_SECRET, true));
    return "$header.$body.$signature";
}

function synnefoRequest($endpoint, $payload, $token = null)
{
    $jwt       = generateJWT($payload);
    $timestamp = time() . rand(100, 999);
    $headers   = [
        'Content-Type: application/plain',
        'Accept: application/plain',
        'timestamp: ' . $timestamp
    ];
    if ($token) $headers[] = 'token: ' . $token;

    $ch = curl_init(SYNNEFO_URL . '/' . $endpoint);
    curl_setopt_array($ch, [
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => $jwt,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER     => $headers,
        CURLOPT_SSL_VERIFYPEER => false,
        CURLOPT_FOLLOWLOCATION => true,
    ]);
    $response = curl_exec($ch);
    curl_close($ch);

    $parts = explode('.', $response);
    if (isset($parts[1])) {
        return json_decode(base64_decode(
            str_pad(
                strtr($parts[1], '-_', '+/'),
                strlen($parts[1]) % 4,
                '=',
                STR_PAD_RIGHT
            )
        ), true);
    }
    return $response;
}

function getToken()
{
    $result = synnefoRequest('generatetoken.php', [
        "username" => MERCHANT_KEY,
        "password" => MERCHANT_SALT
    ]);
    return is_array($result) ? ($result['response'] ?? null) : null;
}

function debugLog($label, $data)
{
    file_put_contents(
        __DIR__ . '/debug.log',
        "[" . date('Y-m-d H:i:s') . "] === $label ===\n" .
            print_r($data, true) . "\n\n",
        FILE_APPEND
    );
}

function sendResponse($text, $outputContexts = [])
{
    header('Content-Type: application/json');
    $body = ["fulfillmentText" => $text];
    if (!empty($outputContexts)) {
        $body["outputContexts"] = $outputContexts;
    }
    echo json_encode($body);
    exit;
}

switch ($intent) {

    case 'Enter Your Details':
        $token  = getToken();
        $result = synnefoRequest('addinquirydata.php', [
            "customer_name" => $customer_name,
            "pincode"       => (string)$pincode,
            "mobile_no"     => $mobile,
            "address"       => $address
        ], $token);

        debugLog('Enter Your Details', [
            'token'   => $token,
            'name'    => $customer_name,
            'mobile'  => $mobile,
            'pincode' => $pincode,
            'address' => $address,
            'result'  => $result,
        ]);

        if (isset($result['response']['ticket_number'])) {
            $enq   = $result['response']['ticket_number'];
            $reply = "✅ Thank you!\n\n" .
                "Your inquiry has been registered!\n" .
                "Inquiry ID: *$enq*\n\n" .
                "Our executive will contact you shortly! 😊";
        } else {
            $msg   = $result['message'] ?? 'Unknown error';
            $reply = "❌ Something went wrong: $msg";
        }
        sendResponse($reply);
        break;

    case 'ethen_Plan_Expiry':
        if (empty($mobile)) {
            sendResponse("❌ Mobile number not received. Please enter your registered mobile number.");
        }

        $token  = getToken();
        $result = synnefoRequest('fetchdetailsbymobileno.php', [
            "mobile_no" => $mobile
        ], $token);

        debugLog('ethen_Plan_Expiry', ['mobile' => $mobile, 'result' => $result]);

        if (empty($result['response']) || !is_array($result['response'])) {
            sendResponse("❌ No account found with mobile: $mobile\nPlease enter your registered mobile number.");
        }

        $uname   = $result['response'][0]['username'];
        $details = synnefoRequest('fetchdetailsbyusername.php', ["username" => $uname], $token);

        if (empty($details['response'])) {
            sendResponse("❌ Could not fetch account details. Please try again.");
        }

        $d      = $details['response'][0];
        $cname  = trim(($d['first_name'] ?? '') . ' ' . ($d['last_name'] ?? ''));
        $plan   = $d['plan_name']   ?? 'N/A';
        $expiry = $d['expiry_date'] ?? 'N/A';
        $renew  = $d['renew_date']  ?? 'N/A';
        $status = $d['userstatus']  ?? 'N/A';

        $reply = "📋 *Your Account Details:*\n\n" .
            "👤 Name: $cname\n" .
            "📦 Plan: $plan\n" .
            "📅 Expiry Date: $expiry\n" .
            "🔄 Renew Date: $renew\n" .
            "✅ Status: $status\n\n" .
            "What would you like to do next?";

        // ✅ Quick Reply buttons for WhatsApp
        header('Content-Type: application/json');
        echo json_encode([
            "fulfillmentText"     => $reply,
            "fulfillmentMessages" => [
                [
                    "text" => ["text" => [$reply]]
                ],
                [
                    "quickReplies" => [
                        "title"        => "What would you like to do next?",
                        "quickReplies" => ["Renew Plan", "Register Complaint"]
                    ]
                ]
            ],
            "outputContexts" => [
                [
                    "name"          => $session . "/contexts/customer_data",
                    "lifespanCount" => 5,
                    "parameters"    => [
                        "mobile_no"     => $mobile,
                        "username"      => $uname,
                        "customer_name" => $cname,
                        "plan_name"     => $plan,
                        "expiry_date"   => $expiry,
                        "renew_date"    => $renew,
                        "status"        => $status
                    ]
                ]
            ]
        ]);
        exit;

    case 'ethen_Renewal_Link':
        if (empty($username) && empty($mobile)) {
            sendResponse("⚠️ Session expired. Please enter your mobile number again.");
        }

        $token = getToken();

        if (empty($username)) {
            $lookup   = synnefoRequest('fetchdetailsbymobileno.php', ["mobile_no" => $mobile], $token);
            $username = $lookup['response'][0]['username'] ?? '';
        }

        if (empty($username)) {
            sendResponse("❌ Could not identify your account. Please try again.");
        }

        $link  = synnefoRequest('complaintrenewallink.php', [
            "username"          => $username,
            "lead_or_complaint" => "1"
        ], $token);

        debugLog('ethen_Renewal_Link', ['username' => $username, 'link' => $link]);

        $url   = $link['response']['url_link'] ?? '';
        $reply = empty($url)
            ? "❌ Could not generate renewal link. Please contact support."
            : "🔗 *Your Renewal Link:*\n\n$url\n\nClick the link above to renew your plan! 😊";

        sendResponse($reply);
        break;

    case 'ethen_Complaint':
        if (empty($username) && empty($mobile)) {
            sendResponse("⚠️ Session expired. Please enter your mobile number again.");
        }

        $token = getToken();

        if (empty($username)) {
            $lookup   = synnefoRequest('fetchdetailsbymobileno.php', ["mobile_no" => $mobile], $token);
            $username = $lookup['response'][0]['username'] ?? '';
        }

        if (empty($username)) {
            sendResponse("❌ Could not identify your account. Please try again.");
        }

        $link  = synnefoRequest('complaintrenewallink.php', [
            "username"          => $username,
            "lead_or_complaint" => "2"
        ], $token);

        debugLog('ethen_Complaint', ['username' => $username, 'link' => $link]);

        $url   = $link['response']['url_link'] ?? '';
        $reply = empty($url)
            ? "❌ Could not generate complaint link. Please contact support."
            : "🛠️ *Your Complaint Link:*\n\n$url\n\nClick the link above to register your complaint! 😊";

        sendResponse($reply);
        break;

    default:
        sendResponse("Sorry, I didn't understand that. Please try again.");
}
