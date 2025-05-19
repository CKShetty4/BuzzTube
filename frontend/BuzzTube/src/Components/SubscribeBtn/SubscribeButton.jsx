import React, { useState } from 'react';
import './SubscribeButton.css';
import { subscribedimg, subscribersd } from '../../assets'; // logo assets

const SubscribeButton = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [animating, setAnimating] = useState(false);

  const toggleSubscribe = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setSubscribed((prev) => !prev);
      setAnimating(false);
    }, 600); // match with animation duration
  };

  return (
    <button
      className={`subscribe-button ${subscribed ? 'subscribed' : ''} ${animating ? 'animating' : ''}`}
      onClick={toggleSubscribe}
    >
      <span className="button-bg" />

      {/* Icon container */}
      <span className="icon">
        {subscribed ? (
          <img src={subscribersd} alt="Subscribed" className="icon-img" />
        ) : (
          <img src={subscribedimg} alt="Subscribe" className="icon-img" />
        )}
      </span>

      {/* Text */}
      <span className="text">{subscribed ? 'Unsubscribe' : 'Subscribe'}</span>
    </button>
  );
};

export default SubscribeButton;
