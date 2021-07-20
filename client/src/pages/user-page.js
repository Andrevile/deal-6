import AppBar from '../components/base/navigation-bar/navigation-bar';
import Section from '../components/user-page/section/section';
import { createDOMWithSelector } from '../util/createDOMWithSelector';
import './user-page.css';
import { navigateTo } from '../router';
export default class UserPage {
	state = '';

	// 오직 id만 받아오면 된다!
	constructor($parent) {
		this.$parent = createDOMWithSelector('div', '.userWrapper');
		$parent.appendChild(this.$parent);

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
			onClick: (e, inputValue) => {
				if (this.isUserLogin()) {
					// logout api 호출 (쿠키 제거)만 하면 끝
					navigateTo('/');
				} else {
					e.preventDefault();
					if (inputValue.length === 0) {
						this.$section.$alert.classList.add('active');
						setTimeout(() => {
							this.$section.$alert.classList.remove('active');
						}, 2000);
					} else {
						console.log('login');
						// login api 호출
						// 성공시 : (쿠키 삽입)만 하면 끝 + navigateTo('/');
						// 실패시 : 경고문구 || 길이가 0이거나
					}
				}
			},
		});

		setTimeout(() => {
			this.$parent.classList.add('active');
		}, 0);
	}

	setState() {
		this.$appBar.setState(this.state);
		this.$section.setState(this.state);
	}

	isUserLogin() {
		/* 유저가 로그인 되어 있다면, true 반환 아니면 false */
		return this.state.length > 0;
	}
}
