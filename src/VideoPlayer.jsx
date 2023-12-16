import React from 'react';

const VideoPlayer = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0&showinfo=0&modestbranding=1&fs=1`;

  return (
    <div>
      <iframe
        title="YouTube Video Player"
        width="640"
        height="360"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
