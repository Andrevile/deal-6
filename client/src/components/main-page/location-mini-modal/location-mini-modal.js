import './location-mini-modal.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';

export default class MiniModal {
	state = [];
	constructor({ $parent, initialState, onClick }) {
		this.state = initialState;
		this.$target = createDOMWithSelector('div', '.miniModal');
		$parent.appendChild(this.$target);

		// 채팅 구현시 render() 빼서 재사용
		this.$target.innerHTML = `
			<div class='miniModal__wrapper'>
                <div class="miniModal__overlay"></div>
                <div class="miniModal__content">
                </div>
			</div>
              `;

		this.onClick = onClick;
		this.$content = document.querySelector('.miniModal__content');

		this.$target.addEventListener('click', (e) => {
			this.onClick(e, e.target.dataset.idx);
		});
		this.render();
	}

	render() {
		this.$content.innerHTML =
			this.renderLocationName() +
			`<div data-link='/location'>내 동네 설정하기</div>`;
	}

	setState(nextState) {
		this.state = nextState;
		this.render();
	}

	renderLocationName() {
		return this.state
			.map(
				(locationName, idx) =>
					`<div class="miniModal__location" data-idx=${idx}>${locationName}</div>`
			)
			.join('');
	}

	open() {
		this.$target.style.display = 'block';
	}

	close() {
		this.$target.style.display = 'none';
	}
}
