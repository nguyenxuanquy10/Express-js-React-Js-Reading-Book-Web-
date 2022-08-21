import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './bookAccount.scss';
import storageService from '~/services/storage.service';
import Category from './Category';
import AccountNav from '~/components/Account/AccountNav';
const BookAccount = () => {
    const token = storageService.get('accesstoken');
    // const pathFetchUser = "http://18.144.43.131:5000/api/users/tokenUser";
    // const pathFetchUser = "http://18.144.43.131:5000/api/users/tokenUser";

    return (
        <div className="container-account">
            <br />
            <AccountNav />
            <br />
            <hr />
            <Category />
        </div>
    );
};

export default BookAccount;
