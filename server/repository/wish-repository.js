const {
	selectQueryExecutor,
	insertQueryExecutor,
	deleteQueryExecutor,
} = require('../utils/queryExecutor');

const wishRepo = {
	findAll: async (UserPk) => {
		const query = `SELECT * FROM wishRepo WHERE UserPk=${UserPk};`;

		return await selectQueryExecutor(query);
	},

	findOne: async (ProductPk, UserPk) => {
		const query = `SELECT * FROM wishRepo WHERE ProductPk=${ProductPk}, UserPk=${UserPk};`;

		return await selectQueryExecutor(query);
	},

	create: async (ProductPk, UserPk) => {
		const query = `
		INSERT
			INTO api_server.location (ProductPk, UserPk)
		VALUES    
			(${ProductPk}, ${UserPk})
		`;

		return await insertQueryExecutor(query);
	},

	delete: async (ProductPk, UserPk) => {
		const query = `DELETE FROM product WHERE ProductPk=${ProductPk}, UserPk=${UserPk}`;

		return await deleteQueryExecutor(query);
	},
};

module.exports = { wishRepo };
