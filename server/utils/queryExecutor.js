const { pool } = require('../db/db');
const CustomError = require('../errors/custom-error');
const error = require('../constants/error');
const promiseHandler = require('../utils/promiseHandler');

const selectQueryExecutor = async (query) => {
	const connection = await pool.getConnection();
	const [result, err] = await promiseHandler(connection.query(query));

	connection.release();

	if (err) {
		// DB connection 에서 error 가 생기면 발생하는 경우
		throw new CustomError(error.DATABASE_ERROR);
	}

	const [users] = result;
	return users;
};

module.exports = { selectQueryExecutor };
