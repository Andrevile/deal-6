import './body.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
import Button from '../../../components/base/large-button/large-button';

const mode = '회원가입';

export default class BodyPart {
	state = {
		id: '',
		location: '',
	};

	constructor({ $parent }) {
		this.$target = createDOMWithSelector('form', '.signup');
		$parent.appendChild(this.$target);

		this.$target.innerHTML = `
        <div>
            아이디
        </div>
        <input class='largeInput' type="text" placeholder="영문 숫자 조합 20자 이하">
        <div>
            우리 동네
        </div>
        <input class='largeInput' type="text" placeholder="시∙구 제외, 동만 입력">
        `;

		this.button = new Button({
			$parent: this.$target,
			initialState: mode,
		});
	}
}
