const { DomainError, User } = require('../../model');

//TO DO SQL injection

class UserRepository {
    /**
     * @param {import('mysql2').Connection} db 
     */
    constructor(db) {
        this.db = db;
    }

    async findByLogin(login) {
        const [[row]] = await this.db.query(`select id, login, password from users where login = '${login}';`);

        if ( !row ) throw new DomainError('User not found');

        const {id, password:passwordHash} = row;
        const user = new User({id, login, passwordHash});
        return user;
    }
}

module.exports = {UserRepository};