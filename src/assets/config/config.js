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
            component: () => import(/* @vite-ignore */ `${viewsFolder}/Login.vue`),
            requireLogin: false,
        },
        {
            name: 'register',
            path: '/register',
            component: () => import(/* @vite-ignore */ `${viewsFolder}/Register.vue`),
            requireLogin: false,
        }, 
        {
            name: 'profile',
            path: '/profile',
            component: () => import(/* @vite-ignore */ `${viewsFolder}/Profile.vue`),
            requireLogin: true,
        },
        {
            name: 'logout',
            path: '/logout',
            component: () => import(/* @vite-ignore */ `${viewsFolder}/Logout.vue`),
            requireLogin: true,
        },
        {
            name: '404',
            path: '/:pathMatch(.*)*',
            component: () => import(/* @vite-ignore */ `${viewsFolder}/System/404.vue`),
            requireLogin: false,
        }
    ],
};

export default config;
