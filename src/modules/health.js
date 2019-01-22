'use strict';

function healthRoutes(app) {

    app.get('/', function (req, res) {
        res.status(200);
        res.write(JSON.stringify({
            message: 'Welcome to the API provider'
        }));
        res.end();
    });

    app.get('/health', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.end(JSON.stringify({
            status: 'UP'
        }));
    });
}

module.exports = healthRoutes;