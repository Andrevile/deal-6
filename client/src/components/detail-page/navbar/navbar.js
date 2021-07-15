import './navbar.css';
import { createDOMwithSelector } from '../../../util/createDOMwithSelector';

export default class Detailnavbar {
	constructor({ $app }) {
		this.$target = createDOMwithSelector('nav', '.detail__nav');
		$app.appendChild(this.$target);
	}

	setState() {}

	render() {}
}
