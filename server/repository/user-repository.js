const {
	selectQueryExecutor,
	insertQueryExecutor,
} = require('../utils/queryExecutor');

const userRepo = {
	findAll: async () => {
		const query = `SELECT user.id, user.pk, user.createdAt, user.updatedAt FROM api_server.user;`;

		return await selectQueryExecutor(query);
	},

	findOne: async (id) => {
		const query = `SELECT user.id, user.pk, user.createdAt, user.updatedAt FROM api_server.user where id='${id}';`;

		return await selectQueryExecutor(query);
	},

	create: async (id, location) => {
		const query = `
		INSERT 
			INTO api_server.user (id, MainLocation) 
		VALUES
			('${id}', '${location}');
		`;

		return await insertQueryExecutor(query);
	},
};

module.exports = { userRepo };
