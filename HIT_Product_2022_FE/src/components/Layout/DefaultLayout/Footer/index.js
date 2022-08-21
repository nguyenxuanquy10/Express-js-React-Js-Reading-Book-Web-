import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, IconButton } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import './Footer.scss';
import logo from '~/assets/images/footer-logo.png';

function Footer() {
    return (
        <footer>
            <div className="footer1">
                <div className="footer1-list">
                    <ul>
                        <Link to="/">
                            <li>Trang chủ</li>
                        </Link>
                        <Link to="/danh-muc">
                            <li>Danh mục</li>
                        </Link>
                        <Link to="/sach-hay">
                            <li>Sách hay</li>
                        </Link>
                        <Link to="/bai-viet-hay">
                            <li>Bài viết hay</li>
                        </Link>
                        <Link to="/video-hay">
                            <li>Video hay</li>
                        </Link>
                        <Link to="/gioi-thieu">
                            <li>Giới thiệu</li>
                        </Link>
                    </ul>
                </div>
                <div className="footer1-search">
                    <div className="text">Tìm kiếm tên sách hay</div>
                    <TextField
                        className="search"
                        fullWidth
                        id="outlined-basic"
                        variant="outlined"
                        defaultValue="Tìm kiếm"
                        InputProps={{
                            endAdornment: (
                                <IconButton>
                                    <SearchOutlined />
                                </IconButton>
                            ),
                        }}
                    />
                    {/* <input placeholder="Tìm kiếm" className="searchInput" />
                    <span className="searchbtn">test</span> */}
                </div>
                <div className="footer1-logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <div className="text">Sách là cửa sổ tri thức</div>
                </div>
            </div>
            <div className="footer2">Bản quyền bởi nhóm product CLB_HIT © 2022</div>
        </footer>
    );
}

export default Footer;
