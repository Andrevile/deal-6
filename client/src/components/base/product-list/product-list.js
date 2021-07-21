import './product-list.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
export default class ProductLists {
	state = [];

	constructor({ $parent, initialState, refreshState }) {
		this.state = initialState;
		this.$target = createDOMWithSelector('section', '.productOutline');
		$parent.appendChild(this.$target);

		this.refreshState = refreshState;
		this.render();
	}

	setState(nextState) {
		this.state = nextState;
		this.render();
	}

	render() {
		this.$target.innerHTML = this.createView();
		this.observeTag();
	}

	createView() {
		/*
			pk를 이용해 data-link 에 삽입
		*/
		return (
			this.state
				.map((product) => {
					return `
			<article class='product'>
				
				<img class='product__imgs' src=${product.imgPath} data-link='/detail'>
			
				<div class='product__info'>
					<span class='product__name' data-link='/detail'>${product.name}</span>
					<div>
						<span class='product__location' data-link='/detail'>${product.location} ∙</span>
						<span class='product__time' data-link='/detail'>${product.time}</span>
					</div>
					<span class='product__price' data-link='/detail'>${product.price}</span>
				</div>
				
				${this.createLikeButton(product.like)}

				<div class='rightBottom' >
					${this.createChatCount(product.chatCount)}
					${this.createLikeCount(product.likeCount)}
				</div>
					
			</article>
		`;
				})
				.join('') + `<div id="end" class='product'></div>`
		);

		/*
			고려할 부분!
			1. user와 그 상품 주인인 경우 : like 대신 ':' 아이콘
			2. product에 user id field 넣어서 userid와 비교한다.
			3. like 모델이 따로 필요할듯? user와 product를 엮은
		*/
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

	observeTag() {
		// lazy loading , infinite Scroll 담당
		const observerCallback = (entries, observer) => {
			entries.forEach(async (entry) => {
				if (entry.isIntersecting) {
					if (entry.target.id === 'end') {
						observer.unobserve(entry.target);

						// endTag.classList.add('spinner');
						// endTag.innerHTML = `<img class='rightBottom__like' src='/icons/loading-loader-svgrepo-com.svg' />`;

						// const data = await api.randomCats();
						// if (data.success) {

						// if (data.data.length > 0) {
						// 	this.refreshState([...this.state, ...data.data]);
						//  endTag.innerHTML = ''
						// endTag.classList.remove('spinner');
						// } else {
						// endTag.classList.remove('spinner');
						endTag.innerText = `❗No More Stuff❗`;

						// }

						// } else {
						// 	alert(data.message);
						// }
					} else {
						observer.unobserve(entry.target);
					}
				}
			});
		};
		const endTag = this.$target.querySelector('#end');
		const items = this.$target.querySelectorAll('.product');
		const observer = new IntersectionObserver(observerCallback);
		items.forEach((item) => observer.observe(item));
	}

	open() {
		this.$target.style.display = 'block';
	}

	close() {
		this.$target.style.display = 'none';
	}
}
