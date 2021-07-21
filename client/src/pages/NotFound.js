import { createDOMWithSelector } from '../util/createDOMWithSelector';
import './NotFound.css';

export default class NotFound {
	constructor($parent) {
		this.$target = createDOMWithSelector('div', '.notfound');
		$parent.appendChild(this.$target);

		this.$target.innerHTML = `
            <button class='notfound__button' data-link='/'>Go to the Home</button>
            <img src="/imgs/notfound.gif">
            <h1>404</h1>
            <div>Page not found</div>
        `;
	}
}
