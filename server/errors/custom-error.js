class CustomError extends Error {
	constructor(error) {
		super(error.errorMessage);
		this.statusCode = error.statusCode;
		this.serverMessage = error.serverMessage;
	}
}

module.exports = CustomError;
