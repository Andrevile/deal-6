import Navbar from '../components/main-page/navigation-bar/navigation-bar.js';
import ProductLists from '../components/base/product-list/product-list.js';
import PostButton from '../components/main-page/write-post-button/write-post-button';
import Category from '../components/main-page/category/category.js';
import { CATEGORY_LIST } from '../constants/category-list';
import LocationMiniModal from '../components/main-page/location-mini-modal/location-mini-modal';
export default class MainPage {
	state = {
		products: sampleData,
		locationName: ['역삼동', '인창동'],
		index: 0,
	};

	constructor($parent) {
		this.$parent = $parent;
		this.navbar = new Navbar({
			$parent,
			initialState: this.state.locationName[this.state.index],
			onClick: (e) => {
				this.bindNavBarClickEvent(e);
			},
		});
		this.ProductLists = new ProductLists({
			$parent,
			initialState: this.state.products,
			refreshState: (nextState) => {
				this.state.products = nextState;
				this.setState();
			},
		});
		this.postButton = new PostButton({ $parent });

		this.category = new Category({
			$parent,
			CATEGORY_LIST,
			onClick: (e, idx) => {
				this.bindCategoryClickEvent(e, idx);
			},
		});

		this.locationMiniModal = new LocationMiniModal({
			$parent,
			initialState: this.state.locationName,
			onClick: (e, idx) => {
				this.bindLocationModalClickEvent(e, idx);
			},
		});
	}

	setState() {
		//리렌더링파트
		this.navbar.setState(this.state.locationName[this.state.index]);
		this.ProductLists.setState(this.state.products);
	}

	render() {
		//렌더링파트
	}

	bindNavBarClickEvent(e) {
		if (
			e.target.className === 'nav__categoryImg' // 카테고리 클릭 시 발생
		) {
			this.category.open();

			setTimeout(() => {
				this.ProductLists.close();
			}, 500);
			this.$parent.scrollTop = 0;
		} else if (
			e.target.className === 'nav__locationIcon' ||
			e.target.className === 'nav__locationName'
		) {
			this.locationMiniModal.open();
		}
	}
	bindCategoryClickEvent(e, idx) {
		if (e.target.className === 'nav__prev') {
			this.category.close();
			this.ProductLists.open();
		} else if (e.target.className === 'categoryList__img') {
			this.category.close();
			this.ProductLists.open();
			console.log(CATEGORY_LIST[idx]); // api 인자로 물건들 호출
		}
		/*
			CATEGORY_LIST[idx];
			기준으로 api 호출 후
			product 뿌리기 (setState)
		*/
	}

	bindLocationModalClickEvent(e, idx) {
		if (
			e.target.className === 'miniModal__overlay'
			// 외부 클릭 시 발생
		) {
			this.locationMiniModal.close();
		} else if (e.target.className === 'miniModal__location') {
			// 동네 클릭 시 발생
			this.locationMiniModal.close();
			if (this.state.index !== idx) {
				this.state.index = idx;
				//api 요청 후 product state도 변경 (비동기제어)
				this.$parent.scrollTo({
					top: 0,
					behavior: 'smooth',
				});
				this.setState();
			}
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
