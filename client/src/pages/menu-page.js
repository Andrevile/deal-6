import Navbar from '../components/base/navigation-bar/navigation-bar';
import MainNavbar from '../components/menu-page/main-navigation-bar/main-navigation-bar';
import ProductLists from '../components/base/product-list/product-list.js';
import ChatLists from '../components/base/chat-list/chat-list';

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
		this.navbar = new Navbar({
			$parent,
			initialState: mode,
		});

		this.mainNavbar = new MainNavbar({
			$parent,
			initialState: this.state.navigatorIndex,
			onClick: (idx) => {
				this.bindMainNavbarEvent(idx);
			},
		});

		this.productLists = new ProductLists({
			$parent,
			initialState: this.state.products,
		});

		this.chatLists = new ChatLists({
			$parent,
			initialState: this.state.chats,
		});
		this.chatLists.close();
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
		content:
			'It is description,t is descriptiont is descriptiont is descriptiont is descriptiont is descriptiont is description',
		time: '2시간 전',
		count: 5,
	},
	{
		imgPath: '/imgs/photo.jpeg',
		name: '문지호',
		content: 'It is description',
		time: '2시간 전',
		count: 0,
	},
	{
		imgPath: '/imgs/photo.jpeg',
		name: '문지호',
		content: 'It is description',
		time: '2시간 전',
		count: 0,
	},
	{
		imgPath: '/imgs/photo.jpeg',
		name: '문지호',
		content: 'It is description',
		time: '2시간 전',
		count: 5,
	},
	{
		imgPath: '/imgs/photo.jpeg',
		name: '문지호',
		content: 'It is description',
		time: '2시간 전',
		count: 5,
	},
	{
		imgPath: '/imgs/photo.jpeg',
		name: '문지호',
		content: 'It is description',
		time: '2시간 전',
		count: 5,
	},
];
