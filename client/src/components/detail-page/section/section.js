import './section.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
import ImgContainer from './img-container/img-container';
import InfoContainer from './info-container/info-container';

export default class DetailSection {
	$imgContainer = null;
	index = 0;

	constructor({ $parent, initialState }) {
		this.state = initialState;
		this.$section = createDOMWithSelector('section', '.section');

		this.$imgContainerWrapper = createDOMWithSelector(
			'div',
			'.img-container-wrapper'
		);

		this.$infoContainerWrapper = createDOMWithSelector(
			'div',
			'.info-container-wrapper'
		);

		this.$imgContainer = new ImgContainer({
			$parent: this.$imgContainerWrapper,
			initialState: this.state.imgPath,
		});

		this.$infoContainer = new InfoContainer({
			$parent: this.$infoContainerWrapper,
			initialState: this.state,
		});

		this.$section.appendChild(this.$imgContainerWrapper);
		this.$section.appendChild(this.$infoContainerWrapper);
		$parent.appendChild(this.$section);

		this.render();
	}
	setState() {}

	render() {}
}
