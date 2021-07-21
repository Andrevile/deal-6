const { pool } = require('../db/db');
const CustomError = require('../errors/custom-error');
const error = require('../constants/error');

const userRepository = {
	findAll: async () => {
		const connection = await pool.getConnection();
		const query = `SELECT username FROM api_server.user;`;

		const [result, err] = await connection
			.query(query)
			.then((data) => {
				return [data, null];
			})
			.catch((err) => {
				return [null, err];
			});

		if (err) {
			/* DB connection 에서 error 가 생기면 발생하는 경우 */
			throw new CustomError(error.NO_DATA);
		}

		const [users] = result;
		connection.release();
		return users;
	},

	findOne: async (id) => {
		const query = `SELECT username FROM api_server.user where id='${id}';`;
		const connection = await pool.getConnection();

		const [result, err] = await connection
			.query(query)
			.then((data) => {
				return [data, null];
			})
			.catch((err) => {
				return [null, err];
			});

		if (err) {
			connection.release();
			throw new CustomError(error.DATABASE_ERROR);
		}

		const [user] = result;
		connection.release();
		return user;
	},
};

module.exports = { userRepository };
