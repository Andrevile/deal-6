import './navbar.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
// import CATEGORY_ICON from '/imgs/category.svg'; 경로문제 발생 (보류)

export default class Mainnavbar {
	locationName = '역삼동';
	constructor({ $app }) {
		this.$target = createDOMWithSelector('nav', '.nav');
		$app.appendChild(this.$target);

		this.$target.innerHTML = `
            <div class='nav__category'>
                <img src='/imgs/category.svg' alt='category'>
            </div>
            <div class='nav__location'>
                
            </div>
            <div class='nav__rightSide'>
                <img src='/imgs/account.svg' alt='profile'>
                <img src='/imgs/menu.svg' alt='menu'>
            </div>
        `;

		this.$location = document.querySelector('.nav__location');

		this.render();
	}

	setState(newLocationName) {
		this.locationName = newLocationName;
		this.render();
	}

	render() {
		this.$location.innerHTML = `
            <img src='/imgs/location.svg' alt='location'>
            <span>${this.locationName}</span>
        `;
	}
}
