import './location-modal.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';

export default class LocationModal {
	constructor({ $parent, onClick }) {
		this.$target = createDOMWithSelector('div', '.modal');
		$parent.appendChild(this.$target);
		this.$target.innerHTML = `
                <div class="modal__overlay"></div>
                <div class="modal__content">
                    <span class="modal__guide">우리 동네를 입력하세요</span>
                    <input class="modal__input" type='text' placeholder="시∙구 제외, 동만 입력">
                    <div class="modal__checkOne">
                        <span class="modal__cancle">취소</span><span class="modal__confirm">확인</span>
                    </div>
                </div>
              `;

		this.onClick = onClick;
		this.$input = document.querySelector('.modal__input');
		this.$confirmButton = document.querySelector('.modal__confirm');

		this.$input.addEventListener('keydown', (e) => {
			this.bindInputEvent(e);
		});
		this.$target.addEventListener('click', (e) => {
			let inputValue = this.$input.value;
			this.onClick(e, inputValue);
		});
	}

	open() {
		this.$target.style.display = 'block';
	}

	close() {
		this.$target.style.display = 'none';
	}

	bindInputEvent(e) {
		this.checkRegexEvent(e);
		this.checkLengthEvent(e);
	}

	checkRegexEvent(e) {
		const regex = /[^가-힣,0-9|]/g;
		e.target.value = e.target.value.replace(regex, '');
	}

	checkLengthEvent(e) {
		let length = e.target.value.length;
		if (length > 0) this.$confirmButton.classList.add('active');
		else this.$confirmButton.classList.remove('active');
	}
}
