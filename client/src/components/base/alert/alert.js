import './alert.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';

export default class Alert {
	constructor({ $parent, onClick }) {
		this.$target = createDOMWithSelector('div', '.alert');
		$parent.appendChild(this.$target);

		// 채팅 구현시 render() 빼서 재사용
		this.$target.innerHTML = `
                <div class="alert__overlay"></div>
                <div class="alert__content">
                    <span class="alert__guide">정말로 삭제하시겠습니까?</span>
                    <div class="alert__checkOne">
                        <span class="alert__cancel">취소</span><span class="alert__confirm">삭제</span>
                    </div>
                </div>
              `;

		this.onClick = onClick;
		this.$confirmButton = document.querySelector('.alert__confirm');

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
