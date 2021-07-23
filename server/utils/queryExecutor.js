const { pool } = require('../db/db');
const CustomError = require('../errors/custom-error');
const error = require('../constants/error');
const promiseHandler = require('../utils/promiseHandler');

const selectQueryExecutor = async (query) => {
	const connection = await pool.getConnection();
	const [result, err] = await promiseHandler(connection.query(query));
	if (err) {
		// DB connection 에서 error 가 생기면 발생하는 경우
		connection.release();
		throw new CustomError(error.DATABASE_ERROR);
	}

	const [selectData] = result;
	connection.release();
	return selectData;
};

const insertQueryExecutor = async (query) => {
	const connection = await pool.getConnection();
	const [result, err] = await promiseHandler(connection.query(query));

	if (err) {
		// DB connection 에서 error 가 생기면 발생하는 경우
		connection.release();
		throw new CustomError(error.DATABASE_ERROR);
	}

	const [{ insertId }] = result;
	connection.release();
	return insertId;
};

const updateQueryExecutor = async (query) => {
	const connection = await pool.getConnection();
	const [result, err] = await promiseHandler(connection.query(query));

	if (err) {
		// DB connection 에서 error 가 생기면 발생하는 경우
		throw new CustomError(error.DATABASE_ERROR);
	}

	const [{ affectedRows }] = result;
	connection.release();
	return affectedRows;
};

const deleteQueryExecutor = updateQueryExecutor;

const transactionQueryExecutor = async (...queries) => {
	const conn = await pool.getConnection();
	try {
		conn.beginTransaction();
		for (const query of queries) {
			await promiseHandler(query);
		}
		conn.commit();
		return true;
	} catch (e) {
		conn.rollback();
		return false;
	}
};

module.exports = {
	selectQueryExecutor,
	updateQueryExecutor,
	insertQueryExecutor,
	deleteQueryExecutor,
	transactionQueryExecutor,
};
