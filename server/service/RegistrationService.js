const jwt = require('jsonwebtoken');
const { User, DomainError } = require('../model');

class RegistrationService {
    /**
     * @param {Object} params;
     * @param {import('../repository/mysql/index').UserRepository} params.users; 
     */
    constructor({users, secret}) {
        this.users = users;
        this.secret = secret;
    }

    async signIn({login, password}) {
        const user = await this.users.findByLogin(login);
        user.comparePassword(password);

        const token = jwt.sign({id: user.id}, this.secret, {expiresIn: "10min"});
        return {token, user};
    } 

    async signUp({login, password}) {
        User.validateLogin(login);
        User.validatePassword(password);

        const isAlreadyExists = await this.users.tryFindByLogin(login);
        if ( isAlreadyExists ) throw new DomainError('User is already exists');

        const userId = await this.users.nextId();
        const user = new User({id:userId, login});
        user.generateHash(password);
        await this.users.save(user);
    }
}

module.exports = {RegistrationService};