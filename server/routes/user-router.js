const express = require('express');
const decodeJWT = require('../middlewares/decode-jwt');

const { signIn, signUp, getAllUsers } = require('../services/user-service');

const router = express.Router();

router.post('/sign-in', signIn);

router.post('/sign-up', signUp);

router.get('/all', decodeJWT, getAllUsers);

module.exports = router;
