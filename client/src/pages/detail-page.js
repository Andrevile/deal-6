import './detail-page.css';
import ToolBar from '../components/detail-page/tool-bar/tool-bar.js';
import Section from '../components/detail-page/section/section';
import Footer from '../components/detail-page/footer/footer';
import ProductModal from '../components/base/product-modal/product-modal';
import { createDOMWithSelector } from '../util/createDOMWithSelector';
import { navigateTo } from '../router';
import { api } from '../api/api';

export default class DetailPage {
	state = {
		// TEST CASE
		user: '남영우', // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
		seller: '남영우',
		price: '₩35,000',
		title: '빈티지 롤러 스케이트!',
		content: `어린시절 추억의 향수를 불러 일으키는 롤러 스케이트입니다. 빈티지 특성상 사용감 있지만 전체적으로 깨끗한 상태입니다. 촬영용 소품이나, 거실에 장식용으로 추천해 드립니다. 단품 입고 되었습니다.<br>
			새 제품으로 보존된 제품으로 전용박스까지 보내드립니다.사이즈는 235 입니다.`,
		status: 2,
		location: '문래동',
		category: '기타 중고물품',
		imgPath: [
			'/imgs/shoes-1.jpg',
			'/imgs/shoes-1.jpg',
			'/imgs/shoes-1.jpg',
		],
		createdAt: '3분전',
		chatCount: 3,
		wishCount: 2,
		visitCount: 5,
	};

	constructor($parent) {
		this.haveHistoryState();
		console.log(history.state);
		this.$target = createDOMWithSelector('div', '.detail-page');
		$parent.appendChild(this.$target);

		this.toolBar = new ToolBar({
			$parent: this.$target,
			initialState: {
				user: this.state.user,
				seller: this.state.seller,
			},
			onClick: (e) => {
				if (e.target.className === 'back') {
					history.state ? navigateTo('/') : history.back(-1);
				} else if (e.target.className === 'option')
					this.productModal.open();
			},
		});
		this.section = new Section({
			$parent: this.$target,
			initialState: this.state,
		});
		this.footer = new Footer({
			$parent: this.$target,
			initialState: {
				price: this.state.price,
				user: this.state.user,
				seller: this.state.seller,
			},
		});

		this.productModal = new ProductModal({
			$parent: this.$target,
			onClick: (e) => {
				console.log(e.target.className);
				if (e.target.className === 'productModal__overlay') {
					this.productModal.close();
				} else if (e.target.className === 'productModal__update') {
					navigateTo('/writing', this.state);
				} else if (e.target.className === 'productModal__delete') {
					/* 
						api 요청으로 삭제
					*/
					navigateTo('/');
				}
			},
		});

		this.state.user.length === 0 && this.initiallizeData();
	}

	initiallizeData() {
		// api 안되면 new Promise()
		api.get('/blah').then((res) => {
			if (res.success) {
				// this.setState(res.data); 어떤식의 데이터가 오는지 확인!
			} else {
				alert(res.message);
			}
		});
	}

	setState() {
		this.toolBar.setState({
			user: this.state.user,
			seller: this.state.seller,
		});
		this.section.setState(this.state);
		this.footer.setState({
			price: this.state.price,
			user: this.state.user,
			seller: this.state.seller,
		});
	}

	haveHistoryState() {
		if (history.state) {
			this.state = history.state;
		}
	}
}
