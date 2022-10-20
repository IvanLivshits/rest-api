const db = require('../../db/db');

class testAPIController {

    async getInfo(req, res) {
        let data = await db.query("select * from aero_rest_api.public;")
            .then(result => {
                return result[0];
            }).catch(err => {
                console.log(err);
            });
        return res.status(200).json(data);
    }

    async uploadFile(req, res) {
        const file = req.file;
        console.log(file);
    }
}

module.exports = new testAPIController();