import AuthLayout from '~/components/Layout/AuthLayout';
import Home from '~/pages/Home';
import Category from '~/pages/Category';
import Introduce from '~/pages/Introduce';
import NiceBooks from '~/pages/NiceBooks';
import NiceVideos from '~/pages/NiceVideos';
import NicePosts from '~/pages/NicePosts';
import NotFound from '~/pages/NotFound';
import Register from '~/pages/Register';
import Login from '~/pages/Login';
import ForgetPassword from '~/pages/ForgetPassword';
import ResetPassword from '~/pages/ResetPassword';
import BookEffect from '~/pages/BookEffect';
import ReviewBook from '~/pages/ReviewBook';
import Account from '~/pages/Account';
import BookAccount from '~/pages/BookAccount';
import AudioBook from '~/pages/AudioBook';
import Post from '~/pages/Post'
const publicRoutes = [{
        path: '/danh-muc',
        component: Category,
    },
    {
        path: '/sach-hay',
        component: NiceBooks,
    },
    {
        path: '/bai-viet-hay',
        component: NicePosts,
    },
    {
        path: '/video-hay',
        component: NiceVideos,
    },
    {
        path: '/gioi-thieu',
        component: Introduce,
    },
    {
        path: '/dang-ky',
        layout: AuthLayout,
        component: Register,
    },
    {
        path: '/dang-nhap',
        layout: AuthLayout,
        component: Login,
    },
    {
        path: '/quen-mat-khau',
        layout: AuthLayout,
        component: ForgetPassword,
    },
    {
        path: '/doi-mat-khau',
        layout: AuthLayout,
        component: ResetPassword,
    },

    { path: '/', component: Home },
    {
        path: '*',
        layout: null,
        component: NotFound,
    },
    {
        path: '/sach/:id',
        component: BookEffect,
    },
    {
        path: '/review-book/:id',
        component: ReviewBook,
    },
    {
        path: '/tai-khoan/:token',
        component: Account,
    },
    {
        path: '/tai-khoan/sach/:token',
        component: BookAccount
    },
    {
        path: '/audio-sach/:id',
        component: AudioBook
    },
    {
        path: '/bai-viet/:id',
        component: Post
    },
];


const privateRoutes = [];

export { publicRoutes, privateRoutes };