import {
	createDOMWithSelector,
	createImgDOMWithSelector,
} from '../../../../util/createDOMWithSelector';
import './img-container.css';

export default class ImgContainer {
	constructor({ $parent, state }) {
		this.state = state;
		this.$imgContainer = createDOMWithSelector('div', '.img-container');
		$parent.appendChild(this.$imgContainer);

		this.render();
	}

	render() {
		this.state.imgs.forEach((src) => {
			let $img = createImgDOMWithSelector(src, '.gradient');
			this.$imgContainer.appendChild($img);
		});
	}
}
