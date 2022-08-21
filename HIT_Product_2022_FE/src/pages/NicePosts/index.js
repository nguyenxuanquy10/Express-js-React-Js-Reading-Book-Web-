import React from 'react';
import { Pagination } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'
import './niceposts.scss';

import PortfolioCard from '~/components/Home/PortfolioCard';

const NicePosts = () => {
    const [page, setPage] = React.useState(1);
    const [posts, setPosts] = useState([]);
    const handleChange = (event, value) => {
        setPage(value);
    };
    useEffect(() => {
        axios.get("http://18.144.43.131:5000/api/posts").then((post) => {
            // console.log(post.data.data.posts)
            setPosts(post.data.data.posts);
        })
    }, []);
    return (
        <div className="niceposts">
            <select>
                <option>Danh sách bài viết</option>
            </select>
            <div className="niceposts_list">
                {posts &&
                    posts.map((post) => {
                        const pathPost = "/bai-viet/" + `${post._id}`;
                        return (
                            <Link to={pathPost}>
                                <PortfolioCard type="post" image={post.imagePost} title={post.titlePost} view={post.viewPost} />
                            </Link>
                        )
                    })}
            </div>

            <Pagination sx={{ fontSize: '20px' }} count={10} page={page} onChange={handleChange} />
        </div>
    );
};

export default NicePosts;

