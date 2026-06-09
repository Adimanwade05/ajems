import { useState, useEffect } from "react";
import "./ShowcaseFrame.css";
import vid from "../../assets/videos/showcase.mp4";

export default function ShowcaseFrame({ videoRef }) {
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const v = videoRef?.current;
    if (!v) return;
    const onPlay = () => setShowControls(true);
    v.addEventListener("play", onPlay);
    return () => v.removeEventListener("play", onPlay);
  }, [videoRef]);

  return (
    <div className="showcase">
      <video
        ref={videoRef}
        className="showcase__video"
        src={vid}
        muted
        loop
        playsInline
        preload="metadata"
        controls={showControls}
      />
    </div>
  );
}