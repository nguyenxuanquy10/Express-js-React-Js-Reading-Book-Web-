// import React from 'react';
// import { Pagination } from '@mui/material';
// import { Link, NavLink, useLocation } from 'react-router-dom';

// import './category.scss';

// import PortfolioCard from '~/components/Home/PortfolioCard';
// import dac_nhan_tam from '~/assets/images/home/dac_nhan_tam.jpeg';
// import book2 from '~/assets/images/home/book2.jpg';
// import book3 from '~/assets/images/home/book3.jpeg';
// import book4 from '~/assets/images/home/book4.jpeg';
// import book5 from '~/assets/images/home/book5.jpeg';
// import book6 from '~/assets/images/home/book6.jpeg';

// const Category = () => {
//     const books = [
//         {
//             id: 1,
//             img: dac_nhan_tam,
//             title: 'Đắc Nhân Tâm',
//             views: 64745,
//         },
//         {
//             id: 2,
//             img: book2,
//             title: 'Sự im lặng của bầy cừu',
//             views: 18746,
//         },
//         {
//             id: 3,
//             img: book3,
//             title: 'Không gia đình',
//             views: 2304,
//         },
//         {
//             id: 4,
//             img: book4,
//             title: 'Tiếng gọi nơi hoang dã',
//             views: 6537,
//         },
//         {
//             id: 5,
//             img: book5,
//             title: 'Túp lều bác Tom',
//             views: 8376,
//         },
//         {
//             id: 6,
//             img: book6,
//             title: 'Klara and the Sun',
//             views: 1222,
//         },
//         {
//             id: 7,
//             img: book3,
//             title: 'Không gia đình',
//             views: 2394,
//         },
//         {
//             id: 8,
//             img: book2,
//             title: 'Sự im lặng của bầy cừu',
//             views: 2304,
//         },
//         {
//             id: 9,
//             img: book4,
//             title: 'Tiếng gọi nơi hoang dã',
//             views: 2304,
//         },
//     ];
//     const [page, setPage] = React.useState(1);
//     const handleChange = (event, value) => {
//         setPage(value);
//     };
//     return (
//         <div className="category">
//             <div className="category_navbar">
//                 <div className="category_navbar-item category_navbar-item-active ">Sách phát triển bản thân</div>
//                 <div className="category_navbar-item">Tiểu thuyết</div>
//                 <div className="category_navbar-item">Trinh thám</div>
//                 <div className="category_navbar-item">Truyện ngược</div>
//             </div>
//             <div className="category_list">
//                 {books &&
//                     books.map((book) => (
//                         <div key={book.id}>
//                             <Link to="/review-book">
//                                 <PortfolioCard img={book.img} title={book.title} views={book.views} />
//                             </Link>
//                         </div>
//                     ))}
//             </div>
//             <Pagination count={6} page={page} onChange={handleChange} />
//         </div>
//     );
// };

// export default Category;

import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './category.scss';
import PortfolioCard from '../../components/Home/PortfolioCard';
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
            <div className="category_navbar">
                <div className="category_navbar-item category_navbar-item-active ">Sách phát triển bản thân</div>
                <div className="category_navbar-item">Tiểu thuyết</div>
                <div className="category_navbar-item">Trinh thám</div>
                <div className="category_navbar-item">Truyện ngược</div>
            </div>
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
