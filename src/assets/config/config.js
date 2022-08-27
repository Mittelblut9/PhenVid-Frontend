const config = {
    frontent_url: `${import.meta.env.VITE_APP_PROTOCOL}${import.meta.env.VITE_APP_DOMAIN}${(import.meta.env.PRODUCTION) ? '' : ':'+import.meta.env.VITE_APP_PORT}`,
    backend_url: `${import.meta.env.VITE_APP_PROTOCOL}${import.meta.env.VITE_APP_DOMAIN}${(import.meta.env.PRODUCTION) ? '' : ':'+import.meta.env.VITE_APP_PORT}`,
    apiUrl: `/api`,

    routes: [{
            name: "homepage",
            path: "/",
            component: () => import('../../web/views/Homepage.vue'),
            requireLogin: false
        },
        {
            name: "login",
            path: "/login",
            component: () => import('../../web/views/Homepage.vue'),
            requireLogin: false
        },

    ],
}

export default config;