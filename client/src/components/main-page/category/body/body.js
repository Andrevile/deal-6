import './body.css';
import { createDOMWithSelector } from '../../../../util/createDOMWithSelector';

export default class Body {
	constructor({ $parent, initialState, onClick }) {
		this.state = initialState;

		this.$target = createDOMWithSelector('section', '.categoryList');
		$parent.appendChild(this.$target);
		this.$Wrapper = createDOMWithSelector('div', '.ctgWrapper');
		this.$target.appendChild(this.$Wrapper);
		this.$target.innerHTML = this.renderCategories();

		this.onClick = onClick;
		// this.$confirmButton = document.querySelector('.alert__confirm');

		this.$target.addEventListener('click', (e) => {
			this.onClick(e, e.target.dataset.idx);
		});
	}

	open() {
		this.$target.style.display = 'block';
	}

	close() {
		this.$target.style.display = 'none';
	}

	renderCategories() {
		return this.state
			.map((category, idx) => {
				return `
                <article class='categoryList__container'>
                    <div class='categoryList__img' data-idx=${idx}>
                    </div>
                    <span>${category}</span>
                </article>
           `;
			})
			.join('');
	}
}
