const { selectQueryExecutor } = require('../utils/queryExecutor');

const userRepository = {
	findAll: async () => {
		const query = `SELECT username FROM api_server.user;`;

		const users = await selectQueryExecutor(query);
		return users;
	},

	findOne: async (id) => {
		const query = `SELECT username FROM api_server.user where id='${id}';`;

		const user = await selectQueryExecutor(query);
		return user;
	},
};

module.exports = { userRepository };
