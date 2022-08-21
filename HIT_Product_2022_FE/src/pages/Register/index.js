import React, { useRef, useState } from 'react';
import './register.scss';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Box, Button, Container, Link, TextField, Typography, Snackbar, Alert, AlertTitle } from '@mui/material';
import logo from '~/assets/images/header-logo.png';
import httpService from '~/services/http-service';
import storageService from '~/services/storage.service';

function Register() {
    const navigate = useNavigate();
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const emailRef = useRef(null);
    const [error, setError] = useState('');

    return (
        <div className="register">
            <Helmet>
                <title>Đăng ký</title>
            </Helmet>

            <div className="register_content">
                <Container maxWidth="sm">
                    <Formik
                        initialValues={{
                            email: '',
                            username: '',
                            password: '',
                            cfpassword: '',
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string()
                                .email('*Email không hợp lệ')
                                .max(255)
                                .required('*Trường này là bắt buộc'),
                            username: Yup.string().max(200).required('*Trường này là bắt buộc'),
                            password: Yup.string()
                                .min(8, 'Mật khẩu phải dài ít nhất 8 kí tự')
                                .max(255)
                                .required('*Trường này là bắt buộc')
                                .matches(
                                    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,
                                    'Mật khẩu phải chứa ít nhất 1 chữ cái và 1 chữ số',
                                ),
                            cfpassword: Yup.string()
                                .oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp')
                                .required('*Trường này là bắt buộc'),
                        })}
                        onSubmit={async () => {
                            try {
                                const resData = await httpService.post('auth/signup', {
                                    body: {
                                        username: usernameRef.current.value,
                                        password: passwordRef.current.value,
                                        email: emailRef.current.value,
                                    },
                                });

                                // console.log(resData);

                                if (resData.status === 201) {
                                    navigate('/dang-nhap', { replace: true });
                                }
                            } catch (err) {
                                setError(err.response.data.message);
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
                                    error={Boolean(touched.email && errors.email)}
                                    fullWidth
                                    helperText={touched.email && errors.email}
                                    label="Email"
                                    margin="normal"
                                    name="email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="email"
                                    value={values.email}
                                    variant="outlined"
                                    inputRef={emailRef}
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
                                <TextField
                                    error={Boolean(touched.cfpassword && errors.cfpassword)}
                                    fullWidth
                                    helperText={touched.cfpassword && errors.cfpassword}
                                    label="Nhập lại mật khẩu"
                                    margin="normal"
                                    name="cfpassword"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="password"
                                    value={values.cfpassword}
                                    variant="outlined"
                                />

                                <Box sx={{ py: 2 }}>
                                    <Button
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        className="register-button"
                                    >
                                        Đăng ký
                                    </Button>
                                </Box>
                                <Typography sx={{ textAlign: 'center' }} color="textSecondary" variant="body1">
                                    Đã có tài khoản?{' '}
                                    <Link
                                        sx={{ textDecoration: 'none' }}
                                        component={RouterLink}
                                        to="/dang-nhap"
                                        variant="h6"
                                    >
                                        Đăng nhập
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
            </div>
        </div>
    );
}

export default Register;
