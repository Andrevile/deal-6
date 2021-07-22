const {
	selectQueryExecutor,
	insertQueryExecutor,
} = require('../utils/queryExecutor');

const locationRepo = {
	findAll: async () => {
		const query = `SELECT location.pk, location.name FROM api_server.location;`;

		return await selectQueryExecutor(query);
	},

	findOne: async (name) => {
		const query = `SELECT location.pk, location.name FROM api_server.location where name='${name}';`;

		return await selectQueryExecutor(query);
	},

	create: async (name) => {
		const query = `
		INSERT
			INTO api_server.location (name)
		SELECT    
			('${name}')
		FROM DUAL
		WHERE NOT EXISTS(SELECT * FROM location WHERE name='${name}');
		`;

		return await insertQueryExecutor(query);
	},
};

module.exports = { locationRepo };
