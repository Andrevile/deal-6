import './large-button.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';

export default class LargeButton {
	state = '';

	constructor({ $parent, initialState }) {
		this.state = initialState;
		if (this.state === '회원가입')
			this.$target = createDOMWithSelector(
				'button',
				'.largeButton',
				'.disable'
			);
		else this.$target = createDOMWithSelector('button', '.largeButton');

		this.$target.innerText = this.state;
		$parent.appendChild(this.$target);
	}
}
