import { createDOMWithSelector } from '../../../../util/createDOMWithSelector';
import './info-container.css';

const STATUS = ['판매중', '예약중', '판매완료'];

const isUserOwnProduct = (seller, user) => seller === user;

export default class InfoContainer {
	constructor({ $parent, initialState }) {
		this.state = initialState;
		this.$infoContainer = createDOMWithSelector('div', '.info-container');
		$parent.appendChild(this.$infoContainer);

		this.render();
	}

	setState(nextState) {
		this.state = nextState;
		this.render();
	}

	render() {
		const createStatusSelectButtonTemplate = ({ status, seller, user }) => {
			status = Math.min(status, 2);

			return isUserOwnProduct(seller, user)
				? `
					<select name="status" value=${status} class="info status">
					${STATUS.map((stat, i) => {
						return status === i
							? `<option value=${i} selected="selected"}>${stat}</option>`
							: `<option value=${i} }>${stat}</option>`;
					}).join('\n')}
					</select>
				`
				: '';
		};

		const createProductHeaderTemplate = ({
			title,
			category,
			createdAt,
		}) => {
			return `
				<div class='info'>
					<h1>${title}</h1>
					<div class='sub-header-container'>
						<span class='grey-text small-text'>${category}∙${createdAt}</span>
					</div>
				</div>
			`;
		};

		const createProductDescriptionTemplate = ({ content }) => {
			return `<div class='info description'>${content}</div>`;
		};

		const createProductCountInfoTemplate = ({
			chatCount,
			wishCount,
			visitCount,
		}) => {
			return `
				<div class='info count sub-header-container'>
					<span class='grey-text small-text'>채팅 ${chatCount}∙관심 ${wishCount}∙조회 ${visitCount}</span>
				</div>
			`;
		};

		const createProductSellerInfoTemplate = ({ seller, location }) => {
			return `
				<div class='info seller small-text'>
					<div>판매자 정보</div>
					<div>
						<span>${seller}</span>
						<span class='grey2-text'>${location}</span>
					</div>
				</div>
			`;
		};

		this.$infoContainer.innerHTML = `
			${createStatusSelectButtonTemplate(this.state)}
			${createProductHeaderTemplate(this.state)}
			${createProductDescriptionTemplate(this.state)}
			${createProductCountInfoTemplate(this.state)}
			${createProductSellerInfoTemplate(this.state)}
		`;
	}
}
