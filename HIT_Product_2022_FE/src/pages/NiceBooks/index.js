import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import PortfolioCard from '../../components/Home/PortfolioCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
function NiceBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://18.144.43.131:5000/api/books/topBook").then((books) => {
            console.log(books.data.data.books)
            setBooks(books.data.data.books);
        })
    }, []);

    return (
        <div className="category">
            <div className="home-title">Sách Ebook phát triển bản thân</div>
            <div className="category_booklist">
                {books &&
                    books.map((book) => {
                        const link = "/review-book/" + `${book._id}`;
                        return (
                            <div key={book._id}>
                                <Link to={link}>
                                    <PortfolioCard image={book.image} namebook={book.namebook} view={book.view} />
                                </Link>
                            </div>
                        )
                    })}
            </div>
            <div className="category_info home-box">Xem thêm</div>
        </div>
    );
}

export default NiceBooks;

