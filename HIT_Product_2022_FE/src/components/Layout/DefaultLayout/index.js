import './DefaultLayout.scss';
import Header from './Header';
import Footer from './Footer';

import React from 'react';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>

            <Footer />
        </div>
    );
}

export default DefaultLayout;
