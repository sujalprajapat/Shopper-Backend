var express = require('express');
var user = require('../controller/user');
var router = express.Router();

/* GET home page. */
router.post('/user_signup',user.signup);
module.exports = router;
