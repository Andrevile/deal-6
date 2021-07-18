import NavigationBar from '../components/base/navigation-bar/navigation-bar';
import Body from '../components/signup-page/body/body';

const mode = '회원가입';
export default class SignUpPage {
	state = {};

	constructor($parent) {
		this.navbar = new NavigationBar({
			$parent,
			initialState: mode,
		});
		this.body = new Body({ $parent });
	}

	setState() {
		//리렌더링파트
	}

	render() {
		//렌더링파트
	}
}
