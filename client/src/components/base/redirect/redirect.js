import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
import './redirect.css';

export default class Redirect {
	state = {
		link: '',
		message: '',
		status: '',
		content: '',
	};
	constructor({ $parent, initialState }) {
		this.state = initialState;
		this.$target = createDOMWithSelector('div', '.redirect');
		$parent.appendChild(this.$target);
		this.$target.innerHTML = `
		    <button class='redirect__button' data-link=${this.state.link}>${this.state.message}</button>
		    <img src="/imgs/notfound.gif">
		    <h1>${this.state.status}</h1>
		    <div>${this.state.content}</div>
		`;
	}
}
