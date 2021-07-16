import './write-post-button.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';

export default class writePostBtn {
	constructor({ $parent }) {
		this.$target = createDOMWithSelector('button', '.postBtn');
		$parent.appendChild(this.$target);

		this.$target.innerHTML = `
            <div>
                <span>+</span>
            </div>
            
        `;
	}
}
