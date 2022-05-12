const express = require('express');

const router = express.Router();

const UsersController = require('../controller/UsersController');

//RUTAS
router.post('/validatelogin', UsersController.validateLogin)

module.exports = router 