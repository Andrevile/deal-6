const { productRepo } = require('../repository/product-repository');
// const { productImgPathRepo } = require('../repository/img-repository');
const CustomError = require('../errors/custom-error');
const error = require('../constants/error');
const success = require('../constants/success');
// const multerS3 = require('multer-s3');
// const AWS = require('aws-sdk');
// const config = require('../config/config');
const data = require('../db/sample-data');

// const s3 = new AWS.S3({
// 	accessKeyId: config.accessKeyId,
// 	secretAccessKey: config.secretAccessKey,
// 	region: config.region,
// });

// const storage = multerS3({
// 	s3: s3,
// 	bucket: 'deal-6',
// 	contentType: multerS3.AUTO_CONTENT_TYPE,
// 	acl: 'public-read',
// 	metadata: function (req, file, cb) {
// 		cb(null, { fieldName: file.fieldname });
// 	},
// 	key: function (req, file, cb) {
// 		cb(null, `storeImages/${Date.now()}_${file.originalname}`);
// 	},
// });

const getAllProducts = async (req, res, next) => {
	try {
		console.log('h2');
		// const { category, location } = req.query;

		// const products = await productRepo.findAll(category, location);

		// for (let i = 0; i < products.length; i++) {
		// 	let [url] = await productImgPathRepo.findOne(products[i].pk, 0);

		// 	if (!url) {
		// 		throw new CustomError(error.NO_IMG_ERROR);
		// 	}

		// 	products[i].url = url;
		// }

		const user = req.user;
		const { code, message } = success.DEFAULT_READ;

		res.status(code).json({ user, products: data, message, success: true });
	} catch (err) {
		next(err);
	}
};

const getMySellProducts = async (req, res, next) => {
	try {
		const user = req.user;

		// const products = await productRepo.findAllBySeller(user.id);

		// for (let i = 0; i < products.length; i++) {
		// 	let [url] = await productImgPathRepo.findOne(products[i].pk, 0);

		// 	if (!url) {
		// 		throw new CustomError(error.NO_IMG_ERROR);
		// 	}

		// 	products[i].url = url;
		// }

		let products = data.filter((x) => x.seller === '남영우');

		const { code, message } = success.DEFAULT_READ;

		res.status(code).json({ user, products, message, success: true });
	} catch (err) {
		next(err);
	}
};

const getProductByPk = async (req, res, next) => {
	try {
		const pk = req.params.pk;
		// const [product] = await productRepo.findOne(pk);

		// if (!product) {
		// 	throw new CustomError(error.NO_PRODUCT_ERROR);
		// }

		// const productImgPaths = await productImgPathRepo.findAll(pk);

		// if (productImgPaths.length === 0) {
		// 	throw new CustomError(error.NO_IMG_ERROR);
		// }

		const user = req.user;
		const { code, message } = success.DEFAULT_READ;

		res.status(code).json({
			user,
			product: data[pk],
			message,
			success: true,
		});
	} catch (err) {
		next(err);
	}
};

// TODO
const updateProduct = async (req, res, next) => {
	try {
		// const body = req.body;
		//S3MULTER 이용

		const user = req.user;
		const { code, message } = success.SIGNUP;

		res.status(code).json({ user, message, success: true });
	} catch (err) {
		next(err);
	}
};

const changeProductStatus = async (req, res, next) => {
	try {
		const pk = req.params.pk;
		const status = req.body.status;

		const affectedRows = await productRepo.update(pk, status);

		if (affectedRows === 0) {
			throw new CustomError(error.UPDATE_ERROR);
		}

		const user = req.user;
		const { code, message } = success.SIGNUP;

		res.status(code).json({ user, message, success: true });
	} catch (err) {
		next(err);
	}
};

const deleteProduct = async (req, res, next) => {
	try {
		const { pk } = req.body;

		let affectedRows = await productRepo.delete(pk);

		if (affectedRows === 0) {
			throw new CustomError(error.DELETE_ERROR);
		}

		const user = req.user;
		const { code, message } = success.DEFAULT_DELETE;

		res.status(code).json({ user, success: true, message });
	} catch (err) {
		next(err);
	}
};

const createProduct = async (req, res, next) => {
	try {
		upload(req, res, (err) => {
			if (err) {
				return res.json({ success: false, err });
			}
			return res.json({ success: true, filePath: res.req.file.location });
		});

		const {} = req.body;

		let affectedRows = await productRepo.create(body);

		if (affectedRows === 0) {
			throw new CustomError(error.DELETE_ERROR);
		}

		const user = req.user;
		const { code, message } = success.DEFAULT_DELETE;

		res.status(code).json({ user, success: true, message });
	} catch (err) {
		next(err);
	}
};

const editProduct = async (req, res, next) => {
	try {
		const { pk } = req.body;

		let affectedRows = await productRepo.delete(pk);

		if (affectedRows === 0) {
			throw new CustomError(error.DELETE_ERROR);
		}

		const user = req.user;
		const { code, message } = success.DEFAULT_DELETE;

		res.status(code).json({ user, success: true, message });
	} catch (err) {
		next(err);
	}
};

module.exports = {
	getAllProducts,
	getMySellProducts,
	getProductByPk,
	updateProduct,
	deleteProduct,
	changeProductStatus,
	editProduct,
	createProduct,
};
