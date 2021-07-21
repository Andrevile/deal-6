import NavigationBar from '../components/base/navigation-bar/navigation-bar';
import Body from '../components/writing-page/body/body';
import Footer from '../components/writing-page/footer/footer';

const mode = '글쓰기';

export default class WritingPage {
	state = {
		location: '인창동',
		imgPath: [
			'/imgs/photo.jpeg',
			'/imgs/photo.jpeg',
			'/imgs/photo.jpeg',
			'/imgs/photo.jpeg',
			'/imgs/photo.jpeg',
		],
		title: '',
		description: '',
		price: '',
		category: '',
		haveAllValue: false,
	};
	// haveAllValue : 모든 값이 있어야 Navbar doneIcon 활성화 가능!
	constructor($parent) {
		this.navigationBar = new NavigationBar({
			$parent,
			initialState: mode,
			onClick: () => {
				// state에 userid 추가하고 (추가안해도 인자로 받아서 괜찮을듯) haveAllValue를 빼면 될듯!
				// 게시물 post 요청 (this.state)
				// menupage로 이동 (바로 상품 올린거 확인 가능)
			},
		});
		this.body = new Body({
			$parent,
			initialState: this.state,
			refreshState: (nextState) => {
				this.setState(nextState);
			}, // 부모의 State 업데이트
		});
		this.footer = new Footer({
			$parent,
			initialState: this.state.location,
		});
	}

	setState(nextState) {
		this.state = nextState;
		this.navigationBar.setState(this.state.haveAllValue);
		this.body.setState(nextState);
	}
}
