import React from 'react';
import './home.scss';
import TopReader from '~/components/Home/TopReader';
import Category from '~/components/Home/Category';
import NicePosts from '~/components/Home/NicePosts';
import NiceVideos from '~/components/Home/NiceVideos';

const Home = () => {
    return (
        <div>
            <TopReader />
            <hr />
            <Category />
            <hr />
            <NicePosts />
            <hr />
            <NiceVideos />
        </div>
    );
};

export default Home;
