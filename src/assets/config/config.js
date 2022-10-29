const config = {
    routes: [
        {
            name: 'homepage',
            path: '/',
            component: () => import('../../web/views/Homepage.vue'),
            requireLogin: false,
        },
        {
            name: 'login',
            path: '/login',
            component: () => import('../../web/views/Homepage.vue'),
            requireLogin: false,
        },
    ],
};

export default config;
