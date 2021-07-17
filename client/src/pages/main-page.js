import Navbar from '../components/main-page/navigation-bar/navigation-bar.js';
import ProductLists from '../components/base/product-list/product-list.js';
import PostButton from '../components/main-page/write-post-button/write-post-button';

export default class MainPage {
	state = {
		products: sampleData,
		locationName: '역삼동',
	};

	constructor($parent) {
		this.navbar = new Navbar({
			$parent,
			initialState: this.state.locationName,
		});
		this.ProductLists = new ProductLists({
			$parent,
			initialState: this.state.products,
		});
		this.postButton = new PostButton({ $parent });
	}

	setState() {
		//리렌더링파트
	}

	render() {
		//렌더링파트
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