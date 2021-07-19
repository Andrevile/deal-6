import AppBar from '../components/base/navigation-bar/navigation-bar';
import Section from '../components/user-page/section/section';

export default class UserPage {
	isUserLogin() {
		/* 유저가 로그인 되어 있다면, true 반환 아니면 false */
		return true;
	}

	constructor($parent) {
		this.state = '남영우';
		this.$appBar = new AppBar({
			$parent,
			initialState: this.isUserLogin() ? '내 계정' : '로그인',
		});

		this.$section = new Section({
			$parent,
			initialState: this.isUserLogin() ? this.state : '',
		});
	}
}
