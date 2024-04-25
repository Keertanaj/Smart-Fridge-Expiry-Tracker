import React from 'react';
import '../App.css';

import './VideoSection.css';

function VideoSection() {
  return (
    <div className='video-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
    </div>
  );
}

export default VideoSection;