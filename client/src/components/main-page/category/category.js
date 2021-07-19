import './category.css';
import NavigationBar from '../../base/navigation-bar/navigation-bar';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
import BodyPart from './body/body';

const mode = '카테고리';

export default class Category {
	constructor({ $parent, CATEGORY_LIST }) {
		// $parent.getBoundingClientRect().height = 568px;
		this.$target = createDOMWithSelector('div', '.categoryWrapper');
		$parent.appendChild(this.$target);

		this.navigationBar = new NavigationBar({
			$parent: this.$target,
			initialState: mode,
		});

		this.bodyPart = new BodyPart({
			$parent: this.$target,
			initialState: CATEGORY_LIST,
		});

		// this.onClick = onClick;
		// this.$confirmButton = document.querySelector('.alert__confirm');

		// this.$target.addEventListener('click', (e) => {
		// 	this.onClick(e);
		// });
	}

	open() {
		// this.$target.style.visibility = 'visible';
		this.$target.classList.add('active');
	}

	close() {
		this.$target.style.visibility = 'hidden';
	}
}
