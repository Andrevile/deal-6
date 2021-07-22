import NavigationBar from '../components/base/navigation-bar/navigation-bar';
import Body from '../components/signup-page/body/body';

const mode = '회원가입';

export default class SignUpPage {
	constructor($parent) {
		this.navbar = new NavigationBar({
			$parent,
			initialState: mode,
		});
		this.body = new Body({ $parent });
	}
}
