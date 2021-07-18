import NavigationBar from '../components/base/navigation-bar/navigation-bar';
import Body from '../components/writing-page/body/body';
import Footer from '../components/writing-page/footer/footer';

const mode = '글쓰기';

export default class WritingPage {
	state = {
		location: '인창동',
	};

	constructor($parent) {
		this.navigationBar = new NavigationBar({
			$parent,
			initialState: mode,
		});
		this.body = new Body({
			$parent,
			initialState: mode,
		});
		this.footer = new Footer({
			$parent,
			initialState: this.state.location,
		});
	}

	setState() {
		//리렌더링파트
	}

	render() {
		//렌더링파트
	}
}
