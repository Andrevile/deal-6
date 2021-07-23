const { userRepo } = require('../repository/user-repository');
const { locationRepo } = require('../repository/location-repository');
const CustomError = require('../errors/custom-error');
const error = require('../constants/error');
const success = require('../constants/success');
const { createJWT } = require('../utils/jwt');

const getAllUsers = async (req, res, next) => {
	try {
		const users = await userRepo.findAll();

		res.status(200).json({ users });
		return;
	} catch (err) {
		next(err);
	}
};

const signIn = async (req, res, next) => {
	try {
		const userId = req.body.id;
		const [user] = await userRepo.findOne(userId);

		if (!user) {
			throw new CustomError(error.LOGIN_ERROR);
		}
		/* 클라이언트의 cookie 에 발행된 JWT 를 넣어줍니다. */
		res.cookie('JWT', createJWT(user));
		const { code, message } = success.LOGIN;

		res.status(code).json({ user, success: true, message });
		return;
	} catch (err) {
		next(err);
	}
};

const signUp = async (req, res, next) => {
	try {
		const { id, location } = req.body;

		let [user] = await userRepo.findOne(id);

		if (user) {
			throw new CustomError(error.EXIST_USER_ID_ERROR);
		}

		const [isExistedLocation] = await locationRepo.findOne(location);

		let newLocation =
			isExistedLocation || (await locationRepo.create(location));

		user = await userRepo.create(id, location);

		const { code, message } = success.SIGNUP;

		res.status(code).json({
			user,
			success: true,
			message,
			location: newLocation,
		});
	} catch (err) {
		next(err);
	}
};

module.exports = { signIn, signUp, getAllUsers };
