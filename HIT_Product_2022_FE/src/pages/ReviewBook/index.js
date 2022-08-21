import React from 'react';
import './review_book.scss';
import CommentBooks from '../../components/ReviewBook/Comment_bookv2';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import httpService from '~/services/http-service';
import storageService from '~/services/storage.service';
import axios from 'axios'
const io = require('socket.io-client');

// const socket = io('http://localhost:5000', { transports: ['websocket'] });

const socket = io('http://18.144.43.131:5000', { transports: ['websocket'] });

const ReviewBook = () => {
    const { id } = useParams();
    const userId = storageService.get("userId")
    const [book, setBook] = useState({});
    const [user, setUser] = useState({});
    const path = "http://18.144.43.131:5000/api/books/" + `${id}`;
    const pathRead = "/sach/" + `${id}`;
    const pathAudio = "/audio-sach/" + `${id}`;
    const token = storageService.get('accessToken');
    // console.log(id)
    // console.log(path);
    // const pathFetchUser = "http://18.144.43.131:5000/api/users/tokenUser";
    // useEffect(() => {
    //     axios.get(pathFetchUser, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'authorization': 'Bearer ' + `${token}`
    //         }
    //     }).then(res => {
    //         setUser(res.data.user)
    //     })
    // }, [])
    useEffect(() => {
        httpService.get(path).then((data) => {
            setBook(data.data.book);
        })
    }, [])
    const addBook = (e) => {
        const bookId = e.target.id
        const content = {
            "book": bookId,
            "user": userId,
            "statusBookUser": 0
        }
        const pathhAddBook = "http://18.144.43.131:5000/api/status-book-user";
        // console.log(content)
        axios.post(pathhAddBook, content).then((data) => {
            console.log(data)
        })
    }
    return (
        <div className="container-book">
            <b className="title-book">{book.namebook}- Đọc Sách Online, Nghe sách nói, Tải Sách Miễn Phí (PDF)</b>
            <div className="book">
                <img
                    className="book-img"
                    src={book.image}
                    alt=""
                ></img>
                <div className="book-detail">
                    <div>
                        <ul className="book-detail-infor">
                            <li>
                                <strong>Danh mục</strong>:{book.type}
                            </li>
                            <li>
                                <strong>Tác giả</strong>:{book.author}
                            </li>
                            <li>
                                <strong>Đánh giá</strong>:{book.star}/5
                            </li>
                        </ul>
                    </div>
                    <div className="book-detail-option">
                        {/* <button className="book-detail-option-read"> */}
                        <Link className="book-detail-option-read" to={pathRead}>
                            Đọc
                        </Link>
                        {/* </button> */}
                        <Link className="book-detail-option-add" to="" onClick={(e) => addBook(e)} id={id}>Thêm vào kho</Link>
                        <Link className="book-detail-option-listen" to={pathAudio}>Nghe sách nói</Link>
                    </div>
                </div>
            </div>
            <div className="book-review">
                <b className="title-book">Review Sách {book.namebook}</b>
                <p>
                    {book.description}
                </p>
            </div>
            <CommentBooks socket={socket} id={userId} bookId={id}></CommentBooks>
        </div>
    );
};

export default ReviewBook;