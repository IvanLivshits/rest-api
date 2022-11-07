const jwt = require('jsonwebtoken');

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
}

module.exports = {RegistrationService};