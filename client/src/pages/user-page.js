import AppBar from '../components/base/navigation-bar/navigation-bar';
import Section from '../components/user-page/section/section';
import { createDOMWithSelector } from '../util/createDOMWithSelector';
import './user-page.css';
import { navigateTo } from '../router';
import { api } from '../api/api';

export default class UserPage {
	state = {
		mode: '로그인',
		user: '',
	};

	// 오직 id만 받아오면 된다!
	constructor($parent) {
		this.$parent = createDOMWithSelector('div', '.userWrapper');
		$parent.appendChild(this.$parent);

		this.$appBar = new AppBar({
			$parent: this.$parent,
			initialState: this.state.mode,
			onClick: (e) => {
				if (e.target.className === 'nav__prev') {
					this.$parent.classList.remove('active');
				}
			},
		});

		this.$section = new Section({
			$parent: this.$parent,
			initialState: this.state.user,
			onClick: (e, inputValue) => {
				if (this.isUserLogin()) {
					// logout api 호출 (쿠키 제거)만 하면 끝
					api.get('/')
						.then(() => {
							navigateTo('/');
						})
						.catch((e) => {
							alert(e.message);
						});
				} else {
					e.preventDefault();
					if (inputValue.length === 0) {
						this.$section.$alert.classList.add('active');
						setTimeout(() => {
							this.$section.$alert.classList.remove('active');
						}, 2000);
					} else {
						console.log('login');
						api.get('/')
							.then(() => {
								navigateTo('/');
							})
							.catch((e) => {
								alert(e.message);
							});
						// login api 호출
						// 성공시 : (쿠키 삽입)만 하면 끝 + navigateTo('/');
						// 실패시 : 경고문구 || 길이가 0이거나
						// 내 계정
					}
				}
			},
		});

		setTimeout(() => {
			this.$parent.classList.add('active');
		}, 0);

		this.initiallizeData();
	}

	/*
		유저가 없을때?
	*/
	initiallizeData() {
		api.get('/')
			.then((res) => {
				// 아래는 로그인 한 상태 기준
				this.state.user = res.data.id;
				this.state.mode = '내 계정';
				this.setState();
			})
			.catch((e) => {
				alert(e.message);
			});
	}

	setState() {
		this.$appBar.setState(this.state.mode);
		this.$section.setState(this.state.user);
	}

	isUserLogin() {
		/* 유저가 로그인 되어 있다면, true 반환 아니면 false */
		return this.state.length > 0;
	}
}
