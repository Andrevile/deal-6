import './modal.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';

export default class Welcome {
	constructor({ $parent, onClick }) {
		this.$target = createDOMWithSelector('div', '.welcome');
		$parent.appendChild(this.$target);

		this.$target.innerHTML = `
                <div class="welcome__overlay"></div>
                <div class="welcome__content">
                    <span class="welcome__guide">회원가입을 축하합니다❗</span>
                    <div class="welcome__button">
                        <button data-link='/user'>로그인 하기</button>
                    </div>
                </div>
              `;

		this.onClick = onClick;

		this.$target.addEventListener('click', (e) => {
			this.onClick(e);
		});
	}

	open() {
		this.$target.style.display = 'block';
	}

	close() {
		this.$target.style.display = 'none';
	}
}
