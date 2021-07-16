import './section.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
import ImgContainer from './img-container/img-container';
import InfoContainer from './info-container/info-container';

export default class DetailSection {
	$imgContainer = null;

	constructor({ $parent, state }) {
		console.log($parent);
		this.state = state;
		this.$section = createDOMWithSelector('section');

		this.$imgContainer = new ImgContainer({
			$parent: this.$section,
			state: this.state,
		});

		this.$infoContainer = new InfoContainer({
			$parent: this.$section,
			state: this.state,
		});
		console.log(this.$section);

		$parent.appendChild(this.$section);

		this.render();
	}
	setState() {}

	render() {}
}
