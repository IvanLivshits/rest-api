const express = require('express');
const router = express.Router();
const testAPIController = require('../controllers/testAPI.controller');

router.get('/info', testAPIController.getInfo);
router.post('/upload', testAPIController.uploadFile)

module.exports = router;