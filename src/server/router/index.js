import {
    createRouter,
    createWebHistory
} from 'vue-router';

const routes = [
    {
        path: "/",
        name: "Homepage",
        component: () => import('../../web/views/Homepage.vue')
    } 
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    
});

export default router