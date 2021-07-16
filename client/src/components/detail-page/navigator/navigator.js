import './navigator.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
import { ARROW_BACK_ICON, MORE_VERT_ICON } from '../../../constants/icon-path';

const isUserOwnProduct = (seller, user) => seller == user;

export default class DetailNavigator {
	$target = null;

	constructor({ $parent, state }) {
		this.state = state;
		this.$target = createDOMWithSelector('nav', '.detail__nav');

		$parent.appendChild(this.$target);

		this.$target.innerHTML = `
			<img src=${ARROW_BACK_ICON} id='back' />
			${
				isUserOwnProduct(this.state.seller, '0woodev')
					? `<img src=${MORE_VERT_ICON} id='option' />`
					: ''
			}
		`;
	}

	setState() {}

	render() {}
}
