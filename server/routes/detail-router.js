const express = require('express');
const decodeJWT = require('../middlewares/auth');
const {
	getProductByPk,
	deleteProductByPk,
} = require('../services/product-service');

const router = express.Router();

router.get('/product/:ProductPk', decodeJWT, getProductByPk);

router.delete('/product/:ProductPk', decodeJWT, deleteProductByPk);

module.exports = router;
