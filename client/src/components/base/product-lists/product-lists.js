import "./product-lists.css"

export default class Productlists {
	

	constructor({$app}) {
		this.$target = document.createElement('section');
		$app.appendChild(this.$target);
		this.$target.className = 'article'
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
