const { DomainError } = require('../model');

class RegistrationController {
    /**
     * @param {Object} params;
     * @param {import('../service/index').RegistrationService} params.service; 
     */
    constructor({service}) {
        this.service = service;
    }

    async signIn(req, res) {
        try {
            const {token, user} = await this.service.signIn(req.body);
            res.json({
                token, user: {
                    id: user.id,
                    login: user.login
                }
            });
        } catch (error) {
            console.log(error);
            if ( error instanceof DomainError ) {
                res.status(500).json({error: error.code});
            } else {
                res.status(500).json({error: 'Unknown'});
            }
        }
    }
}

module.exports = {RegistrationController};