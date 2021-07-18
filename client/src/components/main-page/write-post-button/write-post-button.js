import './write-post-button.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';

export default class WritePostButton {
	constructor({ $parent }) {
		this.$target = createDOMWithSelector('button', '.postBtn');
		$parent.appendChild(this.$target);

		this.$target.innerHTML = `
            <div>
                <span data-link='/writing'>+</span>
            </div>
            
        `;
	}
}
