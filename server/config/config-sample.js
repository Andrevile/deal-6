module.exports = {
	db: {
		host: 'DB HOST',
		user: 'MYSQL USER',
		password: 'PASSWORD',
		database: 'MYSQL SCHEMA NAME',
		connectionLimit: 50000,
		waitForConnections: false,
		port: 3306,
		connectTimeout: 10000,
	},
	jwt: {
		secretKey: 'SECRET KEY 를 넣어주세요',
		options: {
			algorithm: '암호화 알고리즘',
			expiresIn: '만료시간',
			issuer: 'issuer',
		},
	},
};
