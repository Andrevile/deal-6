const API_ENDPOINT = '/api';

const getData = (url) => {
	return fetch(`${API_ENDPOINT}` + `${url}`).then((res) => {
		if (!res.ok) throw new Error('Http Error...');
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
		if (!res.ok) throw new Error('Http Error...');
		return res.json();
	});
};

const patchData = (url, data) => {
	return fetch(`${API_ENDPOINT}` + `${url}`, {
		method: 'PATCH',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => {
		if (!res.ok) throw new Error('Http Error...');
		return res.json();
	});
};

const deleteData = (url) => {
	return fetch(`${API_ENDPOINT}` + `${url}`, {
		method: 'DELETE',
	}).then((res) => {
		if (!res.ok) throw new Error('Http Error...');
		return res.json();
	});
};

export const api = {
	get: (url) => {
		return new Promise((resolve, reject) => {
			getData(url)
				.then((data) => {
					resolve({
						success: true,
						data: JSON.stringify(data),
					});
				})
				.catch((e) => {
					reject({
						success: false,
						message: e.message,
					});
				});
		});
	},

	post: (url, data) => {
		return new Promise((resolve, reject) => {
			postData(url, data)
				.then((data) => {
					resolve({
						success: true,
						data: JSON.stringify(data),
					});
				})
				.catch((e) => {
					reject({
						success: false,
						message: e.message,
					});
				});
		});
	},
	update: (url, data) => {
		return new Promise((resolve, reject) => {
			patchData(url, data)
				.then((data) => {
					resolve({
						success: true,
						data: JSON.stringify(data),
					});
				})
				.catch((e) => {
					reject({
						success: false,
						message: e.message,
					});
				});
		});
	},
	delete: (url) => {
		return new Promise((resolve, reject) => {
			deleteData(url)
				.then((data) => {
					resolve({
						success: true,
						data: JSON.stringify(data),
					});
				})
				.catch((e) => {
					reject({
						success: false,
						message: e.message,
					});
				});
		});
	},
};
