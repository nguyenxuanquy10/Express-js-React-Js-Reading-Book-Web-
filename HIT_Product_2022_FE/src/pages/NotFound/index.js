import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.scss';
import img from '~/assets/images/notfound.jpg';

const NotFound = () => {
    return (
        <div className="notfound">
            <img src={img} alt="notfound" />

            <div className="notfound_title">Oops! Không tìm thấy trang</div>
            <div className="notfound_text">
                Trang web bạn đang tìm có thể đã bị thay đổi hoặc tạm thời không truy cập được.
            </div>
            <Link to="/" class="home-box">
                Quay lại trang chủ
            </Link>
        </div>
    );
};

export default NotFound;
