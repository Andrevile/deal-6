import './tool-bar.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
import { ARROW_BACK_ICON, MORE_VERT_ICON } from '../../../constants/icon-path';

const isUserOwnProduct = (seller, user) => seller === user;

export default class ToolBar {
	constructor({ $parent, initialState, onClick }) {
		this.state = initialState;

		console.log(this.state);
		this.$target = createDOMWithSelector('nav', '.detail__nav');

		$parent.appendChild(this.$target);

		this.onClick = onClick;
		this.$target.addEventListener('click', (e) => {
			this.onClick(e);
		});

		this.render();
	}

	setState(nextState) {
		this.state = nextState;
		this.render();
	}

	render() {
		this.$target.innerHTML = `
			<img src=${ARROW_BACK_ICON} class='back' />
			${
				isUserOwnProduct(this.state.seller, this.state.user)
					? `<img src=${MORE_VERT_ICON} class='option' />`
					: ''
			}
		`;
	}
}
