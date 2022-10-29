import Rest from '../REST/Rest';

export default class Mantain {
    constructor() {}

    async ping() {
        return new Promise((resolve) => {
            const url = '/ping';
            const headers = {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                Pragma: 'no-cache',
                Expires: '0',
            };
            const startedPing = new Date().getTime();

            const response = Rest.get({
                url,
                headers,
            });

            Promise.resolve(response)
                .then(() => {
                    const endedPing = new Date().getTime();
                    const ping = endedPing - startedPing;
                    return resolve({
                        ping: ping,
                    });
                })
                .catch(() => {
                    return false;
                });
        });
    }
}
