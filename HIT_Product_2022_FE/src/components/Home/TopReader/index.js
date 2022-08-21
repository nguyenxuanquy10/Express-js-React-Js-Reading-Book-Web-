import React from 'react';

import './topreader.scss';
import trophy_1 from '~/assets/images/home/topreader-1.png';
import trophy_2 from '~/assets/images/home/topreader-2.png';
import trophy_3 from '~/assets/images/home/topreader-3.png';

function TopReader() {
    return (
        <div className="topreader">
            <div className="topreader_text home-title">Top đọc nhiều nhất</div>
            <div className="topreader_trophies">
                <div className="topreader_trophies-trophy">
                    <img src={trophy_2} alt="2nd" />
                    <div className="topreader_trophies-trophy-name home-box">Chi</div>
                </div>
                <div className="topreader_trophies-trophy">
                    <img src={trophy_1} alt="1st" />
                    <div className="topreader_trophies-trophy-name home-box">Thúy</div>
                </div>
                <div className="topreader_trophies-trophy">
                    <img src={trophy_3} alt="3rd" />
                    <div className="topreader_trophies-trophy-name home-box">Quý</div>
                </div>
            </div>
            <div className="topreader_myrank">
                <div className="home-title">Hạng của bạn</div>
                <div className="topreader_myrank-mine">
                    <div className="topreader_myrank-mine-rank">8</div>
                    <div className="topreader_myrank-mine-name home-box">Dũng</div>
                </div>
            </div>
        </div>
    );
}

export default TopReader;
