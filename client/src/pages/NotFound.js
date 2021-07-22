import Redirect from '../components/base/redirect/redirect';

export default class NotFound {
	state = {
		link: '/',
		message: 'Home',
		status: '404',
		content: 'Page not found',
	};
	constructor($parent) {
		new Redirect({
			$parent,
			initialState: this.state,
		});
	}
}
