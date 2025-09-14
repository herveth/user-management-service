const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const auth = require('../middlewares/auth.middleware');
const validate = require('../middlewares/validate.middleware');

// Registration and login
router.post('/register', validate.register, userController.register);
router.post('/login', validate.login, userController.login);

// Protected profile route
router.get('/profile', auth, userController.getProfile);

module.exports = router;
