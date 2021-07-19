import './location-modal.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';

export default class LocationModal {
	constructor({ $parent }) {
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
	}
}

// const overlay = this.$target.querySelector('.overlay');

// overlay.addEventListener('click', (e) => {
// });
