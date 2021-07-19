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
		this.wishIconOn = false; // api 구현 이전이므로 임시로 넣음
		/*
			API 요청으로 wishIconOn 수정
			
			getIsProductWishedByUser()
			.resolve(()=> {
				this.wishIconOn = result?;
			})
			.reject(() => {
				console.log("api 요청 에러");
			})
		*/
		this.$footer = createDOMWithSelector('footer', '.detail__footer');

		this.$footer.addEventListener('click', this.wishIconHandler);

		$parent.appendChild(this.$footer);

		this.$footer.innerHTML = `
            <div class="inner">
                <div class='wish'>
                    ${this.createWishImgButtonTemplate()}
                </div>    
                <div class='vertical-line'></div>
                <div>${this.state.price}원</div>
            </div>
            ${this.createOptionButtonTemplate()}
        `;
	}

	setState() {}

	render() {}

	createWishImgButtonTemplate() {
		return this.wishIconOn
			? `<img src=${FAVORITE_ICON} class='wish-icon' />`
			: `<img src=${FAVORITE_BORDER_MINI_ICON} class='wish-icon' />`;
	}

	createOptionButtonTemplate() {
		return `
		<button 
				class="option-button"
				data-link="${
					isUserOwnProduct(this.state.seller, this.state.user)
						? '/chat'
						: '/chat/10'
				}
			">
			${
				isUserOwnProduct(this.state.seller, this.state.user)
					? '채팅 목록 보기'
					: '문의하기'
			}
			</button>
		`;
	}

	wishIconHandler({ target }) {
		// 이벤트 위임 방식
		if (target.className === 'wish-icon') {
			const changeWishIconState = (target) => {
				target.src = this.wishIconOn
					? FAVORITE_ICON
					: FAVORITE_BORDER_MINI_ICON;
			};

			let response = { statusCode: 200 }; // 개발 단계 임시 변수

			/*
				API 요청으로 wishIconOn 수정
				유저가 이 아이템을 좋아하는지 서버에 조회한 결과값을 기준으로 데이터가 존재한다면
				this.wishIconOn = 요청결과;

				this.postWishStateByUser()
				.resolve(() => {
					if (response.statusCode === 200) {
						this.wishIconOn = !this.wishIconOn;
						changeWishIconState(target);
					}
				})
				.reject(callback)
			*/

			if (response.statusCode === 200) {
				this.wishIconOn = !this.wishIconOn;
				changeWishIconState(target);
			}
		}
	}

	getIsProductWishedByUser() {
		/**
		 * get api 요청
		 */
		// return new Promise();
	}

	postWishStateByUser() {
		/**
		 * post api 요청
		 */
		//  return new Promise();
	}
}
