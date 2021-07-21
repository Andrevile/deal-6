const { pool } = require('../db/db');
const CustomError = require('../errors/custom-error');
const error = require('../constants/error');
const promiseHandler = require('../utils/promiseHandler');

const sampleRepository = {
	findAll: async () => {
		/* pool 에서 가지고 있는 connection 을 가져옵니다. */
		const connection = await pool.getConnection();
		/* DB 에 요청할 query 문을 작성합니다. */
		const query = `query 를 작성해서 넣으면 됩니다. 끝에 세미콜론 잊지마세요!`;

		const [result, err] = await promiseHandler(connection.query(query));

		if (err) {
			/* DB connection 에서 error 가 생기면 발생하는 경우 */
			throw new CustomError(error.SAMPLE_ERROR);
		}

		const [samples] = result;
		connection.release();

		return samples;
	},
};

module.exports = { sampleRepository };
