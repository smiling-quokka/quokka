import { HomePage, NoticeBoard, Bookmarks } from 'pages';

export default [
    {
        path: '/',
        name: '',
        component: HomePage,
    },
    {
        path: '/notice-board',
        name: 'notice-board',
        component: NoticeBoard,
    },
    {
        path: '/bookmarks',
        name: 'bookmarks',
        component: Bookmarks,
    },
];
