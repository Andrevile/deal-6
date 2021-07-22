import './navigation-bar.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';

export default class MainNavbar {
	state = '';
	constructor({ $parent, initialState, onClick }) {
		this.state = initialState;
		this.$target = createDOMWithSelector('nav', '.nav');
		$parent.appendChild(this.$target);

		this.onClick = onClick;

		this.$target.innerHTML = `
            <div class='nav__category'>
                <img class='nav__categoryImg' src='https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/category.svg' alt='category'>
            </div>
            <div class='nav__location'>
                
            </div>
            <div class='nav__rightSide'>
                <img src='https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/account.svg' alt='profile' data-link="/user">
                <img src='https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/menu.svg' data-link='/menu' alt='menu'>
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
            <img class='nav__locationIcon' src='https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/location.svg' alt='location'>
            <span class='nav__locationName'>${this.state}</span>
        `;
	}
}
