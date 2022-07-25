const nconf = require('nconf');

const jwt_decode = require('jwt-decode');

module.exports = ({app}) => {
    app.get(nconf.get('routes:getUser:path'), (req, res) => {
        const token = req.params.token;

        const decoded = jwt_decode(token);
        console.log(decoded);
    })
}