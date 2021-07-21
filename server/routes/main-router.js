const express = require('express');
const decodeJWT = require('../middlewares/decode-jwt');
const { getMyUserTown } = require('../services/user-town-service');
const { getAllMyWish, updateWishProduct } = require('../services/wish-service');
const {
	getAllProductByCategoryAndTown,
	getAllMyProduct,
} = require('../services/product-service');

const router = express.Router();

router.get('/user-town/me', decodeJWT, getMyUserTown);

router.get('/product', decodeJWT, getAllProductByCategoryAndTown);

router.get('/product/me', decodeJWT, getAllMyProduct);

router.get('/wish/me', decodeJWT, getAllMyWish);

router.post('/wish/:ProductPk', decodeJWT, updateWishProduct);

module.exports = router;
