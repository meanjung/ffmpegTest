var express = require('express');
var router = express.Router();
const productController = require('../controller/productController');

router.get('/ffmpeg', productController.instaRegister);

module.exports = router;