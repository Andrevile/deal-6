import './footer.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
import {
	FAVORITE_ICON,
	FAVORITE_BORDER_MINI_ICON,
} from '../../../constants/icon-path';

const isUserOwnProduct = (seller, user) => seller == user;

export default class Footer {
	constructor({ $parent, initialState }) {
		this.state = initialState;
		this.$footer = createDOMWithSelector('footer', '.footer');

		$parent.appendChild(this.$footer);

		this.render();
	}

	setState() {}

	render() {
		const createWishImgButtonTemplate = () => {
			const isUsersWishProduct = () => {
				// 유저가 이 아이템을 좋아하는지 서버에 조회한 결과값을 기준으로 데이터가 존재한다면
				return true;
			};

			return isUsersWishProduct()
				? `<img src=${FAVORITE_ICON} class='wish-icon' />`
				: `<img src=${FAVORITE_BORDER_MINI_ICON} class='wish-icon' />`;
		};

		this.$footer.innerHTML = `
            <div class="inner">
                <div class='wish'>
                    ${createWishImgButtonTemplate()}
                </div>    
                <div class='vertical-line'></div>
                <div>${this.state.price}원</div>
            </div>
            <button class='option-button'>${
				isUserOwnProduct(this.state.seller, this.state.user)
					? '채팅 목록 보기'
					: '문의하기'
			}</button>
        `;
	}
}
