import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import storageService from '~/services/storage.service';

function AccountNav() {
    const pageLocation = useLocation();
    const currentPage = pageLocation.pathname.split('/tai-khoan/sach');
    const token = storageService.get('accessToken');
    return (
        <div className="acount-header">
            <Link
                className="linkAccount"
                style={{ marginRight: '2rem', paddingTop: '1rem' }}
                to={`/tai-khoan/sach/${token}`}
            >
                {!currentPage[0] ? <b>Kho sách</b> : 'Kho sách'}
            </Link>
            <Link className="linkAccount" to={`/tai-khoan/${token}`}>
                {currentPage[0] ? <b>Quản lý thông tin cá nhân</b> : 'Quản lý thông tin cá nhân'}
            </Link>
        </div>
    );
}

export default AccountNav;
