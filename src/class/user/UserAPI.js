import Auth from '../auth/AuthAPI';
import Errormessage from '../Error/Errormessage';
import Rest from '../REST/Rest';

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
        const url = '/user';
        const headers = {
            Authorization: `Bearer ${this.getToken()}`,
        };

        const response = Rest.get({ url, headers });

        await Promise.resolve(response)
            .then((response) => {
                return Errormessage.restResponse({ response });
            })
            .catch((err) => {
                return Errormessage.restResponse({ err });
            });
    }
}

export default new User();
