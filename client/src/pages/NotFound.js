import Navbar from '../components/base/navigation-bar/navigation-bar';
import Redirect from '../components/base/redirect/redirect';

const mode = '-';

export default class NotFound {
	state = {
		link: '/',
		message: 'Home',
		status: '404',
		content: 'Page not found',
	};
	constructor($parent) {
		new Navbar({
			$parent,
			initialState: mode,
		});

		new Redirect({
			$parent,
			initialState: this.state,
		});
	}
}
