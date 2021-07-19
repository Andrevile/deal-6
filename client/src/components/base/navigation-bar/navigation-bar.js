import './navigation-bar.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';

export default class NavigationBar {
	state = '';
	$target = null;
	isUser = false;
	isModal = false;
	doneIcon = false; // 글쓰기 모드 변수
	activeDoneIcon = false; // 글쓰기 모드 변수

	// 4번째 인자로 모달 클릭 이벤트 해야할듯.
	constructor({ $parent, initialState, onClick, isModal = false }) {
		this.isModal = isModal;
		this.state = initialState;
		this.isModal ? (this.onClick = onClick) : '';
		this.setTarget(initialState);

		$parent.appendChild(this.$target);

		this.$target.addEventListener('click', (e) => {
			if (this.isModal === true) {
				this.onClick(e, 0);
			} else if (this.state === '메뉴') {
				this.onClick(e);
				setTimeout(() => {
					history.back(-1);
				}, 400);
			} else if (e.target.className === 'nav__prev') history.back(-1);
		});

		this.$icon = document.querySelector('.nav__icon');
		this.onClick = onClick;

		this.$target.addEventListener('click', (e) => {
			if (e.target.className === 'nav__doneActive') {
				this.onClick();
			}
			// 추후 채팅 나가기에 대한 이벤트도 여기!
		});

		this.render();
	}

	setState(nextState) {
		// 글쓰기 모드에서만 사용
		if (nextState) this.activeDoneIcon = true;
		else this.activeDoneIcon = false;
		this.render();
	}

	render() {
		this.$target.innerHTML = `
            <img class='nav__prev' src='/icons/arrow_back_black.svg'/>
            <span>
                ${this.state}
            </span>
            <div class='nav__icon'>
                ${this.createExitIcon()}
				${this.createDoneIcon()}
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
			case '카테고리':
				this.$target = createDOMWithSelector('nav', '.nav--grey');
				break;
			case '글쓰기':
				this.$target = createDOMWithSelector('nav', '.nav--white');
				this.doneIcon = true;
				break;
			default:
				this.$target = createDOMWithSelector('nav', '.nav--white');
				this.isUser = true;
				break;
		}
	}

	createDoneIcon() {
		if (this.doneIcon) {
			if (this.activeDoneIcon)
				return `<img class='nav__doneActive' src="/icons/done_active.svg" />`;
			return `<img class='nav__done' src="/icons/done.svg" />`;
		}
		return ``;
	}

	createExitIcon() {
		if (this.isUser)
			return `<img class='nav__exit' src="/icons/exit.svg" />`;
		return ``;
	}
}
