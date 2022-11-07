const { DomainError } = require("./DomainError");
const bcrypt = require('bcryptjs');
const {isMobilePhone, isEmail} = require('validator');

class User {
    static validateLogin(login) {
        if ( isMobilePhone(login) || isEmail(login) ) {
            return;
        } 

        throw new DomainError('Incorrect login');
    }

    static validatePassword(password) {
        if ( password.length <= 2 || password.length >= 13 ) {
            throw new DomainError('Incorrect password');
        }
    }

    constructor ({id, login, passwordHash}) {
        this.id = id;
        this.login = login;
        this.passwordHash = passwordHash;
    }

    comparePassword(password) {
        const isPassValid = bcrypt.compareSync(password, this.passwordHash);
        if ( !isPassValid ) throw new DomainError('Invalid password');
    }

    async generateHash(password) {
        User.validatePassword(password);
        this.passwordHash = await bcrypt.hash(password, 6);
    }
}

module.exports = {User};