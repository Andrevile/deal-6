const express = require('express');
const decodeJWT = require('../middlewares/auth');
const {
	getMyUserTown,
	createUserTown,
	deleteUserTown,
} = require('../services/user-town-service');

const router = express.Router();

router.get('/user-town/me', decodeJWT, getMyUserTown);

router.post('/user-town', decodeJWT, createUserTown);

router.delete('/product/me', decodeJWT, deleteUserTown);

module.exports = router;
