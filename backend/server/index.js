const express = require('express');
const serverconfig = require('nconf');
const config = require('../_assets/json/config/config.json');
const { processHandler } = require('./processHandler/processHandler');

// require .env files
require('dotenv').config();

const app = express();

//Insert config into the app.settings
app.set('config', config);

serverconfig.argv().env().file({
    file: './backend/_assets/json/config/config.json'
});

require('../apiroutes/main-route')({app});

app.listen(process.env.BACKEND_PORT, process.env.BACKEND_DOMAIN, () => {
    console.log(`${config.server} -------- http://${
        process.env.BACKEND_DOMAIN
    }:${process.env.BACKEND_PORT} server started on ${
        process.env.BACKEND_PORT
    }`);
});

processHandler();