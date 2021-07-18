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
            <hr>
            <input class='post__price' type='text' placeholder="₩ 가격(선택사항)">
            <hr>
            <input class='post__content' type='text' placeholder="게시글 내용을 작성해주세요.">
        `;
	}
}
