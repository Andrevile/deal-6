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
            <img src='https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/location_white.svg'  alt='location'>
            <span>${this.state}</span>
        `;
	}
}
