import './footer.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';

export default class Footer {
	constructor({ $parent, initialState }) {
		this.state = initialState;
		this.$footer = createDOMWithSelector('footer', '.footer');

		$parent.appendChild(this.$footer);

		this.render();
	}

	setState() {}

	render() {
		this.$footer.innerHTML = `
            <div class='wish-and-price'>
                <span>찜</span>    
                <span class='vertical-line'></span>
                <span>${this.state.price}원</span>
            </div>
            <button>채팅 목록 보기</button>
        `;
	}
}
