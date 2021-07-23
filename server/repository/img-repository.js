/* eslint-disable no-unused-vars */
const {
	selectQueryExecutor,
	insertQueryExecutor,
	updateQueryExecutor,
	deleteQueryExecutor,
	transactionQueryExecutor,
} = require('../utils/queryExecutor');

const productImgPathRepo = {
	findAll: async (pk) => {
		const query = `SELECT * FROM productImgPath WHERE pk=${pk}`;

		return await selectQueryExecutor(query);
	},

	findOne: async (pk, sequence) => {
		const query = `SELECT * FROM productImgPath where pk=${pk}, sequence=${sequence};`;

		return await selectQueryExecutor(query);
	},

	create: async (url) => {
		const query = `
		INSERT
			INTO productImgPath (url)
		VALUES    
			('${url}')
		`;

		return await insertQueryExecutor(query);
	},
};

module.exports = { productImgPathRepo };
