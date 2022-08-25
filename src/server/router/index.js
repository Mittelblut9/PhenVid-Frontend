import config from '../../assets/config/config';
import UserApi from '../../class/user/UserAPI.js';
import {
    createRouter,
    createWebHistory
} from 'vue-router';

const routes = []

config.routes.forEach(r => {
    routes.push(r);
})

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to, from, next) => {
    const user = new UserApi().getUser();

    console.log(await user)

    const nextRoute = routes.find(route => route.path == to.fullPath);

    const requireLogin = nextRoute.requireLogin;

    if (!user.error) {
        if (requireLogin && user.isLoggedIn) {
            next();
        } else if(!requireLogin) {
            return next();
        }else {
            return next({
                path: config.routes.find(r => r.name == 'login').path
            })
        }
    } else {
        return next({
            path: config.routes.find(r => r.name == 'login').path
        })
    }
});

export default router