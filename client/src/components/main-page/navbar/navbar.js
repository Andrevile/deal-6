import {createDOMwithSelector } from '../../../util/createDOMwithSelector'

export default class Mainnavbar {

	constructor({$app}) {
        this.$target = createDOMwithSelector("nav",'.main__nav')
        $app.appendChild(this.$target)
	}

    setState(){

    }

    render(){

    }


}
