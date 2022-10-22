const Router = require('express');
const authMiddleware = require('../middleware/auth.middleware');

const router = new Router();

router.post('/upload', async(req, res) => {
        if ( !req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded');
        }

        const sampleFile = req.files.file;
        uploadFile = __dirname + '/files/' + sampleFile.name;
        sampleFile.mv(uploadFile, (e) => {
            if ( e ) {
                return res.status(500).send(e);
            }
            res.status(200).send('File was uploaded');
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