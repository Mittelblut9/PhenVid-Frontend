class Validation {
    constructor() {}

    // Validate email
    validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email) ? email : false;
    }

    // Validate password
    validatePassword(password) {
        return password.length > 6 ? password : false;
    }

    // Validate username
    validateUsername(username) {
        return username.length > 2 ? username : false;
    }
}

export default new Validation();
