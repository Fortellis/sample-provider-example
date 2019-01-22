'use strict';

const logger  = require('./modules/utils/log-service');
//var HashMap = require('hashmap');

const express = require('express'),
    helmet = require('helmet'),
    bodyParser = require('body-parser');

const {
    BASE_URL
} = require('./modules/utils/constants');

let app = express();
let port = 8081;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * helmet settings to prevent some security vulnerabilities
 */
app.use(helmet.hidePoweredBy());
app.use(helmet.dnsPrefetchControl({ allow: false }));
app.use(helmet.xssFilter());


logger.setContext('provider context');

require('./modules/health')(app);

require('./modules/controller/router')(BASE_URL,app);


app.listen(port, function () {
        logger.info('Server listening at port: ' + port);
  });


module.exports = app;
