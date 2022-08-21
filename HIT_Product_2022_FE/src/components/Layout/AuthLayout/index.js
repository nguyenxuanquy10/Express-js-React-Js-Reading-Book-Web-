import './AuthLayout.scss';
import Header from './Header';
import Footer from './Footer';

import React from 'react';

function AuthLayout({ children }) {
    return (
        <div className="authlayout">
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>

            <Footer />
        </div>
    );
}

export default AuthLayout;
