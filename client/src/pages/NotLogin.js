import Redirect from '../components/base/redirect/redirect';
import { navigateTo } from '../router';

export default class NotLogin {
	state = {
		link: '/',
		message: '메인으로 이동❗',
		status: '',
		content: 'This service requires login',
	};
	constructor($parent) {
		new Redirect({ $parent, initialState: this.state });

		setTimeout(() => {
			navigateTo('/');
		}, 2000);
	}
}
