const jwt = require('jsonwebtoken');
const config = require('../config/config');
const error = require('../constants/error');
const CustomError = require('../errors/custom-error');
const { userRepository } = require('../repository/user-repository');

/**
 *
 * @param {object} user - DB 에서 조회한 결과
 * @param {string} user.id - user의 id
 * @param {string} user.pk - user의 pk
 * @returns {string} JWT 입니다.
 */
const createJWT = (user) => {
	const payload = {
		pk: user.pk,
		id: user.id,
	};
	return jwt.sign(payload, config.jwt.secretKey, config.jwt.options);
};

const verifyJWT = async (token) => {
	const decodeToken = jwt.verify(token, config.jwt.secretKey);

	if (!decodeToken) {
		return null;
	}

	const user = await userRepository.findOne(decodeToken.id);

	if (isInvalidPayLoad(decodeToken, user)) {
		throw new CustomError(error.JWT_TOKEN_INVALID_ERROR);
	}

	return user;
};

const isInvalidPayLoad = (decodeToken, user) => {
	return decodeToken.id !== user.id || decodeToken.pk !== user.pk;
};

module.exports = { createJWT, verifyJWT };
