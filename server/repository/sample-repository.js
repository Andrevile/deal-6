/* eslint-disable no-unused-vars */
const { selectQueryExecutor } = require('../utils/queryExecutor');

const sampleRepo = {
	findAll: async () => {
		/* DB 에 요청할 query 문을 작성합니다. */
		const query = `query 를 작성해서 넣으면 됩니다. 끝에 세미콜론 잊지마세요!`;
		/* selectQueryExecutor, insertQuery... 등 추후 추가할 예정입니다. */
		const samples = await selectQueryExecutor(query);

		return samples;
	},
};

module.exports = { sampleRepo };
