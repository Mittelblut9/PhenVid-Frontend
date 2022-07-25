const { checkAuth } = require('../../../utils/functions/auth/checkAuth');
const status = require('../../../_assets/json/status/status.json');

module.exports = ({app}) => {
    app.get('/', checkAuth, (req, res) => {
        return res.json({
            data,
            status: status.STATUS_OK
        });
    })
}