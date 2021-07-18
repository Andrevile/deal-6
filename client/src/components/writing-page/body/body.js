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
	// state : 동네명 (string)
	constructor({ $parent, initialState, refreshState }) {
		this.state = initialState;
		this.refreshState = refreshState;
		this.$target = createDOMWithSelector('div', '.post');
		$parent.appendChild(this.$target);

		this.$target.innerHTML = `
            <div class='post__container'>
                <div class='post__imgContainer'>
                    <img src='/icons/image.svg' alt='image'>
                    <div>
                        <span>3/10</span>
                    </div> 
                </div>
                <div class='post__imgOuter'>
                    <img class='post__imgContainer' src='/imgs/photo.jpeg' alt='image'>
                    <button class='post__removeBtn'><span>X</span></button>
                </div>
                <div class='post__imgOuter'>
                    <img class='post__imgContainer' src='/imgs/photo.jpeg' alt='image'>
                    <button class='post__removeBtn'><span>X</span></button>
                </div>
                <div class='post__imgOuter'>
                    <img class='post__imgContainer' src='/imgs/photo.jpeg' alt='image'>
                    <button class='post__removeBtn'><span>X</span></button>
                </div>
                <div class='post__imgOuter'>
                    <img class='post__imgContainer' src='/imgs/photo.jpeg' alt='image'>
                    <button class='post__removeBtn'><span>X</span></button>
                </div>
                <div class='post__imgOuter'>
                    <img class='post__imgContainer' src='/imgs/photo.jpeg' alt='image'>
                    <button class='post__removeBtn'><span>X</span></button>
                </div>
            </div>
           
            <hr>
            <input class='post__title' type='text' placeholder="글 제목">
            <div class='category'>
                <span>(필수)카테고리를 선택해주세요.</span>
                <div class='category__button'>
                    ${this.renderButton()}
                </div>
            </div>
            <hr>
            <input class='post__price' type='text' placeholder="₩ 가격(선택사항)">
            <hr>
            <textarea class='post__content' placeholder="게시글 내용을 작성해주세요."></textarea>
        `;

		this.$title = document.querySelector('.post__title');
		this.$price = document.querySelector('.post__price');
		this.$content = document.querySelector('.post__content');

		this.$title.addEventListener('keyup', (e) => {
			// 글자수 제한 (추후 경고 CSS 추가해도 될듯)
			if (e.target.value.length > 30) {
				e.target.value = e.target.value.slice(0, 30);
			}
			this.state.title = e.target.value;
			this.checkHavingAllValue();
			this.refreshState(this.state);
		});
		this.$price.addEventListener('keyup', (e) => {
			// number만 받는다.
			e.target.value = e.target.value.replace(/[^0-9]/g, '');
			this.state.price = e.target.value;
		});
		this.$price.addEventListener('focusout', (e) => {
			this.rearrangePrice(e);
		});
		this.$content.addEventListener('keyup', (e) => {
			// textarea 높이 가변조절
			this.$content.style.height = this.$content.scrollHeight + 'px';
			this.state.description = e.target.value;
			this.checkHavingAllValue();
			this.refreshState(this.state);
		});
	}

	renderButton() {
		return CATEGORY_LIST.map((category) => {
			return `<button>${category}</button>`;
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
}
