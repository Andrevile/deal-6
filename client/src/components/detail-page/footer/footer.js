import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
import './footer.css';

export default class Footer {
	constructor({ $parent, initialState }) {
		this.state = initialState;
		this.$footer = createDOMWithSelector('footer', '.footer');

		$parent.appendChild(this.$footer);
	}

	setState(nextState) {
		this.state = nextState;
		this.render();
	}

	render() {}
}
