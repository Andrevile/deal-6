import './body.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
import { CATEGORY_LIST } from '../../../constants/category-list';

export default class Body {
	state = {
		location: '인창동',
		imgPath: [],
		title: '',
		description: '',
		price: '',
		category: '',
		haveAllValue: false,
	};

	constructor({ $parent, initialState, refreshState }) {
		this.state = initialState;
		this.refreshState = refreshState;
		this.$target = createDOMWithSelector('div', '.post');
		$parent.appendChild(this.$target);

		this.$target.innerHTML = `
            <div class='post__container'>
            </div>
           
            <hr>
            <input class='post__title' type='text' placeholder="글 제목">
            <div class='category'>
                <span>(필수)카테고리를 선택해주세요.</span>
                <div class='category__buttonOuter'>
                    
                </div>
            </div>
            <hr>
            <input class='post__price' type='text' placeholder="₩ 가격(선택사항)">
            <hr>
            <textarea class='post__content' placeholder="게시글 내용을 작성해주세요."></textarea>
        `;

		this.$container = document.querySelector('.post__container');
		this.$title = document.querySelector('.post__title');
		this.$price = document.querySelector('.post__price');
		this.$content = document.querySelector('.post__content');
		this.$category = document.querySelector('.category__buttonOuter');

		this.$title.addEventListener('keyup', (e) => {
			this.bindTitleEvent(e);
		});
		this.$price.addEventListener('keyup', (e) => {
			this.bindPriceKeyUpEvent(e);
		});
		this.$price.addEventListener('focusout', (e) => {
			this.rearrangePrice(e);
		});
		this.$content.addEventListener('keyup', (e) => {
			this.bindContentEvent(e);
		});
		this.$category.addEventListener('click', (e) => {
			this.bindCategoryEvent(e);
		});
		this.$container.addEventListener('click', (e) => {
			this.bindImageButtonEvent(e);
		});
		this.render();
	}

	setState(nextState) {
		this.state = nextState;
		this.render();
	}

	render() {
		this.$container.innerHTML =
			`<div class='post__imgContainer addImage'>
                <img class='addImage' src='/icons/image.svg' alt='image'>
                <div>
                    <span>${this.state.imgPath.length}/10</span>
                </div> 
            </div>` + this.renderImage();

		this.$category.innerHTML = this.renderButton();
	}

	renderImage() {
		return this.state.imgPath
			.map((image, idx) => {
				return `
              <div class='post__imgOuter'>
                  <img class='post__imgContainer' src=${image} alt='image'>
                  <button class='post__removeBtn' data-idx=${idx} ><span class='post_X' data-idx=${idx}>X</span></button>
              </div>
            `;
			})
			.join('');
	}

	renderButton() {
		return CATEGORY_LIST.map((category, idx) => {
			if (category === this.state.category) {
				return `<button class='category__button active' data-idx=${idx}>${category}</button>`;
			} else {
				return `<button class='category__button' data-idx=${idx}>${category}</button>`;
			}
		}).join('');
	}

	rearrangePrice(e) {
		// 콤마와 원을 붙혀주는 함수
		let value = e.target.value.toString();
		let length = value.length;
		let array = e.target.value.split('');

		if (length > 3) {
			let count = 1;
			for (let i = length - 1; i > 0; i--) {
				if (count % 3 === 0) {
					array.splice(i, 0, ',');
				}
				count++;
			}
		}

		let result = '₩ ' + array.join('');
		e.target.value = result;
	}

	checkHavingAllValue() {
		// 가격제외 모든 값 있는지 확인
		if (
			this.state.title.length > 0 &&
			this.state.description.length > 0 &&
			this.state.imgPath.length > 0 &&
			this.state.category.length > 0
		) {
			this.state.haveAllValue = true;
			return;
		}
		this.state.haveAllValue = false;
	}

	chcekValueAndRefreshState() {
		this.checkHavingAllValue();
		this.refreshState(this.state);
	}

	bindImageButtonEvent = (e) => {
		if (
			e.target.className === 'post__removeBtn' ||
			e.target.className === 'post_X'
		) {
			let idx = e.target.dataset.idx;
			let imageArray = this.state.imgPath;
			imageArray.splice(idx, 1);
			this.state.imgPath = imageArray;
		} else if (
			e.target.className === 'addImage' ||
			e.target.className === 'post__imgContainer addImage'
		) {
			//api 호출로 state 업데이트
		}
		this.chcekValueAndRefreshState();
	};

	bindContentEvent(e) {
		// textarea 높이 가변조절
		this.$content.style.height = this.$content.scrollHeight + 'px';
		this.state.description = e.target.value;
		this.chcekValueAndRefreshState();
	}

	bindTitleEvent(e) {
		// 글자수 제한 (추후 경고 CSS 추가해도 될듯)
		if (e.target.value.length > 30) {
			e.target.value = e.target.value.slice(0, 30);
		}
		this.state.title = e.target.value;
		this.chcekValueAndRefreshState();
	}

	bindPriceKeyUpEvent(e) {
		// number만 받는다.
		e.target.value = e.target.value.replace(/[^0-9]/g, '');
		this.state.price = e.target.value;
	}

	bindCategoryEvent(e) {
		if (
			e.target.className === 'category__button active' ||
			e.target.className === 'category__button'
		) {
			this.state.category = CATEGORY_LIST[e.target.dataset.idx];
			this.chcekValueAndRefreshState();
		}
	}
}
