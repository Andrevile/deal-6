import './navigation-bar.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
// import CATEGORY_ICON from '/imgs/category.svg'; 경로문제 발생 (보류)

export default class MainNavbar {
	state = '';
	constructor({ $parent, initialState, onClick }) {
		this.state = initialState;
		this.$target = createDOMWithSelector('nav', '.nav');
		$parent.appendChild(this.$target);

		this.onClick = onClick;

		this.$target.innerHTML = `
            <div class='nav__category'>
                <img class='nav__categoryImg' src='/icons/category.svg' alt='category'>
            </div>
            <div class='nav__location'>
                
            </div>
            <div class='nav__rightSide'>
                <img src='/icons/account.svg' alt='profile' data-link="/user">
                <img src='/icons/menu.svg' data-link='/menu' alt='menu'>
            </div>
        `;

		this.$target.addEventListener('click', (e) => {
			this.onClick(e);
		});

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
