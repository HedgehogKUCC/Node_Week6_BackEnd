const express = require('express');
const router = express.Router();

const handleErrorAsync = require('../service/handleErrorAsync');
const UserController = require('../controllers/UserController');

router.post('/', handleErrorAsync(UserController.insertUser));

module.exports = router;
