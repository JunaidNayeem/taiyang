import { useEffect } from "react";
import Data from "@data/sections/video.json";
import { circleText } from "@common/utilits";

const VideoSection = () => {
  useEffect(() => {
    circleText();
  }, []);

  const clickedVideoButton = (e) => {
    e.preventDefault();

    e.target.parentNode.classList.add("active");
    let videoIframe = e.target.parentNode.querySelector(".js-video-iframe");
    let videoUrl = videoIframe.dataset.src;
    videoIframe.setAttribute("src", videoUrl);
  };

  return (
    <>
      {/* Onovo Video */}
      <section className="onovo-section">
        <div className="container">
          {/* video */}
          <div className="onovo-video" data-onovo-overlay data-onovo-scroll>
            {/* <iframe className="js-video-iframe" data-src={"https://www.youtube.com/embed/"+Data.yt_video_id+"?showinfo=0&rel=0&autoplay=1"} /> */}
            <video
              src="/video/video.mp4"
              autoPlay
              muted
              style={{ width: '100%', height: 'auto' }}
            ></video>
            </div>
          </div>
      </section>
    </>
  );
};

export default VideoSection;
