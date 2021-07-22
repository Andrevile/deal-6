const express = require('express');
const decodeJWT = require('../middlewares/decode-jwt');
const { getMySellProducts } = require('../services/product-service');
const { getMyWishProducts } = require('../services/wish-service');

const router = express.Router();

router.get('/my-sells', decodeJWT, getMySellProducts);

router.get('/my-wishes', decodeJWT, getMyWishProducts);

module.exports = router;
