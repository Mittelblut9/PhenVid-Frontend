const status = require('../../../_assets/json/status/status.json');
module.exports.checkAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.json(status.STATUS_FORBIDDEN);
    return next();
}