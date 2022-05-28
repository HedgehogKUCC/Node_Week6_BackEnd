const express = require('express');
const router = express.Router();

const handleErrorAsync = require('../utils/handleErrorAsync');
const UserController = require('../controllers/UserController');

router.post('/sign_up', handleErrorAsync(UserController.insertUser));
router.get('/:id', handleErrorAsync(UserController.getUser));

module.exports = router;
