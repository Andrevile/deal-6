const jwt = require('jsonwebtoken');
const config = require('../config/config');
const { UserRepository } = require('../repository/user-repository');

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
