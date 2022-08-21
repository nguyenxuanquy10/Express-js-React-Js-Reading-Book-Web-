import React from 'react';
import CommentBooks from '../../components/ReviewBook/Comment_bookv2';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import httpService from '~/services/http-service';
import storageService from '~/services/storage.service';
import './audioBook.scss';
const io = require('socket.io-client');
const socket = io('http://18.144.43.131:5000', { transports: ['websocket'] });
const AudioBook = () => {
    const { id } = useParams();
    const userId = storageService.get('userId');
    const [user, setUser] = useState({});
    const [book, setBook] = useState({});
    const [audio, setAudio] = useState([]);
    const [play, setPlay] = useState([true]);
    const [phayNow, setPlayNow] = useState();
    const [title, setTitle] = useState();
    const pathRead = 'http://18.144.43.131:5000/api/books/' + `${id}`;

    console.log(pathRead);
    useEffect(() => {
        httpService.get(pathRead).then((data) => {
            // console.log(data.data.book.video);
            setAudio(data.data.book.video);
            const arr = [];
            audio.forEach((currntu, index) => {
                arr.push(true);
                setPlay(arr);
            });
            setBook(data.data.book);
            setPlayNow(audio[0]);
        });
    }, []);
    const isPlay = (in_dex, link) => {
        const arr = [];
        audio.forEach((currntu, index) => {
            if (index !== in_dex) {
                arr.push(true);
            } else {
                arr.push(false);
            }
            setPlay(arr);
            setPlayNow(link);
            const chuong = +in_dex + 1;
            const titleName = 'Chương ' + chuong;
            setTitle(titleName);
            // setTitle("Chương " + index)
        });
    };
    return (
        <div>
            <div className="container-audio">
                <div className="content-audio">
                    <div className="audio-image">
                        <img src={book.image} alt="" />
                    </div>
                    <div className="audio">
                        <div className="audio-image-sub">
                            {/* <img src="https://salt.tikicdn.com/cache/w1200/ts/product/df/7d/da/d340edda2b0eacb7ddc47537cddb5e08.jpg" alt="" /> */}
                            <div style={{ width: '100%', paddingLeft: '2rem', fontWeight: 'bold' }}>
                                <div className="title-book">{book.namebook}</div>
                                <p style={{ marginTop: '5px' }}>{title}</p>
                            </div>
                        </div>
                        <div className="audio-main">
                            <audio src={phayNow} controls autoplay="true"></audio>
                        </div>
                        <div className="hr"></div>
                        <div className="listAudio">
                            <ul>
                                {audio.length &&
                                    audio.map((currentUserId, index) => {
                                        return (
                                            <li
                                                link={currentUserId}
                                                key={index}
                                                onClick={() => isPlay(index, currentUserId)}
                                            >
                                                Chương {index + 1}
                                                {play[index] ? (
                                                    <i class="fa fa-play"></i>
                                                ) : (
                                                    <i class="fas fa-square"></i>
                                                )}
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <CommentBooks socket={socket} id={userId} bookId={id}></CommentBooks>
        </div>
    );
};

export default AudioBook;
