import Navbar from '../components/base/navigation-bar/navigation-bar';
import Body from '../components/location-page/body/body';

const mode = '내 동네 설정하기';
export default class LocationPage {
	state = {
		allMyLocation: ['인창동'],
	};

	constructor($parent) {
		this.navbar = new Navbar({
			$parent,
			initialState: mode,
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
