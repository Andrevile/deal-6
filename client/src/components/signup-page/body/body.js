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
        <input class='largeInput' id='id' type="text" placeholder="영문 숫자 조합 20자 이하">
        <div>
            우리 동네
        </div>
        <input class='largeInput' id='location' type="text" placeholder="시∙구 제외, 동만 입력">
        `;

		this.$id = document.querySelector('#id');
		this.$location = document.querySelector('#location');

		this.button = new Button({
			$parent: this.$target,
			initialState: mode,
			onClick: (e) => {
				console.log(e.target.className);
				if (e.target.className === 'largeButton') {
					// api (this.state 정보 인자)
					// 회원가입 알림 및 클릭시 로그인 이동
				}
			},
		});

		this.$target.addEventListener('keyup', (e) => {
			if (e.target.id === 'id' || e.target.id === 'location') {
				e.target.id === 'location' ? this.checkRegexEvent(e) : '';
				this.activateButton();
			}
		});
	}

	activateButton() {
		if (this.$id.value.length > 0 && this.$location.value.length > 0) {
			this.button.$target.classList.remove('disable');
		} else {
			this.button.$target.classList.add('disable');
		}
	}
	checkRegexEvent(e) {
		const regex = /[^가-힣,0-9|]/g;
		e.target.value = e.target.value.replace(regex, '');
	}
}
