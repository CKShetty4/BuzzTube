import React from 'react';
import './Empty.css';
import { EmptyImg } from '../../assets';

const Empty = ({ title, description }) => {
  return (
    <div className='empty'>
      <img src={EmptyImg} alt="NoVideos" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Empty;
