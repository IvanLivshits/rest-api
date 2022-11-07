const {tryIt} = require('./utils');

class RegistrationController {
    /**
     * @param {Object} params;
     * @param {import('../service/index').RegistrationService} params.service; 
     */
    constructor({service}) {
        this.service = service;
        this.signIn = tryIt(this.signIn.bind(this));
        this.signUp = tryIt(this.signUp.bind(this));
    }

    async signIn(req, res) {
        const {token, user} = await this.service.signIn(req.body);
        res.json({
            token, user: {
                id: user.id,
                login: user.login
            }
        });
    }

    async signUp(req, res) {
        await this.service.signUp(req.body);
    }
} 

module.exports = {RegistrationController};