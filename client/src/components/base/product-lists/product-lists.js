import './product-lists.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
export default class Productlists {
	state = [];

	constructor({ $parent, initialState }) {
		this.state = initialState;
		this.$target = createDOMWithSelector('section', '.productOutline');
		$parent.appendChild(this.$target);

		this.render();
	}

	setState(nextState) {
		this.state = nextState;
		this.render();
	}

	render() {
		/*
			Like 여부로 다른 태그 부여할것
		*/
		const result = this.state
			.map((product) => {
				return `
				<article class='product'>
					
					<img class='product__img' src=${product.imgPath} data-link='/detail'>
				
					<div class='product__info'>
						<span class='product__name' data-link='/detail'>${product.name}</span>
						<span class='product__location' data-link='/detail'>${product.location}</span>
						<span class='product__price' data-link='/detail'>${product.time}</span>
					</div>
					
					<img class="product__like" src="/icons/favorite_border_mini.svg" />
	
					<div class='product__chatOutline' >
						<img class='product__chat' src='/icons/chat_bubble_mini.svg'>
						<span>${product.chatCount}</span>
					</div>
					
				</article>
			`;
			})
			.join('');

		this.$target.innerHTML = result;
	}

	// updateLikeButton = (like) => {
	// 	if (like === 'T') {
	// 		<img class="product__like" src="/imgs/favorite_border_mini.svg" />;
	// 	} else {
	// 		<img
	// 			class="product__like"
	// 			src="/imgs/favorite_border_mini.svg"
	// 		></img>;
	// 	}
	// 	//svg 색상을 바꾼걸 하나 만들던지 해야할듯?
	// };
}
