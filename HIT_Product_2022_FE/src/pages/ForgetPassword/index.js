import React from 'react';
import './forget_password.scss';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';

import logo from '~/assets/images/header-logo.png';

function ForgetPassword() {
    const navigate = useNavigate();

    return (
        <div className="forgetpw">
            <Helmet>
                <title>Quên mật khẩu</title>
            </Helmet>

            <div className="forgetpw_content">
                <Container maxWidth="sm">
                    <Formik
                        initialValues={{
                            username: '',
                            otpcode: '',
                        }}
                        validationSchema={Yup.object().shape({
                            username: Yup.string().required('*Trường này là bắt buộc'),
                            otpcode: Yup.number().required('*Trường này là bắt buộc'),
                        })}
                        onSubmit={() => {
                            navigate('/', { replace: true });
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
                                />
                                <Button style={{ backgroundColor: '#D9D9D9', color: '#000' }} variant="contained">
                                    Gửi OTP
                                </Button>
                                <TextField
                                    error={Boolean(touched.otpcode && errors.otpcode)}
                                    fullWidth
                                    helperText={touched.otpcode && errors.otpcode}
                                    label="Nhập OTP"
                                    margin="normal"
                                    name="otpcode"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.password}
                                    variant="outlined"
                                />

                                <Box sx={{ py: 2 }}>
                                    <Button
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        className="forgetpw-button"
                                    >
                                        Xác nhận
                                    </Button>
                                </Box>
                                <Typography sx={{ textAlign: 'center' }} color="textSecondary" variant="body1">
                                    <Link
                                        sx={{ marginRight: '10px', textDecoration: 'none' }}
                                        component={RouterLink}
                                        to="/dang-ky"
                                        variant="h5"
                                    >
                                        Đăng ký
                                    </Link>
                                    <Link
                                        sx={{ textDecoration: 'none' }}
                                        component={RouterLink}
                                        to="/dang-nhap"
                                        variant="h5"
                                    >
                                        Đăng nhập
                                    </Link>
                                </Typography>
                            </form>
                        )}
                    </Formik>
                </Container>
            </div>
        </div>
    );
}

export default ForgetPassword;
