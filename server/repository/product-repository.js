const {
	selectQueryExecutor,
	insertQueryExecutor,
	updateQueryExecutor,
	deleteQueryExecutor,
	transactionQueryExecutor,
} = require('../utils/queryExecutor');

const productRepository = {
	findAll: async (category, location) => {
		const query = `
        SELECT 
            P.pk, P.title, P.wishCount, P.chatCount, P.price, P.location
        FROM 
            product P
        WHERE
            category=${category}, location=${location};
        `;

		return await selectQueryExecutor(query);
	},

	findOne: async (pk) => {
		const query = `SELECT * FROM product where pk='${pk}';`;

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
};

module.exports = { productRepository };
