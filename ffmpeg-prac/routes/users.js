var express = require('express');
var router = express.Router();
const productController = require('../controller/productController');

router.post('/ffmpeg', productController.instaRegister);

module.exports = router;
