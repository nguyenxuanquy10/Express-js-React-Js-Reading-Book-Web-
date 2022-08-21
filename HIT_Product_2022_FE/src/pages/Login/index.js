import React, { useState, useRef } from 'react';
import './login.scss';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Box, Button, Container, Link, TextField, Typography, Snackbar, Alert, AlertTitle } from '@mui/material';
import httpService from '~/services/http-service';
import storageService from '~/services/storage.service';

import logo from '~/assets/images/header-logo.png';

function Login() {
    // const [valueInput, setValueInput] = useState({
    //     username: '',
    //     password: '',
    // });

    const [error, setError] = useState('');
    const [successAlert, setSuccessAlert] = useState('');
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    return (
        <div className="login">
            <Helmet>
                <title>Đăng nhập</title>
            </Helmet>

            <div className="login_content">
                <Container maxWidth="sm">
                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                        }}
                        validationSchema={Yup.object().shape({
                            username: Yup.string().required('*Trường này là bắt buộc'),
                            password: Yup.string().required('*Trường này là bắt buộc'),
                        })}
                        onSubmit={async () => {
                            try {
                                const resData = await httpService.post('auth/login', {
                                    body: {
                                        username: usernameRef.current.value,
                                        password: passwordRef.current.value,
                                    },
                                });
                                if (resData.status === 200) {
                                    storageService.set('accessToken', resData.data.tokens.access.token);
                                    storageService.set('isLogin', true);
                                    storageService.setObject('username', resData.data.user.username);
                                    storageService.set('userId', resData.data.user._id);
                                    setSuccessAlert('Đăng nhập thành công!');
                                    // storageService.setObject("token", resData.data.tokens.access.token);
                                    navigate('/', { replace: true });
                                    // console.log(resData.data.user)
                                }
                            } catch (err) {
                                setError('Sai tài khoản hoặc mật khẩu!');
                            }
                        }}
                    >
                        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                            <form onSubmit={handleSubmit}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Link component={RouterLink} to="/">
                                        <img width="100px" src={logo} alt="logo" />
                                    </Link>
                                </Box>
                                <TextField
                                    error={Boolean(touched.username && errors.username)}
                                    fullWidth
                                    helperText={touched.username && errors.username}
                                    label="Tên đăng nhập"
                                    margin="normal"
                                    name="username"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.username}
                                    variant="outlined"
                                    inputRef={usernameRef}
                                />

                                <TextField
                                    error={Boolean(touched.password && errors.password)}
                                    fullWidth
                                    helperText={touched.password && errors.password}
                                    label="Mật khẩu"
                                    margin="normal"
                                    name="password"
                                    type="password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.password}
                                    variant="outlined"
                                    inputRef={passwordRef}
                                />

                                <Box sx={{ py: 2 }}>
                                    <Button
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        className="login-button"
                                    >
                                        Đăng nhập
                                    </Button>
                                </Box>
                                <Typography sx={{ textAlign: 'center' }} color="textSecondary" variant="body1">
                                    <Link sx={{ color: '#000' }} component={RouterLink} to="/quen-mat-khau">
                                        Quên mật khẩu?{' '}
                                    </Link>
                                    <Link
                                        sx={{ textDecoration: 'none' }}
                                        component={RouterLink}
                                        to="/dang-ky"
                                        variant="h6"
                                    >
                                        Đăng ký
                                    </Link>
                                </Typography>
                            </form>
                        )}
                    </Formik>
                </Container>
                {error && (
                    <Snackbar
                        open={error !== ''}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        autoHideDuration={4000}
                        onClose={() => setError('')}
                        size={30}
                    >
                        <Alert severity="error">
                            <AlertTitle>Lỗi</AlertTitle>
                            <strong>{error}</strong>
                        </Alert>
                    </Snackbar>
                )}
                {successAlert && (
                    <Snackbar
                        open={successAlert !== ''}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        autoHideDuration={4000}
                        onClose={() => setSuccessAlert('')}
                        size={30}
                    >
                        <Alert severity="success">
                            <AlertTitle>Thành công</AlertTitle>
                            <strong>{successAlert}</strong>
                        </Alert>
                    </Snackbar>
                )}
            </div>
        </div>
    );
}

export default Login;
