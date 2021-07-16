import './detail-page.css';
import Navigator from '../components/detail-page/navigator/navigator.js';
import Section from '../components/detail-page/section/section';
// import { createDOMWithSelector } from '../util/createDOMWithSelector';
// import Footer from '../components/detail-page/footer/';

export default class DetailPage {
	state = {
		// TEST CASE
		seller: '0woodev',
		price: 35000,
		title: '신발 팝니다!',
		description:
			'많이 안신었던 신발 팝니다! 사이즈는 265이구요. 직거래 선호합니다!',
		status: '판매 중',
		town: '문래동',
		category: '의류/잡화',
		imgs: ['/imgs/shoes-1.jpg', '/imgs/shoes-1.jpg', '/imgs/shoes-1.jpg'],
	};

	constructor($app) {
		this.navigator = new Navigator({ $parent: $app, state: this.state });
		this.section = new Section({ $parent: $app, state: this.state });
		// this.footer = new Footer({ $app }, this.state);
	}

	setState() {}

	render() {}
}
