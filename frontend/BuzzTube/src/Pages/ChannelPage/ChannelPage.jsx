import React, { useState } from 'react';
import './ChannelPage.css';
import { Empty, SubscribeButton, VideoCard } from '../../Components';
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

// Hardcoded for testing — change to false to test Empty state
const hasVideos = true;
// const hasVideos = false;

const videoData = {
    thumbnail: 'https://placehold.co/600x400',
    title: 'JavaScript Fundamentals: Variables and Data Types',
    description: 'Learn the basics of JavaScript, including variables, data types...',
    channelName: 'CK Shetty',
    channelLogo: 'https://placehold.co/400',
    views: '10.3k',
    timeAgo: '44 minutes ago',
    duration: '20:45'
};

const ChannelPage = () => {
    const [selectedTab, setSelectedTab] = useState(TABS.VIDEOS);
    const [viewMode, setViewMode] = useState('list'); // or 'card'

    const renderContent = () => {
        if (selectedTab === TABS.VIDEOS) {
            if (hasVideos) {
                return (
                    <>
                        <div className="view-toggle-wrapper">
                            <div className="view-toggle-buttons">
                                <div className={`toggle-indicator ${viewMode}`} />

                                <button
                                    className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                                    onClick={() => setViewMode('list')}
                                    aria-label="List View"
                                >
                                    <div className="icon list-icon">
                                        <div></div><div></div><div></div>
                                    </div>
                                </button>

                                <button
                                    className={`view-toggle-btn ${viewMode === 'card' ? 'active' : ''}`}
                                    onClick={() => setViewMode('card')}
                                    aria-label="Card View"
                                >
                                    <div className="icon card-icon">
                                        <div></div><div></div><div></div><div></div>
                                    </div>
                                </button>
                            </div>
                        </div>



                        <div className="video-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {[...Array(8)].map((_, idx) => (
                                <VideoCard key={idx} view={viewMode} video={videoData} />
                            ))}
                        </div>
                    </>
                );
            } else {
                return <Empty title={messages[TABS.VIDEOS].title} description={messages[TABS.VIDEOS].description} />;
            }
        } else {
            return <Empty title={messages[selectedTab].title} description={messages[selectedTab].description} />;
        }
    };

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
                {renderContent()}
            </div>
        </div>
    );
};

export default ChannelPage;
