import { createDOMWithSelector } from '../../../../util/createDOMWithSelector';
import './img-container.css';

const isClassSelector = (selector) => selector[0] === '.';

const createButton = (text, ...selectors) => {
	const button = createDOMWithSelector('button', ...selectors);
	button.innerText = text;
	return button;
};

const createImgTemplate = (src, ...selectors) => {
	return ` 
		<img class="${selectors
			.filter(isClassSelector)
			.map((selector) => selector.slice(1))
			.join(' ')}" src=${src} />
	`;
};

export default class ImgContainer {
	constructor({ $parent, initialState }) {
		this.state = initialState;
		this.$parent = $parent;
		this.currentImgIndex = 0;
		this.$imgContainer = createDOMWithSelector('div', '.img-container');
		this.$imgContainer.style.width = `${20 * this.state.length}rem`;
		$parent.appendChild(this.$imgContainer);

		/*
		이미지 컨테이너를 움직이는 버튼을 생성합니다.
		*/

		this.$prevButton = createButton('<', '.move', '.prev');
		this.$nextButton = createButton('>', '.move', '.next');

		const isOutOfBound = (move) => {
			return (
				this.currentImgIndex + move >= this.state.length ||
				this.currentImgIndex + move < 0
			);
		};

		const movePrevOrNextHandler = (move) => {
			if (isOutOfBound(move)) return;
			this.$imgContainer.style.transform = `translate(${
				-20 * (this.currentImgIndex + move)
			}rem)`;
			this.currentImgIndex += move;
		};

		this.$prevButton.addEventListener('click', () =>
			movePrevOrNextHandler(-1)
		);

		this.$nextButton.addEventListener('click', () =>
			movePrevOrNextHandler(1)
		);

		window.addEventListener('keydown', function (e) {
			const keyCode = e.keyCode;

			if (keyCode == 37) {
				// left key
				e.preventDefault();
				movePrevOrNextHandler(-1);
			} else if (keyCode == 39) {
				// right key
				e.preventDefault();
				movePrevOrNextHandler(1);
			}
		});

		this.$buttonContainer = createDOMWithSelector('div', '.next-and-prev');
		this.$buttonContainer.appendChild(this.$prevButton);
		this.$buttonContainer.appendChild(this.$nextButton);

		$parent.appendChild(this.$buttonContainer);
		this.render();
	}

	setState(nextState) {
		this.state = nextState;
		this.render();
	}

	render() {
		this.$imgContainer.innerHTML = `
			${this.state.map((src) => createImgTemplate(src, '.gradient')).join('\n')}	
		`;
	}
}
