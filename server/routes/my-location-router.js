const express = require('express');
const decodeJWT = require('../middlewares/decode-jwt');
const {
	getMyUserLocation,
	createUserLocation,
	deleteUserLocation,
} = require('../services/user-location-service');

const router = express.Router();

router.get('/user-location/me', decodeJWT, getMyUserLocation);

router.post('/user-location', decodeJWT, createUserLocation);

router.delete('/product/me', decodeJWT, deleteUserLocation);

module.exports = router;
