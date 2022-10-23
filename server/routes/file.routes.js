const Router = require('express');
const db = require('../../db/db');

const router = new Router();

router.get('/list', async (req, res) => {
    let userId = req.query.userId;

    const fileList = await db.query(`
            select * from files where owner_id = ${userId};
        `).then(result => {
            return result[0] || null;
    });

    return res.status(200).json({fileList});
})

router.post('/upload', async(req, res) => {

    if ( !req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded');
    }

    const sampleFile = req.files.file;

    const userId = req.body.userId;
    const fileName = sampleFile.name;
    const fileExtension =  sampleFile.mimetype.split('/')[1];
    const fileMimetype = sampleFile.mimetype.split('/')[0];
    const fileSize = sampleFile.size;

    const filePath = __dirname + '/files/' + fileName;

    const file_id = await db.query(`
        select id from files where file_link = '${filePath}';
    `).then(result => {
        return result[0][0] || null;
    });
    
    if ( !file_id ) {
        await db.query(`insert into files(owner_id, name, extension, mimetype, size, upload_date, file_link) values(${userId}, '${fileName}', '${fileExtension}', '${fileMimetype}', ${fileSize}, NOW(), '${filePath}');`);
    }
    
    sampleFile.mv(filePath, (e) => {
        if ( e ) {
            return res.status(500);
        }
        res.status(200).send('File uploaded!');
    });
});

router.get('/download', async (req, res) => {
    try {
        const fileName = 'Component 1.svg';
        const path = __dirname + '/files/' + fileName;
        res.download(path);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Download error"})
    }
})

module.exports = router;