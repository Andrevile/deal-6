import Navbar from "../components/main-page/navbar/navbar.js"
import Productlists from "../components/base/product-lists/product-lists.js"

export default class Mainpage {

    state = {
       //상태정의
    }
    

	constructor($app) {

        this.navbar = new Navbar({$app});
        this.productlists = new Productlists({$app});
	}

    setState(){
        //리렌더링파트
    }

    render(){
        //렌더링파트
    }


}
