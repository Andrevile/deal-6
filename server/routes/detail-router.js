const express = require('express');
const decodeJWT = require('../middlewares/decode-jwt');
const {
	getProductByPk,
	deleteProduct,
	changeProductStatus,
} = require('../services/product-service');
const { changeWishState } = require('../services/wish-service');

const router = express.Router();

router.get('/product/:pk', decodeJWT, getProductByPk);

router.post('/product/:pk', decodeJWT, changeProductStatus);

router.delete('/product/:pk', decodeJWT, deleteProduct);

router.post('/wish/:pk', decodeJWT, changeWishState);

module.exports = router;
