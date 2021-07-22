import './body.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
import Button from '../../../components/base/large-button/large-button';
import WelcomeModal from '../modal/modal';
import { api } from '../../../api/api';

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
				e.preventDefault();
				if (e.target.className === 'largeButton') {
					// api (this.state 정보 인자)
					// 회원가입 알림 및 클릭시 로그인 이동
					api.post('/signup', this.state)
						.then(() => {
							this.welcomeModal.open();
						})
						.catch((e) => {
							alert(e.message);
						});
				}
			},
		});

		this.welcomeModal = new WelcomeModal({
			$parent,
			onClick: (e) => {
				if (
					e.target.className === 'welcome__overlay'
					// 외부 클릭 시 발생
				) {
					this.welcomeModal.close();
				}
			},
		});

		this.$target.addEventListener('keyup', (e) => {
			if (e.target.id === 'id' || e.target.id === 'location') {
				e.target.id === 'id' ? this.checkIdRegex(e) : '';
				e.target.id === 'location' ? this.checkLocationRegex(e) : '';
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
	checkLocationRegex(e) {
		const regex = /[^ㄱ-ㅎ,가-힣,0-9|]/g;
		e.target.value = e.target.value.replace(regex, '');
	}

	checkIdRegex(e) {
		const regex = /[^a-z,A-Z,0-9|]/g;
		e.target.value = e.target.value.replace(regex, '');
		e.target.value = e.target.value.slice(0, 20);
	}
}
