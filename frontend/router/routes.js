import { HomePage, NoticeBoard, NotesList } from 'pages';

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
        path: '/notes-list',
        name: 'notes-list',
        component: NotesList,
    },
];
