import config from '../../assets/config/config';
import axios from 'axios';

class Auth {
    constructor() {
        this.getToken();
    }

    #token = null;

    validateToken() {
        //TODO Add token validation
        return true;
    }

    getToken() {
        const token = '123'; //localStorage.getItem('pgvLoginToken');

        const isValid = this.validateToken();

        if (isValid) {
            this.#token = token;
            return this.#token;
        }
    }

    async loginUser(data) {
        const RESTcall = config.backend_url + config.apiUrl + '/user/login';

        try {
            const res = await axios.post(
                RESTcall,
                {
                    user_id: data.user_id,
                    user_name: data.user_name,
                    profile_picture: data.profile_picture,
                    email: data.email,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            return {
                error: false,
                code: res.code,
                message: res.message,
            };
        } catch (err) {
            return {
                err: true,
                code: err.response.status,
                message: err.message,
            };
        }
    }
}

export default Auth;
