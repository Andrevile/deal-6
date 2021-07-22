const API_ENDPOINT = '/api';

const getData = (url) => {
	return fetch(`${API_ENDPOINT}` + `${url}`).then((res) => res.json());
};

const postData = (url, data) => {
	return fetch(`${API_ENDPOINT}` + `${url}`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => res.json());
};

const patchData = (url, data) => {
	return fetch(`${API_ENDPOINT}` + `${url}`, {
		method: 'PATCH',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => res.json());
};

const deleteData = (url) => {
	return fetch(`${API_ENDPOINT}` + `${url}`, {
		method: 'DELETE',
	}).then((res) => res.json());
};

export const api = {
	get: (url) => {
		getData(url)
			.then((data) => {
				return {
					success: true,
					data: JSON.stringify(data),
				};
			})
			.catch(() => {
				return {
					success: false,
					message: 'Error 발생!',
				};
			});
	},
	post: (url, data) => {
		postData(url, data)
			.then((data) => {
				return {
					success: true,
					data: JSON.stringify(data),
				};
			})
			.catch(() => {
				return {
					success: false,
					message: 'Error 발생!',
				};
			});
	},
	update: (url, data) => {
		patchData(url, data)
			.then((data) => {
				return {
					success: true,
					data: JSON.stringify(data),
				};
			})
			.catch(() => {
				return {
					success: false,
					message: 'Error 발생!',
				};
			});
	},
	delete: (url) => {
		deleteData(url)
			.then(() => {
				return {
					success: true,
				};
			})
			.catch(() => {
				return {
					success: false,
					message: 'Error 발생!',
				};
			});
	},
};
