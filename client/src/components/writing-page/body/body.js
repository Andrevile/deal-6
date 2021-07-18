import './body.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';

export default class Body {
	state = '';
	// state : 동네명 (string)
	constructor({ $parent, initialState }) {
		this.state = initialState;
		this.$target = createDOMWithSelector('form', '.post');
		$parent.appendChild(this.$target);

		this.$target.innerHTML = `
            <div class='post__imgContainer'>
                <img src='/icons/image.svg' alt='image'>
                <div>
                    <span>3/10</span>
                </div>
            </div>
            <hr>
            <input class='post__title' type='text' placeholder="글 제목">
            <span> (필수)카테고리를 선택해주세요.</span>
            <hr>
            <input class='post__price' type='text' placeholder="₩ 가격(선택사항)">
            <hr>
            <input class='post__content' type='text' placeholder="게시글 내용을 작성해주세요.">
        `;
		this.$title = document.querySelector('.post__title');
		this.$price = document.querySelector('.post__price');
		this.$content = document.querySelector('.post__content');

		this.$title.addEventListener('keyup', (e) => {
			// 글자수 제한 (추후 경고 CSS 추가해도 될듯)
			if (e.target.value.length > 30)
				e.target.value = e.target.value.slice(0, 30);
		});
		this.$price.addEventListener('keyup', (e) => {
			// number만 받는다.
			e.target.value = e.target.value.replace(/[^0-9]/g, '');
		});
		this.$price.addEventListener('focusout', (e) => {
			this.rearrangePrice(e);
		});
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
}
