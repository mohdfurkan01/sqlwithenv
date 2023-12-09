const express = require('express');
const getUserProfile = require('../controller/usercontroller')
const router = express.Router();

router.route("/loginUser").get(getUserProfile)

module.exports = router;