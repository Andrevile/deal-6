import './navigation-bar.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';

export default class NavigationBar {
	state = '';
	$target = null;
	isUser = false;

	constructor({ $parent, initialState }) {
		this.state = initialState;

		this.setTarget(initialState);

		$parent.appendChild(this.$target);

		this.$target.addEventListener('click', (e) => {
			if (e.target.className === 'nav__prev') history.back(-1);
		});
		this.render();
	}

	setState(nextState) {
		this.state = nextState;
		this.render();
	}

	render() {
		this.$target.innerHTML = `
            <img class='nav__prev' src='/icons/arrow_back_black.svg'/>

        
            <span>
                ${this.state}
            </span>
            <div>
                ${
					this.isUser
						? `<img class='nav__exit' src="/icons/exit.svg" />`
						: ``
				}
            </div>
        `;
	}

	setTarget(initialState) {
		switch (initialState) {
			case '내 동네 설정하기':
			case '회원가입':
			case '로그인':
			case '내 계정':
			case '메뉴':
				this.$target = createDOMWithSelector('nav', '.nav--grey');
				break;
			default:
				this.$target = createDOMWithSelector('nav', '.nav--white');
				this.isUser = true;
				break;
		}
	}
}
