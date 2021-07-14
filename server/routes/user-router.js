const express = require('express');
const decodeJWT = require('../middlewares/auth');
const { signIn, signUp, getCurrentUser } = require('../services/user-service');

const router = express.Router();

router.post('/sign-in', signIn);

router.post('/sign-up', signUp);

router.get('/me', decodeJWT, getCurrentUser);

module.exports = router;
