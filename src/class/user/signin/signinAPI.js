class Signin {
    constructor(data) {
        if(!data || typeof data !== 'object') {
            return {
                error: true,
                code: 404,
                message: "The data object is not correct or missing. Please try again later."
            }
        }

        this.data = data;
    }

    #validateCredentials() {
        if (!this.data.user_id || !this.data.user_name || !this.data.profile_picture || !this.data.email) {
            return {
                error: true,
                code: 403,
                message: "Some of the important credentials is missing. Please try again."
            }
        }
    }

    login() {
        const isValid = this.#validateCredentials();

        if(isValid.error) return isValid;

        this.loginUser({
            user_id: this.data.id,
            user_name: this.data.name,
            profile_picture: this.data.pfp,
            email: this.data.email
        });
    }
}

export default Signin;