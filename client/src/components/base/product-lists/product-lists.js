import './product-lists.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
export default class Productlists {
	products = [
		{
			imgPath: '/imgs/photo.jpeg',
			name: '문지호',
			location: '인창동',
			time: '2시간 전',
			price: '10억',
			like: 'F',
			chatCount: 5,
		},
		{
			imgPath: '/imgs/photo.jpeg',
			name: '문지호',
			location: '인창동',
			time: '2시간 전',
			price: '10억',
			like: 'F',
			chatCount: 5,
		},
		{
			imgPath: '/imgs/photo.jpeg',
			name: '문지호',
			location: '인창동',
			time: '2시간 전',
			price: '10억',
			like: 'F',
			chatCount: 5,
		},
		{
			imgPath: '/imgs/photo.jpeg',
			name: '문지호',
			location: '인창동',
			time: '2시간 전',
			price: '10억',
			like: 'F',
			chatCount: 5,
		},
		{
			imgPath: '/imgs/photo.jpeg',
			name: '문지호',
			location: '인창동',
			time: '2시간 전',
			price: '10억',
			like: 'F',
			chatCount: 5,
		},
	]; // 초기값 빈배열 (현재는 테스트)

	constructor({ $app }) {
		this.$target = createDOMWithSelector('section', '.productOutline');
		$app.appendChild(this.$target);

		this.render();
	}

	setState(newProducts) {
		this.products = newProducts;
		this.render();
	}

	render() {
		const result = this.products
			.map((product) => {
				return `
				<article class='product'>
					
					<img class='product__img' src=${product.imgPath} data-route='/detail'>
				
					<div class='product__info' data-route='/detail'>
						<span class='product__name'>${product.name}</span>
						<span class='product__location'>${product.location}</span>
						<span class='product__price'>${product.time}</span>
					</div>
					
					<img class="product__like" src="/imgs/favorite_border_mini.svg" />
	
					<div class='product__chatOutline' >
						<img class='product__chat' src='/imgs/chat_bubble_mini.svg'>
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
