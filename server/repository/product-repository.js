/* eslint-disable no-unused-vars */

const {
	selectQueryExecutor,
	insertQueryExecutor,
	updateQueryExecutor,
	deleteQueryExecutor,
} = require('../utils/queryExecutor');

const productRepo = {
	findAll: async (category, location) => {
		const query = `SELECT * FROM product P WHERE category=${category}, location=${location};`;

		return await selectQueryExecutor(query);
	},

	findAllBySeller: async (seller) => {
		const query = `SELECT * FROM product P WHERE seller='${seller}';`;

		return await selectQueryExecutor(query);
	},

	findOne: async (pk) => {
		const query = `SELECT * FROM product where pk=${pk};`;

		return await selectQueryExecutor(query);
	},

	create: async ({ title, content, location, category, seller, price }) => {
		const query = `
		INSERT
			INTO product P (title, content, location, category, seller, price)
		VALUES    
			('${title}','${content}','${location}','${category}','${seller}','${price}')
		`;

		return await insertQueryExecutor(query);
	},

	update: async (pk, status) => {
		const query = `UPDATE product SET status=${status} WHERE pk=${pk};`;

		return await updateQueryExecutor(query);
	},

	delete: async (pk) => {
		const query = `DELETE FROM product WHERE pk=${pk};`;

		return await deleteQueryExecutor(query);
	},
};

module.exports = { productRepo };
