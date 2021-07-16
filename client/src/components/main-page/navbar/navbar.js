import './navbar.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
// import CATEGORY_ICON from '/imgs/category.svg'; 경로문제 발생 (보류)

export default class Mainnavbar {
	state = '';
	constructor({ $parent, initialState }) {
		this.state = initialState;
		this.$target = createDOMWithSelector('nav', '.nav');
		$parent.appendChild(this.$target);

		this.$target.innerHTML = `
            <div class='nav__category' data-route='hi'>
                <img src='/icons/category.svg' alt='category'>
            </div>
            <div class='nav__location'>
                
            </div>
            <div class='nav__rightSide'>
                <img src='/icons/account.svg' alt='profile'>
                <img src='/icons/menu.svg' alt='menu'>
            </div>
        `;

		this.$location = document.querySelector('.nav__location');

		this.render();
	}

	setState(newLocationName) {
		this.state = newLocationName;
		this.render();
	}

	render() {
		this.$location.innerHTML = `
            <img src='/icons/location.svg' alt='location'>
            <span>${this.state}</span>
        `;
	}
}
