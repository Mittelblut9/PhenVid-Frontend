import axios from 'axios';
import axiosRateLimit from 'axios-rate-limit';

class Rest {
    #backendURL;
    #frontendURL;
    #apiUrl;
    #httpLimiter;

    constructor() {
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
    }

    get({ url, headers, params }) {
        return new Promise((resolve, reject) => {
            try {
                const response = this.#httpLimiter.get(this.#backendURL + this.#apiUrl + url, {
                    headers,
                    params,
                });
                return resolve(response);
            } catch (err) {
                return reject(err);
            }
        });
    }
}

export default new Rest();
