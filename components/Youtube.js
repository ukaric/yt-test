import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId, ...opts }) => {
  return <YouTube opts={opts} videoId={videoId} />;
};

export default VideoPlayer;
