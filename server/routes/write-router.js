const express = require('express');
const decodeJWT = require('../middlewares/decode-jwt');

const { editProduct, createProduct } = require('../services/product-service');

const router = express.Router();

router.post('/:pk', editProduct);

router.post('/', createProduct);

module.exports = router;
