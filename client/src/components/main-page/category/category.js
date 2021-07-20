import './category.css';
import NavigationBar from '../../base/navigation-bar/navigation-bar';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
import BodyPart from './body/body';

const mode = '카테고리';

export default class Category {
	constructor({ $parent, CATEGORY_LIST, onClick }) {
		this.$target = createDOMWithSelector('div', '.categoryWrapper');
		$parent.appendChild(this.$target);

		this.onClick = onClick;
		this.navigationBar = new NavigationBar({
			$parent: this.$target,
			initialState: mode,
			isModal: true,
			onClick: (e, idx) => {
				this.onClick(e, idx);
			},
		});

		this.bodyPart = new BodyPart({
			$parent: this.$target,
			initialState: CATEGORY_LIST,
			onClick: (e, idx) => {
				this.onClick(e, idx);
			},
		});

		// this.onClick = onClick;
		// this.$confirmButton = document.querySelector('.alert__confirm');

		// this.$target.addEventListener('click', (e) => {
		// 	this.onClick(e);
		// });
	}

	open() {
		this.$target.classList.add('active');
	}

	close() {
		this.$target.classList.remove('active');
	}
}
