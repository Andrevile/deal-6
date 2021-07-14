import Page__inner from "./1page__inner/page__inner.js";

export default class Page1 {

	constructor($target) {

        var element = document.createElement("div");
        element.innerHTML = `
            <a href='/ano' data-link>Move to page2</a>
        `
   
        new Page__inner(element)

        $target.appendChild(element);
	}

    setState(){

    }
    render(){
        
    }


}
