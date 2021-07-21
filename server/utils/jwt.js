const jwt = require('jsonwebtoken');
const config = require('../config/config');
const { UserRepository } = require('../repository/user-repository');

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

	const { id } = decodeToken;
	return await UserRepository.findOne(id);
};

module.exports = { createJWT, verifyJWT };
