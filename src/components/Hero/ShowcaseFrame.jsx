import "./ShowcaseFrame.css";
import showcaseVideo from "../../assets/videos/showcase.mp4";

export default function ShowcaseFrame() {
  return (
    <div className="showcase">
      {/* video */}
      <div className="showcase__screen">
        <video
          className="showcase__video"
          src={showcaseVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
    </div>
  );
}