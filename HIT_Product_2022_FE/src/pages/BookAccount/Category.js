import React from 'react';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import storageService from '~/services/storage.service';
import PortfolioCard from '../../components/Home/PortfolioCard';
import httpService from '~/services/http-service';
import './category.scss';
import { useEffect, useState } from 'react';

function Category() {
    const { token } = useParams();
    const [user, setUser] = useState({});
    const [books, setBooks] = useState([]);
    // const pathFetchUser = "http://18.144.43.131:5000/api/users/tokenUser";
    //  console.log(pathFetchUser)
    // let pathStatusBookUser;
    // useEffect(() => {
    //     httpService.get(pathFetchUser, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'authorization': 'Bearer ' + `${token}`
    //         }
    //     }).then(res => {
    //         console.log(res.data.user); //
    //         setUser(res.data.user)
    //         console.log(user)
    //         pathStatusBookUser = 'http://localhost:5000/api/status-book-user/' + `${user._id}`
    //     })
    // }, [])
    // console.log(user)
    const userId = storageService.get('userId');
    const pathStatusBookUser = 'http://localhost:5000/api/status-book-user/' + `${userId}`;
    console.log(pathStatusBookUser);
    useEffect(() => {
        httpService.get(pathStatusBookUser).then((books) => {
            // console.log(books.data.data.books)
            const listBook = books.data.map((book) => book.book);
            // console.log(books.data)
            console.log(listBook);
            setBooks(listBook);
        });
    }, []);
    return (
        <div className="category">
            <div className="home-title">Sách Ebook phát triển bản thân</div>
            <div className="category_booklist1">
                {books &&
                    books.map((books) => {
                        const link = '/review-book/' + `${books._id}`;
                        return (
                            <div key={books._id}>
                                <Link to={link}>
                                    <PortfolioCard
                                        image={books.image}
                                        namebook={books.namebook}
                                        view={books.view}
                                        className="PortfolioCard"
                                    />
                                </Link>
                                <div className="category_info home-box">Xem thêm</div>
                            </div>
                        );
                    })}
                {books.length === 0 && (
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            fontSize: '20px',
                            color: '#8b8b8b',
                        }}
                    >
                        Bạn chưa có cuốn sách nào trong kho sách.
                    </div>
                )}
            </div>
        </div>
    );
}

export default Category;
