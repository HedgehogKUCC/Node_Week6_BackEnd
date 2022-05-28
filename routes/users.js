const express = require('express');
const router = express.Router();

const handleErrorAsync = require('../service/handleErrorAsync');
const UserController = require('../controllers/UserController');

router.get('/:id', handleErrorAsync(UserController.getUser));

module.exports = router;
