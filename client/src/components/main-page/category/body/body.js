import './body.css';
import { createDOMWithSelector } from '../../../../util/createDOMWithSelector';

export default class Body {
	constructor({ $parent, initialState }) {
		this.state = initialState;
		console.log(this.CATEGORY_LIST);
		this.$target = createDOMWithSelector('section', '.categoryList');
		$parent.appendChild(this.$target);
		this.$Wrapper = createDOMWithSelector('div', '.ctgWrapper');
		this.$target.appendChild(this.$Wrapper);
		this.$target.innerHTML = this.renderCategories();

		// this.onClick = onClick;
		// this.$confirmButton = document.querySelector('.alert__confirm');

		// this.$target.addEventListener('click', (e) => {
		// 	this.onClick(e);
		// });
	}

	open() {
		this.$target.style.display = 'block';
	}

	close() {
		this.$target.style.display = 'none';
	}

	renderCategories() {
		return this.state
			.map((category) => {
				return `
                <article class='categoryList__container'>
                    <div class='categoryList__img'>
                    </div>
                    <span>${category}</span>
                </article>
           `;
			})
			.join('');
	}
}
