import './section.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
import LargeButton from '../../base/large-button/large-button';

export default class Section {
	constructor({ $parent, initialState }) {
		this.state = initialState;
		this.$parent = $parent;
		this.$section = createDOMWithSelector('section', '.section');

		$parent.appendChild(this.$section);
		createSectionContent(this.$section, this.state);
	}

	render() {}
}

function isUserLogin(state) {
	/* 로그인 되어 있는지 확인 */
	return state.length > 0;
}

function createSectionContent($parent, state) {
	if (isUserLogin(state)) {
		const $target = createDOMWithSelector('div', '.text');
		$target.innerHTML = `${state}`;
		$parent.appendChild($target);
		const $logoutButton = new LargeButton({
			$parent,
			initialState: '로그아웃',
		});
	} else {
		const $target = createDOMWithSelector('form', '.form');
		$target.innerHTML = `
            <input class="input" name="id" type="text" placeholder="아이디를 입력하세요.">
        `;
		$parent.appendChild($target);
		const $loginButton = new LargeButton({
			$parent,
			initialState: '로그인',
		});
		const $signupAnchor = `
            <button class="signup" data-link="/signup">회원가입</button>
        `;
		$parent.innerHTML += $signupAnchor;
	}
}
