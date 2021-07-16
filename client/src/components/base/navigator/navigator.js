import './navigator.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';

export default class Navigator {
	state = '';
	$target = null;
	isUser = false;

	constructor({ $parent, initialState }) {
		this.state = initialState;

		this.setTarget(initialState);

		$parent.appendChild(this.$target);

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

	setTarget = (initialState) => {
		switch (initialState) {
			case '내 동네 설정하기':
				this.$target = createDOMWithSelector('nav', '.nav--grey');
				break;
			case '회원가입':
				this.$target = createDOMWithSelector('nav', '.nav--grey');
				break;
			case '로그인':
				this.$target = createDOMWithSelector('nav', '.nav--grey');
				break;
			case '내 계정':
				this.$target = createDOMWithSelector('nav', '.nav--grey');
				break;
			default:
				this.$target = createDOMWithSelector('nav', '.nav--white');
				this.isUser = true;
				break;
		}
	};
}
