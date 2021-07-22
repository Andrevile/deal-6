import Navbar from '../components/base/navigation-bar/navigation-bar';
import Redirect from '../components/base/redirect/redirect';

const mode = '-';

export default class NotLogin {
	state = {
		link: '/user',
		message: 'Login',
		status: '',
		content: 'This service requires login',
	};
	constructor($parent) {
		new Navbar({
			$parent,
			initialState: mode,
		});

		new Redirect({ $parent, initialState: this.state });
	}
}
