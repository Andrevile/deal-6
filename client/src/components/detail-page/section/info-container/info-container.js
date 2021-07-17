import {
	createDOMWithSelector,
	// createImgDOMWithSelector,
} from '../../../../util/createDOMWithSelector';
import './info-container.css';

const STATUS = ['판매중', '예약중', '판매완료'];

export default class InfoContainer {
	constructor({ $parent, initialState }) {
		this.state = initialState;
		this.$infoContainer = createDOMWithSelector('div', '.info-container');
		$parent.appendChild(this.$infoContainer);

		this.render();
	}

	render() {
		const createStatusSelectButtonTemplate = ({ status }) => {
			status = Math.min(status, 2);

			return `
				<select name="status" value=${status} class="info status">
				${STATUS.map((stat, i) => {
					return status === i
						? `<option value=${i} selected="selected"}>${stat}</option>`
						: `<option value=${i} }>${stat}</option>`;
				}).join('\n')}
				</select>`;
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

		const createProductDescriptionTemplate = ({ description }) => {};

		const createProductCountInfoTemplate = ({
			chatCount,
			wishCount,
			visitCount,
		}) => {};

		const createProductSellerInfoTemplate = ({ seller, location }) => {};

		this.$infoContainer.innerHTML = `
			${createStatusSelectButtonTemplate(this.state)}
			${createProductHeaderTemplate(this.state)}
			${createProductDescriptionTemplate(this.state)}
			${createProductCountInfoTemplate(this.state)}
			${createProductSellerInfoTemplate(this.state)}
		`;
	}
}
