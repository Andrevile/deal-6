import './detail-page.css';
import ToolBar from '../components/detail-page/tool-bar/tool-bar.js';
import Section from '../components/detail-page/section/section';
import { createDOMWithSelector } from '../util/createDOMWithSelector';
import Footer from '../components/detail-page/footer/footer';

export default class DetailPage {
	state = {
		// TEST CASE
		user: '0woodev', // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
		seller: '0woodev',
		price: 35000,
		title: '빈티지 롤러 스케이트!',
		description: `어린시절 추억의 향수를 불러 일으키는 롤러 스케이트입니다. 빈티지 특성상 사용감 있지만 전체적으로 깨끗한 상태입니다. 촬영용 소품이나, 거실에 장식용으로 추천해 드립니다. 단품 입고 되었습니다.<br>
			새 제품으로 보존된 제품으로 전용박스까지 보내드립니다.사이즈는 235 입니다.`,
		status: 0,
		location: '문래동',
		category: '기타 중고물품',
		imgs: ['/imgs/shoes-1.jpg', '/imgs/shoes-1.jpg', '/imgs/shoes-1.jpg'],
		createdAt: '3분전',
		chatCount: 3,
		wishCount: 2,
		visitCount: 5,
	};

	constructor($app) {
		this.$target = createDOMWithSelector('div', 'app');

		this.toolBar = new ToolBar({
			$parent: this.$target,
			initialState: this.state,
		});
		this.section = new Section({
			$parent: this.$target,
			initialState: this.state,
		});
		this.footer = new Footer({
			$parent: this.$target,
			initialState: this.state,
		});

		$app.appendChild(this.$target);
	}

	setState() {}

	render() {}
}
