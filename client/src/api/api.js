const API_ENDPOINT = '/api';

const getData = (url) => {
	return fetch(`${API_ENDPOINT}` + `${url}`).then((res) => {
		return res.json();
	});
};

const postData = (url, data) => {
	return fetch(`${API_ENDPOINT}` + `${url}`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => {
		return res.json();
	});
};

const putData = (url, data) => {
	return fetch(`${API_ENDPOINT}` + `${url}`, {
		method: 'PUT',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => {
		return res.json();
	});
};

const deleteData = (url) => {
	return fetch(`${API_ENDPOINT}` + `${url}`, {
		method: 'DELETE',
	}).then((res) => {
		return res.json();
	});
};

export const api = {
	get: (url) => {
		return new Promise((resolve, reject) => {
			getData(url).then((data) => {
				if (data.success) {
					resolve({
						success: true,
						data: data,
					});
				} else {
					reject({
						success: false,
						message: data.message,
					});
				}
			});
		});
	},

	post: (url, data) => {
		return new Promise((resolve, reject) => {
			postData(url, data).then((data) => {
				if (data.success) {
					resolve({
						success: true,
						data: data,
					});
				} else {
					reject({
						success: false,
						message: data.message,
					});
				}
			});
		});
	},
	update: (url, data) => {
		return new Promise((resolve, reject) => {
			putData(url, data).then((data) => {
				if (data.success) {
					resolve({
						success: true,
						data: data,
					});
				} else {
					reject({
						success: false,
						message: data.message,
					});
				}
			});
		});
	},
	delete: (url) => {
		return new Promise((resolve, reject) => {
			deleteData(url).then((data) => {
				if (data.success) {
					resolve({
						success: true,
						data: data,
					});
				} else {
					reject({
						success: false,
						message: data.message,
					});
				}
			});
		});
	},
};
