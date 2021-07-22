import './large-button.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';

export default class LargeButton {
	state = '';

	constructor({ $parent, initialState, onClick }) {
		this.state = initialState;
		if (this.state === '회원가입')
			this.$target = createDOMWithSelector(
				'button',
				'.largeButton',
				'.disable'
			);
		else this.$target = createDOMWithSelector('button', '.largeButton');

		this.onClick = onClick;
		$parent.appendChild(this.$target);

		this.$target.innerText = this.state;
		this.$target.addEventListener('click', (e) => {
			this.onClick(e);
		});
	}
}
