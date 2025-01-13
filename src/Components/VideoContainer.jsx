import React from "react";
import useVideo from "../CustomHooks/useVideo";
import { useSelector } from "react-redux";

const VideoContainer = ({ id }) => {
  useVideo(id);
  const key = useSelector((state) => state.movie.trailerVideo);

  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-square md:aspect-square lg:aspect-video   "
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoContainer;

