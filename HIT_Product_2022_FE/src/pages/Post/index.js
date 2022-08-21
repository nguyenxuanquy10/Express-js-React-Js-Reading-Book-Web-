import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import httpService from '~/services/http-service';
import './post.scss'
const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const pathPost = "http://18.144.43.131:5000/api/posts/" + `${id}`;
    useEffect(() => {
        httpService.get(pathPost).then(res => {
            setPost(res.data.post);
        })
    })
    return (
        <div className="postContainer">
            <div className="postContainer-title">
                {post.titlePost}
            </div>
            <div>
                <img src={post.imagePost}></img>
            </div>
            {/* <div>{post.descriptionPost}</div> */}
        </div>
    )
}

export default Post