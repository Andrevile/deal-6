import Navbar from '../components/base/navigator/navigator';
import Body from '../components/location-page/body/body';

export default class SignUpPage {
	state = {
		setMode: '내 동네 설정하기',
		allMyLocation: ['인창동'],
	};

	constructor($parent) {
		this.navbar = new Navbar({
			$parent,
			initialState: this.state.setMode,
		});
		this.body = new Body({
			$parent,
			initialState: this.state.allMyLocation,
		});
	}

	setState() {
		//리렌더링파트
	}

	render() {
		//렌더링파트
	}
}
