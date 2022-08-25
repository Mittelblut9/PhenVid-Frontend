import Auth from "../auth/AuthAPI";

class UserApi extends Auth {
    constructor () {
        super();
    }
    async getUser() {
        const response = await this.getUserByToken();
        return response;
    }
}

export default UserApi;