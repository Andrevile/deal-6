import Navbar from '../components/base/navigator/navigator';
import Body from '../components/signup-page/body/body';

export default class SignUpPage {
	state = {
		setMode: '회원가입',
	};

	constructor($parent) {
		this.navbar = new Navbar({
			$parent,
			initialState: this.state.setMode,
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
