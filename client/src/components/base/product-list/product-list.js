import './product-list.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
// import ProductModal from '../product-modal/product-modal';

export default class ProductLists {
	state = [];

	constructor({ $parent, initialState, refreshState }) {
		this.state = initialState;
		this.$target = createDOMWithSelector('section', '.productOutline');
		$parent.appendChild(this.$target);
		this.$name = $parent.className;
		this.refreshState = refreshState;

		this.render();
		/*this.productModal = new ProductModal({
			$parent: this.$target,
		}); 보류; */
	}

	setState(nextState) {
		this.state = nextState;
		this.render();
	}

	render() {
		this.$target.innerHTML = this.createView();
		if (this.$name !== 'menuWrapper') {
			this.observeTag();
		}
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
				
				<img class='product__imgs' src=${product.imgPath} data-link=${
						product.pk ? '/detail/1' : '/detail'
					}>
			
				<div class='product__info'>
					<span class='product__name' data-link='/detail/${product.pk}'>${
						product.name
					}</span>
					<div>
						<span class='product__location' data-link='/detail/${product.pk}'>${
						product.location
					} ∙</span>
						<span class='product__time' data-link='/detail/${product.pk}'>${
						product.time
					}</span>
					</div>
					<span class='product__price' data-link='/detail/${product.pk}'>${
						product.price
					}</span>
				</div>
				
				${
					this.isUserOwnProduct(product.seller, product.user)
						? this.createOptionButton()
						: this.createLikeButton(product.like)
				}
				
				

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
	isUserOwnProduct(seller, user) {
		return seller === user;
	}

	createOptionButton() {
		return `<img class="product__option" src="https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/more_vert_grey.svg" />`;
	}

	createLikeButton(like) {
		return like === 'T'
			? `<img class="product__like" src="https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/favorite.svg" />`
			: `<img
					class="product__like"
					src="https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/favorite_border_mini.svg"
				/>`;
	}

	createChatCount(count) {
		return count > 0
			? `<img class='rightBottom__chat' src='https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/chat_bubble_mini.svg' />
						<span>${count}</span>`
			: ``;
	}

	createLikeCount(count) {
		return count > 0
			? `<img class='rightBottom__like' src='https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/favorite_border_mini.svg' />
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

						endTag.classList.add('spinner');
						endTag.innerHTML = `<img class='rightBottom__like' src='https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/loading-loader-svgrepo-com.svg' />`;

						// const data = await api.randomCats();
						// if (data.success) {

						// if (data.data.length > 0) {
						// this.refreshState(this.state);
						// this.refreshState([...this.state, ...sampleData]);
						this.state = [...this.state, ...sampleData];

						// } else {
						// endTag.classList.remove('spinner');
						// endTag.innerText = `❗No More Stuff❗`;

						setTimeout(() => {
							endTag.innerHTML = '';
							endTag.classList.remove('spinner');
							this.setState(this.state);
						}, 2000);

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

const sampleData = [
	{
		user: '', // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
		seller: '피카소',
		price: '₩35,000,000',
		name: '피카소의 명화',
		location: '문래동',
		category: '기타 중고물품',
		imgPath: 'https://picsum.photos/200',
		time: '3분전',
		chatCount: 3,
		likeCount: 2,
		like: 'T',
		pk: 0,
	},
	{
		user: '피카소', // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
		seller: '피카소',
		price: '₩35,000,000',
		name: '피카소의 명화',
		location: '인창동',
		category: '디지털기기',
		imgPath: 'https://picsum.photos/200/300',
		time: '3분전',
		chatCount: 3,
		likeCount: 2,
		like: 'T',
		pk: 0,
	},
	{
		user: '', // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
		seller: '피카소',
		price: '₩35,000,000',
		name: '피카소의 명화',
		location: '인창동',
		category: '기타 중고물품',
		imgPath: 'https://picsum.photos/id/1/200/300',
		time: '3분전',
		chatCount: 3,
		likeCount: 2,
		like: 'T',
		pk: 0,
	},
	{
		user: '', // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
		seller: '피카소',
		price: '₩35,000,000',
		name: '피카소의 명화',
		location: '인창동',
		category: '기타 중고물품',
		imgPath:
			'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
		time: '3분전',
		chatCount: 3,
		likeCount: 2,
		like: 'F',
		pk: 0,
	},
	{
		user: '피카소', // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
		seller: '피카소',
		price: '₩35,000,000',
		name: '피카소의 명화',
		location: '인창동',
		category: '기타 중고물품',
		imgPath:
			'https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w',
		time: '3분전',
		chatCount: 3,
		likeCount: 2,
		like: 'T',
		pk: 0,
	},
	{
		user: '', // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
		seller: '피카소',
		price: '₩35,000,000',
		name: '피카소의 명화',
		location: '인창동',
		category: '기타 중고물품',
		imgPath:
			'https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g',
		time: '3분전',
		chatCount: 3,
		likeCount: 2,
		like: 'T',
		pk: 0,
	},
	{
		user: '피카소', // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
		seller: '피카소',
		price: '₩35,000,000',
		name: '피카소의 명화',
		location: '인창동',
		category: '기타 중고물품',
		imgPath:
			'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
		time: '3분전',
		chatCount: 3,
		likeCount: 2,
		like: 'F',
		pk: 0,
	},
	{
		user: '', // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
		seller: '피카소',
		price: '₩35,000,000',
		name: '피카소의 명화',
		location: '인창동',
		category: '기타 중고물품',
		imgPath:
			'https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs',
		time: '3분전',
		chatCount: 3,
		likeCount: 2,
		like: 'T',
		pk: 0,
	},
	{
		user: '피카소', // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
		seller: '피카소',
		price: '₩35,000,000',
		name: '피카소의 명화',
		location: '인창동',
		category: '기타 중고물품',
		imgPath:
			'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
		time: '3분전',
		chatCount: 3,
		likeCount: 2,
		like: 'T',
		pk: 0,
	},
];
