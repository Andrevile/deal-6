export default class Product {
	
	constructor() {
		this.$target = document.createElement('article');
		this.$target.innerHTML = `
            <div>
                inner
            </div>
        `
	}
}
