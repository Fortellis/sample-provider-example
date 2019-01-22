'use strict';

const UserCRUDService = require ('../service/userCRUD-service');
const logger   = require("../utils/log-service");

const router = require('express').Router();



let crudservice = new UserCRUDService();

const routes = function (baseUrl, app, userMap) {

    app.use(baseUrl, router);

    // get user by Id
    router.get('/user/:userId', (req, response) => {
        logger.info('fetching userId ' );
        crudservice.getUserById(req.params.userId)
        .then(res => sendResponse(200, res, response))
        .catch(error => sendResponse(400, error, response));
    });

    // get users
    router.get('/users', (req, response) => {
        logger.info('fetching all users ');
        crudservice.getAllUsers()
        .then(res => sendResponse(200, res, response))
        .catch(error => sendResponse(400, error, response));
    });

    // create users
    router.post('/user', (req, response) => {
        const { userId, userFirstName, userLastName, userAge } = req.body;
        logger.info('calling create' + userFirstName);
        crudservice.create(userId, userFirstName, userLastName, userAge)
            .then(res => sendResponse(201, "created", response))
            .catch(error => sendResponse(400, error, response));
  });

  var sendResponse = function (status, message, response) {
    response.status(status).send({
      data: message
    });
  };
};

module.exports = routes;
