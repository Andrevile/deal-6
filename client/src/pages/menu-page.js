import Navbar from '../components/base/navigation-bar/navigation-bar';
import MainNavbar from '../components/menu-page/main-navigation-bar/main-navigation-bar';
import ProductLists from '../components/base/product-list/product-list.js';
import ChatLists from '../components/base/chat-list/chat-list';
import { createDOMWithSelector } from '../util/createDOMWithSelector';
import './menu-page.css';

const mode = '메뉴';
export default class MenuPage {
	state = {
		products: sampleData,
		locationName: '역삼동',
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
		this.$parent = createDOMWithSelector('div', '.menuWrapper');
		$parent.appendChild(this.$parent);

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
	}

	setState() {
		//리렌더링파트
		this.mainNavbar.setState(this.state.navigatorIndex);
		if (this.state.navigatorIndex === '2') {
			this.productLists.close();
			this.chatLists.open();
			this.chatLists.setState(this.state.chats); // 수정 할 부분(api로 newData 필요)
		} else {
			this.chatLists.close();
			this.productLists.open();
			this.productLists.setState(this.state.products); // 수정 할 부분(api로 newData 필요) 분기처리 후에!
		}
	}

	// bindMainNavbarEvent : 현재 nav idx와 다르다면 처리
	bindMainNavbarEvent(idx) {
		if (idx === '1' && this.state.navigatorIndex !== idx) {
			this.state.navigatorIndex = '1';
			this.setState();
		} else if (idx === '2' && this.state.navigatorIndex !== idx) {
			this.state.navigatorIndex = '2';
			this.setState();
		} else if (idx === '3' && this.state.navigatorIndex !== idx) {
			this.state.navigatorIndex = '3';
			this.setState();
		}
	}
}

const sampleData = [
	{
		imgPath: '/imgs/photo.jpeg',
		name: '문지호',
		location: '인창동',
		time: '2시간 전',
		price: '10억',
		like: 'T',
		chatCount: 5,
		likeCount: 3,
	},
	{
		imgPath: '/imgs/photo.jpeg',
		name: '문지호',
		location: '인창동',
		time: '2시간 전',
		price: '10억',
		like: 'F',
		chatCount: 5,
		likeCount: 0,
	},
	{
		imgPath: '/imgs/photo.jpeg',
		name: '문지호',
		location: '인창동',
		time: '2시간 전',
		price: '10억',
		like: 'F',
		chatCount: 5,
		likeCount: 3,
	},
	{
		imgPath: '/imgs/photo.jpeg',
		name: '문지호',
		location: '인창동',
		time: '2시간 전',
		price: '10억',
		like: 'F',
		chatCount: 5,
		likeCount: 3,
	},
	{
		imgPath: '/imgs/photo.jpeg',
		name: '문지호',
		location: '인창동',
		time: '2시간 전',
		price: '10억',
		like: 'F',
		chatCount: 5,
		likeCount: 3,
	},
];

const sampleChatData = [
	{
		imgPath: '/imgs/photo.jpeg',
		name: '문지호',
		description:
			'It is description,t is descriptiont is descriptiont is descriptiont is descriptiont is descriptiont is description',
		time: '2시간 전',
		count: 5,
	},
	{
		imgPath: '/imgs/photo.jpeg',
		name: '문지호',
		description: 'It is description',
		time: '2시간 전',
		count: 0,
	},
	{
		imgPath: '/imgs/photo.jpeg',
		name: '문지호',
		description: 'It is description',
		time: '2시간 전',
		count: 0,
	},
	{
		imgPath: '/imgs/photo.jpeg',
		name: '문지호',
		description: 'It is description',
		time: '2시간 전',
		count: 5,
	},
	{
		imgPath: '/imgs/photo.jpeg',
		name: '문지호',
		description: 'It is description',
		time: '2시간 전',
		count: 5,
	},
	{
		imgPath: '/imgs/photo.jpeg',
		name: '문지호',
		description: 'It is description',
		time: '2시간 전',
		count: 5,
	},
];
