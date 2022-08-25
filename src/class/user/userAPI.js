import Auth from "../auth/authAPI";

class UserApi extends Auth {
    constructor (token) {
        if(!token) return {
            //login
        }
        super();
        this.token = token;
    }
    async getUser() {
        const response = await this.getUserByToken(this.token);

        if(response.err) {
            // user doesnt exists
        }else {
            // user exists
            // check whether user is loggedin or not
            // isLoggedIn: false/true
        }
    }
}

export default UserApi;