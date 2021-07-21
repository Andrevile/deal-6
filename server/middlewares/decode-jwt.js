const { verifyJWT } = require('../utils/jwt');

module.exports = async (req, res, next) => {
	console.log('decodeJWT Middleware called');
	/**
	 * JWT Token 을 decode 를 통해 유저를 식별한다.
	 */
	const token = req.headers.JWT;

	if (token) {
		const user = await verifyJWT(token);
		req.user = user;
		next();
		return;
	}

	next();
};
