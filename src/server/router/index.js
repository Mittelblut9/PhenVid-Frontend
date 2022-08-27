import config from '../../assets/config/config';
import UserApi from '../../class/user/UserAPI.js';
import {
    createRouter,
    createWebHistory
} from 'vue-router';
import app from '../../main';
import Errormessage from '../../class/Errormessage/Errormessage';
import Mantain from '../../class/Maintain/Maintain';

const routes = []

config.routes.forEach(r => {
    routes.push(r);
})

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to, from, next) => {
    const api = new UserApi();

    let ping = await Promise.resolve(new Mantain().ping());
    if(ping.err) {
        document.getElementById('app').remove();
        return new Errormessage('Server request failed. Server is currently unavailable. Please try again later', true)
    }else {
        console.log('Ping resolved. ' + ping.ping + 'ms')
    }

    //debug - Remove when getUser api call works
    next();
    return loadApp();

    const user = api.getUser();
    const res = await Promise.resolve(user);

    const nextRoute = routes.find(route => route.path == to.fullPath);
    const requireLogin = nextRoute.requireLogin;

    if (!res.err) {
        if (requireLogin && res.isLoggedIn) {
            next();
            return loadApp()
        } else if (!requireLogin) {
            next();
            return loadApp()
        } else {
            next({
                path: config.routes.find(r => r.name == 'login').path
            });
            return loadApp()
        }
    } else {
        new Errormessage('Request to the server failed. '+res.message)

        if(to.fullPath == config.routes.find(r => r.name == 'login').path) {
            next();
            return loadApp();
        }else {
            return next({
                path: config.routes.find(r => r.name == 'login').path
            });
        }
    }

    function loadApp() {
        app.mount('#app')
    }
});

export default router