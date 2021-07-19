import Navbar from '../components/base/navigation-bar/navigation-bar';
import Body from '../components/location-page/body/body';
import Modal from '../components/base/location-modal/location-modal';
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
			onClick: (e) => {
				if (
					e.target.className === 'location__plusBtn' ||
					e.target.className === 'location__plus'
				) {
					this.modal.open();
				}
			},
		});
		this.modal = new Modal({
			$parent,
			onClick: (e) => {
				if (
					e.target.className === 'modal__overlay' ||
					e.target.className === 'modal__cancle'
				) {
					this.modal.close();
				}
			},
		});
	}

	setState() {
		//리렌더링파트
	}

	render() {
		//렌더링파트
	}
}
