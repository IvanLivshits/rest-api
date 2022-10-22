const Router = require('express');
const authMiddleware = require('../middleware/auth.middleware');

const router = new Router();

router.post('/upload', authMiddleware, async(req, res) => {
        if ( !req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded');
        }

        const sampleFile = req.files.file;
        console.log(sampleFile);
        uploadFile = __dirname + '/files/' + sampleFile.name;
        sampleFile.mv(uploadFile, (e) => {
            if ( e ) {
                return res.status(500).send(e);
            }
            res.status(200).send('File was uploaded');
        });
});

router.get('/download', async(req, res) => {
    return res.download(__dirname + '/files/' + 'ground.png');
})

module.exports = router;