// VideoCard.jsx
import React from 'react';
import './VideoCard.css';

const VideoCard = ({ view, video }) => {
  return (
    <div className={`video-card ${view}`}>
      <div className="thumbnail-container">
        <img src={video.thumbnail} alt="Thumbnail" className="thumbnail" />
        <span className="duration">{video.duration}</span>
      </div>

      <div className="video-info">
        <div className="channel-logo">
          <img src={video.channelLogo} alt="Channel" />
        </div>
        <div className="text-info">
          <h4 className="title">{video.title}</h4>
          {view === 'list' && <p className="description">{video.description}</p>}
          <p className="meta">
            {video.channelName} • {video.views} Views • {video.timeAgo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
