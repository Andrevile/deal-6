const { userRepository } = require('../repository/user-repository');
const CustomError = require('../errors/custom-error');
const error = require('../constants/error');
const success = require('../constants/success');
const { createJWT } = require('../utils/jwt');

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
		/* 클라이언트의 cookie 에 발행된 JWT 를 넣어줍니다. */
		res.cookie('JWT', createJWT(user));
		const { code, message } = success.LOGIN;

		res.status(code).json({ user, message });
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
