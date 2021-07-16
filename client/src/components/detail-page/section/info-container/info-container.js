import {
	createDOMWithSelector,
	// createImgDOMWithSelector,
} from '../../../../util/createDOMWithSelector';
import './info-container.css';

export default class InfoContainer {
	constructor({ $parent, state }) {
		this.state = state;
		this.$infoContainer = createDOMWithSelector('div', '.info-container');
		$parent.appendChild(this.$infoContainer);

		this.render();
	}

	render() {
		const content = `
			<div class='info status'>
				<button>${this.state.status} v </button>
			</div>
			<div class='info'>${this.state.title}</div>
			<div class='info'>${this.state.category}</div>
			<div class='info'>${this.state.description}</div>
			<div class='info'>${this.state.seller} </div>
		`;

		this.$infoContainer.innerHTML += content;
	}
}
