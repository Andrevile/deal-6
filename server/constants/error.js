module.exports = {
	INVALID_INPUT_ERROR: {
		statusCode: 400,
		errorMessage: '잘못된 입력이 있습니다.',
		serverMessage: 'Invalid input request error',
	},

	DATABASE_ERROR: {
		statusCode: 600, // 599 까지는 HTTP STATUS CODE 가 의미가 부여되어 있어서 600 부여
		errorMessage: '데이터 베이스의 오류가 발생했습니다.',
		serverMessage: 'Database Error',
	},

	NO_DATA: {
		statusCode: 400,
		errorMessage: '조회된 데이터가 없습니다.',
		serverMessage: 'No such data error',
	},

	LOGIN_ERROR: {
		statusCode: 400,
		errorMessage: '해당 아이디가 존재하지 않습니다.',
		serverMessage: 'No such user error',
	},
};
