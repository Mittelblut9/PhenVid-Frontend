import config from '../../assets/config/config';
import { createRouter, createWebHistory } from 'vue-router';
import app from '../../main';
import Errormessage from '../../class/Error/Errormessage';
import UserAPI from '../../class/user/UserAPI';

const routes = [];

config.routes.forEach((r) => {
    routes.push(r);
});

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    const nextRoute = routes.find((route) => route.path == to.fullPath);
    const requireLogin = nextRoute.requireLogin;

    const user = await UserAPI.get();
    const response = Promise.resolve(user);

    if (response.err) {
        Errormessage.show(
            `Request to the server failed. ${response.message} with URL ${response.fullError.request.responseURL}`,
            true
        );

        if (to.fullPath == config.routes.find((r) => r.name == 'login').path) {
            next();
            return loadApp();
        } else {
            return next({
                path: config.routes.find((r) => r.name == 'login').path,
            });
        }
    }

    if (requireLogin && response.isLoggedIn) {
        next();
        return loadApp();
    }
    if (!requireLogin) {
        next();
        return loadApp();
    }

    next({
        path: config.routes.find((r) => r.name == 'login').path,
    });
    return loadApp();
});

function loadApp() {
    app.mount('#app');
}

export default router;
