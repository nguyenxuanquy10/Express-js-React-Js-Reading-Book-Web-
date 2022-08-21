import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './account.scss';
import AccountNav from '~/components/Account/AccountNav';

const Account = () => {
    const { token } = useParams();
    const [user, setUser] = useState({});
    const [username, setUsername] = useState();
    const [passwordNow, setPasswordNow] = useState();
    const [passwordNew, setPasswordNew] = useState();
    const [comfirmPassword, setComfirmPassword] = useState();
    const [bugComfirm, setBugComfirm] = useState(true);
    const pathBookStore = '/tai-khoan/sach/' + `${token}`;
    const pathManageAccount = '/tai-khoan/' + `${token}`;
    // const redirectBookAccoutn = () => {
    //     window.open(pathBookStore);
    // }
    // const redirectAccount = () => {
    //     window.open(pathManageAccount);
    // }
    const pathFetchUser = 'http://18.144.43.131:5000/api/users/tokenUser';
    useEffect(() => {
        axios
            .get(pathFetchUser, {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: 'Bearer ' + `${token}`,
                },
            })
            .then((res) => {
                // console.log(res.data.user); //
                setUser(res.data.user);
            });
    }, []);
    const checkConfirmPassword = () => {
        if (comfirmPassword != passwordNew) {
            setBugComfirm(false);
        } else {
            setBugComfirm(true);
        }
    };
    const changeAccount = () => {
        checkConfirmPassword();
    };
    return (
        <div className="container-account">
            <br />
            <AccountNav />
            <br />
            <hr />
            <div className="account-info">
                <div className="account-star">
                    <label htmlFor="">Star</label>
                    <input type="text" placeholder="" disabled value={user.star} />
                </div>
                <div className="account-name">
                    <label htmlFor="">Tên hiển thị</label>
                    <input type="text" placeholder="" value={user.username} />
                </div>

                <div className="account-password">
                    <label htmlFor="">Đổi mật khẩu</label>
                    <div className="account-password-column">
                        <input
                            type="password"
                            name=""
                            id=""
                            placeholder="Mật khẩu hiện tại"
                            onChange={(e) => setPasswordNow(e.target.value)}
                        />
                        <input
                            type="password"
                            name=""
                            id=""
                            placeholder="Mật khẩu mới"
                            onChange={(e) => setPasswordNew(e.target.value)}
                        />
                        <input
                            type="password"
                            name=""
                            id=""
                            placeholder="Xác nhận mật khẩu mới"
                            onChange={(e) => setComfirmPassword(e.target.value)}
                        />
                        {!bugComfirm ? (
                            <div className="confirm-password">* Mật khẩu không trùng nhau</div>
                        ) : (
                            <div></div>
                        )}
                        <button onClick={changeAccount}>Đổi</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
