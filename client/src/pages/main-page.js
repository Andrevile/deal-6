import Navbar from '../components/main-page/navbar/navbar.js';
import ProductLists from '../components/base/product-lists/product-lists.js';
import PostButton from '../components/main-page/write-post-button/write-post-button';

export default class Mainpage {
	state = {
		products: sampleData,
		locationName: '역삼동',
	};

	constructor($parent) {
		this.navbar = new Navbar({
			$parent,
			initialState: this.state.locationName,
		});
		this.productlists = new ProductLists({
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
];
