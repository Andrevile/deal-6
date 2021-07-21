module.exports = async (promise) => {
	return promise.then((data) => [data, null]).catch((error) => [null, error]);
};
