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
			onClick: (e, idx) => {
				if (
					e.target.className === 'location__plusBtn' ||
					e.target.className === 'location__plus'
				) {
					this.modal.open();
				} else if (e.target.className === 'location__cancelBtn') {
					this.bindRemoveLocationEvent(e, idx);
				}
			},
		});
		this.modal = new Modal({
			$parent,
			onClick: (e, value) => {
				this.bindModalClickEvent(e, value);
			},
		});
	}

	setState() {
		this.body.setState(this.state.allMyLocation);
	}

	bindModalClickEvent(e, value) {
		if (
			e.target.className === 'modal__overlay' ||
			e.target.className === 'modal__cancle'
		) {
			this.modal.close();
		} else if (e.target.className === 'modal__confirm active') {
			// api로 동네 추가
			this.state.allMyLocation = [...this.state.allMyLocation, value];
			this.modal.close();
			this.setState();
		}
	}

	bindRemoveLocationEvent(e, idx) {
		let LocationArray = [...this.state.allMyLocation];
		LocationArray.splice(idx, 1);
		this.state.allMyLocation = LocationArray;
		this.setState();
	}
}
