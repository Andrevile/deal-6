import './navbar.css';
import { createDOMwithSelector } from '../../../util/createDOMwithSelector';
import { CATEGORY_ICON } from '../../../constants/icon-path';

export default class Mainnavbar {
	constructor({ $app }) {
		this.$target = createDOMwithSelector('nav', '.nav');
		$app.appendChild(this.$target);
		this.$target.innerHTML = `
            <div class='nav_category'>
                <img src=${CATEGORY_ICON} alt='category'>
            </div>
            <div class='nav_location'>
                <img src='' alt='location'>
                <span>역삼동</span>
            </div>
            <div class='nav_rightSide'>
                <img src= alt='profile'>
                <img src= alt='menu'>
            </div>
        `;
	}

	setState() {}

	render() {}
}
