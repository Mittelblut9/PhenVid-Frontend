import Auth from "../auth/AuthAPI";

class UserApi extends Auth {
    constructor () {
        super();
    }
    async getUser() {
        return await new Promise((resolve) => {
            const response = this.getUserByToken();
            return resolve(response);
        })
    }
}

export default UserApi;