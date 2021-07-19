import './footer.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';

export default class Footer {
	state = '';
	// state : 동네명 (string)
	constructor({ $parent, initialState }) {
		this.state = initialState;
		this.$target = createDOMWithSelector('footer', '.footer');
		$parent.appendChild(this.$target);

		this.$target.innerHTML = `
            <img src='/icons/location_white.svg'  alt='location'>
            <span>${this.state}</span>
        `;
	}
}
