import './tool-bar.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
import { ARROW_BACK_ICON, MORE_VERT_ICON } from '../../../constants/icon-path';

const isUserOwnProduct = (seller, user) => seller == user;

export default class ToolBar {
	constructor({ $parent, initialState }) {
		this.state = initialState;
		this.$target = createDOMWithSelector('nav', '.detail__nav');

		$parent.appendChild(this.$target);

		this.$target.innerHTML = `
			<img src=${ARROW_BACK_ICON} class='back' />
			${
				isUserOwnProduct(this.state.seller, this.state.user)
					? `<img src=${MORE_VERT_ICON} class='option' />`
					: ''
			}
		`;

		this.$target.addEventListener('click', (e) => {
			if (e.target.className === 'back') history.back(-1);
		});
	}

	setState() {}

	render() {}
}
