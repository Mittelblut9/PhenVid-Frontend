//? JSON
const config = require('../_assets/json/config/config.json')

//? MODULES
const express = require('express');
const serverconfig = require('nconf');
require('dotenv').config();

//? FUNCTIONS
const { processHandler } = require('./processHandler/processHandler');

//? Create root app
const app = express();

//? Insert config to the app.settings
app.set('config', config);

//? Insert frontend config
app.use(express.static('public'));
app.set('views', './frontend/views');
app.set('view engine', 'ejs');

//? Configure nconf
serverconfig.argv().env().file({file: './frontend/_assets/json/config/config.json'});

//? Require routes and init them
require('../routes/main-route')({app});

//? Start the server
app.listen(process.env.FRONTEND_PORT, process.env.FRONTEND_DOMAIN, () => {
    console.log(`${config.server} -------- http://${
        process.env.FRONTEND_DOMAIN
    }:${process.env.FRONTEND_PORT} server started on ${
        process.env.FRONTEND_PORT
    }`);
});

processHandler();