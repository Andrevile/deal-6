module.exports = function (req, res, next) {
	console.log('decodeJWT Middleware called');
	/**
	 * JWT Token 을 decode 를 통해 유저를 식별한다.
	 */
	next();
};
