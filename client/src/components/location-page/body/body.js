import './body.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';

export default class BodyPart {
	state = [];
	constructor({ $parent, initialState }) {
		this.state = initialState;
		this.$target = createDOMWithSelector('div', '.location');
		$parent.appendChild(this.$target);

		this.$target.innerHTML = `
        <div class='location__span'>
            <span>지역은 최소 1개 이상</span>
            <br> 
            <span>최대 2개까지 설정 가능해요.</span>
        </div>
        <div class='location__btnOuter'></div>
        `;

		this.$btn = document.querySelector('.location__btnOuter');
		this.render();
	}

	setState(nextState) {
		this.state = nextState;
		this.render();
	}

	render() {
		let result = '';

		result += this.createMainBtn();
		result += this.createNormalBtn();
		result += this.createPlusBtn();

		this.$btn.innerHTML = result;
	}

	createMainBtn() {
		return this.state.length
			? `
            <button class='location__mainBtn'>
                <span>
                    ${this.state[0]}
                </span>
                <img src="/icons/cancel.svg" />
            </button>
            `
			: ``;
	}

	createNormalBtn() {
		return this.state.length > 1
			? `
            <button class='location__normalBtn'>
                <span>
                    ${this.state[1]}
                </span>
                <img src="/icons/cancel_baemin.svg" />
            </button>
            `
			: ``;
	}
	createPlusBtn() {
		return this.state.length < 2
			? `
            <button class='location__plusBtn'>
                <span>
                    +
                </span>
            </button>
            `
			: ``;
	}
}