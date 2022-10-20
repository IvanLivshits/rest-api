const express = require('express');
const router = express.Router();
const testAPIController = require('../controllers/testAPI.controller');

router.get('/files_info', testAPIController.getInfo);
router.post('/files_upload', testAPIController.uploadFile)

module.exports = router;