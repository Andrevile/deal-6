const { userRepository } = require('../repository/user-repository');
const CustomError = require('../errors/custom-error');
const error = require('../constants/error');

const getAllUsers = async (req, res, next) => {
	try {
		const users = await userRepository.findAll();

		res.status(200).json(users);
		return;
	} catch (err) {
		next(err);
	}
};

const signIn = async (req, res, next) => {
	try {
		const userId = req.body.id;
		const user = await userRepository.findOne(userId);

		if (!user) {
			throw new CustomError(error.LOGIN_ERROR);
		}

		res.status(200).json(user);
		return;
	} catch (err) {
		next(err);
	}
};

const signUp = async (req, res) => {
	// 임시
	res.status(200).json({ message: '성공' });
};

module.exports = { signIn, signUp, getAllUsers };
