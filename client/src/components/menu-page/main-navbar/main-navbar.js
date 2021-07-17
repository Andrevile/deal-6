import './main-navbar.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';

export default class Navigator {
	state = '1';
	constructor({ $parent, initialState, onClick }) {
		this.$target = createDOMWithSelector('nav', '.mainNav');
		$parent.appendChild(this.$target);
		this.state = initialState;

		this.$target.innerHTML = `      
            <div class='mainNav__inner'>
                <div class='mainNav__sell active'>
                    <span data-idx='1'>판매목록</span>
                </div>
            </div>
            <div class='mainNav__inner'>
                <div class='mainNav__chat'>
                    <span data-idx='2'>채팅</span>
                </div>
            </div>
            <div class='mainNav__inner'>
                <div class='mainNav__interest'>
                    <span data-idx='3'>관심목록</span>
         
                </div>
            </div>
        `;

		this.onClick = onClick;

		this.$sell = document.querySelector('.mainNav__sell');
		this.$chat = document.querySelector('.mainNav__chat');
		this.$interest = document.querySelector('.mainNav__interest');

		this.$target.addEventListener('click', (e) => {
			if (e.target.dataset.idx) this.onClick(e.target.dataset.idx);
		}); // 이벤트 위임부분
	}

	setState(nextState) {
		this.updateClassList(nextState);
	}

	// updateClassList : 각 버튼 css 토글
	updateClassList(nextState) {
		if (nextState === '1') {
			this.$sell.classList.toggle('active');
			if (this.state === '2') {
				this.$chat.classList.toggle('active');
			} else {
				this.$interest.classList.toggle('active');
			}
			this.state = nextState;
		} else if (nextState === '2') {
			this.$chat.classList.toggle('active');
			if (this.state === '1') {
				this.$sell.classList.toggle('active');
			} else {
				this.$interest.classList.toggle('active');
			}
			this.state = nextState;
		} else {
			this.$interest.classList.toggle('active');
			if (this.state === '2') {
				this.$chat.classList.toggle('active');
			} else {
				this.$sell.classList.toggle('active');
			}

			this.state = nextState;
		}
	}
}
