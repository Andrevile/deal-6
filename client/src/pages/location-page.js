import Navbar from '../components/base/navigation-bar/navigation-bar';
import Body from '../components/location-page/body/body';
import Modal from '../components/location-page/location-modal/location-modal';
import Alert from '../components/base/alert/alert';
import { api } from '../api/api';

const mode = '내 동네 설정하기';
export default class LocationPage {
	state = {
		allMyLocation: ['인창동'],
		currentIndex: 0, // 현재 캔슬할 버튼의 index 초기화
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
				this.bindButtonClickEvent(e, idx);
			},
		});
		this.modal = new Modal({
			$parent,
			onClick: (e, idx) => {
				this.bindModalClickEvent(e, idx);
			},
		});
		this.alert = new Alert({
			$parent,
			onClick: (e) => {
				this.bindAlertClickEvent(e);
			},
		});

		// this.initiallizeData();
	}

	initiallizeData() {
		api.get('/')
			.then((res) => {
				this.state.allMyLocation = res.data;
				this.setState();
			})
			.catch((e) => {
				alert(e.message);
			});
	}

	setState() {
		this.body.setState(this.state.allMyLocation);
	}

	bindModalClickEvent(e, value) {
		if (
			// 닫기 및 외부 클릭 시 발생
			e.target.className === 'modal__overlay' ||
			e.target.className === 'modal__cancel'
		) {
			this.modal.close();
		} else if (e.target.className === 'modal__confirm active') {
			// 확인 클릭 시 발생
			// api로 동네 추가
			this.state.allMyLocation = [...this.state.allMyLocation, value];
			this.modal.close();
			this.modal.$input = ''; // input 초기화
			this.setState();
		}
	}

	bindRemoveLocationEvent(idx) {
		let LocationArray = [...this.state.allMyLocation];
		LocationArray.splice(idx, 1);
		this.state.allMyLocation = LocationArray;
		this.setState();
		/* 
			--추후 예정--
			삭제 시(각각 api 요청 동반 예상)
			2개일때 :
				idx 0 삭제 -> idx 1을 메인동네로
				idx 1 삭제 -> 그대로
			1개일때 :
				메인 삭제
		*/
	}

	bindButtonClickEvent(e, idx) {
		if (
			// plus click event
			e.target.className === 'location__plusBtn' ||
			e.target.className === 'location__plus'
		) {
			this.modal.open();
		} else if (e.target.className === 'location__cancelBtn') {
			// cancel(X) click event
			this.alert.open();
			this.state.currentIndex = idx;
		} else if (e.target.className === 'location__normalBtn') {
			console.log('MuYaHo');
			/* 
			--추후 예정--
			일반 동네 click event ( 메인 동네로 change )
			그 후 다시 api 요청을 통해서 리렌더링 방식 
			*/
		}
	}

	bindAlertClickEvent(e) {
		if (
			// 닫기 및 외부 클릭 시 발생
			e.target.className === 'alert__overlay' ||
			e.target.className === 'alert__cancel'
		) {
			this.alert.close();
		} else if (e.target.className === 'alert__confirm') {
			// 나가기 클릭 시 발생
			this.alert.close();
			this.bindRemoveLocationEvent(this.state.currentIndex);
		}
	}
}
