import { createDOMWithSelector } from '../../../../util/createDOMWithSelector';
import './img-container.css';

export default class ImgContainer {
	constructor({ $parent, initialState }) {
		this.state = initialState;
		this.$parent = $parent;
		this.$imgContainer = createDOMWithSelector('div', '.img-container');
		$parent.appendChild(this.$imgContainer);

		this.render();
	}

	render() {
		const createImgTemplate = (src, ...selectors) => {
			const isClassSelector = (selector) => selector[0] === '.';

			return ` 
				<img class=${selectors.filter(isClassSelector).join(' ')} src=${src} />
			`;
		};

		this.$imgContainer.innerHTML = `
			${this.state.imgs.map((src) => createImgTemplate(src, '.gradient')).join('\n')}	
		`;
	}
}
