const { verifyJWT } = require('../utils/jwt');

module.exports = async (req, res, next) => {
	console.log('decodeJWT Middleware called');
	/**
	 * JWT Token 을 decode 를 통해 유저를 식별한다.
	 */
	const token = req.cookies.JWT;
	console.log(token);
	if (token) {
		try {
			const user = await verifyJWT(token);

			req.user = user;
			next();
			return;
		} catch (err) {
			next(err);
		}
	}

	next();
};
