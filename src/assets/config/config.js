const viewsFolder = '../../web/views';

const config = {
    routes: [
        {
            name: 'homepage',
            path: '/',
            component: () => import(/* @vite-ignore */ `${viewsFolder}/Homepage.vue`),
            requireLogin: false,
        },
        {
            name: 'login',
            path: '/login',
            component: () => import(/* @vite-ignore */ `${viewsFolder}/Homepage.vue`),
            requireLogin: false,
        },
    ],
};

export default config;
