module.exports = {
	SAMPLE_ERROR: {
		code: 400,
		errorMessage: '클라이언트에 전달한 메세지입니다.',
		serverMessage: '서버에 표시할 로그입니다.',
	},

	INVALID_INPUT_ERROR: {
		code: 400,
		errorMessage: '잘못된 입력이 있습니다.',
		serverMessage: 'Invalid input request error',
	},

	DATABASE_ERROR: {
		code: 600, // 599 까지는 HTTP STATUS CODE 가 의미가 부여되어 있어서 600 부여
		errorMessage: '데이터 베이스의 오류가 발생했습니다.',
		serverMessage: 'Database Error',
	},

	NO_DATA: {
		code: 400,
		errorMessage: '조회된 데이터가 없습니다.',
		serverMessage: 'No such data error',
	},

	LOGIN_ERROR: {
		code: 400,
		errorMessage: '해당 아이디가 존재하지 않습니다.',
		serverMessage: 'No such user error',
	},

	JWT_TOKEN_INVALID_ERROR: {
		code: 401,
		errorMessage: '검증되지 않은 token 입니다.',
		serverMessage: 'Wrong JWT token access error',
	},
};
