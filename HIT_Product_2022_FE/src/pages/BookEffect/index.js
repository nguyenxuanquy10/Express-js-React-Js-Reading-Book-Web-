import React from 'react';
import './bookEffect.scss';
import CommentBooks from '~/components/Comment_bookv2';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import httpService from '~/services/http-service';
const BookEffect = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const path = "http://18.144.43.131:5000/api/books/" + `${id}`;
    useEffect(() => {
        httpService.get(path).then((data) => {
            setBook(data.data.book);
        })
    }, [])
    return (
        <div className="BookEffect">
            <div className="bookContainer">
                <iframe
                    className="bookContainer_book"
                    title={book.namebook}
                    src={book.contentBook}
                ></iframe>
            </div>
            {/* <div>
                <CommentBooks></CommentBooks>
            </div> */}
        </div>
    );
};

export default BookEffect;
