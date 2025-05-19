import React, { useState } from 'react';
import './ChannelPage.css';
import { Empty, SubscribeButton } from '../../Components';
import { subscribers } from '../../assets';

const TABS = {
    VIDEOS: 'Videos',
    PLAYLIST: 'Playlist',
    TWEETS: 'Tweets',
    SUBSCRIBED: 'Subscribed',
};

const messages = {
    [TABS.VIDEOS]: {
        title: 'No videos uploaded',
        description: 'This page has yet to upload a video. Search another page in order to find more videos.',
    },
    [TABS.PLAYLIST]: {
        title: 'No playlists yet',
        description: 'This channel has not created any playlists.',
    },
    [TABS.TWEETS]: {
        title: 'No tweets shared',
        description: 'This channel has not tweeted anything yet.',
    },
    [TABS.SUBSCRIBED]: {
        title: 'No subscriptions found',
        description: 'This channel has not subscribed to any others.',
    },
};

const ChannelPage = () => {
    const [selectedTab, setSelectedTab] = useState(TABS.VIDEOS);

    return (
        <div className="channel-page">
            <div className="channel-banner">
                {/* <h1>NothingYet</h1> */}
            </div>

            <div className="channel-details">
                <div className="chuser-icon-circle"><h1>CK</h1></div>
                
                <div>
                    <h1>CK Shetty</h1>
                    <p>@ckshetty4</p>
                    <p>600k Subscribers · 20 Subscribed</p>
                </div>
                <div className="subscribe-button-container">
                    <SubscribeButton />
                </div>


            </div>

            <div className="channel-tabs">
                {Object.values(TABS).map((tab) => (
                    <button
                        key={tab}
                        
                        className={`tab ${selectedTab === tab ? 'selected' : ''}`}
                        onClick={() => setSelectedTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="channel-content">
                <Empty
                    title={messages[selectedTab].title}
                    description={messages[selectedTab].description}
                />
            </div>
        </div>

    );
};

export default ChannelPage;
