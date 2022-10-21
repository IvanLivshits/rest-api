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
        const file = req;
        console.log(file);
        // const fileName = file.originalname.split('.')[0];
        // const fileType = file.originalname.split('.')[1];
        // const fileMimeType = file.mimetype;
        // const size = file.size;
        // const uploadingDate = new Date();
        return res.status(200);
    }

    async getFile(req, res) {
        res.download("./uploads/7810be5a99ebe37b5d71d0aa54b891b2");
        console.log('here');
        return res.status(200);
    }
}

module.exports = new testAPIController();