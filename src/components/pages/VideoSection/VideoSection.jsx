import React from 'react';

const VideoSection = () => {
    return (
        <div className="video">
            {/* <video id='my-video' width='100%' height='auto' poster='images/video.jpg' alt='your browaer is not support this video' controls >
                <source  src="https://www.bdhti.com/video/video.mp4"/>
            </video> */}
            <div className="container">
                <div className="video-contain">
                    <div id="my-video-player-box">
                        <video src="https://www.bdhti.com/video/video.mp4"></video>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VideoSection;