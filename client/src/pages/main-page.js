import Navbar from '../components/main-page/navigation-bar/navigation-bar.js';
import ProductLists from '../components/base/product-list/product-list.js';
import PostButton from '../components/main-page/write-post-button/write-post-button';
import Category from '../components/main-page/category/category.js';
import { CATEGORY_LIST } from '../constants/category-list';
import LocationMiniModal from '../components/main-page/location-mini-modal/location-mini-modal';
import { api } from '../api/api';
import { navigateTo } from '../router.js';
export default class MainPage {
	state = {
		products: sampleData,
		locationName: ['인창동', '문래동'], // default로 하나는 갖고 있어야 한다!
		index: 0,
		category: '',
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

		// this.initiallizeData();
	}

	// 위에 주석 있음..!
	initiallizeData() {
		/*
			api 호출 (자신 동네들, 프로덕트) 한번에 받을수 있다함!
		*/

		api.get('/')
			.then((res) => {
				this.state.products = res.data;
				if (res.data.SubLocation) {
					this.state.locationName = [res.data.MainLocation];
				} else {
					this.state.locationName = [
						res.data.MainLocation,
						res.data.SubLocation,
					];
				}

				this.setState();
			})
			.catch(() => {
				navigateTo('/notlogin');
			});
	}

	setState() {
		//리렌더링파트
		this.navbar.setState(this.state.locationName[this.state.index]);
		this.ProductLists.setState(this.state.products);
	}

	bindNavBarClickEvent(e) {
		// console.log(e.target.className);
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
			this.category = CATEGORY_LIST[idx];

			/*
				api 호출 (자신 동네들, 프로덕트) 동네기준 프로덕트 
			*/
			this.state.products = sampleData.filter(
				(value) =>
					value.category === CATEGORY_LIST[idx] &&
					value.location === this.state.locationName[this.state.index]
			);
			this.setState();

			// api.get(`/?category=${this.category}&product=${this.ProductLists}`)
			// 	.then((res) => {
			// 		this.state.products = res.data;
			// 		this.setState();
			// 	})
			// 	.catch((e) => {
			// 		alert(e.message); // 이건 괜찮
			// 	});
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
				//this.state.locationName[this.state.index] && 카테고리
				// api.get('/')
				// 	.then((res) => {
				this.state.index = idx;

				this.state.products = sampleData.filter((value) => {
					if (this.state.category) {
						return (
							value.location ===
								this.state.locationName[Number(idx)] &&
							value.category === this.state.category
						);
					} else {
						return (
							value.location ===
							this.state.locationName[Number(idx)]
						);
					}
				});

				this.$parent.scrollTo({
					top: 0,
					behavior: 'smooth',
				});
				this.setState();
			}
			// .catch((e) => {
			// 	alert(e.message); // 이건 괜찮
			// });
		}
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
		pk: 1,
	},
	{
		user: '피카소', // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
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
		location: '문래동',
		category: '디지털기기',
		imgPath:
			'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
		time: '3분전',
		chatCount: 3,
		likeCount: 2,
		like: 'F',
		pk: 1,
	},
	{
		user: '', // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
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
		category: '디지털기기',
		imgPath:
			'https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g',
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
		location: '문래동',
		category: '디지털기기',
		imgPath:
			'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
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
		like: 'F',
		pk: 0,
	},
];
