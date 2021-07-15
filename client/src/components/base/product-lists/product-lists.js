import "./product-lists.css"
import {createDOMwithSelector } from '../../../util/createDOMwithSelector'
export default class Productlists {
	

	constructor({$app}) {
		
		this.$target = createDOMwithSelector('section')
		$app.appendChild(this.$target);
		
		this.$target.innerHTML = `
			<div>
				It is Productlist
			</div>
		`
		// this.render();
	}

	setState() {

	}

	render() {

	}
}
