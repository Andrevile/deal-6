import './product-lists.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
export default class ProductLists {
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
		const result = this.state
			.map((product) => {
				return `
				<article class='product'>
					
					<img class='product__img' src=${product.imgPath} data-link='/signup'>
				
					<div class='product__info'>
						<span class='product__name' data-link='/detail'>${product.name}</span>
						<span class='product__location' data-link='/detail'>${product.location}</span>
						<span class='product__price' data-link='/location'>${product.time}</span>
					</div>
					
					${this.updateLikeButton(product.like)}

					<div class='rightBottom' >
						${this.viewChatCount(product.chatCount)}
						${this.viewLikeCount(product.likeCount)}
					</div>
						
				</article>
			`;
			})
			.join('');

		this.$target.innerHTML = result;
	}

	updateLikeButton = (like) => {
		return like === 'T'
			? `<img class="product__like" src="/icons/favorite.svg" />`
			: `<img
					class="product__like"
					src="/icons/favorite_border_mini.svg"
				/>`;
	};

	viewChatCount = (count) => {
		return count > 0
			? `<img class='rightBottom__chat' src='/icons/chat_bubble_mini.svg' />
						<span>${count}</span>`
			: ``;
	};

	viewLikeCount = (count) => {
		return count > 0
			? `<img class='rightBottom__like' src='/icons/favorite_border_mini.svg' />
						<span>${count}</span>`
			: ``;
	};
}
