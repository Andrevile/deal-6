import Navbar from '../components/base/navigation-bar/navigation-bar';
import MainNavbar from '../components/menu-page/main-navigation-bar/main-navigation-bar';
import ProductLists from '../components/base/product-list/product-list.js';
import ChatLists from '../components/base/chat-list/chat-list';
import { createDOMWithSelector } from '../util/createDOMWithSelector';
import './menu-page.css';
// import { api } from '../api/api';
// import { navigateTo } from '../router';

const mode = '메뉴';
export default class MenuPage {
	state = {
		products: sampleData,
		navigatorIndex: '1',
		chats: sampleChatData,
	};
	/*
        state.navigatorIndex
        1 : 판매목록
        2 : 채팅
        3 : 관심목록
    */
	constructor($parent) {
		// console.log(location.pathname);
		this.$parent = createDOMWithSelector('div', '.menuWrapper');
		$parent.appendChild(this.$parent);

		this.state.products = sampleData.filter(
			(value) => value.user === value.seller
		);

		this.navbar = new Navbar({
			$parent: this.$parent,
			initialState: mode,
			onClick: (e) => {
				if (e.target.className === 'nav__prev') {
					this.$parent.classList.remove('active');
				}
			},
		});

		this.mainNavbar = new MainNavbar({
			$parent: this.$parent,
			initialState: this.state.navigatorIndex,
			onClick: (idx) => {
				this.bindMainNavbarEvent(idx);
			},
		});

		this.productLists = new ProductLists({
			$parent: this.$parent,
			initialState: this.state.products,
		});

		this.chatLists = new ChatLists({
			$parent: this.$parent,
			initialState: this.state.chats,
		});
		this.chatLists.close();

		setTimeout(() => {
			this.$parent.classList.add('active');
		}, 0);
		// this.initiallizeData();
	}

	// initiallizeData() {
	/*
			api 호출 (자신의 판매목록)
		*/

	// 	api.get('/')
	// 		.then((res) => {
	// 			this.state.products = res.data.products;
	// 			this.setState();
	// 		})
	// 		.catch(() => {
	// 			navigateTo('/notlogin');
	// 		});
	// }

	setState() {
		//리렌더링파트
		this.mainNavbar.setState(this.state.navigatorIndex);
		if (this.state.navigatorIndex === '2') {
			this.productLists.close();
			this.chatLists.setState(this.state.chats);
			this.chatLists.open();
		} else {
			this.chatLists.close();
			this.productLists.setState(this.state.products);
			this.productLists.open();
		}
	}

	// bindMainNavbarEvent : 현재 nav idx와 다르다면 처리
	bindMainNavbarEvent(idx) {
		if (idx === '1' && this.state.navigatorIndex !== idx) {
			this.state.navigatorIndex = '1';
			/*
				api 호출 (자신의 판매목록)
			*/
			// api.get('/')
			// 	.then((res) => {
			this.state.products = sampleData.filter(
				(value) => value.user === value.seller
			);

			this.setState();
			// })
			// .catch(() => {
			// 	navigateTo('/notlogin');
			// });
		} else if (idx === '2' && this.state.navigatorIndex !== idx) {
			this.state.navigatorIndex = '2';

			this.setState();
		} else if (idx === '3' && this.state.navigatorIndex !== idx) {
			this.state.navigatorIndex = '3';
			/*
				api 호출 (자신의 관심목록)
			*/
			// api.get('/')
			// 	.then((res) => {

			let result = sampleData.filter(
				(value) => value.user !== value.seller
			);
			this.state.products = result;
			this.setState();
		}
	}
}

const sampleData = [
	{
		imgPath:
			'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/photo.jpeg',
		name: '문지호',
		location: '인창동',
		time: '2시간 전',
		price: '10억',
		like: 'T',
		chatCount: 5,
		likeCount: 3,
		user: '문지호',
		seller: '문지호',
	},
	{
		imgPath:
			'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/photo.jpeg',
		name: '문지호',
		location: '인창동',
		time: '2시간 전',
		price: '10억',
		like: 'F',
		chatCount: 5,
		likeCount: 0,
		user: '문지호',
		seller: '문지호',
	},
	{
		imgPath:
			'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/photo.jpeg',
		name: '문지호',
		location: '인창동',
		time: '2시간 전',
		price: '10억',
		like: 'F',
		chatCount: 5,
		likeCount: 3,
		user: '문',
		seller: '문지호',
	},
	{
		imgPath:
			'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/photo.jpeg',
		name: '문지호',
		location: '인창동',
		time: '2시간 전',
		price: '10억',
		like: 'F',
		chatCount: 5,
		likeCount: 3,
		user: '문호',
		seller: '문지호',
	},
	{
		imgPath:
			'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/photo.jpeg',
		name: '문지호',
		location: '인창동',
		time: '2시간 전',
		price: '10억',
		like: 'F',
		chatCount: 5,
		likeCount: 3,
		user: '문지호',
		seller: '문지호',
	},
];

const sampleChatData = [
	{
		imgPath:
			'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
		name: '죄송함돠..',
		content: '으악...',
		time: '2시간 전',
		count: 5,
	},
	{
		imgPath:
			'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
		name: '죄송함돠..',
		content: '시간이 부족하여',
		time: '1시간 전',
		count: 0,
	},
	{
		imgPath:
			'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
		name: '죄송함돠..',
		content: '구현 못했습니다',
		time: '5시간 전',
		count: 7,
	},
	{
		imgPath:
			'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
		name: '죄송함돠..',
		content: '하하하...',
		time: '1시간 전',
		count: 3,
	},
	{
		imgPath:
			'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
		name: '죄송함돠..',
		content: 'I am Sorry',
		time: '2시간 전',
		count: 5,
	},
	{
		imgPath:
			'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
		name: '죄송함돠..',
		content: 'ㅠ__ㅠ',
		time: '10시간 전',
		count: 0,
	},
];
