import './product-list.css';
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
						<div>
							<span class='product__location' data-link='/detail'>${product.location} ∙</span>
							<span class='product__time' data-link='/location'>${product.time}</span>
						</div>
						<span class='product__price' data-link='/location'>${product.price}</span>
					</div>
					
					${this.createLikeButton(product.like)}

					<div class='rightBottom' >
						${this.createChatCount(product.chatCount)}
						${this.createLikeCount(product.likeCount)}
					</div>
						
				</article>
			`;
			})
			.join('');

		/*
				고려할 부분!
				1. user와 그 상품 주인인 경우 : like 대신 ':' 아이콘
				2. product에 user id field 넣어서 userid와 비교한다.
				3. like 모델이 따로 필요할듯? user와 product를 엮은
			*/

		this.$target.innerHTML = result;
	}

	createLikeButton(like) {
		return like === 'T'
			? `<img class="product__like" src="/icons/favorite.svg" />`
			: `<img
					class="product__like"
					src="/icons/favorite_border_mini.svg"
				/>`;
	}

	createChatCount(count) {
		return count > 0
			? `<img class='rightBottom__chat' src='/icons/chat_bubble_mini.svg' />
						<span>${count}</span>`
			: ``;
	}

	createLikeCount(count) {
		return count > 0
			? `<img class='rightBottom__like' src='/icons/favorite_border_mini.svg' />
						<span>${count}</span>`
			: ``;
	}

	open() {
		this.$target.style.display = 'block';
	}

	close() {
		this.$target.style.display = 'none';
	}
}
