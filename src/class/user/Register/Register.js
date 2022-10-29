import Errormessage from '../../../class/Error/Errormessage';
import Rest from '../../../class/REST/Rest';

class Register {
    data;

    constructor(data) {
        if (!data || typeof data !== 'object') {
            return Errormessage.show(
                'The data object is not correct or missing. Please try again later.'
            );
        }

        this.data = data;
    }

    #validateCredentials() {
        if (this.data.email && this.data.password && this.data.username) {
            return true;
        }
    }

    register() {
        const isValid = this.#validateCredentials();

        if (!isValid)
            return Errormessage.show(
                'Some of the important credentials is missing. Please try again.'
            );

        const url = '/user';
        const headers = {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
        };

        const body = {
            email: this.data.email,
            password: this.data.password,
            username: this.data.username,
        };

        new Rest({ url, headers, body }).put();

        return {
            error: false,
            code: 200,
            message: 'User is registered.',
        };
    }
}

export default Register;
