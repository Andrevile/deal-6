export default class Page2 {

	constructor($target) {

        var element = document.createElement("div");
        element.innerHTML = `
            <a href='/' data-link>Move to Page1</a>
        `
   
        $target.appendChild(element);
	}


}