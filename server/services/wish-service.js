/* eslint-disable no-unused-vars */
const { wishRepo } = require('../repository/wish-repository');
const CustomError = require('../errors/custom-error');
const error = require('../constants/error');
const success = require('../constants/success');

const getMyWishProducts = async (req, res, next) => {
	try {
		const user = req.user;
		const wishes = await wishRepo.findAll(user.pk);

		const { code, message } = success.DEFAULT_READ;
		res.status(code).json({ wishes, message, success: true });
	} catch (err) {
		next(err);
	}
};

const changeWishState = async (req, res, next) => {
	try {
		const ProductPk = req.params.pk;
		const user = req.user;
		const [wish] = await wishRepo.findOne(ProductPk, user.pk);
		if (wish) {
			// delete
			if ((await wishRepo.delete(ProductPk, user.pk)) === 0) {
				throw new CustomError(error.DELETE_ERROR);
			}
		} else {
			// create
			if ((await wishRepo.create(ProductPk, user.pk)) === 0) {
				throw new CustomError(error.CREATE_ERROR);
			}
		}

		const { code, message } = success.DEFAULT_READ;

		res.status(code).json({ success: true, message });
		return;
	} catch (err) {
		next(err);
	}
};

module.exports = { getMyWishProducts, changeWishState };
