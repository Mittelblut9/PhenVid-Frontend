import axios from 'axios';
import rateLimit from 'axios-rate-limit';
import config from '../../assets/config/config';

export default class Mantain {
    constructor() {
       
    }

    async ping() {
        const http = rateLimit(axios.create(), { maxRequests: 1, perMilliseconds: 1000, maxRPS: 1 })

        const RESTcall = config.backend_url + config.apiUrl + '/ping';

        try {
            const startedPing = new Date().getTime();
            await http.get(RESTcall, {
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                }
            });
            const endedPing = new Date().getTime();

            const ms = endedPing - startedPing;

            return {
                ping: ms
            }
        } catch (err) {
            return {
                err: true,
                code: err.response.status,
                message: err.message
            };
        }
    }
}