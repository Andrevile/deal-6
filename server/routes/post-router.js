const express = require('express');
const decodeJWT = require('../middlewares/decode-jwt');
const { createProduct, updateProduct } = require('../services/product-service');

const router = express.Router();

router.post('/product', decodeJWT, createProduct);

router.put('/product', decodeJWT, updateProduct);

module.exports = router;
