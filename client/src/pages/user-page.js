import AppBar from '../components/base/navigation-bar/navigation-bar';
import Section from '../components/user-page/section/section';
import { createDOMWithSelector } from '../util/createDOMWithSelector';
import './user-page.css';

export default class UserPage {
	isUserLogin() {
		/* 유저가 로그인 되어 있다면, true 반환 아니면 false */
		return false;
	}

	constructor($parent) {
		this.$parent = createDOMWithSelector('div', '.userWrapper');
		$parent.appendChild(this.$parent);

		this.state = '남영우';
		this.$appBar = new AppBar({
			$parent: this.$parent,
			initialState: this.isUserLogin() ? '내 계정' : '로그인',
			onClick: (e) => {
				if (e.target.className === 'nav__prev') {
					this.$parent.classList.remove('active');
				}
			},
		});

		this.$section = new Section({
			$parent: this.$parent,
			initialState: this.isUserLogin() ? this.state : '',
		});

		setTimeout(() => {
			this.$parent.classList.add('active');
		}, 0);
	}
}
