import axios from 'axios';
import axiosRateLimit from 'axios-rate-limit';

class Rest {
    #backendURL = '';
    #frontendURL = '';
    #apiUrl = '';
    #httpLimiter = '';

    #url = '';
    #headers = {};
    #params = {};
    #body = {};

    constructor({ url, headers, params, body }) {
        this.#backendURL = `${import.meta.env.VITE_APP_PROTOCOL}${import.meta.env.VITE_APP_DOMAIN}${
            import.meta.env.PRODUCTION ? '' : ':' + import.meta.env.VITE_APP_PORT
        }`;
        this.#frontendURL = `${import.meta.env.VITE_APP_PROTOCOL}${
            import.meta.env.VITE_APP_DOMAIN
        }${import.meta.env.PRODUCTION ? '' : ':' + import.meta.env.VITE_APP_PORT}`;
        this.#apiUrl = import.meta.env.VITE_APP_API;
        this.#httpLimiter = axiosRateLimit(axios.create(), {
            maxRequests: 1,
            perMilliseconds: 1000,
            maxRPS: 1,
        });

        this.init({ url, headers, params, body });
    }

    init({ url, headers, params, body }) {
        this.#url = url;
        this.#headers = headers;
        this.#params = params;
        this.#body = body;
    }

    getRequestUrl() {
        return this.#backendURL + this.#apiUrl + this.#url;
    }

    get() {
        return new Promise((resolve, reject) => {
            try {
                const response = this.#httpLimiter.get(this.getRequestUrl(), {
                    headers: this.#headers,
                    params: this.#params,
                    body: this.#body,
                });
                return resolve(response);
            } catch (err) {
                return reject(err);
            }
        });
    }

    post() {
        return new Promise((resolve, reject) => {
            try {
                const response = this.#httpLimiter.post(this.getRequestUrl(), {
                    headers: this.#headers,
                    params: this.#params,
                    body: this.#body,
                });
                return resolve(response);
            } catch (err) {
                return reject(err);
            }
        });
    }

    put() {
        return new Promise((resolve, reject) => {
            try {
                const response = this.#httpLimiter.put(this.getRequestUrl(), {
                    headers: this.#headers,
                    params: this.#params,
                    body: this.#body,
                });
                return resolve(response);
            } catch (err) {
                return reject(err);
            }
        });
    }
}

export default Rest;
