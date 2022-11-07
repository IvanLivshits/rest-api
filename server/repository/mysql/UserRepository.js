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

    async tryFindByLogin(login) {
        try {
            return await this.findByLogin(login);
        } catch (error) {
            return;
        }
    }

    async save(user) {
        await this.db.query(`insert into users(id, login, password) values('${user.id}', '${user.login}', '${user.passwordHash}') on duplicate key update login = '${user.login}', password = '${user.password}';`);
    }

    async nextId() {
        const [[row]] = await this.db.query(`
        SELECT AUTO_INCREMENT
        FROM information_schema.TABLES
        WHERE TABLE_NAME = "users"
        `);

        return row.AUTO_INCREMENT;
    }
}

module.exports = {UserRepository};