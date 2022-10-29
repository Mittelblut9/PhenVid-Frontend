import Auth from '../auth/AuthAPI';
import axios from 'axios';
import config from '../../assets/config/config';
import Errormessage from '../Error/Errormessage';

class User extends Auth {
    constructor() {
        super();
    }
    async get() {
        return await new Promise((resolve) => {
            const response = this.getUserByToken();
            return resolve(response);
        });
    }

    async getUserByToken() {
        const RESTcall = config.backend_url + config.apiUrl + '/user';
        try {
            const response = await axios.get(RESTcall, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + this.getToken(),
                },
            });
            return Errormessage.restResponse({ response });
        } catch (err) {
            return Errormessage.restResponse({ err });
        }
    }
}

export default new User();
