import React from 'react';
import './nicevideos.scss';

function NiceVideos() {
    return (
        <div className="nicevideos">
            <div className="home-title">Video hay</div>
            <div className="videos">
                <div className="videos-row">
                    <iframe
                        className="video"
                        title="video"
                        src="https://www.youtube.com/embed/ipdKXJcjP24"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="video"
                        title="video"
                        src="https://www.youtube.com/embed/7bB_fVDlvhc"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="video"
                        title="video"
                        src="https://www.youtube.com/embed/e2-ahs905MQ"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="videos-row">
                    <iframe
                        className="video"
                        title="video"
                        src="https://www.youtube.com/embed/8tKuviI68Ss"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="video"
                        title="video"
                        src="https://www.youtube.com/embed/Ht63rOvSNb4"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="video"
                        title="video"
                        src="https://www.youtube.com/embed/YG8ws3dfMM0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className="home-box">Xem thêm</div>
        </div>
    );
}

export default NiceVideos;
