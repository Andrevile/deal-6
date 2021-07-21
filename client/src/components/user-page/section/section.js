import './section.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
import LargeButton from '../../base/large-button/large-button';

export default class Section {
	state = '';
	constructor({ $parent, initialState, onClick }) {
		this.state = initialState;
		this.$parent = $parent;
		this.$section = createDOMWithSelector('section', '.section');
		this.$section.innerHTML = `
			<div class='uptag'></div>
			<div class='downtag'></div>
		`;
		$parent.appendChild(this.$section);

		this.$uptag = document.querySelector('.uptag');
		this.$downtag = document.querySelector('.downtag');
		this.onClick = onClick;

		this.render();

		this.$section.addEventListener('keyup', (e) => {
			if (e.target.className === 'input') {
				this.checkIdRegex(e);
			}
		});
	}
	setState(nextState) {
		this.state = nextState;
		this.render();
	}
	render() {
		this.createSectionContent(this.$uptag, this.state);
	}

	createSectionContent($parent, state) {
		if (isUserLogin(state)) {
			const $target = createDOMWithSelector('div', '.text');
			$target.innerHTML = `${state}`;
			$parent.appendChild($target);
			this.largeButton = new LargeButton({
				$parent,
				initialState: '로그아웃',
				onClick: (e) => {
					this.onClick(e);
				},
			});
		} else {
			const $target = createDOMWithSelector('form', '.form');
			$target.innerHTML = `
				<input class="input" name="id" type="text" placeholder="아이디를 입력하세요.">
				<span class='login__alert'>없는 ID입니다❗❗❗</span>
			`;
			$parent.appendChild($target);
			this.$input = document.querySelector('.input');
			this.$alert = document.querySelector('.login__alert');
			this.largeButton = new LargeButton({
				$parent: $target,
				initialState: '로그인',
				onClick: (e) => {
					this.onClick(e, this.$input.value);
				},
			});
			this.$downtag.innerHTML = `<button class="signup" data-link="/signup">회원가입</button>`;
		}
	}

	checkIdRegex(e) {
		const regex = /[^a-z,A-Z,0-9|]/g;
		e.target.value = e.target.value.replace(regex, '');
		e.target.value = e.target.value.slice(0, 20);
	}
}

function isUserLogin(state) {
	/* 로그인 되어 있는지 확인 */
	return state.length > 0;
}
