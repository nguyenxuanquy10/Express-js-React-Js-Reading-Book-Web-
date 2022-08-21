import React from 'react';
import { Link } from 'react-router-dom';
// import styles from './Header.module.scss';
import './Header.scss';

function Header() {
    return (
        <header>
            <div className="header1">
                <div className="header1-text">HIT - BOOKS</div>
                <div className="header1-icons">
                    <Link to="/">
                        <i class="fa-brands fa-facebook"></i>
                    </Link>
                    <Link to="/">
                        <i class="fa-brands fa-tiktok"></i>
                    </Link>
                    <Link to="/">
                        <i class="fa-brands fa-youtube"></i>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
