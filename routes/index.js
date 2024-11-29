var express = require('express');
var user = require('../controller/user');
var router = express.Router();

/* GET home page. */
router.post('/user_signup',user.signup);
router.post('/user_login',user.login);
router.get('/user_logout',user.logout);
module.exports = router;
