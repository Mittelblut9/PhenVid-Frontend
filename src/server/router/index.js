import config from '../../assets/config/config';
import { createRouter, createWebHistory } from 'vue-router';
import app from '../../main';
import Errormessage from '../../class/Error/Errormessage';
import Mantain from '../../class/Maintain/Maintain';
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
    let ping = await Promise.resolve(new Mantain().ping());
    if (ping.err) {
        document.getElementById('app').remove();
        return Errormessage.show(
            'Server request failed. Server is currently unavailable. Please try again later',
            true
        );
    } else {
        console.log('Ping resolved. ' + ping.ping + 'ms');
    }

    const user = UserAPI.get();
    const res = await Promise.resolve(user);

    const nextRoute = routes.find((route) => route.path == to.fullPath);
    const requireLogin = nextRoute.requireLogin;

    if (!res.err) {
        if (requireLogin && res.isLoggedIn) {
            next();
            return loadApp();
        } else if (!requireLogin) {
            next();
            return loadApp();
        } else {
            next({
                path: config.routes.find((r) => r.name == 'login').path,
            });
            return loadApp();
        }
    } else {
        Errormessage.show('Request to the server failed. ' + res.message);

        if (to.fullPath == config.routes.find((r) => r.name == 'login').path) {
            next();
            return loadApp();
        } else {
            return next({
                path: config.routes.find((r) => r.name == 'login').path,
            });
        }
    }

    function loadApp() {
        app.mount('#app');
    }
});

export default router;
