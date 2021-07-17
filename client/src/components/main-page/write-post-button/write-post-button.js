import './write-post-button.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';

export default class WritePostButton {
	constructor({ $parent }) {
		this.$target = createDOMWithSelector('button', '.postButton');
		$parent.appendChild(this.$target);

		this.$target.innerHTML = `
            <div>
                <span>+</span>
            </div>
            
        `;
	}
}
