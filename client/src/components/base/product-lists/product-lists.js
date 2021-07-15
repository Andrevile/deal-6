import './product-lists.css';
import { createDOMwithSelector } from '../../../util/createDOMwithSelector';
export default class Productlists {
	products = [1, 2, 3, 4, 5]; // TEST

	constructor({ $app }) {
		this.$target = createDOMwithSelector('section', '.productOutline');
		$app.appendChild(this.$target);

		this.render();
	}

	setState() {}

	render() {
		const result = this.products
			.map(() => {
				return `
				<article class='product'>
					<div class='temp'>
						<img>
					</div>
					<div class='product__info'>
						<span class='product__name'>파랑 선풍기</span>
						<span class='product__location'>역삼동 2시간 전</span>
						<span class='product__price'>24,500원</span>
					</div>
					
				</article>
			`;
			})
			.join('');

		this.$target.innerHTML = result;
	}
}
