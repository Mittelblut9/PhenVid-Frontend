import axios from 'axios';
import config from '../../assets/config/config';

class Auth {
    constructor(token) {
        if(!token) {
            //login
        }else {
            this.token = token;
        }
    }

    validateToken() {

    }

    async getUserByToken() {
        const RESTcall = config.apiUrl + '/user/' + this.token;

        await axios.get(RESTcall)
            .then(res => {
                return {
                    err: false,
                    data: res.data
                };
            })
            .catch(err => {
                return {
                    err: true,
                    data: err
                };
            })
    }
}


export default Auth;