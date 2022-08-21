import React from 'react';
import './introduce.scss';

const Introduce = () => {
    return (
        <div className="introduce">
            <div className="introduce_text">Xin chào bạn, chúng mình là HIT</div>
            <hr />
            <div className="introduce_socialmedia">
                <dic>Các nhóm hữu ích dành cho bạn</dic>
                <div className="introduce_socialmedia-icons">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-tiktok"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
            </div>
            <hr />
            <div className="introduce_info">
                <div className="introduce_info-title">Liên hệ với bọn mình nếu:</div>

                <ul>
                    <li>Bạn muốn thêm sách mình đang đọc vào website</li>
                    <li>Cần kết nối để hợp tác</li>
                    <li>Báo cáo lỗi của website</li>
                    <li>Các vấn đề về bản quyền</li>
                </ul>
                <div className="introduce_info-title" style={{ marginTop: 10 }}>
                    Thông tin liên hệ
                </div>
                <ul>
                    <li>Facebook</li>
                    <li>Zalo/SĐT</li>
                    <li>Email</li>
                </ul>
            </div>
        </div>
    );
};

export default Introduce;
