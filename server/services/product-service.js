const { userRepository } = require('../repository/user-repository');
const { productRepository } = require('../repository/product-repository');
const {
	productImgPathRepository,
} = require('../repository/product-repository');
const CustomError = require('../errors/custom-error');
const error = require('../constants/error');
const success = require('../constants/success');

const getAllProducts = async (req, res, next) => {
	try {
		const { Category, Location } = req.query;

		const products = await productRepository.findAll(Category, Location);

		for (let i = 0; i < products.length; i++) {
			let url = await productImgPathRepository.findOne(products[i].pk, 0);
			products[i].url = url;
		}

		const { code, message } = success.DEFAULT_READ;

		res.status(code).json({ products, message, success: true });
	} catch (err) {
		next(err);
	}
};

const getProductByPk = async (req, res, next) => {
	try {
		const pk = req.params.pk;
		const [product] = await productRepository.findOne(pk);

		if (!product) {
			throw new CustomError(error.NO_PRODUCT_ERROR);
		}

		const { code, message } = success.DEFAULT_READ;

		res.status(code).json({ product, message, success: true });
	} catch (err) {
		next(err);
	}
};

const updateProduct = async (req, res, next) => {
	try {
		// 이따가
		const { code, message } = success.SIGNUP;

		res.status(code).json({ message, success: true });
	} catch (err) {
		next(err);
	}
};

const changeProductStatus = async (req, res, next) => {
	try {
		// 이따가
		const { code, message } = success.SIGNUP;

		res.status(code).json({ message, success: true });
	} catch (err) {
		next(err);
	}
};

const deleteProduct = async (req, res, next) => {
	try {
		const { pk } = req.body;

		let isDeleted = await productRepository.findOne(pk);

		const { code, message } = success.SIGNUP;

		res.status(code).json({});
	} catch (err) {
		next(err);
	}
};

module.exports = {
	getAllProducts,
	getProductByPk,
	updateProduct,
	deleteProduct,
	changeProductStatus,
};
