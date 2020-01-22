var express = require('express');
var router = express.Router();
console.log("inside users");
// Require the controllers WHICH WE DID NOT CREATE YET!!
var user_controller = require('../controller/userctrl');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', user_controller.test);
router.post('/create', user_controller.user_create);
module.exports = router;
