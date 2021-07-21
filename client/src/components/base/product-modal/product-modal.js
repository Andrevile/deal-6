import './product-modal.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';

export default class ProductModal {
	constructor({ $parent, onClick }) {
		this.$target = createDOMWithSelector('div', '.productModal');
		$parent.appendChild(this.$target);

		this.$target.innerHTML = `
			<div class='productModal__wrapper'>
                <div class="productModal__overlay"></div>
                <div class="productModal__content">
                    <div class="productModal__update">수정하기</div>
                    <div class="productModal__delete">삭제하기</div>
                </div>
			</div>
              `;

		this.$target.addEventListener('click', (e) => {
			onClick(e);
		});
	}

	open() {
		this.$target.style.display = 'block';
	}

	close() {
		this.$target.style.display = 'none';
	}
}
