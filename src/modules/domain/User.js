'use strict';


class User {
    
    constructor(userId){
        this.userId = userId;
    }

    set firstName(firstName) {
        this.userFirstName = firstName;
    }

    get firstName() {
        return this.userFirstName;
    }

    set lastName(lastName) {
        this.userLastName = lastName;
    }

    get lastName() {
        return this.userLastName;
    }

    set age(age) {
        this.userAge = age;
    }

    get age(){
        return this.userAge;
    }

    toJSON() {
        return {
            'userId': this.userId,
            'firstName': this.userFirstName,
            'lastName': this.userLastName,
            'age' : this.userAge
        };

    }
    
}

module.exports = User;
