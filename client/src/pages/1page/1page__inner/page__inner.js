export default class Page__inner {
	constructor($target) {
		
        const div = document.createElement("div");
      
        div.innerHTML = `
                <div>
                    Inner 
                </div>
                `

        $target.appendChild(div);
	}

}
