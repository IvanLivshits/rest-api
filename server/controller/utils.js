const { DomainError } = require('../model');

const tryIt = (method) => {
    return async (req, res) => {
        try {
            return await method(req, res);
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

module.exports = {
    tryIt
}