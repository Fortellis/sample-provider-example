'use strict';

const User = require('../domain/User');
const logger = require('../utils/log-service');
var HashMap = require('hashmap');

var userMap = new HashMap();

class UserCRUDService {
    constructor(){}

    getAllUsers() {  

        return new Promise((resolve, reject) => {
            logger.info('Users are ' + JSON.stringify(userMap));
            let users = [];
            userMap.forEach( (value,key,map) => {
                users.push(value);
            });
            (users).then(resolve(users)).catch(reject)
        });
    }

    getUserById(userId) { 

        return new Promise((resolve, reject) => {
            let userData = userMap.get(userId);
            logger.info('User is ' + userData);
            userData.then(resolve(userData)).catch(reject)
        });
    }    

    create(id, firstName, lastName, age ) {
        return new Promise((resolve, reject) => {
            if ((!id)  && (!firstName)) {
                reject('missing required parameters');
            } else {
                try {
                    var user = new User(id);
                    user.firstName = firstName;
                    user.lastName = lastName;
                    user.age = age;
                    userMap.set(id, user);
                    logger.info(' user created' + JSON.stringify(user));
                    resolve();
                } catch(e) {
                    logger.error('error creating user ' + e);
                    reject('error ' +e);
                }
            }
        });
    }
                

}

module.exports = UserCRUDService;