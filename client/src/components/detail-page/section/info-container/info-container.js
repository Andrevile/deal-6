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
		const createStatusSelectButtonTemplate = ({ status }) => {};

		const createProductHeaderTemplate = ({
			title,
			category,
			createdAt,
		}) => {};

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
