import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import PortfolioCard from '../../components/Home/PortfolioCard';
import './category.scss'


import { useEffect, useState } from 'react'
import axios from 'axios'
function Category() {
    const [books, setBooks] = useState([]);
    // const books = [
    //     {
    //         id: 1,
    //         img: dac_nhan_tam,
    //         title: 'Đắc Nhân Tâm',
    //         views: 64745,
    //     },
    //     {
    //         id: 2,
    //         img: book2,
    //         title: 'Sự im lặng của bầy cừu',
    //         views: 18746,
    //     },
    //     {
    //         id: 3,
    //         img: book3,
    //         title: 'Không gia đình',
    //         views: 2304,
    //     },
    //     {
    //         id: 4,
    //         img: book4,
    //         title: 'Tiếng gọi nơi hoang dã',
    //         views: 6537,
    //     },
    //     {
    //         id: 5,
    //         img: book5,
    //         title: 'Túp lều bác Tom',
    //         views: 8376,
    //     },
    //     {
    //         id: 6,
    //         img: book6,
    //         title: 'Klara and the Sun',
    //         views: 1222,
    //     },
    // ];
    useEffect(() => {
        axios.get("http://18.144.43.131:5000/api/books").then((books) => {
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
                            </div>)
                    })}
            </div>
            <div className="category_info home-box">Xem thêm</div>
        </div>
    );
}

export default Category;
