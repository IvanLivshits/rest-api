const { DomainError } = require("./DomainError");
const bcrypt = require('bcryptjs');

class User {
    constructor({ id, login, passwordHash }) {
        this.id = id;
        this.login = login;
        this.passwordHash = passwordHash;
    }

    comparePassword(password) {
        const isPassValid = bcrypt.compareSync(password, this.passwordHash);
        if (!isPassValid) throw new DomainError('Invalid password');
    }
}

module.exports = { User };