/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/api.js":
/*!************************!*\
  !*** ./src/api/api.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "api": () => (/* binding */ api)
/* harmony export */ });
const API_ENDPOINT = '/api';

const getData = url => {
  return fetch(`${API_ENDPOINT}` + `${url}`).then(res => {
    return res.json();
  });
};

const postData = (url, data) => {
  return fetch(`${API_ENDPOINT}` + `${url}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.json();
  });
};

const putData = (url, data) => {
  return fetch(`${API_ENDPOINT}` + `${url}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.json();
  });
};

const deleteData = url => {
  return fetch(`${API_ENDPOINT}` + `${url}`, {
    method: 'DELETE'
  }).then(res => {
    return res.json();
  });
};

const api = {
  get: url => {
    return new Promise((resolve, reject) => {
      getData(url).then(data => {
        if (data.success) {
          resolve({
            success: true,
            data: data
          });
        } else {
          reject({
            success: false,
            message: data.message
          });
        }
      });
    });
  },
  post: (url, data) => {
    return new Promise((resolve, reject) => {
      postData(url, data).then(data => {
        if (data.success) {
          resolve({
            success: true,
            data: data
          });
        } else {
          reject({
            success: false,
            message: data.message
          });
        }
      });
    });
  },
  update: (url, data) => {
    return new Promise((resolve, reject) => {
      putData(url, data).then(data => {
        if (data.success) {
          resolve({
            success: true,
            data: data
          });
        } else {
          reject({
            success: false,
            message: data.message
          });
        }
      });
    });
  },
  delete: url => {
    return new Promise((resolve, reject) => {
      deleteData(url).then(data => {
        if (data.success) {
          resolve({
            success: true,
            data: data
          });
        } else {
          reject({
            success: false,
            message: data.message
          });
        }
      });
    });
  }
};

/***/ }),

/***/ "./src/components/base/alert/alert.js":
/*!********************************************!*\
  !*** ./src/components/base/alert/alert.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Alert)
/* harmony export */ });
/* harmony import */ var _alert_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.css */ "./src/components/base/alert/alert.css");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");


class Alert {
  constructor({
    $parent,
    onClick
  }) {
    this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('div', '.alert');
    $parent.appendChild(this.$target); // 채팅 구현시 render() 빼서 재사용

    this.$target.innerHTML = `
                <div class="alert__overlay"></div>
                <div class="alert__content">
                    <span class="alert__guide">정말로 삭제하시겠습니까?</span>
                    <div class="alert__checkOne">
                        <span class="alert__cancel">취소</span><span class="alert__confirm">삭제</span>
                    </div>
                </div>
              `;
    this.onClick = onClick;
    this.$confirmButton = document.querySelector('.alert__confirm');
    this.$target.addEventListener('click', e => {
      this.onClick(e);
    });
  }

  open() {
    this.$target.style.display = 'block';
  }

  close() {
    this.$target.style.display = 'none';
  }

}

/***/ }),

/***/ "./src/components/base/chat-list/chat-list.js":
/*!****************************************************!*\
  !*** ./src/components/base/chat-list/chat-list.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChatLists)
/* harmony export */ });
/* harmony import */ var _chat_list_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-list.css */ "./src/components/base/chat-list/chat-list.css");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ChatLists {
  constructor({
    $parent,
    initialState
  }) {
    _defineProperty(this, "state", []);

    this.state = initialState;
    this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('section', '.chatOutline');
    $parent.appendChild(this.$target);
    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    const result = this.state.map(chat => {
      return `
				<article class='chat'>
					
					<div class='chat__info'>
						<span class='chat__name'>${chat.name}</span>
						<span class='chat__content'>${chat.content}</span>
					</div>
					
                    <div class='chat__rightSide'>
                        <div>
                            <span class='chat__time'>${chat.time}</span>
                            ${this.createChatCount(chat.count)}
                        </div>
                        <img class='chat__imgs' src=${chat.imgPath}>
                    </div>
						
				</article>
			`;
    }).join('');
    this.$target.innerHTML = result;
  }

  createChatCount(count) {
    return count > 0 ? `<div class='chat__count'><span>${count}</span></div>` : ``;
  }

  open() {
    this.$target.style.display = 'block';
  }

  close() {
    this.$target.style.display = 'none';
  }

}

/***/ }),

/***/ "./src/components/base/large-button/large-button.js":
/*!**********************************************************!*\
  !*** ./src/components/base/large-button/large-button.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LargeButton)
/* harmony export */ });
/* harmony import */ var _large_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./large-button.css */ "./src/components/base/large-button/large-button.css");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class LargeButton {
  constructor({
    $parent,
    initialState,
    onClick
  }) {
    _defineProperty(this, "state", '');

    this.state = initialState;
    if (this.state === '회원가입') this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('button', '.largeButton', '.disable');else this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('button', '.largeButton');
    this.onClick = onClick;
    $parent.appendChild(this.$target);
    this.$target.innerText = this.state;
    this.$target.addEventListener('click', e => {
      this.onClick(e);
    });
  }

}

/***/ }),

/***/ "./src/components/base/navigation-bar/navigation-bar.js":
/*!**************************************************************!*\
  !*** ./src/components/base/navigation-bar/navigation-bar.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavigationBar)
/* harmony export */ });
/* harmony import */ var _navigation_bar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation-bar.css */ "./src/components/base/navigation-bar/navigation-bar.css");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class NavigationBar {
  // 글쓰기 모드 변수
  // 글쓰기 모드 변수
  constructor({
    $parent,
    initialState,
    onClick,
    isModal = false
  }) {
    _defineProperty(this, "state", '');

    _defineProperty(this, "$target", null);

    _defineProperty(this, "isUser", false);

    _defineProperty(this, "isModal", false);

    _defineProperty(this, "doneIcon", false);

    _defineProperty(this, "activeDoneIcon", false);

    this.isModal = isModal;
    this.state = initialState;
    console.log('hi');

    if (this.state[0] === '글쓰기') {
      this.state[1] === true ? this.activeDoneIcon = true : '';
      this.state = this.state[0];
    }

    this.setTarget(this.state);
    $parent.appendChild(this.$target);
    this.$target.addEventListener('click', e => {
      this.bindPrevButtonClickEvent(e);
    });
    this.$icon = document.querySelector('.nav__icon');
    this.onClick = onClick;
    this.$target.addEventListener('click', e => {
      if (e.target.className === 'nav__doneActive') {
        this.onClick();
      } // 추후 채팅 나가기에 대한 이벤트도 여기!

    });
    this.render();
  }

  setState(nextState) {
    if (this.state === '글쓰기') {
      if (nextState) this.activeDoneIcon = true;else this.activeDoneIcon = false;
    } else {
      this.state = nextState;
    }

    this.render();
  }

  render() {
    this.$target.innerHTML = `
            <img class='nav__prev' src='https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/arrow_back_black.svg'/>
            <span>
                ${this.state}
            </span>
            <div class='nav__icon'>
                ${this.createExitIcon()}
				${this.createDoneIcon()}
            </div>
        `;
  }

  setTarget(initialState) {
    switch (initialState) {
      case '내 동네 설정하기':
      case '회원가입':
      case '로그인':
      case '내 계정':
      case '메뉴':
      case '카테고리':
        this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('nav', '.nav--grey');
        break;

      case '채팅하기':
        this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('nav', '.nav--white');
        break;

      case '글쓰기':
        this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('nav', '.nav--white');
        this.doneIcon = true;
        break;

      default:
        this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('nav', '.nav--white');
        this.isUser = true;
        break;
    }
  }

  createDoneIcon() {
    if (this.doneIcon) {
      if (this.activeDoneIcon) return `<img class='nav__doneActive' src="https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/done_active.svg" />`;
      return `<img class='nav__done' src="https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/done.svg" />`;
    }

    return ``;
  }

  createExitIcon() {
    if (this.isUser) return `<img class='nav__exit' src="https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/exit.svg" />`;
    return ``;
  }

  bindPrevButtonClickEvent(e) {
    if (this.isModal === true) {
      this.onClick(e, 0);
    } else if (e.target.className === 'nav__prev' && this.state === '메뉴' || e.target.className === 'nav__prev' && this.state === '내 계정' || e.target.className === 'nav__prev' && this.state === '로그인') {
      this.onClick(e);
      setTimeout(() => {
        history.back(-1);
      }, 400);
    } else if (e.target.className === 'nav__prev') history.back(-1);
  }

}

/***/ }),

/***/ "./src/components/base/product-list/product-list.js":
/*!**********************************************************!*\
  !*** ./src/components/base/product-list/product-list.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductLists)
/* harmony export */ });
/* harmony import */ var _product_list_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-list.css */ "./src/components/base/product-list/product-list.css");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import ProductModal from '../product-modal/product-modal';

class ProductLists {
  constructor({
    $parent,
    initialState,
    refreshState
  }) {
    _defineProperty(this, "state", []);

    this.state = initialState;
    this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('section', '.productOutline');
    $parent.appendChild(this.$target);
    this.$name = $parent.className;
    this.refreshState = refreshState;
    this.render();
    /*this.productModal = new ProductModal({
    	$parent: this.$target,
    }); 보류; */
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.$target.innerHTML = this.createView();

    if (this.$name !== 'menuWrapper') {
      this.observeTag();
    }
  }

  createView() {
    /*
    	pk를 이용해 data-link 에 삽입
    */
    return this.state.map(product => {
      return `
			<article class='product'>
				
				<img class='product__imgs' src=${product.imgPath} data-link=${product.pk ? '/detail/1' : '/detail'}>
			
				<div class='product__info'>
					<span class='product__name' data-link='/detail/${product.pk}'>${product.name}</span>
					<div>
						<span class='product__location' data-link='/detail/${product.pk}'>${product.location} ∙</span>
						<span class='product__time' data-link='/detail/${product.pk}'>${product.time}</span>
					</div>
					<span class='product__price' data-link='/detail/${product.pk}'>${product.price}</span>
				</div>
				
				${this.isUserOwnProduct(product.seller, product.user) ? this.createOptionButton() : this.createLikeButton(product.like)}
				
				

				<div class='rightBottom' >
					${this.createChatCount(product.chatCount)}
					${this.createLikeCount(product.likeCount)}
				</div>
					
			</article>
		`;
    }).join('') + `<div id="end" class='product'></div>`;
    /*
    	고려할 부분!
    	1. user와 그 상품 주인인 경우 : like 대신 ':' 아이콘
    	2. product에 user id field 넣어서 userid와 비교한다.
    	3. like 모델이 따로 필요할듯? user와 product를 엮은
    */
  }

  isUserOwnProduct(seller, user) {
    return seller === user;
  }

  createOptionButton() {
    return `<img class="product__option" src="https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/more_vert_grey.svg" />`;
  }

  createLikeButton(like) {
    return like === 'T' ? `<img class="product__like" src="https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/favorite.svg" />` : `<img
					class="product__like"
					src="https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/favorite_border_mini.svg"
				/>`;
  }

  createChatCount(count) {
    return count > 0 ? `<img class='rightBottom__chat' src='https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/chat_bubble_mini.svg' />
						<span>${count}</span>` : ``;
  }

  createLikeCount(count) {
    return count > 0 ? `<img class='rightBottom__like' src='https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/favorite_border_mini.svg' />
						<span>${count}</span>` : ``;
  }

  observeTag() {
    // lazy loading , infinite Scroll 담당
    const observerCallback = (entries, observer) => {
      entries.forEach(async entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'end') {
            observer.unobserve(entry.target);
            endTag.classList.add('spinner');
            endTag.innerHTML = `<img class='rightBottom__like' src='https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/loading-loader-svgrepo-com.svg' />`; // const data = await api.randomCats();
            // if (data.success) {
            // if (data.data.length > 0) {
            // this.refreshState(this.state);
            // this.refreshState([...this.state, ...sampleData]);

            this.state = [...this.state, ...sampleData]; // } else {
            // endTag.classList.remove('spinner');
            // endTag.innerText = `❗No More Stuff❗`;

            setTimeout(() => {
              endTag.innerHTML = '';
              endTag.classList.remove('spinner');
              this.setState(this.state);
            }, 2000); // }
            // } else {
            // 	alert(data.message);
            // }
          } else {
            observer.unobserve(entry.target);
          }
        }
      });
    };

    const endTag = this.$target.querySelector('#end');
    const items = this.$target.querySelectorAll('.product');
    const observer = new IntersectionObserver(observerCallback);
    items.forEach(item => observer.observe(item));
  }

  open() {
    this.$target.style.display = 'block';
  }

  close() {
    this.$target.style.display = 'none';
  }

}
const sampleData = [{
  user: '',
  // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
  seller: '피카소',
  price: '₩35,000,000',
  name: '피카소의 명화',
  location: '문래동',
  category: '기타 중고물품',
  imgPath: 'https://picsum.photos/200',
  time: '3분전',
  chatCount: 3,
  likeCount: 2,
  like: 'T',
  pk: 0
}, {
  user: '피카소',
  // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
  seller: '피카소',
  price: '₩35,000,000',
  name: '피카소의 명화',
  location: '인창동',
  category: '디지털기기',
  imgPath: 'https://picsum.photos/200/300',
  time: '3분전',
  chatCount: 3,
  likeCount: 2,
  like: 'T',
  pk: 0
}, {
  user: '',
  // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
  seller: '피카소',
  price: '₩35,000,000',
  name: '피카소의 명화',
  location: '인창동',
  category: '기타 중고물품',
  imgPath: 'https://picsum.photos/id/1/200/300',
  time: '3분전',
  chatCount: 3,
  likeCount: 2,
  like: 'T',
  pk: 0
}, {
  user: '',
  // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
  seller: '피카소',
  price: '₩35,000,000',
  name: '피카소의 명화',
  location: '인창동',
  category: '기타 중고물품',
  imgPath: 'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
  time: '3분전',
  chatCount: 3,
  likeCount: 2,
  like: 'F',
  pk: 0
}, {
  user: '피카소',
  // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
  seller: '피카소',
  price: '₩35,000,000',
  name: '피카소의 명화',
  location: '인창동',
  category: '기타 중고물품',
  imgPath: 'https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w',
  time: '3분전',
  chatCount: 3,
  likeCount: 2,
  like: 'T',
  pk: 0
}, {
  user: '',
  // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
  seller: '피카소',
  price: '₩35,000,000',
  name: '피카소의 명화',
  location: '인창동',
  category: '기타 중고물품',
  imgPath: 'https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g',
  time: '3분전',
  chatCount: 3,
  likeCount: 2,
  like: 'T',
  pk: 0
}, {
  user: '피카소',
  // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
  seller: '피카소',
  price: '₩35,000,000',
  name: '피카소의 명화',
  location: '인창동',
  category: '기타 중고물품',
  imgPath: 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
  time: '3분전',
  chatCount: 3,
  likeCount: 2,
  like: 'F',
  pk: 0
}, {
  user: '',
  // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
  seller: '피카소',
  price: '₩35,000,000',
  name: '피카소의 명화',
  location: '인창동',
  category: '기타 중고물품',
  imgPath: 'https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs',
  time: '3분전',
  chatCount: 3,
  likeCount: 2,
  like: 'T',
  pk: 0
}, {
  user: '피카소',
  // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
  seller: '피카소',
  price: '₩35,000,000',
  name: '피카소의 명화',
  location: '인창동',
  category: '기타 중고물품',
  imgPath: 'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
  time: '3분전',
  chatCount: 3,
  likeCount: 2,
  like: 'T',
  pk: 0
}];

/***/ }),

/***/ "./src/components/base/product-modal/product-modal.js":
/*!************************************************************!*\
  !*** ./src/components/base/product-modal/product-modal.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductModal)
/* harmony export */ });
/* harmony import */ var _product_modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-modal.css */ "./src/components/base/product-modal/product-modal.css");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");


class ProductModal {
  constructor({
    $parent,
    onClick
  }) {
    this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('div', '.productModal');
    $parent.appendChild(this.$target);
    this.$target.innerHTML = `
			<div class='productModal__wrapper'>
                <div class="productModal__overlay"></div>
                <div class="productModal__content">
                    <div class="productModal__update">수정하기</div>
                    <div class="productModal__delete">삭제하기</div>
                </div>
			</div>
              `;
    this.onClick = onClick;
    this.$target.addEventListener('click', e => {
      this.onClick(e);
    });
  }

  open() {
    this.$target.style.display = 'block';
  }

  close() {
    this.$target.style.display = 'none';
  }

}

/***/ }),

/***/ "./src/components/base/redirect/redirect.js":
/*!**************************************************!*\
  !*** ./src/components/base/redirect/redirect.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Redirect)
/* harmony export */ });
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");
/* harmony import */ var _redirect_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redirect.css */ "./src/components/base/redirect/redirect.css");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Redirect {
  constructor({
    $parent,
    initialState
  }) {
    _defineProperty(this, "state", {
      link: '',
      message: '',
      status: '',
      content: ''
    });

    this.state = initialState;
    this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_0__.createDOMWithSelector)('div', '.redirect');
    $parent.appendChild(this.$target);
    this.$target.innerHTML = `
		    <button class='redirect__button' data-link=${this.state.link}>${this.state.message}</button>
		    <img src="https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/notfound.gif">
		    <h1>${this.state.status}</h1>
		    <div>${this.state.content}</div>
		`;
  }

}

/***/ }),

/***/ "./src/components/detail-page/footer/footer.js":
/*!*****************************************************!*\
  !*** ./src/components/detail-page/footer/footer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.css */ "./src/components/detail-page/footer/footer.css");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");
/* harmony import */ var _constants_icon_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/icon-path */ "./src/constants/icon-path.js");




const isUserOwnProduct = (seller, user) => seller === user;

class Footer {
  constructor({
    $parent,
    initialState
  }) {
    this.state = initialState;
    this.wishIconOn = false; // api 구현 이전이므로 임시로 넣음

    /*
    	API 요청으로 wishIconOn 수정
    	
    	getIsProductWishedByUser()
    	.resolve(()=> {
    		this.wishIconOn = result?;
    	})
    	.reject(() => {
    		console.log("api 요청 에러");
    	})
    */

    this.$footer = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('footer', '.detail__footer');
    this.$footer.addEventListener('click', this.wishIconHandler);
    $parent.appendChild(this.$footer);
    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.$footer.innerHTML = `
            <div class="inner">
                <div class='wish'>
                    ${this.createWishImgButtonTemplate()}
                </div>    
                <div class='vertical-line'></div>
                <div>${this.state.price}원</div>
            </div>
            ${this.createOptionButtonTemplate()}
        `;
  }

  createWishImgButtonTemplate() {
    return this.wishIconOn ? `<img src=${_constants_icon_path__WEBPACK_IMPORTED_MODULE_2__.FAVORITE_ICON} class='wish-icon' />` : `<img src=${_constants_icon_path__WEBPACK_IMPORTED_MODULE_2__.FAVORITE_BORDER_MINI_ICON} class='wish-icon' />`;
  }

  createOptionButtonTemplate() {
    return `
		<button 
				class="option-button"
				data-link="${'/chat'}
			">
			${isUserOwnProduct(this.state.seller, this.state.user) ? '채팅 목록 보기' : '문의하기'}
			</button>
		`;
  }

  wishIconHandler({
    target
  }) {
    // 이벤트 위임 방식
    if (target.className === 'wish-icon') {
      const changeWishIconState = target => {
        target.src = this.wishIconOn ? _constants_icon_path__WEBPACK_IMPORTED_MODULE_2__.FAVORITE_ICON : _constants_icon_path__WEBPACK_IMPORTED_MODULE_2__.FAVORITE_BORDER_MINI_ICON;
      };

      let response = {
        statusCode: 200
      }; // 개발 단계 임시 변수

      /*
      	API 요청으로 wishIconOn 수정
      	유저가 이 아이템을 좋아하는지 서버에 조회한 결과값을 기준으로 데이터가 존재한다면
      	this.wishIconOn = 요청결과;
      		this.postWishStateByUser()
      	.resolve(() => {
      		if (response.statusCode === 200) {
      			this.wishIconOn = !this.wishIconOn;
      			changeWishIconState(target);
      		}
      	})
      	.reject(callback)
      */

      if (response.statusCode === 200) {
        this.wishIconOn = !this.wishIconOn;
        changeWishIconState(target);
      }
    }
  }

  getIsProductWishedByUser() {
    /**
     * get api 요청
     */
    // return new Promise();
  }

  postWishStateByUser() {
    /**
     * post api 요청
     */
    //  return new Promise();
  }

}

/***/ }),

/***/ "./src/components/detail-page/section/img-container/img-container.js":
/*!***************************************************************************!*\
  !*** ./src/components/detail-page/section/img-container/img-container.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImgContainer)
/* harmony export */ });
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");
/* harmony import */ var _img_container_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img-container.css */ "./src/components/detail-page/section/img-container/img-container.css");



const isClassSelector = selector => selector[0] === '.';

const createButton = (text, ...selectors) => {
  const button = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_0__.createDOMWithSelector)('button', ...selectors);
  button.innerText = text;
  return button;
};

const createImgTemplate = (src, ...selectors) => {
  return ` 
		<img class="${selectors.filter(isClassSelector).map(selector => selector.slice(1)).join(' ')}" src=${src} />
	`;
};

class ImgContainer {
  constructor({
    $parent,
    initialState
  }) {
    this.state = initialState;
    this.$parent = $parent;
    this.currentImgIndex = 0;
    this.$imgContainer = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_0__.createDOMWithSelector)('div', '.img-container');
    this.$imgContainer.style.width = `${20 * this.state.length}rem`;
    $parent.appendChild(this.$imgContainer);
    /*
    이미지 컨테이너를 움직이는 버튼을 생성합니다.
    */

    this.$prevButton = createButton('<', '.move', '.prev');
    this.$nextButton = createButton('>', '.move', '.next');

    const isOutOfBound = move => {
      return this.currentImgIndex + move >= this.state.length || this.currentImgIndex + move < 0;
    };

    const movePrevOrNextHandler = move => {
      if (isOutOfBound(move)) return;
      this.$imgContainer.style.transform = `translate(${-20 * (this.currentImgIndex + move)}rem)`;
      this.currentImgIndex += move;
    };

    this.$prevButton.addEventListener('click', () => movePrevOrNextHandler(-1));
    this.$nextButton.addEventListener('click', () => movePrevOrNextHandler(1));
    window.addEventListener('keydown', function (e) {
      const keyCode = e.keyCode;

      if (keyCode == 37) {
        // left key
        e.preventDefault();
        movePrevOrNextHandler(-1);
      } else if (keyCode == 39) {
        // right key
        e.preventDefault();
        movePrevOrNextHandler(1);
      }
    });
    this.$buttonContainer = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_0__.createDOMWithSelector)('div', '.next-and-prev');
    this.$buttonContainer.appendChild(this.$prevButton);
    this.$buttonContainer.appendChild(this.$nextButton);
    $parent.appendChild(this.$buttonContainer);
    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.$imgContainer.innerHTML = `
			${this.state.map(src => createImgTemplate(src, '.gradient')).join('\n')}	
		`;
  }

}

/***/ }),

/***/ "./src/components/detail-page/section/info-container/info-container.js":
/*!*****************************************************************************!*\
  !*** ./src/components/detail-page/section/info-container/info-container.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfoContainer)
/* harmony export */ });
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");
/* harmony import */ var _info_container_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-container.css */ "./src/components/detail-page/section/info-container/info-container.css");


const STATUS = ['판매중', '예약중', '판매완료'];

const isUserOwnProduct = (seller, user) => seller === user;

class InfoContainer {
  constructor({
    $parent,
    initialState
  }) {
    this.state = initialState;
    this.$infoContainer = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_0__.createDOMWithSelector)('div', '.info-container');
    $parent.appendChild(this.$infoContainer);
    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    const createStatusSelectButtonTemplate = ({
      status,
      seller,
      user
    }) => {
      status = Math.min(status, 2);
      return isUserOwnProduct(seller, user) ? `
					<select name="status" value=${status} class="info status">
					${STATUS.map((stat, i) => {
        return status === i ? `<option value=${i} selected="selected"}>${stat}</option>` : `<option value=${i} }>${stat}</option>`;
      }).join('\n')}
					</select>
				` : '';
    };

    const createProductHeaderTemplate = ({
      title,
      category,
      createdAt
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

    const createProductDescriptionTemplate = ({
      content
    }) => {
      return `<div class='info description'>${content}</div>`;
    };

    const createProductCountInfoTemplate = ({
      chatCount,
      wishCount,
      visitCount
    }) => {
      return `
				<div class='info count sub-header-container'>
					<span class='grey-text small-text'>채팅 ${chatCount}∙관심 ${wishCount}∙조회 ${visitCount}</span>
				</div>
			`;
    };

    const createProductSellerInfoTemplate = ({
      seller,
      location
    }) => {
      return `
				<div class='info seller small-text'>
					<div>판매자 정보</div>
					<div>
						<span>${seller}</span>
						<span class='grey2-text'>${location}</span>
					</div>
				</div>
			`;
    };

    this.$infoContainer.innerHTML = `
			${createStatusSelectButtonTemplate(this.state)}
			${createProductHeaderTemplate(this.state)}
			${createProductDescriptionTemplate(this.state)}
			${createProductCountInfoTemplate(this.state)}
			${createProductSellerInfoTemplate(this.state)}
		`;
  }

}

/***/ }),

/***/ "./src/components/detail-page/section/section.js":
/*!*******************************************************!*\
  !*** ./src/components/detail-page/section/section.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DetailSection)
/* harmony export */ });
/* harmony import */ var _section_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section.css */ "./src/components/detail-page/section/section.css");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");
/* harmony import */ var _img_container_img_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img-container/img-container */ "./src/components/detail-page/section/img-container/img-container.js");
/* harmony import */ var _info_container_info_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-container/info-container */ "./src/components/detail-page/section/info-container/info-container.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class DetailSection {
  constructor({
    $parent,
    initialState
  }) {
    _defineProperty(this, "$imgContainer", null);

    _defineProperty(this, "index", 0);

    this.state = initialState;
    this.$section = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('section', '.section');
    this.$imgContainerWrapper = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('div', '.img-container-wrapper');
    this.$infoContainerWrapper = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('div', '.info-container-wrapper');
    this.$imgContainer = new _img_container_img_container__WEBPACK_IMPORTED_MODULE_2__.default({
      $parent: this.$imgContainerWrapper,
      initialState: this.state.imgPath
    });
    this.$infoContainer = new _info_container_info_container__WEBPACK_IMPORTED_MODULE_3__.default({
      $parent: this.$infoContainerWrapper,
      initialState: this.state
    });
    this.$section.appendChild(this.$imgContainerWrapper);
    this.$section.appendChild(this.$infoContainerWrapper);
    $parent.appendChild(this.$section);
  }

  setState(nextState) {
    this.state = nextState;
    this.$imgContainer.setState(this.state.imgPath);
    this.$infoContainer.setState(this.state);
  }

}

/***/ }),

/***/ "./src/components/detail-page/tool-bar/tool-bar.js":
/*!*********************************************************!*\
  !*** ./src/components/detail-page/tool-bar/tool-bar.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToolBar)
/* harmony export */ });
/* harmony import */ var _tool_bar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool-bar.css */ "./src/components/detail-page/tool-bar/tool-bar.css");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");
/* harmony import */ var _constants_icon_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/icon-path */ "./src/constants/icon-path.js");




const isUserOwnProduct = (seller, user) => seller === user;

class ToolBar {
  constructor({
    $parent,
    initialState,
    onClick
  }) {
    this.state = initialState;
    this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('nav', '.detail__nav');
    $parent.appendChild(this.$target);
    this.onClick = onClick;
    this.$target.addEventListener('click', e => {
      this.onClick(e);
    });
    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.$target.innerHTML = `
			<img src=${_constants_icon_path__WEBPACK_IMPORTED_MODULE_2__.ARROW_BACK_ICON} class='back' />
			${isUserOwnProduct(this.state.seller, this.state.user) ? `<img src=${_constants_icon_path__WEBPACK_IMPORTED_MODULE_2__.MORE_VERT_ICON} class='option' />` : ''}
		`;
  }

}

/***/ }),

/***/ "./src/components/location-page/body/body.js":
/*!***************************************************!*\
  !*** ./src/components/location-page/body/body.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BodyPart)
/* harmony export */ });
/* harmony import */ var _body_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body.css */ "./src/components/location-page/body/body.css");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class BodyPart {
  constructor({
    $parent,
    initialState,
    onClick
  }) {
    _defineProperty(this, "state", []);

    this.state = initialState;
    this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('div', '.location');
    $parent.appendChild(this.$target);
    this.$target.innerHTML = `
        <div class='location__span'>
            <span>지역은 최소 1개 이상</span>
            <br> 
            <span>최대 2개까지 설정 가능해요.</span>
        </div>
        <div class='location__btnOuter'></div>
        `;
    this.onClick = onClick;
    this.$target.addEventListener('click', e => {
      let idx = 0;
      if (e.target.dataset.idx) idx = e.target.dataset.idx;
      this.onClick(e, idx);
    });
    this.$Button = document.querySelector('.location__btnOuter');
    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    let result = '';
    result += this.createMainButton();
    result += this.createNormalButton();
    result += this.createPlusButton();
    this.$Button.innerHTML = result;
  }

  createMainButton() {
    return this.state.length ? `
            <button class='location__mainBtn'>
                <span>
                    ${this.state[0]}
                </span>
                <img class='location__cancelBtn' src="https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/cancel.svg" data-idx='0'/>
            </button>
            ` : ``;
  }

  createNormalButton() {
    return this.state.length > 1 ? `
            <button class='location__normalBtn'>
                <span>
                    ${this.state[1]}
                </span>
                <img class='location__cancelBtn' src="https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/cancel_baemin.svg" data-idx='1'/>
            </button>
            ` : ``;
  }

  createPlusButton() {
    return this.state.length < 2 ? `
            <button class='location__plusBtn'>
                <span class='location__plus'>
                    +
                </span>
            </button>
            ` : ``;
  }

}

/***/ }),

/***/ "./src/components/location-page/location-modal/location-modal.js":
/*!***********************************************************************!*\
  !*** ./src/components/location-page/location-modal/location-modal.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocationModal)
/* harmony export */ });
/* harmony import */ var _location_modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-modal.css */ "./src/components/location-page/location-modal/location-modal.css");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");


class LocationModal {
  constructor({
    $parent,
    onClick
  }) {
    this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('div', '.modal');
    $parent.appendChild(this.$target);
    this.$target.innerHTML = `
                <div class="modal__overlay"></div>
                <div class="modal__content">
                    <span class="modal__guide">우리 동네를 입력하세요</span>
                    <input class="modal__input" type='text' placeholder="시∙구 제외, 동만 입력">
                    <div class="modal__checkOne">
                        <span class="modal__cancel">취소</span><span class="modal__confirm">확인</span>
                    </div>
                </div>
              `;
    this.onClick = onClick;
    this.$input = document.querySelector('.modal__input');
    this.$confirmButton = document.querySelector('.modal__confirm');
    this.$input.addEventListener('keydown', e => {
      this.bindInputEvent(e);
    });
    this.$target.addEventListener('click', e => {
      let inputValue = this.$input.value;
      this.onClick(e, inputValue);
    });
  }

  open() {
    this.$target.style.display = 'block';
  }

  close() {
    this.$target.style.display = 'none';
  }

  bindInputEvent(e) {
    this.checkRegexEvent(e);
    this.checkLengthEvent(e);
  }

  checkRegexEvent(e) {
    const regex = /[^ㄱ-ㅎ,가-힣,0-9|]/g;
    e.target.value = e.target.value.replace(regex, '');
  }

  checkLengthEvent(e) {
    let length = e.target.value.length;
    if (length > 0) this.$confirmButton.classList.add('active');else this.$confirmButton.classList.remove('active');
  }

}

/***/ }),

/***/ "./src/components/main-page/category/body/body.js":
/*!********************************************************!*\
  !*** ./src/components/main-page/category/body/body.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Body)
/* harmony export */ });
/* harmony import */ var _body_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body.css */ "./src/components/main-page/category/body/body.css");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");


class Body {
  constructor({
    $parent,
    initialState,
    onClick
  }) {
    this.state = initialState;
    this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('section', '.categoryList');
    $parent.appendChild(this.$target);
    this.$Wrapper = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('div', '.ctgWrapper');
    this.$target.appendChild(this.$Wrapper);
    this.$target.innerHTML = this.renderCategories();
    this.onClick = onClick; // this.$confirmButton = document.querySelector('.alert__confirm');

    this.$target.addEventListener('click', e => {
      this.onClick(e, e.target.dataset.idx);
    });
  }

  open() {
    this.$target.style.display = 'block';
  }

  close() {
    this.$target.style.display = 'none';
  }

  renderCategories() {
    return this.state.map((category, idx) => {
      return `
                <article class='categoryList__container'>
                    <div class='categoryList__img' data-idx=${idx}>
                    </div>
                    <span>${category}</span>
                </article>
           `;
    }).join('');
  }

}

/***/ }),

/***/ "./src/components/main-page/category/category.js":
/*!*******************************************************!*\
  !*** ./src/components/main-page/category/category.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var _category_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.css */ "./src/components/main-page/category/category.css");
/* harmony import */ var _base_navigation_bar_navigation_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/navigation-bar/navigation-bar */ "./src/components/base/navigation-bar/navigation-bar.js");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");
/* harmony import */ var _body_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./body/body */ "./src/components/main-page/category/body/body.js");




const mode = '카테고리';
class Category {
  constructor({
    $parent,
    CATEGORY_LIST,
    onClick
  }) {
    this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_2__.createDOMWithSelector)('div', '.categoryWrapper');
    $parent.appendChild(this.$target);
    this.onClick = onClick;
    this.navigationBar = new _base_navigation_bar_navigation_bar__WEBPACK_IMPORTED_MODULE_1__.default({
      $parent: this.$target,
      initialState: mode,
      isModal: true,
      onClick: (e, idx) => {
        this.onClick(e, idx);
      }
    });
    this.bodyPart = new _body_body__WEBPACK_IMPORTED_MODULE_3__.default({
      $parent: this.$target,
      initialState: CATEGORY_LIST,
      onClick: (e, idx) => {
        this.onClick(e, idx);
      }
    }); // this.onClick = onClick;
    // this.$confirmButton = document.querySelector('.alert__confirm');
    // this.$target.addEventListener('click', (e) => {
    // 	this.onClick(e);
    // });
  }

  open() {
    this.$target.classList.add('active');
  }

  close() {
    this.$target.classList.remove('active');
  }

}

/***/ }),

/***/ "./src/components/main-page/location-mini-modal/location-mini-modal.js":
/*!*****************************************************************************!*\
  !*** ./src/components/main-page/location-mini-modal/location-mini-modal.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MiniModal)
/* harmony export */ });
/* harmony import */ var _location_mini_modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-mini-modal.css */ "./src/components/main-page/location-mini-modal/location-mini-modal.css");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class MiniModal {
  constructor({
    $parent,
    initialState,
    onClick
  }) {
    _defineProperty(this, "state", []);

    this.state = initialState;
    this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('div', '.miniModal');
    $parent.appendChild(this.$target); // 채팅 구현시 render() 빼서 재사용

    this.$target.innerHTML = `
			<div class='miniModal__wrapper'>
                <div class="miniModal__overlay"></div>
                <div class="miniModal__content">
                </div>
			</div>
              `;
    this.onClick = onClick;
    this.$content = document.querySelector('.miniModal__content');
    this.$target.addEventListener('click', e => {
      this.onClick(e, e.target.dataset.idx);
    });
    this.render();
  }

  render() {
    this.$content.innerHTML = this.renderLocationName() + `<div data-link='/location'>내 동네 설정하기</div>`;
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  renderLocationName() {
    return this.state.map((locationName, idx) => `<div class="miniModal__location" data-idx=${idx}>${locationName}</div>`).join('');
  }

  open() {
    this.$target.style.display = 'block';
  }

  close() {
    this.$target.style.display = 'none';
  }

}

/***/ }),

/***/ "./src/components/main-page/navigation-bar/navigation-bar.js":
/*!*******************************************************************!*\
  !*** ./src/components/main-page/navigation-bar/navigation-bar.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainNavbar)
/* harmony export */ });
/* harmony import */ var _navigation_bar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation-bar.css */ "./src/components/main-page/navigation-bar/navigation-bar.css");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class MainNavbar {
  constructor({
    $parent,
    initialState,
    onClick
  }) {
    _defineProperty(this, "state", '');

    this.state = initialState;
    this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('nav', '.nav');
    $parent.appendChild(this.$target);
    this.onClick = onClick;
    this.$target.innerHTML = `
            <div class='nav__category'>
                <img class='nav__categoryImg' src='https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/category.svg' alt='category'>
            </div>
            <div class='nav__location'>
                
            </div>
            <div class='nav__rightSide'>
                <img src='https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/account.svg' alt='profile' data-link="/user">
                <img src='https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/menu.svg' data-link='/menu' alt='menu'>
            </div>
        `;
    this.$target.addEventListener('click', e => {
      this.onClick(e);
    });
    this.$location = document.querySelector('.nav__location');
    this.render();
  }

  setState(newLocationName) {
    this.state = newLocationName;
    this.render();
  }

  render() {
    this.$location.innerHTML = `
            <img class='nav__locationIcon' src='https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/location.svg' alt='location'>
            <span class='nav__locationName'>${this.state}</span>
        `;
  }

}

/***/ }),

/***/ "./src/components/main-page/write-post-button/write-post-button.js":
/*!*************************************************************************!*\
  !*** ./src/components/main-page/write-post-button/write-post-button.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WritePostButton)
/* harmony export */ });
/* harmony import */ var _write_post_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./write-post-button.css */ "./src/components/main-page/write-post-button/write-post-button.css");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");


class WritePostButton {
  constructor({
    $parent
  }) {
    this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('button', '.postBtn');
    $parent.appendChild(this.$target);
    this.$target.innerHTML = `
            <div data-link='/writing'>
                <span data-link='/writing'>+</span>
            </div>
            
        `;
  }

}

/***/ }),

/***/ "./src/components/menu-page/main-navigation-bar/main-navigation-bar.js":
/*!*****************************************************************************!*\
  !*** ./src/components/menu-page/main-navigation-bar/main-navigation-bar.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavigationBar)
/* harmony export */ });
/* harmony import */ var _main_navigation_bar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-navigation-bar.css */ "./src/components/menu-page/main-navigation-bar/main-navigation-bar.css");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class NavigationBar {
  constructor({
    $parent,
    initialState,
    onClick
  }) {
    _defineProperty(this, "state", '1');

    this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('nav', '.mainNav');
    $parent.appendChild(this.$target);
    this.state = initialState;
    this.$target.innerHTML = `      
            <div class='mainNav__inner'>
                <div class='mainNav__sell active'>
                    <span data-idx='1'>판매목록</span>
                </div>
            </div>
            <div class='mainNav__inner'>
                <div class='mainNav__chat'>
                    <span data-idx='2'>채팅</span>
                </div>
            </div>
            <div class='mainNav__inner'>
                <div class='mainNav__interest'>
                    <span data-idx='3'>관심목록</span>
         
                </div>
            </div>
        `;
    this.onClick = onClick;
    this.$sell = document.querySelector('.mainNav__sell');
    this.$chat = document.querySelector('.mainNav__chat');
    this.$interest = document.querySelector('.mainNav__interest');
    this.$target.addEventListener('click', e => {
      if (e.target.dataset.idx) this.onClick(e.target.dataset.idx);
    }); // 이벤트 위임부분
  }

  setState(nextState) {
    this.updateClassList(nextState);
  } // updateClassList : 각 버튼 css 토글


  updateClassList(nextState) {
    if (nextState === '1') {
      this.$sell.classList.toggle('active');

      if (this.state === '2') {
        this.$chat.classList.toggle('active');
      } else {
        this.$interest.classList.toggle('active');
      }

      this.state = nextState;
    } else if (nextState === '2') {
      this.$chat.classList.toggle('active');

      if (this.state === '1') {
        this.$sell.classList.toggle('active');
      } else {
        this.$interest.classList.toggle('active');
      }

      this.state = nextState;
    } else {
      this.$interest.classList.toggle('active');

      if (this.state === '2') {
        this.$chat.classList.toggle('active');
      } else {
        this.$sell.classList.toggle('active');
      }

      this.state = nextState;
    }
  }

}

/***/ }),

/***/ "./src/components/signup-page/body/body.js":
/*!*************************************************!*\
  !*** ./src/components/signup-page/body/body.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BodyPart)
/* harmony export */ });
/* harmony import */ var _body_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body.css */ "./src/components/signup-page/body/body.css");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");
/* harmony import */ var _components_base_large_button_large_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/base/large-button/large-button */ "./src/components/base/large-button/large-button.js");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal */ "./src/components/signup-page/modal/modal.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import { api } from '../../../api/api';

const mode = '회원가입';
class BodyPart {
  constructor({
    $parent
  }) {
    _defineProperty(this, "state", {
      id: '',
      location: ''
    });

    this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('form', '.signup');
    $parent.appendChild(this.$target);
    this.$target.innerHTML = `
        <div>
            아이디
        </div>
        <input class='largeInput' id='id' type="text" placeholder="영문 숫자 조합 20자 이하">
        <div>
            우리 동네
        </div>
        <input class='largeInput' id='location' type="text" placeholder="시∙구 제외, 동만 입력">
        `;
    this.$id = document.querySelector('#id');
    this.$location = document.querySelector('#location');
    this.button = new _components_base_large_button_large_button__WEBPACK_IMPORTED_MODULE_2__.default({
      $parent: this.$target,
      initialState: mode,
      onClick: e => {
        e.preventDefault();

        if (e.target.className === 'largeButton') {
          // api.post('/user/sign-up', {
          // 	id: this.$id.value,
          // 	location: this.$location.value,
          // })
          // 	.then(() => {
          this.welcomeModal.open(); // })
          // .catch((e) => {
          // 	alert(e.message);
          // });
        }
      }
    });
    this.welcomeModal = new _modal_modal__WEBPACK_IMPORTED_MODULE_3__.default({
      $parent,
      onClick: e => {
        if (e.target.className === 'welcome__overlay' // 외부 클릭 시 발생
        ) {
            this.welcomeModal.close();
          }
      }
    });
    this.$target.addEventListener('keyup', e => {
      if (e.target.id === 'id' || e.target.id === 'location') {
        e.target.id === 'id' ? this.checkIdRegex(e) : '';
        e.target.id === 'location' ? this.checkLocationRegex(e) : '';
        this.activateButton();
      }
    });
  }

  activateButton() {
    if (this.$id.value.length > 0 && this.$location.value.length > 0) {
      this.button.$target.classList.remove('disable');
    } else {
      this.button.$target.classList.add('disable');
    }
  }

  checkLocationRegex(e) {
    const regex = /[^ㄱ-ㅎ,가-힣,0-9|]/g;
    e.target.value = e.target.value.replace(regex, '');
  }

  checkIdRegex(e) {
    const regex = /[^a-z,A-Z,0-9|]/g;
    e.target.value = e.target.value.replace(regex, '');
    e.target.value = e.target.value.slice(0, 20);
  }

}

/***/ }),

/***/ "./src/components/signup-page/modal/modal.js":
/*!***************************************************!*\
  !*** ./src/components/signup-page/modal/modal.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Welcome)
/* harmony export */ });
/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.css */ "./src/components/signup-page/modal/modal.css");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");


class Welcome {
  constructor({
    $parent,
    onClick
  }) {
    this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('div', '.welcome');
    $parent.appendChild(this.$target);
    this.$target.innerHTML = `
                <div class="welcome__overlay"></div>
                <div class="welcome__content">
                    <span class="welcome__guide">회원가입을 축하합니다❗</span>
                    <div class="welcome__button">
                        <button data-link='/user'>로그인 하기</button>
                    </div>
                </div>
              `;
    this.onClick = onClick;
    this.$target.addEventListener('click', e => {
      this.onClick(e);
    });
  }

  open() {
    this.$target.style.display = 'block';
  }

  close() {
    this.$target.style.display = 'none';
  }

}

/***/ }),

/***/ "./src/components/user-page/section/section.js":
/*!*****************************************************!*\
  !*** ./src/components/user-page/section/section.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var _section_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section.css */ "./src/components/user-page/section/section.css");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");
/* harmony import */ var _base_large_button_large_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/large-button/large-button */ "./src/components/base/large-button/large-button.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Section {
  constructor({
    $parent,
    initialState,
    onClick
  }) {
    _defineProperty(this, "state", '');

    this.state = initialState;
    this.$parent = $parent;
    this.$section = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('section', '.section');
    this.$section.innerHTML = `
			<div class='uptag'></div>
			<div class='downtag'></div>
		`;
    $parent.appendChild(this.$section);
    this.$uptag = document.querySelector('.uptag');
    this.$downtag = document.querySelector('.downtag');
    this.onClick = onClick;
    this.render();
    this.$section.addEventListener('keyup', e => {
      if (e.target.className === 'input') {
        this.checkIdRegex(e);
      }
    });
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.createSectionContent(this.$uptag, this.state);
  }

  createSectionContent($parent, state) {
    if (isUserLogin(state)) {
      const $target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('div', '.text');
      $target.innerHTML = `${state}`;
      $parent.appendChild($target);
      this.largeButton = new _base_large_button_large_button__WEBPACK_IMPORTED_MODULE_2__.default({
        $parent,
        initialState: '로그아웃',
        onClick: e => {
          this.onClick(e);
        }
      });
    } else {
      const $target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('form', '.form');
      $target.innerHTML = `
				<input class="input" name="id" type="text" placeholder="아이디를 입력하세요.">
				<span class='login__alert'>없는 ID입니다❗❗❗</span>
			`;
      $parent.appendChild($target);
      this.$input = document.querySelector('.input');
      this.$alert = document.querySelector('.login__alert');
      this.largeButton = new _base_large_button_large_button__WEBPACK_IMPORTED_MODULE_2__.default({
        $parent: $target,
        initialState: '로그인',
        onClick: e => {
          this.onClick(e, this.$input.value);
        }
      });
      this.$downtag.innerHTML = `<button class="signup" data-link="/signup">회원가입</button>`;
    }
  }

  checkIdRegex(e) {
    const regex = /[^a-z,A-Z,0-9|]/g;
    e.target.value = e.target.value.replace(regex, '');
    e.target.value = e.target.value.slice(0, 20);
  }

}

function isUserLogin(state) {
  /* 로그인 되어 있는지 확인 */
  return state.length > 0;
}

/***/ }),

/***/ "./src/components/writing-page/body/body.js":
/*!**************************************************!*\
  !*** ./src/components/writing-page/body/body.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Body)
/* harmony export */ });
/* harmony import */ var _body_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body.css */ "./src/components/writing-page/body/body.css");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");
/* harmony import */ var _constants_category_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/category-list */ "./src/constants/category-list.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Body {
  constructor({
    $parent,
    initialState,
    refreshState
  }) {
    _defineProperty(this, "state", {});

    _defineProperty(this, "bindImageButtonEvent", e => {
      if (e.target.className === 'post__removeBtn' || e.target.className === 'post_X') {
        let idx = e.target.dataset.idx;
        let imageArray = this.state.imgPath;
        imageArray.splice(idx, 1);
        this.state.imgPath = imageArray;
        this.chcekValueAndRefreshState();
      }
    });

    this.state = initialState;
    this.refreshState = refreshState;
    this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('div', '.post');
    $parent.appendChild(this.$target);
    this.$target.innerHTML = `
            <div class='post__container'>
            </div>
           
            <hr>
            <input class='post__title' type='text' placeholder="글 제목" value=${this.state.title}>
            <div class='category'>
                <span>(필수)카테고리를 선택해주세요.</span>
                <div class='category__buttonOuter'>
                    
                </div>
            </div>
            <hr>
            <input class='post__price' type='text' placeholder="₩ 가격(선택사항)" value=${this.state.price}>
            <hr>
            <textarea class='post__content' placeholder="게시글 내용을 작성해주세요.">${this.state.content}</textarea>
        `;
    this.$container = document.querySelector('.post__container');
    this.$title = document.querySelector('.post__title');
    this.$price = document.querySelector('.post__price');
    this.$content = document.querySelector('.post__content');
    this.$category = document.querySelector('.category__buttonOuter');
    this.$title.addEventListener('keyup', e => {
      this.bindTitleEvent(e);
    });
    this.$price.addEventListener('keyup', e => {
      this.bindPriceKeyUpEvent(e);
    });
    this.$price.addEventListener('focusout', e => {
      this.rearrangePrice(e);
    });
    this.$content.addEventListener('keyup', e => {
      this.bindContentEvent(e);
    });
    this.$category.addEventListener('click', e => {
      this.bindCategoryEvent(e);
    });
    this.$container.addEventListener('click', e => {
      this.bindImageButtonEvent(e);
    }); // this.$container.addEventListener('change', (e) => {
    // 	console.log(this.$container);
    // 	if (e.target.id === '#image') {
    // 		console.log(e.target.value);
    // 	}
    // });
    // 위의 방식은 input file이 아닌 container가 출력.. (추후 알아봐야할듯!)

    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.$container.innerHTML = this.renderImageForm() + this.renderImage();
    this.$category.innerHTML = this.renderButton();
    this.$input = document.querySelector('#image');

    this.$input.onchange = e => {
      this.onChangeFileEvent(e);
    };
  }

  onChangeFileEvent(e) {
    let files = e.target.files; //api 호출 후 파일경로 받아옴 -> setState -> chcekValueAndRefreshState() 호출

    let formData = new FormData();
    formData.append('file', files[0]);
    fetch('/api/upload', {
      method: 'POST',
      body: formData
    }).then(res => {
      if (!res.ok) throw new Error('Http Error...');
      return res.json();
    }).then(data => {
      this.state.imgPath = [...this.state.imgPath, data.filePath];
      this.chcekValueAndRefreshState();
    }).catch(e => alert(e.toString()));
  }

  renderImage() {
    return this.state.imgPath.map((image, idx) => {
      return `
              <div class='post__imgOuter'>
                  <img class='post__imgContainer' src=${image} alt='image'>
                  <button class='post__removeBtn' data-idx=${idx} ><span class='post_X' data-idx=${idx}>X</span></button>
              </div>
            `;
    }).join('');
  }

  renderButton() {
    return _constants_category_list__WEBPACK_IMPORTED_MODULE_2__.CATEGORY_LIST.map((category, idx) => {
      if (category === this.state.category) {
        return `<button class='category__button active' data-idx=${idx}>${category}</button>`;
      } else {
        return `<button class='category__button' data-idx=${idx}>${category}</button>`;
      }
    }).join('');
  }

  renderImageForm() {
    return `<form action='/' method="post" enctype="multipart/form-data" class='post__imgContainer'>
					<input  id='image' type='file' accept=".jpg, .jpeg, .png">
					<img src='https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/image.svg' alt='image'>
					<div>
						<span>${this.state.imgPath.length}/10</span>
					</div> 
				</form>`;
  }

  rearrangePrice(e) {
    // 콤마와 원을 붙혀주는 함수
    if (e.target.value[0] !== '₩') {
      let length = e.target.value.length;
      let array = e.target.value.split('');

      if (length > 3) {
        let count = 1;

        for (let i = length - 1; i > 0; i--) {
          if (count % 3 === 0) {
            array.splice(i, 0, ',');
          }

          count++;
        }
      }

      let result = '₩' + array.join('');
      e.target.value = result;
    }
  }

  checkHavingAllValue() {
    // 가격제외 모든 값 있는지 확인
    if (this.state.title.length > 0 && this.state.content.length > 0 && this.state.imgPath.length > 0 && this.state.category.length > 0) {
      this.state.haveAllValue = true;
      return;
    }

    this.state.haveAllValue = false;
  }

  chcekValueAndRefreshState() {
    this.checkHavingAllValue();
    this.refreshState(this.state);
  }

  bindContentEvent(e) {
    // textarea 높이 가변조절
    this.$content.style.height = this.$content.scrollHeight + 'px';
    this.state.content = e.target.value;
    this.chcekValueAndRefreshState();
  }

  bindTitleEvent(e) {
    // 글자수 제한 (추후 경고 CSS 추가해도 될듯)
    if (e.target.value.length > 30) {
      e.target.value = e.target.value.slice(0, 30);
    }

    this.state.title = e.target.value;
    this.chcekValueAndRefreshState();
  }

  bindPriceKeyUpEvent(e) {
    // number만 받는다.
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
    this.state.price = e.target.value;
  }

  bindCategoryEvent(e) {
    if (e.target.className === 'category__button active' || e.target.className === 'category__button') {
      this.state.category = _constants_category_list__WEBPACK_IMPORTED_MODULE_2__.CATEGORY_LIST[e.target.dataset.idx];
      this.chcekValueAndRefreshState();
    }
  } // bindingEvent(e) {
  // 	this.handleImageUploadEvent(e);
  // }
  // handleImageUploadEvent(e) {
  // 	const files = this.imgInputElement.files;
  // 	console.log(files, e);
  // }
  // changeInputFileEvent(value) {
  // 	console.log(value);
  // }


}

/***/ }),

/***/ "./src/components/writing-page/footer/footer.js":
/*!******************************************************!*\
  !*** ./src/components/writing-page/footer/footer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.css */ "./src/components/writing-page/footer/footer.css");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Footer {
  // state : 동네명 (string)
  constructor({
    $parent,
    initialState
  }) {
    _defineProperty(this, "state", '');

    this.state = initialState;
    this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('footer', '.footer');
    $parent.appendChild(this.$target);
    this.$target.innerHTML = `
            <img src='https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/location_white.svg'  alt='location'>
            <span>${this.state}</span>
        `;
  }

}

/***/ }),

/***/ "./src/constants/category-list.js":
/*!****************************************!*\
  !*** ./src/constants/category-list.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY_LIST": () => (/* binding */ CATEGORY_LIST)
/* harmony export */ });
const CATEGORY_LIST = ['디지털기기', '생활가전', '가구/인테리어', '게임/취미', '생활/가공식품', '스포츠/레저', '여성패션/잡화', '남성패션/잡화', '유아동', '뷰티/미용', '반려동물', '도서/티켓/음반', '식물', '기타 중고물품'];

/***/ }),

/***/ "./src/constants/icon-path.js":
/*!************************************!*\
  !*** ./src/constants/icon-path.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_ICON": () => (/* binding */ ADD_ICON),
/* harmony export */   "ACCOUNT_ICON": () => (/* binding */ ACCOUNT_ICON),
/* harmony export */   "ARROW_BACK_ICON": () => (/* binding */ ARROW_BACK_ICON),
/* harmony export */   "CANCEL_ICON": () => (/* binding */ CANCEL_ICON),
/* harmony export */   "ARROW_FORWARD_ICON": () => (/* binding */ ARROW_FORWARD_ICON),
/* harmony export */   "CATEGORY_ICON": () => (/* binding */ CATEGORY_ICON),
/* harmony export */   "CHAT_BUBBLE_MINI_ICON": () => (/* binding */ CHAT_BUBBLE_MINI_ICON),
/* harmony export */   "DONE_ICON": () => (/* binding */ DONE_ICON),
/* harmony export */   "EXIT_ICON": () => (/* binding */ EXIT_ICON),
/* harmony export */   "EXPAND_MORE_ICON": () => (/* binding */ EXPAND_MORE_ICON),
/* harmony export */   "FAVORITE_BORDER_MINI_ICON": () => (/* binding */ FAVORITE_BORDER_MINI_ICON),
/* harmony export */   "FAVORITE_BORDER_ICON": () => (/* binding */ FAVORITE_BORDER_ICON),
/* harmony export */   "FAVORITE_ICON": () => (/* binding */ FAVORITE_ICON),
/* harmony export */   "IMAGE_ICON": () => (/* binding */ IMAGE_ICON),
/* harmony export */   "LOCATION_ICON": () => (/* binding */ LOCATION_ICON),
/* harmony export */   "MENU_ICON": () => (/* binding */ MENU_ICON),
/* harmony export */   "MORE_VERT_ICON": () => (/* binding */ MORE_VERT_ICON),
/* harmony export */   "SEND_ICON": () => (/* binding */ SEND_ICON)
/* harmony export */ });
const ADD_ICON = 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/add.svg';
const ACCOUNT_ICON = 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/account.svg';
const ARROW_BACK_ICON = 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/arrow_back.svg'; //

const CANCEL_ICON = 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/cancel.svg'; //

const ARROW_FORWARD_ICON = 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/arrow_forward.svg';
const CATEGORY_ICON = 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/category.svg';
const CHAT_BUBBLE_MINI_ICON = 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/chat_bubble_mini.svg';
const DONE_ICON = 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/done.svg';
const EXIT_ICON = 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/exit.svg';
const EXPAND_MORE_ICON = 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/expand_more.svg';
const FAVORITE_BORDER_MINI_ICON = 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/favorite_border_mini.svg';
const FAVORITE_BORDER_ICON = 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/favorite_border.svg';
const FAVORITE_ICON = 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/favorite.svg';
const IMAGE_ICON = 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/iamge.svg';
const LOCATION_ICON = 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/location.svg';
const MENU_ICON = 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/menu.svg';
const MORE_VERT_ICON = 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/more_vert.svg';
const SEND_ICON = 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/icons/send.svg';

/***/ }),

/***/ "./src/pages/NotFound.js":
/*!*******************************!*\
  !*** ./src/pages/NotFound.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var _components_base_redirect_redirect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/base/redirect/redirect */ "./src/components/base/redirect/redirect.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class NotFound {
  constructor($parent) {
    _defineProperty(this, "state", {
      link: '/',
      message: 'Home',
      status: '404',
      content: 'Page not found'
    });

    new _components_base_redirect_redirect__WEBPACK_IMPORTED_MODULE_0__.default({
      $parent,
      initialState: this.state
    });
  }

}

/***/ }),

/***/ "./src/pages/NotLogin.js":
/*!*******************************!*\
  !*** ./src/pages/NotLogin.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotLogin)
/* harmony export */ });
/* harmony import */ var _components_base_redirect_redirect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/base/redirect/redirect */ "./src/components/base/redirect/redirect.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ "./src/router.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class NotLogin {
  constructor($parent) {
    _defineProperty(this, "state", {
      link: '/',
      message: '메인으로 이동❗',
      status: '',
      content: 'This service requires login'
    });

    new _components_base_redirect_redirect__WEBPACK_IMPORTED_MODULE_0__.default({
      $parent,
      initialState: this.state
    });
    setTimeout(() => {
      (0,_router__WEBPACK_IMPORTED_MODULE_1__.navigateTo)('/');
    }, 2000);
  }

}

/***/ }),

/***/ "./src/pages/chat-page.js":
/*!********************************!*\
  !*** ./src/pages/chat-page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChatPage)
/* harmony export */ });
/* harmony import */ var _components_base_navigation_bar_navigation_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/base/navigation-bar/navigation-bar */ "./src/components/base/navigation-bar/navigation-bar.js");
/* harmony import */ var _components_base_chat_list_chat_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/base/chat-list/chat-list */ "./src/components/base/chat-list/chat-list.js");


const mode = '채팅하기';
class ChatPage {
  constructor($parent) {
    new _components_base_navigation_bar_navigation_bar__WEBPACK_IMPORTED_MODULE_0__.default({
      $parent,
      initialState: mode
    });
    new _components_base_chat_list_chat_list__WEBPACK_IMPORTED_MODULE_1__.default({
      $parent,
      initialState: sampleChatData
    });
  }

}
const sampleChatData = [{
  imgPath: 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
  name: '죄송함돠..',
  content: '으악...',
  time: '2시간 전',
  count: 5
}, {
  imgPath: 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
  name: '죄송함돠..',
  content: '시간이 부족하여',
  time: '1시간 전',
  count: 0
}, {
  imgPath: 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
  name: '죄송함돠..',
  content: '구현 못했습니다',
  time: '5시간 전',
  count: 7
}, {
  imgPath: 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
  name: '죄송함돠..',
  content: '하하하...',
  time: '1시간 전',
  count: 3
}, {
  imgPath: 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
  name: '죄송함돠..',
  content: 'I am Sorry',
  time: '2시간 전',
  count: 5
}, {
  imgPath: 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
  name: '죄송함돠..',
  content: 'ㅠ__ㅠ',
  time: '10시간 전',
  count: 0
}];

/***/ }),

/***/ "./src/pages/detail-page.js":
/*!**********************************!*\
  !*** ./src/pages/detail-page.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DetailPage)
/* harmony export */ });
/* harmony import */ var _detail_page_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-page.css */ "./src/pages/detail-page.css");
/* harmony import */ var _components_detail_page_tool_bar_tool_bar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/detail-page/tool-bar/tool-bar.js */ "./src/components/detail-page/tool-bar/tool-bar.js");
/* harmony import */ var _components_detail_page_section_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/detail-page/section/section */ "./src/components/detail-page/section/section.js");
/* harmony import */ var _components_detail_page_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/detail-page/footer/footer */ "./src/components/detail-page/footer/footer.js");
/* harmony import */ var _components_base_product_modal_product_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/base/product-modal/product-modal */ "./src/components/base/product-modal/product-modal.js");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../router */ "./src/router.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // import { api } from '../api/api';

class DetailPage {
  constructor($parent) {
    _defineProperty(this, "state", {
      // TEST CASE
      user: '남영우',
      // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
      seller: '남영우',
      price: '₩35,000',
      title: '빈티지 롤러 스케이트!',
      content: `어린시절 추억의 향수를 불러 일으키는 롤러 스케이트입니다. 빈티지 특성상 사용감 있지만 전체적으로 깨끗한 상태입니다. 촬영용 소품이나, 거실에 장식용으로 추천해 드립니다. 단품 입고 되었습니다.<br>
			새 제품으로 보존된 제품으로 전용박스까지 보내드립니다.사이즈는 235 입니다.`,
      status: 0,
      location: '문래동',
      category: '기타 중고물품',
      imgPath: ['https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/shoes-1.jpg', 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/shoes-1.jpg', 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/shoes-1.jpg'],
      createdAt: '3분전',
      chatCount: 3,
      wishCount: 2,
      visitCount: 5
    });

    this.haveHistoryState();

    if (!history.state && location.pathname === '/detail/1') {
      this.state = secondData;
    }

    this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_5__.createDOMWithSelector)('div', '.detail-page');
    $parent.appendChild(this.$target);
    this.toolBar = new _components_detail_page_tool_bar_tool_bar_js__WEBPACK_IMPORTED_MODULE_1__.default({
      $parent: this.$target,
      initialState: {
        user: this.state.user,
        seller: this.state.seller
      },
      onClick: e => {
        if (e.target.className === 'back') {
          history.state ? (0,_router__WEBPACK_IMPORTED_MODULE_6__.navigateTo)('/') : history.back(-1);
        } else if (e.target.className === 'option') this.productModal.open();
      }
    });
    this.section = new _components_detail_page_section_section__WEBPACK_IMPORTED_MODULE_2__.default({
      $parent: this.$target,
      initialState: this.state
    });
    this.footer = new _components_detail_page_footer_footer__WEBPACK_IMPORTED_MODULE_3__.default({
      $parent: this.$target,
      initialState: {
        price: this.state.price,
        user: this.state.user,
        seller: this.state.seller
      }
    });
    this.productModal = new _components_base_product_modal_product_modal__WEBPACK_IMPORTED_MODULE_4__.default({
      $parent: this.$target,
      onClick: e => {
        if (e.target.className === 'productModal__overlay') {
          this.productModal.close();
        } else if (e.target.className === 'productModal__update') {
          (0,_router__WEBPACK_IMPORTED_MODULE_6__.navigateTo)('/writing', this.state);
        } else if (e.target.className === 'productModal__delete') {
          // api.delete('/?location')
          // 	.then(() => {
          (0,_router__WEBPACK_IMPORTED_MODULE_6__.navigateTo)('/'); // })
          // .catch((e) => {
          // 	alert(e.message);
          // });
        }
      }
    }); // history.state ? '' : this.initiallizeData();
  } // 위에 주석 있음..!
  // initiallizeData() {

  /*
  		api 호출 ( 프로덕트)
  	*/
  // 	api.get(location.pathname)
  // 		.then((res) => {
  // 			this.state = res.data; // 미정
  // 			this.setState();
  // 		})
  // 		.catch(() => {
  // 			navigateTo('/notlogin');
  // 		});
  // }


  setState() {
    this.toolBar.setState({
      user: this.state.user,
      seller: this.state.seller
    });
    this.section.setState(this.state);
    this.footer.setState({
      price: this.state.price,
      user: this.state.user,
      seller: this.state.seller
    });
  }

  haveHistoryState() {
    if (history.state) {
      this.state = history.state;
    }
  }

}
const secondData = {
  //4
  user: '남영우',
  // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
  seller: '문지호',
  price: '₩50,000',
  title: '갤럭시A5',
  content: `갤럭시 A5 판매합니다. 
	16GB 무잔상에 생활기스 약간 있습니다.
	직거래 답십리역 아니면 장한평역에서 합니다.`,
  status: 0,
  location: '문래동',
  category: '기타 중고물품',
  imgPath: ['https://picsum.photos/300/300', 'https://picsum.photos/300/300', 'https://picsum.photos/300/300', 'https://picsum.photos/300/300', 'https://picsum.photos/300/300'],
  createdAt: '7분전',
  chatCount: 5,
  wishCount: 2,
  visitCount: 6
};

/***/ }),

/***/ "./src/pages/location-page.js":
/*!************************************!*\
  !*** ./src/pages/location-page.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocationPage)
/* harmony export */ });
/* harmony import */ var _components_base_navigation_bar_navigation_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/base/navigation-bar/navigation-bar */ "./src/components/base/navigation-bar/navigation-bar.js");
/* harmony import */ var _components_location_page_body_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/location-page/body/body */ "./src/components/location-page/body/body.js");
/* harmony import */ var _components_location_page_location_modal_location_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/location-page/location-modal/location-modal */ "./src/components/location-page/location-modal/location-modal.js");
/* harmony import */ var _components_base_alert_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/base/alert/alert */ "./src/components/base/alert/alert.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import { api } from '../api/api';
// import { navigateTo } from '../router';

const mode = '내 동네 설정하기';
class LocationPage {
  constructor($parent) {
    _defineProperty(this, "state", {
      allMyLocation: ['인창동'],
      currentIndex: 0 // 현재 캔슬할 버튼의 index 초기화

    });

    this.navbar = new _components_base_navigation_bar_navigation_bar__WEBPACK_IMPORTED_MODULE_0__.default({
      $parent,
      initialState: mode
    });
    this.body = new _components_location_page_body_body__WEBPACK_IMPORTED_MODULE_1__.default({
      $parent,
      initialState: this.state.allMyLocation,
      onClick: (e, idx) => {
        this.bindButtonClickEvent(e, idx);
      }
    });
    this.modal = new _components_location_page_location_modal_location_modal__WEBPACK_IMPORTED_MODULE_2__.default({
      $parent,
      onClick: (e, idx) => {
        this.bindModalClickEvent(e, idx);
      }
    });
    this.alert = new _components_base_alert_alert__WEBPACK_IMPORTED_MODULE_3__.default({
      $parent,
      onClick: e => {
        this.bindAlertClickEvent(e);
      }
    }); // this.initiallizeData();
  } // initiallizeData() {
  // 	api.get('/')
  // 		.then((res) => {
  // 			if (res.data.SubLocaiton) {
  // 				this.state.allMyLocation = [
  // 					res.data.MainLocaiton,
  // 					res.data.SubLocaiton,
  // 				];
  // 			} else {
  // 				this.state.allMyLocation = [res.data.MainLocaiton];
  // 			}
  // 			this.setState();
  // 		})
  // 		.catch(() => {
  // 			navigateTo('/notlogin');
  // 		});
  // }


  setState() {
    this.body.setState(this.state.allMyLocation);
  }

  bindModalClickEvent(e, value) {
    if ( // 닫기 및 외부 클릭 시 발생
    e.target.className === 'modal__overlay' || e.target.className === 'modal__cancel') {
      this.modal.close();
    } else if (e.target.className === 'modal__confirm active') {
      // api.post('/', { location: value })
      // 	.then(() => {
      // 확인 클릭 시 발생
      // api로 동네 추가
      this.state.allMyLocation = [...this.state.allMyLocation, value];
      this.modal.close();
      this.modal.$input = ''; // input 초기화

      this.setState(); // })
      // .catch((e) => {
      // 	alert(e.message);
      // });
    }
  }

  bindRemoveLocationEvent(idx) {
    // api.put('/?location')
    // 	.then(() => {
    let LocationArray = [...this.state.allMyLocation];
    LocationArray.splice(idx, 1);
    this.state.allMyLocation = LocationArray;
    this.setState(); // })
    // .catch((e) => {
    // 	alert(e.message);
    // });
  }

  bindButtonClickEvent(e, idx) {
    if ( // plus click event
    e.target.className === 'location__plusBtn' || e.target.className === 'location__plus') {
      this.modal.open();
    } else if (e.target.className === 'location__cancelBtn') {
      // cancel(X) click event
      this.alert.open();
      this.state.currentIndex = idx;
    } else if (e.target.className === 'location__normalBtn') {
      if (idx === 0) {
        this.state.allMyLocation = [this.state.allMyLocation[1], this.state.allMyLocation[0]];
        this.setState();
      }
      /* 
      --추후 예정--
      일반 동네 click event ( 메인 동네로 change )
      그 후 다시 api 요청을 통해서 리렌더링 방식 
      */

    }
  }

  bindAlertClickEvent(e) {
    if ( // 닫기 및 외부 클릭 시 발생
    e.target.className === 'alert__overlay' || e.target.className === 'alert__cancel') {
      this.alert.close();
    } else if (e.target.className === 'alert__confirm') {
      // 나가기 클릭 시 발생
      this.alert.close();
      this.bindRemoveLocationEvent(this.state.currentIndex);
    }
  }

}

/***/ }),

/***/ "./src/pages/main-page.js":
/*!********************************!*\
  !*** ./src/pages/main-page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var _components_main_page_navigation_bar_navigation_bar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/main-page/navigation-bar/navigation-bar.js */ "./src/components/main-page/navigation-bar/navigation-bar.js");
/* harmony import */ var _components_base_product_list_product_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/base/product-list/product-list.js */ "./src/components/base/product-list/product-list.js");
/* harmony import */ var _components_main_page_write_post_button_write_post_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/main-page/write-post-button/write-post-button */ "./src/components/main-page/write-post-button/write-post-button.js");
/* harmony import */ var _components_main_page_category_category_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/main-page/category/category.js */ "./src/components/main-page/category/category.js");
/* harmony import */ var _constants_category_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/category-list */ "./src/constants/category-list.js");
/* harmony import */ var _components_main_page_location_mini_modal_location_mini_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/main-page/location-mini-modal/location-mini-modal */ "./src/components/main-page/location-mini-modal/location-mini-modal.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/api */ "./src/api/api.js");
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../router.js */ "./src/router.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class MainPage {
  constructor($parent) {
    _defineProperty(this, "state", {
      products: sampleData,
      locationName: ['인창동', '문래동'],
      // default로 하나는 갖고 있어야 한다!
      index: 0,
      category: ''
    });

    this.$parent = $parent;
    this.navbar = new _components_main_page_navigation_bar_navigation_bar_js__WEBPACK_IMPORTED_MODULE_0__.default({
      $parent,
      initialState: this.state.locationName[this.state.index],
      onClick: e => {
        this.bindNavBarClickEvent(e);
      }
    });
    this.ProductLists = new _components_base_product_list_product_list_js__WEBPACK_IMPORTED_MODULE_1__.default({
      $parent,
      initialState: this.state.products,
      refreshState: nextState => {
        this.state.products = nextState;
        this.setState();
      }
    });
    this.postButton = new _components_main_page_write_post_button_write_post_button__WEBPACK_IMPORTED_MODULE_2__.default({
      $parent
    });
    this.category = new _components_main_page_category_category_js__WEBPACK_IMPORTED_MODULE_3__.default({
      $parent,
      CATEGORY_LIST: _constants_category_list__WEBPACK_IMPORTED_MODULE_4__.CATEGORY_LIST,
      onClick: (e, idx) => {
        this.bindCategoryClickEvent(e, idx);
      }
    });
    this.locationMiniModal = new _components_main_page_location_mini_modal_location_mini_modal__WEBPACK_IMPORTED_MODULE_5__.default({
      $parent,
      initialState: this.state.locationName,
      onClick: (e, idx) => {
        this.bindLocationModalClickEvent(e, idx);
      }
    }); // this.initiallizeData();
  } // 위에 주석 있음..!


  initiallizeData() {
    /*
    	api 호출 (자신 동네들, 프로덕트) 한번에 받을수 있다함!
    */
    _api_api__WEBPACK_IMPORTED_MODULE_6__.api.get('/').then(res => {
      this.state.products = res.data;

      if (res.data.SubLocation) {
        this.state.locationName = [res.data.MainLocation];
      } else {
        this.state.locationName = [res.data.MainLocation, res.data.SubLocation];
      }

      this.setState();
    }).catch(() => {
      (0,_router_js__WEBPACK_IMPORTED_MODULE_7__.navigateTo)('/notlogin');
    });
  }

  setState() {
    //리렌더링파트
    this.navbar.setState(this.state.locationName[this.state.index]);
    this.ProductLists.setState(this.state.products);
  }

  bindNavBarClickEvent(e) {
    // console.log(e.target.className);
    if (e.target.className === 'nav__categoryImg' // 카테고리 클릭 시 발생
    ) {
        this.category.open();
        setTimeout(() => {
          this.ProductLists.close();
        }, 500);
        this.$parent.scrollTop = 0;
      } else if (e.target.className === 'nav__locationIcon' || e.target.className === 'nav__locationName') {
      this.locationMiniModal.open();
    }
  }

  bindCategoryClickEvent(e, idx) {
    if (e.target.className === 'nav__prev') {
      this.category.close();
      this.ProductLists.open();
    } else if (e.target.className === 'categoryList__img') {
      this.category.close();
      this.ProductLists.open();
      this.category = _constants_category_list__WEBPACK_IMPORTED_MODULE_4__.CATEGORY_LIST[idx];
      /*
      	api 호출 (자신 동네들, 프로덕트) 동네기준 프로덕트 
      */

      this.state.products = sampleData.filter(value => value.category === _constants_category_list__WEBPACK_IMPORTED_MODULE_4__.CATEGORY_LIST[idx] && value.location === this.state.locationName[this.state.index]);
      this.setState(); // api.get(`/?category=${this.category}&product=${this.ProductLists}`)
      // 	.then((res) => {
      // 		this.state.products = res.data;
      // 		this.setState();
      // 	})
      // 	.catch((e) => {
      // 		alert(e.message); // 이건 괜찮
      // 	});
    }
    /*
    	CATEGORY_LIST[idx];
    	기준으로 api 호출 후
    	product 뿌리기 (setState)
    */

  }

  bindLocationModalClickEvent(e, idx) {
    if (e.target.className === 'miniModal__overlay' // 외부 클릭 시 발생
    ) {
        this.locationMiniModal.close();
      } else if (e.target.className === 'miniModal__location') {
      // 동네 클릭 시 발생
      this.locationMiniModal.close();

      if (this.state.index !== idx) {
        //this.state.locationName[this.state.index] && 카테고리
        // api.get('/')
        // 	.then((res) => {
        this.state.index = idx;
        this.state.products = sampleData.filter(value => {
          if (this.state.category) {
            return value.location === this.state.locationName[Number(idx)] && value.category === this.state.category;
          } else {
            return value.location === this.state.locationName[Number(idx)];
          }
        });
        this.$parent.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        this.setState();
      } // .catch((e) => {
      // 	alert(e.message); // 이건 괜찮
      // });

    }
  }

}
const sampleData = [{
  user: '',
  // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
  seller: '피카소',
  price: '₩35,000,000',
  name: '피카소의 명화',
  location: '문래동',
  category: '기타 중고물품',
  imgPath: 'https://picsum.photos/200',
  time: '3분전',
  chatCount: 3,
  likeCount: 2,
  like: 'T',
  pk: 0
}, {
  user: '피카소',
  // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
  seller: '피카소',
  price: '₩35,000,000',
  name: '피카소의 명화',
  location: '인창동',
  category: '디지털기기',
  imgPath: 'https://picsum.photos/200/300',
  time: '3분전',
  chatCount: 3,
  likeCount: 2,
  like: 'T',
  pk: 1
}, {
  user: '피카소',
  // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
  seller: '피카소',
  price: '₩35,000,000',
  name: '피카소의 명화',
  location: '인창동',
  category: '기타 중고물품',
  imgPath: 'https://picsum.photos/id/1/200/300',
  time: '3분전',
  chatCount: 3,
  likeCount: 2,
  like: 'T',
  pk: 0
}, {
  user: '',
  // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
  seller: '피카소',
  price: '₩35,000,000',
  name: '피카소의 명화',
  location: '문래동',
  category: '디지털기기',
  imgPath: 'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
  time: '3분전',
  chatCount: 3,
  likeCount: 2,
  like: 'F',
  pk: 1
}, {
  user: '',
  // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
  seller: '피카소',
  price: '₩35,000,000',
  name: '피카소의 명화',
  location: '인창동',
  category: '기타 중고물품',
  imgPath: 'https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w',
  time: '3분전',
  chatCount: 3,
  likeCount: 2,
  like: 'T',
  pk: 0
}, {
  user: '',
  // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
  seller: '피카소',
  price: '₩35,000,000',
  name: '피카소의 명화',
  location: '인창동',
  category: '디지털기기',
  imgPath: 'https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g',
  time: '3분전',
  chatCount: 3,
  likeCount: 2,
  like: 'F',
  pk: 0
}, {
  user: '피카소',
  // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
  seller: '피카소',
  price: '₩35,000,000',
  name: '피카소의 명화',
  location: '문래동',
  category: '디지털기기',
  imgPath: 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
  time: '3분전',
  chatCount: 3,
  likeCount: 2,
  like: 'T',
  pk: 0
}, {
  user: '피카소',
  // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
  seller: '피카소',
  price: '₩35,000,000',
  name: '피카소의 명화',
  location: '인창동',
  category: '기타 중고물품',
  imgPath: 'https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs',
  time: '3분전',
  chatCount: 3,
  likeCount: 2,
  like: 'T',
  pk: 0
}, {
  user: '피카소',
  // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
  seller: '피카소',
  price: '₩35,000,000',
  name: '피카소의 명화',
  location: '인창동',
  category: '기타 중고물품',
  imgPath: 'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
  time: '3분전',
  chatCount: 3,
  likeCount: 2,
  like: 'F',
  pk: 0
}];

/***/ }),

/***/ "./src/pages/menu-page.js":
/*!********************************!*\
  !*** ./src/pages/menu-page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuPage)
/* harmony export */ });
/* harmony import */ var _components_base_navigation_bar_navigation_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/base/navigation-bar/navigation-bar */ "./src/components/base/navigation-bar/navigation-bar.js");
/* harmony import */ var _components_menu_page_main_navigation_bar_main_navigation_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/menu-page/main-navigation-bar/main-navigation-bar */ "./src/components/menu-page/main-navigation-bar/main-navigation-bar.js");
/* harmony import */ var _components_base_product_list_product_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/base/product-list/product-list.js */ "./src/components/base/product-list/product-list.js");
/* harmony import */ var _components_base_chat_list_chat_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/base/chat-list/chat-list */ "./src/components/base/chat-list/chat-list.js");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");
/* harmony import */ var _menu_page_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-page.css */ "./src/pages/menu-page.css");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // import { api } from '../api/api';
// import { navigateTo } from '../router';

const mode = '메뉴';
class MenuPage {
  /*
         state.navigatorIndex
         1 : 판매목록
         2 : 채팅
         3 : 관심목록
     */
  constructor($parent) {
    _defineProperty(this, "state", {
      products: sampleData,
      navigatorIndex: '1',
      chats: sampleChatData
    });

    // console.log(location.pathname);
    this.$parent = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_4__.createDOMWithSelector)('div', '.menuWrapper');
    $parent.appendChild(this.$parent);
    this.state.products = sampleData.filter(value => value.user === value.seller);
    this.navbar = new _components_base_navigation_bar_navigation_bar__WEBPACK_IMPORTED_MODULE_0__.default({
      $parent: this.$parent,
      initialState: mode,
      onClick: e => {
        if (e.target.className === 'nav__prev') {
          this.$parent.classList.remove('active');
        }
      }
    });
    this.mainNavbar = new _components_menu_page_main_navigation_bar_main_navigation_bar__WEBPACK_IMPORTED_MODULE_1__.default({
      $parent: this.$parent,
      initialState: this.state.navigatorIndex,
      onClick: idx => {
        this.bindMainNavbarEvent(idx);
      }
    });
    this.productLists = new _components_base_product_list_product_list_js__WEBPACK_IMPORTED_MODULE_2__.default({
      $parent: this.$parent,
      initialState: this.state.products
    });
    this.chatLists = new _components_base_chat_list_chat_list__WEBPACK_IMPORTED_MODULE_3__.default({
      $parent: this.$parent,
      initialState: this.state.chats
    });
    this.chatLists.close();
    setTimeout(() => {
      this.$parent.classList.add('active');
    }, 0); // this.initiallizeData();
  } // initiallizeData() {

  /*
  		api 호출 (자신의 판매목록)
  	*/
  // 	api.get('/')
  // 		.then((res) => {
  // 			this.state.products = res.data.products;
  // 			this.setState();
  // 		})
  // 		.catch(() => {
  // 			navigateTo('/notlogin');
  // 		});
  // }


  setState() {
    //리렌더링파트
    this.mainNavbar.setState(this.state.navigatorIndex);

    if (this.state.navigatorIndex === '2') {
      this.productLists.close();
      this.chatLists.setState(this.state.chats);
      this.chatLists.open();
    } else {
      this.chatLists.close();
      this.productLists.setState(this.state.products);
      this.productLists.open();
    }
  } // bindMainNavbarEvent : 현재 nav idx와 다르다면 처리


  bindMainNavbarEvent(idx) {
    if (idx === '1' && this.state.navigatorIndex !== idx) {
      this.state.navigatorIndex = '1';
      /*
      	api 호출 (자신의 판매목록)
      */
      // api.get('/')
      // 	.then((res) => {

      this.state.products = sampleData.filter(value => value.user === value.seller);
      this.setState(); // })
      // .catch(() => {
      // 	navigateTo('/notlogin');
      // });
    } else if (idx === '2' && this.state.navigatorIndex !== idx) {
      this.state.navigatorIndex = '2';
      this.setState();
    } else if (idx === '3' && this.state.navigatorIndex !== idx) {
      this.state.navigatorIndex = '3';
      /*
      	api 호출 (자신의 관심목록)
      */
      // api.get('/')
      // 	.then((res) => {

      let result = sampleData.filter(value => value.user !== value.seller);
      this.state.products = result;
      this.setState();
    }
  }

}
const sampleData = [{
  imgPath: 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/photo.jpeg',
  name: '문지호',
  location: '인창동',
  time: '2시간 전',
  price: '10억',
  like: 'T',
  chatCount: 5,
  likeCount: 3,
  user: '문지호',
  seller: '문지호'
}, {
  imgPath: 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/photo.jpeg',
  name: '문지호',
  location: '인창동',
  time: '2시간 전',
  price: '10억',
  like: 'F',
  chatCount: 5,
  likeCount: 0,
  user: '문지호',
  seller: '문지호'
}, {
  imgPath: 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/photo.jpeg',
  name: '문지호',
  location: '인창동',
  time: '2시간 전',
  price: '10억',
  like: 'F',
  chatCount: 5,
  likeCount: 3,
  user: '문',
  seller: '문지호'
}, {
  imgPath: 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/photo.jpeg',
  name: '문지호',
  location: '인창동',
  time: '2시간 전',
  price: '10억',
  like: 'F',
  chatCount: 5,
  likeCount: 3,
  user: '문호',
  seller: '문지호'
}, {
  imgPath: 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/photo.jpeg',
  name: '문지호',
  location: '인창동',
  time: '2시간 전',
  price: '10억',
  like: 'F',
  chatCount: 5,
  likeCount: 3,
  user: '문지호',
  seller: '문지호'
}];
const sampleChatData = [{
  imgPath: 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
  name: '죄송함돠..',
  content: '으악...',
  time: '2시간 전',
  count: 5
}, {
  imgPath: 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
  name: '죄송함돠..',
  content: '시간이 부족하여',
  time: '1시간 전',
  count: 0
}, {
  imgPath: 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
  name: '죄송함돠..',
  content: '구현 못했습니다',
  time: '5시간 전',
  count: 7
}, {
  imgPath: 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
  name: '죄송함돠..',
  content: '하하하...',
  time: '1시간 전',
  count: 3
}, {
  imgPath: 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
  name: '죄송함돠..',
  content: 'I am Sorry',
  time: '2시간 전',
  count: 5
}, {
  imgPath: 'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
  name: '죄송함돠..',
  content: 'ㅠ__ㅠ',
  time: '10시간 전',
  count: 0
}];

/***/ }),

/***/ "./src/pages/signup-page.js":
/*!**********************************!*\
  !*** ./src/pages/signup-page.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUpPage)
/* harmony export */ });
/* harmony import */ var _components_base_navigation_bar_navigation_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/base/navigation-bar/navigation-bar */ "./src/components/base/navigation-bar/navigation-bar.js");
/* harmony import */ var _components_signup_page_body_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/signup-page/body/body */ "./src/components/signup-page/body/body.js");


const mode = '회원가입';
class SignUpPage {
  constructor($parent) {
    this.navbar = new _components_base_navigation_bar_navigation_bar__WEBPACK_IMPORTED_MODULE_0__.default({
      $parent,
      initialState: mode
    });
    this.body = new _components_signup_page_body_body__WEBPACK_IMPORTED_MODULE_1__.default({
      $parent
    });
  }

}

/***/ }),

/***/ "./src/pages/user-page.js":
/*!********************************!*\
  !*** ./src/pages/user-page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserPage)
/* harmony export */ });
/* harmony import */ var _components_base_navigation_bar_navigation_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/base/navigation-bar/navigation-bar */ "./src/components/base/navigation-bar/navigation-bar.js");
/* harmony import */ var _components_user_page_section_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/user-page/section/section */ "./src/components/user-page/section/section.js");
/* harmony import */ var _util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/createDOMWithSelector */ "./src/util/createDOMWithSelector.js");
/* harmony import */ var _user_page_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-page.css */ "./src/pages/user-page.css");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../router */ "./src/router.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // import { api } from '../api/api';

class UserPage {
  // 오직 id만 받아오면 된다!
  constructor($parent) {
    _defineProperty(this, "state", {
      mode: '로그인',
      user: ''
    });

    this.$parent = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_2__.createDOMWithSelector)('div', '.userWrapper');
    $parent.appendChild(this.$parent);
    this.$appBar = new _components_base_navigation_bar_navigation_bar__WEBPACK_IMPORTED_MODULE_0__.default({
      $parent: this.$parent,
      initialState: this.state.mode,
      onClick: e => {
        if (e.target.className === 'nav__prev') {
          this.$parent.classList.remove('active');
        }
      }
    });
    this.$section = new _components_user_page_section_section__WEBPACK_IMPORTED_MODULE_1__.default({
      $parent: this.$parent,
      initialState: this.state.user,
      onClick: (e, inputValue) => {
        if (this.isUserLogin()) {
          // api.post('/user/logout')
          // 	.then(() => {
          (0,_router__WEBPACK_IMPORTED_MODULE_4__.navigateTo)('/'); // })
          // .catch((e) => {
          // 	alert(e.message);
          // });
        } else {
          e.preventDefault();

          if (inputValue.length === 0) {
            this.$section.$alert.classList.add('active');
            setTimeout(() => {
              this.$section.$alert.classList.remove('active');
            }, 2000);
          } else {
            // api.post('/user/sign-in', { id: inputValue })
            // 	.then(() => {
            (0,_router__WEBPACK_IMPORTED_MODULE_4__.navigateTo)('/'); // })
            // .catch(() => {
          }
        }
      }
    });
    setTimeout(() => {
      this.$parent.classList.add('active');
    }, 0); // this.initiallizeData();
  } // initiallizeData() {
  // 	api.get('/user/me')
  // 		.then((res) => {
  // 			this.state.user = res.data.id;
  // 			this.state.mode = '내 계정';
  // 			this.setState();
  // 		})
  // 		.catch(() => {});
  // }


  setState() {
    this.$appBar.setState(this.state.mode);
    this.$section.setState(this.state.user);
  }

  isUserLogin() {
    /* 유저가 로그인 되어 있다면, true 반환 아니면 false */
    return this.state.length > 0;
  }

}

/***/ }),

/***/ "./src/pages/writing-page.js":
/*!***********************************!*\
  !*** ./src/pages/writing-page.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WritingPage)
/* harmony export */ });
/* harmony import */ var _components_base_navigation_bar_navigation_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/base/navigation-bar/navigation-bar */ "./src/components/base/navigation-bar/navigation-bar.js");
/* harmony import */ var _components_writing_page_body_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/writing-page/body/body */ "./src/components/writing-page/body/body.js");
/* harmony import */ var _components_writing_page_footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/writing-page/footer/footer */ "./src/components/writing-page/footer/footer.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router */ "./src/router.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import { api } from '../api/api';

const mode = '글쓰기';
class WritingPage {
  // haveAllValue : 모든 값이 있어야 Navbar doneIcon 활성화 가능!
  constructor($parent) {
    _defineProperty(this, "state", {
      user: '',
      // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
      seller: '',
      price: '',
      title: '',
      content: '',
      status: 0,
      location: '인창동',
      // 기본적으로 유저의 메인동네를 갖고 있어야한다.
      category: '',
      imgPath: [],
      createdAt: '',
      chatCount: 0,
      wishCount: 0,
      visitCount: 0,
      haveAllValue: false
    });

    this.haveHistoryState();
    this.navigationBar = new _components_base_navigation_bar_navigation_bar__WEBPACK_IMPORTED_MODULE_0__.default({
      $parent,
      initialState: [mode, this.state.haveAllValue],
      onClick: () => {
        if (history.state) {
          // api.update('/', this.state)
          // 	.then(() => {
          (0,_router__WEBPACK_IMPORTED_MODULE_3__.navigateTo)('/detail', this.state); // })
          // .catch((e) => {
          // 	alert(e.message);
          // });
        } else {
          // api.post('/', this.state)
          // 	.then(() => {
          (0,_router__WEBPACK_IMPORTED_MODULE_3__.navigateTo)('/detail', this.state); // })
          // .catch((e) => {
          // 	alert(e.message);
          // });
        } // state에 userid 추가하고 (추가안해도 인자로 받아서 괜찮을듯) haveAllValue를 빼면 될듯!
        // 게시물 post 요청 (this.state)
        // navigateTo('/detail',this.state) PK 추가해야할듯!

      }
    });
    this.body = new _components_writing_page_body_body__WEBPACK_IMPORTED_MODULE_1__.default({
      $parent,
      initialState: this.state,
      refreshState: nextState => {
        this.setState(nextState);
      } // 부모의 State 업데이트

    });
    this.footer = new _components_writing_page_footer_footer__WEBPACK_IMPORTED_MODULE_2__.default({
      $parent,
      initialState: this.state.location
    }); // history.state ? '' : this.initiallizeData();
  } // initiallizeData() {
  // 메인동네 + 유저네임 / + 셀러네임(same)
  // 	api.get('/')
  // 		.then((res) => {
  // 			this.state.location = res.data.MainLocation;
  // 			this.state.user = res.data.id;
  // 			this.state.seller = res.data.id;
  // 			this.setState();
  // 		})
  // 		.catch(() => {
  // 			navigateTo('/notlogin');
  // 		});
  // }


  setState(nextState) {
    this.state = nextState;
    this.navigationBar.setState(this.state.haveAllValue);
    this.body.setState(nextState);
  }

  haveHistoryState() {
    if (history.state) {
      let tempState = history.state;
      tempState.haveAllValue = true;
      this.state = tempState;
    }
  }

}

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "router": () => (/* binding */ router),
/* harmony export */   "navigateTo": () => (/* binding */ navigateTo)
/* harmony export */ });
/* harmony import */ var _pages_main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/main-page */ "./src/pages/main-page.js");
/* harmony import */ var _pages_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/detail-page */ "./src/pages/detail-page.js");
/* harmony import */ var _pages_signup_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/signup-page */ "./src/pages/signup-page.js");
/* harmony import */ var _pages_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/location-page */ "./src/pages/location-page.js");
/* harmony import */ var _pages_menu_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/menu-page */ "./src/pages/menu-page.js");
/* harmony import */ var _pages_user_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/user-page */ "./src/pages/user-page.js");
/* harmony import */ var _pages_writing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/writing-page */ "./src/pages/writing-page.js");
/* harmony import */ var _pages_NotFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/NotFound */ "./src/pages/NotFound.js");
/* harmony import */ var _pages_NotLogin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/NotLogin */ "./src/pages/NotLogin.js");
/* harmony import */ var _pages_chat_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/chat-page */ "./src/pages/chat-page.js");











const pathToRegex = path => new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const navigateTo = (url, props = null) => {
  history.pushState(props, null, url); // props는 popstate시 자연스럽게 비워진다!

  router();
};

const router = () => {
  const routes = [{
    path: '/',
    view: _pages_main_page__WEBPACK_IMPORTED_MODULE_0__.default
  }, {
    path: '/detail',
    view: _pages_detail_page__WEBPACK_IMPORTED_MODULE_1__.default
  }, {
    path: '/detail/:id',
    view: _pages_detail_page__WEBPACK_IMPORTED_MODULE_1__.default
  }, {
    path: '/signup',
    view: _pages_signup_page__WEBPACK_IMPORTED_MODULE_2__.default
  }, {
    path: '/location',
    view: _pages_location_page__WEBPACK_IMPORTED_MODULE_3__.default
  }, {
    path: '/menu',
    view: _pages_menu_page__WEBPACK_IMPORTED_MODULE_4__.default
  }, {
    path: '/user',
    view: _pages_user_page__WEBPACK_IMPORTED_MODULE_5__.default
  }, {
    path: '/chat',
    view: _pages_chat_page__WEBPACK_IMPORTED_MODULE_9__.default
  }, {
    path: '/writing',
    view: _pages_writing_page__WEBPACK_IMPORTED_MODULE_6__.default
  }, {
    path: '/notlogin',
    view: _pages_NotLogin__WEBPACK_IMPORTED_MODULE_8__.default
  }, {
    path: '/:notfound',
    view: _pages_NotFound__WEBPACK_IMPORTED_MODULE_7__.default
  }]; // Test each route for potential match

  const potentialMatches = routes.map(route => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path))
    };
  }); // console.log('l',location.pathname)
  // console.log('p',potentialMatches)

  let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null); // console.log('m',match)

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname]
    };
  } // console.log(match.route)


  const $app = document.querySelector('.app');
  $app.scrollTop = 0;
  $app.innerHTML = '';
  new match.route.view($app);
};



/***/ }),

/***/ "./src/util/createDOMWithSelector.js":
/*!*******************************************!*\
  !*** ./src/util/createDOMWithSelector.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDOMWithSelector": () => (/* binding */ createDOMWithSelector),
/* harmony export */   "createImgDOMWithSelector": () => (/* binding */ createImgDOMWithSelector)
/* harmony export */ });
const createDOMWithSelector = (tag, ...selectors) => {
  const $DOM = document.createElement(tag);
  selectors.forEach(selector => {
    if (selector[0] === '#') {
      $DOM.id = selector.slice(1);
    }

    if (selector[0] === '.') {
      $DOM.classList.add(selector.slice(1));
    }
  });
  return $DOM;
};
const createImgDOMWithSelector = (src, ...selectors) => {
  const $DOM = createDOMWithSelector('img', ...selectors);
  $DOM.src = src;
  return $DOM;
};

/***/ }),

/***/ "./src/components/base/alert/alert.css":
/*!*********************************************!*\
  !*** ./src/components/base/alert/alert.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/base/chat-list/chat-list.css":
/*!*****************************************************!*\
  !*** ./src/components/base/chat-list/chat-list.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/base/large-button/large-button.css":
/*!***********************************************************!*\
  !*** ./src/components/base/large-button/large-button.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/base/navigation-bar/navigation-bar.css":
/*!***************************************************************!*\
  !*** ./src/components/base/navigation-bar/navigation-bar.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/base/product-list/product-list.css":
/*!***********************************************************!*\
  !*** ./src/components/base/product-list/product-list.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/base/product-modal/product-modal.css":
/*!*************************************************************!*\
  !*** ./src/components/base/product-modal/product-modal.css ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/base/redirect/redirect.css":
/*!***************************************************!*\
  !*** ./src/components/base/redirect/redirect.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/detail-page/footer/footer.css":
/*!******************************************************!*\
  !*** ./src/components/detail-page/footer/footer.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/detail-page/section/img-container/img-container.css":
/*!****************************************************************************!*\
  !*** ./src/components/detail-page/section/img-container/img-container.css ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/detail-page/section/info-container/info-container.css":
/*!******************************************************************************!*\
  !*** ./src/components/detail-page/section/info-container/info-container.css ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/detail-page/section/section.css":
/*!********************************************************!*\
  !*** ./src/components/detail-page/section/section.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/detail-page/tool-bar/tool-bar.css":
/*!**********************************************************!*\
  !*** ./src/components/detail-page/tool-bar/tool-bar.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/location-page/body/body.css":
/*!****************************************************!*\
  !*** ./src/components/location-page/body/body.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/location-page/location-modal/location-modal.css":
/*!************************************************************************!*\
  !*** ./src/components/location-page/location-modal/location-modal.css ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/main-page/category/body/body.css":
/*!*********************************************************!*\
  !*** ./src/components/main-page/category/body/body.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/main-page/category/category.css":
/*!********************************************************!*\
  !*** ./src/components/main-page/category/category.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/main-page/location-mini-modal/location-mini-modal.css":
/*!******************************************************************************!*\
  !*** ./src/components/main-page/location-mini-modal/location-mini-modal.css ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/main-page/navigation-bar/navigation-bar.css":
/*!********************************************************************!*\
  !*** ./src/components/main-page/navigation-bar/navigation-bar.css ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/main-page/write-post-button/write-post-button.css":
/*!**************************************************************************!*\
  !*** ./src/components/main-page/write-post-button/write-post-button.css ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/menu-page/main-navigation-bar/main-navigation-bar.css":
/*!******************************************************************************!*\
  !*** ./src/components/menu-page/main-navigation-bar/main-navigation-bar.css ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/signup-page/body/body.css":
/*!**************************************************!*\
  !*** ./src/components/signup-page/body/body.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/signup-page/modal/modal.css":
/*!****************************************************!*\
  !*** ./src/components/signup-page/modal/modal.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/user-page/section/section.css":
/*!******************************************************!*\
  !*** ./src/components/user-page/section/section.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/writing-page/body/body.css":
/*!***************************************************!*\
  !*** ./src/components/writing-page/body/body.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/writing-page/footer/footer.css":
/*!*******************************************************!*\
  !*** ./src/components/writing-page/footer/footer.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/detail-page.css":
/*!***********************************!*\
  !*** ./src/pages/detail-page.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/menu-page.css":
/*!*********************************!*\
  !*** ./src/pages/menu-page.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/user-page.css":
/*!*********************************!*\
  !*** ./src/pages/user-page.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ "./src/reset.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router.js */ "./src/router.js");



window.addEventListener('popstate', _router_js__WEBPACK_IMPORTED_MODULE_2__.router);
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      (0,_router_js__WEBPACK_IMPORTED_MODULE_2__.navigateTo)(e.target.href || e.target.dataset.link);
    }
  });
  (0,_router_js__WEBPACK_IMPORTED_MODULE_2__.router)();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvYXBpL2FwaS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9iYXNlL2FsZXJ0L2FsZXJ0LmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL2Jhc2UvY2hhdC1saXN0L2NoYXQtbGlzdC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9iYXNlL2xhcmdlLWJ1dHRvbi9sYXJnZS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvYmFzZS9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9iYXNlL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvYmFzZS9wcm9kdWN0LW1vZGFsL3Byb2R1Y3QtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvYmFzZS9yZWRpcmVjdC9yZWRpcmVjdC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9kZXRhaWwtcGFnZS9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL2RldGFpbC1wYWdlL3NlY3Rpb24vaW1nLWNvbnRhaW5lci9pbWctY29udGFpbmVyLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL2RldGFpbC1wYWdlL3NlY3Rpb24vaW5mby1jb250YWluZXIvaW5mby1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvZGV0YWlsLXBhZ2Uvc2VjdGlvbi9zZWN0aW9uLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL2RldGFpbC1wYWdlL3Rvb2wtYmFyL3Rvb2wtYmFyLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL2xvY2F0aW9uLXBhZ2UvYm9keS9ib2R5LmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL2xvY2F0aW9uLXBhZ2UvbG9jYXRpb24tbW9kYWwvbG9jYXRpb24tbW9kYWwuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL2NhdGVnb3J5L2JvZHkvYm9keS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9tYWluLXBhZ2UvY2F0ZWdvcnkvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL2xvY2F0aW9uLW1pbmktbW9kYWwvbG9jYXRpb24tbWluaS1tb2RhbC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9tYWluLXBhZ2UvbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXIuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL3dyaXRlLXBvc3QtYnV0dG9uL3dyaXRlLXBvc3QtYnV0dG9uLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL21lbnUtcGFnZS9tYWluLW5hdmlnYXRpb24tYmFyL21haW4tbmF2aWdhdGlvbi1iYXIuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvc2lnbnVwLXBhZ2UvYm9keS9ib2R5LmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL3NpZ251cC1wYWdlL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL3VzZXItcGFnZS9zZWN0aW9uL3NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvd3JpdGluZy1wYWdlL2JvZHkvYm9keS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy93cml0aW5nLXBhZ2UvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29uc3RhbnRzL2NhdGVnb3J5LWxpc3QuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbnN0YW50cy9pY29uLXBhdGguanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3BhZ2VzL05vdEZvdW5kLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9wYWdlcy9Ob3RMb2dpbi5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvcGFnZXMvY2hhdC1wYWdlLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9wYWdlcy9kZXRhaWwtcGFnZS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvcGFnZXMvbG9jYXRpb24tcGFnZS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvcGFnZXMvbWFpbi1wYWdlLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9wYWdlcy9tZW51LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3BhZ2VzL3NpZ251cC1wYWdlLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9wYWdlcy91c2VyLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3BhZ2VzL3dyaXRpbmctcGFnZS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvcm91dGVyLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy91dGlsL2NyZWF0ZURPTVdpdGhTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9iYXNlL2FsZXJ0L2FsZXJ0LmNzcz9iZDA1Iiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL2Jhc2UvY2hhdC1saXN0L2NoYXQtbGlzdC5jc3M/YTgzOSIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9iYXNlL2xhcmdlLWJ1dHRvbi9sYXJnZS1idXR0b24uY3NzP2QzMWEiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvYmFzZS9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhci5jc3M/N2NiZiIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9iYXNlL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY3NzP2ZjMDciLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvYmFzZS9wcm9kdWN0LW1vZGFsL3Byb2R1Y3QtbW9kYWwuY3NzPzEzYzciLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvYmFzZS9yZWRpcmVjdC9yZWRpcmVjdC5jc3M/YjM3YiIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9kZXRhaWwtcGFnZS9mb290ZXIvZm9vdGVyLmNzcz9iZDZlIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL2RldGFpbC1wYWdlL3NlY3Rpb24vaW1nLWNvbnRhaW5lci9pbWctY29udGFpbmVyLmNzcz81NjIyIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL2RldGFpbC1wYWdlL3NlY3Rpb24vaW5mby1jb250YWluZXIvaW5mby1jb250YWluZXIuY3NzP2EwZWYiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvZGV0YWlsLXBhZ2Uvc2VjdGlvbi9zZWN0aW9uLmNzcz9jZWY2Iiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL2RldGFpbC1wYWdlL3Rvb2wtYmFyL3Rvb2wtYmFyLmNzcz9iYzVkIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL2xvY2F0aW9uLXBhZ2UvYm9keS9ib2R5LmNzcz8zMzI0Iiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL2xvY2F0aW9uLXBhZ2UvbG9jYXRpb24tbW9kYWwvbG9jYXRpb24tbW9kYWwuY3NzPzdkNmYiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL2NhdGVnb3J5L2JvZHkvYm9keS5jc3M/MGEzNyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9tYWluLXBhZ2UvY2F0ZWdvcnkvY2F0ZWdvcnkuY3NzPzhkZGYiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL2xvY2F0aW9uLW1pbmktbW9kYWwvbG9jYXRpb24tbWluaS1tb2RhbC5jc3M/Yzk2ZiIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9tYWluLXBhZ2UvbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXIuY3NzPzU3ZjQiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL3dyaXRlLXBvc3QtYnV0dG9uL3dyaXRlLXBvc3QtYnV0dG9uLmNzcz9kZjE0Iiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL21lbnUtcGFnZS9tYWluLW5hdmlnYXRpb24tYmFyL21haW4tbmF2aWdhdGlvbi1iYXIuY3NzPzc1MGIiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvc2lnbnVwLXBhZ2UvYm9keS9ib2R5LmNzcz9kY2EyIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL3NpZ251cC1wYWdlL21vZGFsL21vZGFsLmNzcz85YzQzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL3VzZXItcGFnZS9zZWN0aW9uL3NlY3Rpb24uY3NzPzQyNmUiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvd3JpdGluZy1wYWdlL2JvZHkvYm9keS5jc3M/NmMwZSIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy93cml0aW5nLXBhZ2UvZm9vdGVyL2Zvb3Rlci5jc3M/YTE5NyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvaW5kZXguY3NzP2M0MGQiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3BhZ2VzL2RldGFpbC1wYWdlLmNzcz8wZDEzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9wYWdlcy9tZW51LXBhZ2UuY3NzP2E2M2IiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3BhZ2VzL3VzZXItcGFnZS5jc3M/Mjk1OSIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvcmVzZXQuY3NzP2NlMzgiLCJ3ZWJwYWNrOi8vY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFQSV9FTkRQT0lOVCIsImdldERhdGEiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicG9zdERhdGEiLCJkYXRhIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicHV0RGF0YSIsImRlbGV0ZURhdGEiLCJhcGkiLCJnZXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwicG9zdCIsInVwZGF0ZSIsImRlbGV0ZSIsIkFsZXJ0IiwiY29uc3RydWN0b3IiLCIkcGFyZW50Iiwib25DbGljayIsIiR0YXJnZXQiLCJjcmVhdGVET01XaXRoU2VsZWN0b3IiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsIiRjb25maXJtQnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJvcGVuIiwic3R5bGUiLCJkaXNwbGF5IiwiY2xvc2UiLCJDaGF0TGlzdHMiLCJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsInJlbmRlciIsInNldFN0YXRlIiwibmV4dFN0YXRlIiwicmVzdWx0IiwibWFwIiwiY2hhdCIsIm5hbWUiLCJjb250ZW50IiwidGltZSIsImNyZWF0ZUNoYXRDb3VudCIsImNvdW50IiwiaW1nUGF0aCIsImpvaW4iLCJMYXJnZUJ1dHRvbiIsImlubmVyVGV4dCIsIk5hdmlnYXRpb25CYXIiLCJpc01vZGFsIiwiY29uc29sZSIsImxvZyIsImFjdGl2ZURvbmVJY29uIiwic2V0VGFyZ2V0IiwiYmluZFByZXZCdXR0b25DbGlja0V2ZW50IiwiJGljb24iLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJjcmVhdGVFeGl0SWNvbiIsImNyZWF0ZURvbmVJY29uIiwiZG9uZUljb24iLCJpc1VzZXIiLCJzZXRUaW1lb3V0IiwiaGlzdG9yeSIsImJhY2siLCJQcm9kdWN0TGlzdHMiLCJyZWZyZXNoU3RhdGUiLCIkbmFtZSIsImNyZWF0ZVZpZXciLCJvYnNlcnZlVGFnIiwicHJvZHVjdCIsInBrIiwibG9jYXRpb24iLCJwcmljZSIsImlzVXNlck93blByb2R1Y3QiLCJzZWxsZXIiLCJ1c2VyIiwiY3JlYXRlT3B0aW9uQnV0dG9uIiwiY3JlYXRlTGlrZUJ1dHRvbiIsImxpa2UiLCJjaGF0Q291bnQiLCJjcmVhdGVMaWtlQ291bnQiLCJsaWtlQ291bnQiLCJvYnNlcnZlckNhbGxiYWNrIiwiZW50cmllcyIsIm9ic2VydmVyIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJpZCIsInVub2JzZXJ2ZSIsImVuZFRhZyIsImNsYXNzTGlzdCIsImFkZCIsInNhbXBsZURhdGEiLCJyZW1vdmUiLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIml0ZW0iLCJvYnNlcnZlIiwiY2F0ZWdvcnkiLCJQcm9kdWN0TW9kYWwiLCJSZWRpcmVjdCIsImxpbmsiLCJzdGF0dXMiLCJGb290ZXIiLCJ3aXNoSWNvbk9uIiwiJGZvb3RlciIsIndpc2hJY29uSGFuZGxlciIsImNyZWF0ZVdpc2hJbWdCdXR0b25UZW1wbGF0ZSIsImNyZWF0ZU9wdGlvbkJ1dHRvblRlbXBsYXRlIiwiRkFWT1JJVEVfSUNPTiIsIkZBVk9SSVRFX0JPUkRFUl9NSU5JX0lDT04iLCJjaGFuZ2VXaXNoSWNvblN0YXRlIiwic3JjIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwiZ2V0SXNQcm9kdWN0V2lzaGVkQnlVc2VyIiwicG9zdFdpc2hTdGF0ZUJ5VXNlciIsImlzQ2xhc3NTZWxlY3RvciIsInNlbGVjdG9yIiwiY3JlYXRlQnV0dG9uIiwidGV4dCIsInNlbGVjdG9ycyIsImJ1dHRvbiIsImNyZWF0ZUltZ1RlbXBsYXRlIiwiZmlsdGVyIiwic2xpY2UiLCJJbWdDb250YWluZXIiLCJjdXJyZW50SW1nSW5kZXgiLCIkaW1nQ29udGFpbmVyIiwid2lkdGgiLCJsZW5ndGgiLCIkcHJldkJ1dHRvbiIsIiRuZXh0QnV0dG9uIiwiaXNPdXRPZkJvdW5kIiwibW92ZSIsIm1vdmVQcmV2T3JOZXh0SGFuZGxlciIsInRyYW5zZm9ybSIsIndpbmRvdyIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsIiRidXR0b25Db250YWluZXIiLCJTVEFUVVMiLCJJbmZvQ29udGFpbmVyIiwiJGluZm9Db250YWluZXIiLCJjcmVhdGVTdGF0dXNTZWxlY3RCdXR0b25UZW1wbGF0ZSIsIk1hdGgiLCJtaW4iLCJzdGF0IiwiaSIsImNyZWF0ZVByb2R1Y3RIZWFkZXJUZW1wbGF0ZSIsInRpdGxlIiwiY3JlYXRlZEF0IiwiY3JlYXRlUHJvZHVjdERlc2NyaXB0aW9uVGVtcGxhdGUiLCJjcmVhdGVQcm9kdWN0Q291bnRJbmZvVGVtcGxhdGUiLCJ3aXNoQ291bnQiLCJ2aXNpdENvdW50IiwiY3JlYXRlUHJvZHVjdFNlbGxlckluZm9UZW1wbGF0ZSIsIkRldGFpbFNlY3Rpb24iLCIkc2VjdGlvbiIsIiRpbWdDb250YWluZXJXcmFwcGVyIiwiJGluZm9Db250YWluZXJXcmFwcGVyIiwiVG9vbEJhciIsIkFSUk9XX0JBQ0tfSUNPTiIsIk1PUkVfVkVSVF9JQ09OIiwiQm9keVBhcnQiLCJpZHgiLCJkYXRhc2V0IiwiJEJ1dHRvbiIsImNyZWF0ZU1haW5CdXR0b24iLCJjcmVhdGVOb3JtYWxCdXR0b24iLCJjcmVhdGVQbHVzQnV0dG9uIiwiTG9jYXRpb25Nb2RhbCIsIiRpbnB1dCIsImJpbmRJbnB1dEV2ZW50IiwiaW5wdXRWYWx1ZSIsInZhbHVlIiwiY2hlY2tSZWdleEV2ZW50IiwiY2hlY2tMZW5ndGhFdmVudCIsInJlZ2V4IiwicmVwbGFjZSIsIkJvZHkiLCIkV3JhcHBlciIsInJlbmRlckNhdGVnb3JpZXMiLCJtb2RlIiwiQ2F0ZWdvcnkiLCJDQVRFR09SWV9MSVNUIiwibmF2aWdhdGlvbkJhciIsImJvZHlQYXJ0IiwiTWluaU1vZGFsIiwiJGNvbnRlbnQiLCJyZW5kZXJMb2NhdGlvbk5hbWUiLCJsb2NhdGlvbk5hbWUiLCJNYWluTmF2YmFyIiwiJGxvY2F0aW9uIiwibmV3TG9jYXRpb25OYW1lIiwiV3JpdGVQb3N0QnV0dG9uIiwiJHNlbGwiLCIkY2hhdCIsIiRpbnRlcmVzdCIsInVwZGF0ZUNsYXNzTGlzdCIsInRvZ2dsZSIsIiRpZCIsIkJ1dHRvbiIsIndlbGNvbWVNb2RhbCIsIldlbGNvbWVNb2RhbCIsImNoZWNrSWRSZWdleCIsImNoZWNrTG9jYXRpb25SZWdleCIsImFjdGl2YXRlQnV0dG9uIiwiV2VsY29tZSIsIlNlY3Rpb24iLCIkdXB0YWciLCIkZG93bnRhZyIsImNyZWF0ZVNlY3Rpb25Db250ZW50IiwiaXNVc2VyTG9naW4iLCJsYXJnZUJ1dHRvbiIsIiRhbGVydCIsImltYWdlQXJyYXkiLCJzcGxpY2UiLCJjaGNla1ZhbHVlQW5kUmVmcmVzaFN0YXRlIiwiJGNvbnRhaW5lciIsIiR0aXRsZSIsIiRwcmljZSIsIiRjYXRlZ29yeSIsImJpbmRUaXRsZUV2ZW50IiwiYmluZFByaWNlS2V5VXBFdmVudCIsInJlYXJyYW5nZVByaWNlIiwiYmluZENvbnRlbnRFdmVudCIsImJpbmRDYXRlZ29yeUV2ZW50IiwiYmluZEltYWdlQnV0dG9uRXZlbnQiLCJyZW5kZXJJbWFnZUZvcm0iLCJyZW5kZXJJbWFnZSIsInJlbmRlckJ1dHRvbiIsIm9uY2hhbmdlIiwib25DaGFuZ2VGaWxlRXZlbnQiLCJmaWxlcyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJvayIsIkVycm9yIiwiZmlsZVBhdGgiLCJjYXRjaCIsImFsZXJ0IiwidG9TdHJpbmciLCJpbWFnZSIsImFycmF5Iiwic3BsaXQiLCJjaGVja0hhdmluZ0FsbFZhbHVlIiwiaGF2ZUFsbFZhbHVlIiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiQUREX0lDT04iLCJBQ0NPVU5UX0lDT04iLCJDQU5DRUxfSUNPTiIsIkFSUk9XX0ZPUldBUkRfSUNPTiIsIkNBVEVHT1JZX0lDT04iLCJDSEFUX0JVQkJMRV9NSU5JX0lDT04iLCJET05FX0lDT04iLCJFWElUX0lDT04iLCJFWFBBTkRfTU9SRV9JQ09OIiwiRkFWT1JJVEVfQk9SREVSX0lDT04iLCJJTUFHRV9JQ09OIiwiTE9DQVRJT05fSUNPTiIsIk1FTlVfSUNPTiIsIlNFTkRfSUNPTiIsIk5vdEZvdW5kIiwiTm90TG9naW4iLCJuYXZpZ2F0ZVRvIiwiQ2hhdFBhZ2UiLCJOYXZiYXIiLCJzYW1wbGVDaGF0RGF0YSIsIkRldGFpbFBhZ2UiLCJoYXZlSGlzdG9yeVN0YXRlIiwicGF0aG5hbWUiLCJzZWNvbmREYXRhIiwidG9vbEJhciIsInByb2R1Y3RNb2RhbCIsInNlY3Rpb24iLCJmb290ZXIiLCJMb2NhdGlvblBhZ2UiLCJhbGxNeUxvY2F0aW9uIiwiY3VycmVudEluZGV4IiwibmF2YmFyIiwiYmluZEJ1dHRvbkNsaWNrRXZlbnQiLCJtb2RhbCIsIk1vZGFsIiwiYmluZE1vZGFsQ2xpY2tFdmVudCIsImJpbmRBbGVydENsaWNrRXZlbnQiLCJiaW5kUmVtb3ZlTG9jYXRpb25FdmVudCIsIkxvY2F0aW9uQXJyYXkiLCJNYWluUGFnZSIsInByb2R1Y3RzIiwiaW5kZXgiLCJiaW5kTmF2QmFyQ2xpY2tFdmVudCIsInBvc3RCdXR0b24iLCJQb3N0QnV0dG9uIiwiYmluZENhdGVnb3J5Q2xpY2tFdmVudCIsImxvY2F0aW9uTWluaU1vZGFsIiwiTG9jYXRpb25NaW5pTW9kYWwiLCJiaW5kTG9jYXRpb25Nb2RhbENsaWNrRXZlbnQiLCJpbml0aWFsbGl6ZURhdGEiLCJTdWJMb2NhdGlvbiIsIk1haW5Mb2NhdGlvbiIsInNjcm9sbFRvcCIsIk51bWJlciIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJNZW51UGFnZSIsIm5hdmlnYXRvckluZGV4IiwiY2hhdHMiLCJtYWluTmF2YmFyIiwiYmluZE1haW5OYXZiYXJFdmVudCIsInByb2R1Y3RMaXN0cyIsImNoYXRMaXN0cyIsIlNpZ25VcFBhZ2UiLCJVc2VyUGFnZSIsIiRhcHBCYXIiLCJBcHBCYXIiLCJXcml0aW5nUGFnZSIsInRlbXBTdGF0ZSIsInBhdGhUb1JlZ2V4IiwicGF0aCIsIlJlZ0V4cCIsInByb3BzIiwicHVzaFN0YXRlIiwicm91dGVyIiwicm91dGVzIiwidmlldyIsInBvdGVudGlhbE1hdGNoZXMiLCJyb3V0ZSIsIm1hdGNoIiwiZmluZCIsInBvdGVudGlhbE1hdGNoIiwiJGFwcCIsInRhZyIsIiRET00iLCJjcmVhdGVFbGVtZW50IiwiY3JlYXRlSW1nRE9NV2l0aFNlbGVjdG9yIiwibWF0Y2hlcyIsImhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHLE1BQXJCOztBQUVBLE1BQU1DLE9BQU8sR0FBSUMsR0FBRCxJQUFTO0FBQ3hCLFNBQU9DLEtBQUssQ0FBRSxHQUFFSCxZQUFhLEVBQWhCLEdBQXFCLEdBQUVFLEdBQUksRUFBNUIsQ0FBTCxDQUFvQ0UsSUFBcEMsQ0FBMENDLEdBQUQsSUFBUztBQUN4RCxXQUFPQSxHQUFHLENBQUNDLElBQUosRUFBUDtBQUNBLEdBRk0sQ0FBUDtBQUdBLENBSkQ7O0FBTUEsTUFBTUMsUUFBUSxHQUFHLENBQUNMLEdBQUQsRUFBTU0sSUFBTixLQUFlO0FBQy9CLFNBQU9MLEtBQUssQ0FBRSxHQUFFSCxZQUFhLEVBQWhCLEdBQXFCLEdBQUVFLEdB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UzhSLE9BQVQsQ0FBaUIsYUFBakIsQ0FBSixFQUFxQztBQUNwQzdULE9BQUMsQ0FBQ3FILGNBQUY7QUFDQWdJLDREQUFVLENBQUNyUCxDQUFDLENBQUMrQixNQUFGLENBQVMrUixJQUFULElBQWlCOVQsQ0FBQyxDQUFDK0IsTUFBRixDQUFTaUgsT0FBVCxDQUFpQmpFLElBQW5DLENBQVY7QUFDQTtBQUNELEdBTEQ7QUFPQWlPLG9EQUFNO0FBQ04sQ0FURCxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQSV9FTkRQT0lOVCA9ICcvYXBpJztcblxuY29uc3QgZ2V0RGF0YSA9ICh1cmwpID0+IHtcblx0cmV0dXJuIGZldGNoKGAke0FQSV9FTkRQT0lOVH1gICsgYCR7dXJsfWApLnRoZW4oKHJlcykgPT4ge1xuXHRcdHJldHVybiByZXMuanNvbigpO1xuXHR9KTtcbn07XG5cbmNvbnN0IHBvc3REYXRhID0gKHVybCwgZGF0YSkgPT4ge1xuXHRyZXR1cm4gZmV0Y2goYCR7QVBJX0VORFBPSU5UfWAgKyBgJHt1cmx9YCwge1xuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0fSxcblx0fSkudGhlbigocmVzKSA9PiB7XG5cdFx0cmV0dXJuIHJlcy5qc29uKCk7XG5cdH0pO1xufTtcblxuY29uc3QgcHV0RGF0YSA9ICh1cmwsIGRhdGEpID0+IHtcblx0cmV0dXJuIGZldGNoKGAke0FQSV9FTkRQT0lOVH1gICsgYCR7dXJsfWAsIHtcblx0XHRtZXRob2Q6ICdQVVQnLFxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0fSxcblx0fSkudGhlbigocmVzKSA9PiB7XG5cdFx0cmV0dXJuIHJlcy5qc29uKCk7XG5cdH0pO1xufTtcblxuY29uc3QgZGVsZXRlRGF0YSA9ICh1cmwpID0+IHtcblx0cmV0dXJuIGZldGNoKGAke0FQSV9FTkRQT0lOVH1gICsgYCR7dXJsfWAsIHtcblx0XHRtZXRob2Q6ICdERUxFVEUnLFxuXHR9KS50aGVuKChyZXMpID0+IHtcblx0XHRyZXR1cm4gcmVzLmpzb24oKTtcblx0fSk7XG59O1xuXG5leHBvcnQgY29uc3QgYXBpID0ge1xuXHRnZXQ6ICh1cmwpID0+IHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Z2V0RGF0YSh1cmwpLnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0aWYgKGRhdGEuc3VjY2Vzcykge1xuXHRcdFx0XHRcdHJlc29sdmUoe1xuXHRcdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcblx0XHRcdFx0XHRcdGRhdGE6IGRhdGEsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZhbHNlLFxuXHRcdFx0XHRcdFx0bWVzc2FnZTogZGF0YS5tZXNzYWdlLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSxcblxuXHRwb3N0OiAodXJsLCBkYXRhKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHBvc3REYXRhKHVybCwgZGF0YSkudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0XHRpZiAoZGF0YS5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0cmVzb2x2ZSh7XG5cdFx0XHRcdFx0XHRzdWNjZXNzOiB0cnVlLFxuXHRcdFx0XHRcdFx0ZGF0YTogZGF0YSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZWplY3Qoe1xuXHRcdFx0XHRcdFx0c3VjY2VzczogZmFsc2UsXG5cdFx0XHRcdFx0XHRtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LFxuXHR1cGRhdGU6ICh1cmwsIGRhdGEpID0+IHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0cHV0RGF0YSh1cmwsIGRhdGEpLnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0aWYgKGRhdGEuc3VjY2Vzcykge1xuXHRcdFx0XHRcdHJlc29sdmUoe1xuXHRcdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcblx0XHRcdFx0XHRcdGRhdGE6IGRhdGEsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZhbHNlLFxuXHRcdFx0XHRcdFx0bWVzc2FnZTogZGF0YS5tZXNzYWdlLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSxcblx0ZGVsZXRlOiAodXJsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGRlbGV0ZURhdGEodXJsKS50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRcdGlmIChkYXRhLnN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRyZXNvbHZlKHtcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXG5cdFx0XHRcdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlamVjdCh7XG5cdFx0XHRcdFx0XHRzdWNjZXNzOiBmYWxzZSxcblx0XHRcdFx0XHRcdG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG59O1xuIiwiaW1wb3J0ICcuL2FsZXJ0LmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVET01XaXRoU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NyZWF0ZURPTVdpdGhTZWxlY3Rvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsZXJ0IHtcblx0Y29uc3RydWN0b3IoeyAkcGFyZW50LCBvbkNsaWNrIH0pIHtcblx0XHR0aGlzLiR0YXJnZXQgPSBjcmVhdGVET01XaXRoU2VsZWN0b3IoJ2RpdicsICcuYWxlcnQnKTtcblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJHRhcmdldCk7XG5cblx0XHQvLyDssYTtjIUg6rWs7ZiE7IucIHJlbmRlcigpIOu5vOyEnCDsnqzsgqzsmqlcblx0XHR0aGlzLiR0YXJnZXQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydF9fb3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFsZXJ0X19ndWlkZVwiPuygleunkOuhnCDsgq3soJztlZjsi5zqsqDsirXri4jquYw/PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnRfX2NoZWNrT25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFsZXJ0X19jYW5jZWxcIj7st6jshow8L3NwYW4+PHNwYW4gY2xhc3M9XCJhbGVydF9fY29uZmlybVwiPuyCreygnDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGA7XG5cblx0XHR0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xuXHRcdHRoaXMuJGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnRfX2NvbmZpcm0nKTtcblxuXHRcdHRoaXMuJHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHR0aGlzLm9uQ2xpY2soZSk7XG5cdFx0fSk7XG5cdH1cblxuXHRvcGVuKCkge1xuXHRcdHRoaXMuJHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdHRoaXMuJHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHR9XG59XG4iLCJpbXBvcnQgJy4vY2hhdC1saXN0LmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVET01XaXRoU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NyZWF0ZURPTVdpdGhTZWxlY3Rvcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0TGlzdHMge1xuXHRzdGF0ZSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKHsgJHBhcmVudCwgaW5pdGlhbFN0YXRlIH0pIHtcblx0XHR0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXHRcdHRoaXMuJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3Rvcignc2VjdGlvbicsICcuY2hhdE91dGxpbmUnKTtcblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJHRhcmdldCk7XG5cblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0c2V0U3RhdGUobmV4dFN0YXRlKSB7XG5cdFx0dGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMuc3RhdGVcblx0XHRcdC5tYXAoKGNoYXQpID0+IHtcblx0XHRcdFx0cmV0dXJuIGBcblx0XHRcdFx0PGFydGljbGUgY2xhc3M9J2NoYXQnPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9J2NoYXRfX2luZm8nPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9J2NoYXRfX25hbWUnPiR7Y2hhdC5uYW1lfTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPSdjaGF0X19jb250ZW50Jz4ke2NoYXQuY29udGVudH08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NoYXRfX3JpZ2h0U2lkZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdjaGF0X190aW1lJz4ke2NoYXQudGltZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmNyZWF0ZUNoYXRDb3VudChjaGF0LmNvdW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz0nY2hhdF9faW1ncycgc3JjPSR7Y2hhdC5pbWdQYXRofT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0YDtcblx0XHRcdH0pXG5cdFx0XHQuam9pbignJyk7XG5cblx0XHR0aGlzLiR0YXJnZXQuaW5uZXJIVE1MID0gcmVzdWx0O1xuXHR9XG5cblx0Y3JlYXRlQ2hhdENvdW50KGNvdW50KSB7XG5cdFx0cmV0dXJuIGNvdW50ID4gMFxuXHRcdFx0PyBgPGRpdiBjbGFzcz0nY2hhdF9fY291bnQnPjxzcGFuPiR7Y291bnR9PC9zcGFuPjwvZGl2PmBcblx0XHRcdDogYGA7XG5cdH1cblxuXHRvcGVuKCkge1xuXHRcdHRoaXMuJHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdHRoaXMuJHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHR9XG59XG4iLCJpbXBvcnQgJy4vbGFyZ2UtYnV0dG9uLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVET01XaXRoU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NyZWF0ZURPTVdpdGhTZWxlY3Rvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhcmdlQnV0dG9uIHtcblx0c3RhdGUgPSAnJztcblxuXHRjb25zdHJ1Y3Rvcih7ICRwYXJlbnQsIGluaXRpYWxTdGF0ZSwgb25DbGljayB9KSB7XG5cdFx0dGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblx0XHRpZiAodGhpcy5zdGF0ZSA9PT0gJ+2ajOybkOqwgOyehScpXG5cdFx0XHR0aGlzLiR0YXJnZXQgPSBjcmVhdGVET01XaXRoU2VsZWN0b3IoXG5cdFx0XHRcdCdidXR0b24nLFxuXHRcdFx0XHQnLmxhcmdlQnV0dG9uJyxcblx0XHRcdFx0Jy5kaXNhYmxlJ1xuXHRcdFx0KTtcblx0XHRlbHNlIHRoaXMuJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignYnV0dG9uJywgJy5sYXJnZUJ1dHRvbicpO1xuXG5cdFx0dGhpcy5vbkNsaWNrID0gb25DbGljaztcblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJHRhcmdldCk7XG5cblx0XHR0aGlzLiR0YXJnZXQuaW5uZXJUZXh0ID0gdGhpcy5zdGF0ZTtcblx0XHR0aGlzLiR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5vbkNsaWNrKGUpO1xuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgJy4vbmF2aWdhdGlvbi1iYXIuY3NzJztcbmltcG9ydCB7IGNyZWF0ZURPTVdpdGhTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY3JlYXRlRE9NV2l0aFNlbGVjdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkJhciB7XG5cdHN0YXRlID0gJyc7XG5cdCR0YXJnZXQgPSBudWxsO1xuXHRpc1VzZXIgPSBmYWxzZTtcblx0aXNNb2RhbCA9IGZhbHNlO1xuXHRkb25lSWNvbiA9IGZhbHNlOyAvLyDquIDsk7DquLAg66qo65OcIOuzgOyImFxuXHRhY3RpdmVEb25lSWNvbiA9IGZhbHNlOyAvLyDquIDsk7DquLAg66qo65OcIOuzgOyImFxuXG5cdGNvbnN0cnVjdG9yKHsgJHBhcmVudCwgaW5pdGlhbFN0YXRlLCBvbkNsaWNrLCBpc01vZGFsID0gZmFsc2UgfSkge1xuXHRcdHRoaXMuaXNNb2RhbCA9IGlzTW9kYWw7XG5cdFx0dGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblx0XHRjb25zb2xlLmxvZygnaGknKTtcblx0XHRpZiAodGhpcy5zdGF0ZVswXSA9PT0gJ+q4gOyTsOq4sCcpIHtcblx0XHRcdHRoaXMuc3RhdGVbMV0gPT09IHRydWUgPyAodGhpcy5hY3RpdmVEb25lSWNvbiA9IHRydWUpIDogJyc7XG5cdFx0XHR0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZVswXTtcblx0XHR9XG5cblx0XHR0aGlzLnNldFRhcmdldCh0aGlzLnN0YXRlKTtcblxuXHRcdCRwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy4kdGFyZ2V0KTtcblxuXHRcdHRoaXMuJHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHR0aGlzLmJpbmRQcmV2QnV0dG9uQ2xpY2tFdmVudChlKTtcblx0XHR9KTtcblxuXHRcdHRoaXMuJGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19pY29uJyk7XG5cdFx0dGhpcy5vbkNsaWNrID0gb25DbGljaztcblxuXHRcdHRoaXMuJHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnbmF2X19kb25lQWN0aXZlJykge1xuXHRcdFx0XHR0aGlzLm9uQ2xpY2soKTtcblx0XHRcdH1cblx0XHRcdC8vIOy2lO2bhCDssYTtjIUg64KY6rCA6riw7JeQIOuMgO2VnCDsnbTrsqTtirjrj4Qg7Jes6riwIVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fVxuXG5cdHNldFN0YXRlKG5leHRTdGF0ZSkge1xuXHRcdGlmICh0aGlzLnN0YXRlID09PSAn6riA7JOw6riwJykge1xuXHRcdFx0aWYgKG5leHRTdGF0ZSkgdGhpcy5hY3RpdmVEb25lSWNvbiA9IHRydWU7XG5cdFx0XHRlbHNlIHRoaXMuYWN0aXZlRG9uZUljb24gPSBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcblx0XHR9XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR0aGlzLiR0YXJnZXQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGltZyBjbGFzcz0nbmF2X19wcmV2JyBzcmM9J2h0dHBzOi8vZGVhbC02LnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vc3RvcmVJbWFnZXMvaWNvbnMvYXJyb3dfYmFja19ibGFjay5zdmcnLz5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICR7dGhpcy5zdGF0ZX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdl9faWNvbic+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmNyZWF0ZUV4aXRJY29uKCl9XG5cdFx0XHRcdCR7dGhpcy5jcmVhdGVEb25lSWNvbigpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cdH1cblxuXHRzZXRUYXJnZXQoaW5pdGlhbFN0YXRlKSB7XG5cdFx0c3dpdGNoIChpbml0aWFsU3RhdGUpIHtcblx0XHRcdGNhc2UgJ+uCtCDrj5nrhKQg7ISk7KCV7ZWY6riwJzpcblx0XHRcdGNhc2UgJ+2ajOybkOqwgOyehSc6XG5cdFx0XHRjYXNlICfroZzqt7jsnbgnOlxuXHRcdFx0Y2FzZSAn64K0IOqzhOyglSc6XG5cdFx0XHRjYXNlICfrqZTribQnOlxuXHRcdFx0Y2FzZSAn7Lm07YWM6rOg66asJzpcblx0XHRcdFx0dGhpcy4kdGFyZ2V0ID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCduYXYnLCAnLm5hdi0tZ3JleScpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ+yxhO2Mhe2VmOq4sCc6XG5cdFx0XHRcdHRoaXMuJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignbmF2JywgJy5uYXYtLXdoaXRlJyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAn6riA7JOw6riwJzpcblx0XHRcdFx0dGhpcy4kdGFyZ2V0ID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCduYXYnLCAnLm5hdi0td2hpdGUnKTtcblx0XHRcdFx0dGhpcy5kb25lSWNvbiA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhpcy4kdGFyZ2V0ID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCduYXYnLCAnLm5hdi0td2hpdGUnKTtcblx0XHRcdFx0dGhpcy5pc1VzZXIgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRjcmVhdGVEb25lSWNvbigpIHtcblx0XHRpZiAodGhpcy5kb25lSWNvbikge1xuXHRcdFx0aWYgKHRoaXMuYWN0aXZlRG9uZUljb24pXG5cdFx0XHRcdHJldHVybiBgPGltZyBjbGFzcz0nbmF2X19kb25lQWN0aXZlJyBzcmM9XCJodHRwczovL2RlYWwtNi5zMy5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tL3N0b3JlSW1hZ2VzL2ljb25zL2RvbmVfYWN0aXZlLnN2Z1wiIC8+YDtcblx0XHRcdHJldHVybiBgPGltZyBjbGFzcz0nbmF2X19kb25lJyBzcmM9XCJodHRwczovL2RlYWwtNi5zMy5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tL3N0b3JlSW1hZ2VzL2ljb25zL2RvbmUuc3ZnXCIgLz5gO1xuXHRcdH1cblx0XHRyZXR1cm4gYGA7XG5cdH1cblxuXHRjcmVhdGVFeGl0SWNvbigpIHtcblx0XHRpZiAodGhpcy5pc1VzZXIpXG5cdFx0XHRyZXR1cm4gYDxpbWcgY2xhc3M9J25hdl9fZXhpdCcgc3JjPVwiaHR0cHM6Ly9kZWFsLTYuczMuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbS9zdG9yZUltYWdlcy9pY29ucy9leGl0LnN2Z1wiIC8+YDtcblx0XHRyZXR1cm4gYGA7XG5cdH1cblxuXHRiaW5kUHJldkJ1dHRvbkNsaWNrRXZlbnQoZSkge1xuXHRcdGlmICh0aGlzLmlzTW9kYWwgPT09IHRydWUpIHtcblx0XHRcdHRoaXMub25DbGljayhlLCAwKTtcblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0KGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ25hdl9fcHJldicgJiYgdGhpcy5zdGF0ZSA9PT0gJ+uplOuJtCcpIHx8XG5cdFx0XHQoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnbmF2X19wcmV2JyAmJiB0aGlzLnN0YXRlID09PSAn64K0IOqzhOyglScpIHx8XG5cdFx0XHQoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnbmF2X19wcmV2JyAmJiB0aGlzLnN0YXRlID09PSAn66Gc6re47J24Jylcblx0XHQpIHtcblx0XHRcdHRoaXMub25DbGljayhlKTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRoaXN0b3J5LmJhY2soLTEpO1xuXHRcdFx0fSwgNDAwKTtcblx0XHR9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ25hdl9fcHJldicpIGhpc3RvcnkuYmFjaygtMSk7XG5cdH1cbn1cbiIsImltcG9ydCAnLi9wcm9kdWN0LWxpc3QuY3NzJztcbmltcG9ydCB7IGNyZWF0ZURPTVdpdGhTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY3JlYXRlRE9NV2l0aFNlbGVjdG9yJztcbi8vIGltcG9ydCBQcm9kdWN0TW9kYWwgZnJvbSAnLi4vcHJvZHVjdC1tb2RhbC9wcm9kdWN0LW1vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdExpc3RzIHtcblx0c3RhdGUgPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcih7ICRwYXJlbnQsIGluaXRpYWxTdGF0ZSwgcmVmcmVzaFN0YXRlIH0pIHtcblx0XHR0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXHRcdHRoaXMuJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3Rvcignc2VjdGlvbicsICcucHJvZHVjdE91dGxpbmUnKTtcblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJHRhcmdldCk7XG5cdFx0dGhpcy4kbmFtZSA9ICRwYXJlbnQuY2xhc3NOYW1lO1xuXHRcdHRoaXMucmVmcmVzaFN0YXRlID0gcmVmcmVzaFN0YXRlO1xuXG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0XHQvKnRoaXMucHJvZHVjdE1vZGFsID0gbmV3IFByb2R1Y3RNb2RhbCh7XG5cdFx0XHQkcGFyZW50OiB0aGlzLiR0YXJnZXQsXG5cdFx0fSk7IOuztOulmDsgKi9cblx0fVxuXG5cdHNldFN0YXRlKG5leHRTdGF0ZSkge1xuXHRcdHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR0aGlzLiR0YXJnZXQuaW5uZXJIVE1MID0gdGhpcy5jcmVhdGVWaWV3KCk7XG5cdFx0aWYgKHRoaXMuJG5hbWUgIT09ICdtZW51V3JhcHBlcicpIHtcblx0XHRcdHRoaXMub2JzZXJ2ZVRhZygpO1xuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZVZpZXcoKSB7XG5cdFx0Lypcblx0XHRcdHBr66W8IOydtOyaqe2VtCBkYXRhLWxpbmsg7JeQIOyCveyehVxuXHRcdCovXG5cdFx0cmV0dXJuIChcblx0XHRcdHRoaXMuc3RhdGVcblx0XHRcdFx0Lm1hcCgocHJvZHVjdCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBgXG5cdFx0XHQ8YXJ0aWNsZSBjbGFzcz0ncHJvZHVjdCc+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8aW1nIGNsYXNzPSdwcm9kdWN0X19pbWdzJyBzcmM9JHtwcm9kdWN0LmltZ1BhdGh9IGRhdGEtbGluaz0ke1xuXHRcdFx0XHRcdFx0cHJvZHVjdC5wayA/ICcvZGV0YWlsLzEnIDogJy9kZXRhaWwnXG5cdFx0XHRcdFx0fT5cblx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPSdwcm9kdWN0X19pbmZvJz5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz0ncHJvZHVjdF9fbmFtZScgZGF0YS1saW5rPScvZGV0YWlsLyR7cHJvZHVjdC5wa30nPiR7XG5cdFx0XHRcdFx0XHRwcm9kdWN0Lm5hbWVcblx0XHRcdFx0XHR9PC9zcGFuPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz0ncHJvZHVjdF9fbG9jYXRpb24nIGRhdGEtbGluaz0nL2RldGFpbC8ke3Byb2R1Y3QucGt9Jz4ke1xuXHRcdFx0XHRcdFx0cHJvZHVjdC5sb2NhdGlvblxuXHRcdFx0XHRcdH0g4oiZPC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9J3Byb2R1Y3RfX3RpbWUnIGRhdGEtbGluaz0nL2RldGFpbC8ke3Byb2R1Y3QucGt9Jz4ke1xuXHRcdFx0XHRcdFx0cHJvZHVjdC50aW1lXG5cdFx0XHRcdFx0fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz0ncHJvZHVjdF9fcHJpY2UnIGRhdGEtbGluaz0nL2RldGFpbC8ke3Byb2R1Y3QucGt9Jz4ke1xuXHRcdFx0XHRcdFx0cHJvZHVjdC5wcmljZVxuXHRcdFx0XHRcdH08L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdFx0JHtcblx0XHRcdFx0XHR0aGlzLmlzVXNlck93blByb2R1Y3QocHJvZHVjdC5zZWxsZXIsIHByb2R1Y3QudXNlcilcblx0XHRcdFx0XHRcdD8gdGhpcy5jcmVhdGVPcHRpb25CdXR0b24oKVxuXHRcdFx0XHRcdFx0OiB0aGlzLmNyZWF0ZUxpa2VCdXR0b24ocHJvZHVjdC5saWtlKVxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRcblxuXHRcdFx0XHQ8ZGl2IGNsYXNzPSdyaWdodEJvdHRvbScgPlxuXHRcdFx0XHRcdCR7dGhpcy5jcmVhdGVDaGF0Q291bnQocHJvZHVjdC5jaGF0Q291bnQpfVxuXHRcdFx0XHRcdCR7dGhpcy5jcmVhdGVMaWtlQ291bnQocHJvZHVjdC5saWtlQ291bnQpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcblx0XHRcdDwvYXJ0aWNsZT5cblx0XHRgO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuam9pbignJykgKyBgPGRpdiBpZD1cImVuZFwiIGNsYXNzPSdwcm9kdWN0Jz48L2Rpdj5gXG5cdFx0KTtcblxuXHRcdC8qXG5cdFx0XHTqs6DroKTtlaAg67aA67aEIVxuXHRcdFx0MS4gdXNlcuyZgCDqt7gg7IOB7ZKIIOyjvOyduOyduCDqsr3smrAgOiBsaWtlIOuMgOyLoCAnOicg7JWE7J207L2YXG5cdFx0XHQyLiBwcm9kdWN07JeQIHVzZXIgaWQgZmllbGQg64Sj7Ja07IScIHVzZXJpZOyZgCDruYTqtZDtlZzri6QuXG5cdFx0XHQzLiBsaWtlIOuqqOuNuOydtCDrlLDroZwg7ZWE7JqU7ZWg65OvPyB1c2Vy7JmAIHByb2R1Y3Trpbwg7Jeu7J2AXG5cdFx0Ki9cblx0fVxuXHRpc1VzZXJPd25Qcm9kdWN0KHNlbGxlciwgdXNlcikge1xuXHRcdHJldHVybiBzZWxsZXIgPT09IHVzZXI7XG5cdH1cblxuXHRjcmVhdGVPcHRpb25CdXR0b24oKSB7XG5cdFx0cmV0dXJuIGA8aW1nIGNsYXNzPVwicHJvZHVjdF9fb3B0aW9uXCIgc3JjPVwiaHR0cHM6Ly9kZWFsLTYuczMuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbS9zdG9yZUltYWdlcy9pY29ucy9tb3JlX3ZlcnRfZ3JleS5zdmdcIiAvPmA7XG5cdH1cblxuXHRjcmVhdGVMaWtlQnV0dG9uKGxpa2UpIHtcblx0XHRyZXR1cm4gbGlrZSA9PT0gJ1QnXG5cdFx0XHQ/IGA8aW1nIGNsYXNzPVwicHJvZHVjdF9fbGlrZVwiIHNyYz1cImh0dHBzOi8vZGVhbC02LnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vc3RvcmVJbWFnZXMvaWNvbnMvZmF2b3JpdGUuc3ZnXCIgLz5gXG5cdFx0XHQ6IGA8aW1nXG5cdFx0XHRcdFx0Y2xhc3M9XCJwcm9kdWN0X19saWtlXCJcblx0XHRcdFx0XHRzcmM9XCJodHRwczovL2RlYWwtNi5zMy5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tL3N0b3JlSW1hZ2VzL2ljb25zL2Zhdm9yaXRlX2JvcmRlcl9taW5pLnN2Z1wiXG5cdFx0XHRcdC8+YDtcblx0fVxuXG5cdGNyZWF0ZUNoYXRDb3VudChjb3VudCkge1xuXHRcdHJldHVybiBjb3VudCA+IDBcblx0XHRcdD8gYDxpbWcgY2xhc3M9J3JpZ2h0Qm90dG9tX19jaGF0JyBzcmM9J2h0dHBzOi8vZGVhbC02LnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vc3RvcmVJbWFnZXMvaWNvbnMvY2hhdF9idWJibGVfbWluaS5zdmcnIC8+XG5cdFx0XHRcdFx0XHQ8c3Bhbj4ke2NvdW50fTwvc3Bhbj5gXG5cdFx0XHQ6IGBgO1xuXHR9XG5cblx0Y3JlYXRlTGlrZUNvdW50KGNvdW50KSB7XG5cdFx0cmV0dXJuIGNvdW50ID4gMFxuXHRcdFx0PyBgPGltZyBjbGFzcz0ncmlnaHRCb3R0b21fX2xpa2UnIHNyYz0naHR0cHM6Ly9kZWFsLTYuczMuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbS9zdG9yZUltYWdlcy9pY29ucy9mYXZvcml0ZV9ib3JkZXJfbWluaS5zdmcnIC8+XG5cdFx0XHRcdFx0XHQ8c3Bhbj4ke2NvdW50fTwvc3Bhbj5gXG5cdFx0XHQ6IGBgO1xuXHR9XG5cblx0b2JzZXJ2ZVRhZygpIHtcblx0XHQvLyBsYXp5IGxvYWRpbmcgLCBpbmZpbml0ZSBTY3JvbGwg64u064u5XG5cdFx0Y29uc3Qgb2JzZXJ2ZXJDYWxsYmFjayA9IChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xuXHRcdFx0ZW50cmllcy5mb3JFYWNoKGFzeW5jIChlbnRyeSkgPT4ge1xuXHRcdFx0XHRpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcblx0XHRcdFx0XHRpZiAoZW50cnkudGFyZ2V0LmlkID09PSAnZW5kJykge1xuXHRcdFx0XHRcdFx0b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG5cblx0XHRcdFx0XHRcdGVuZFRhZy5jbGFzc0xpc3QuYWRkKCdzcGlubmVyJyk7XG5cdFx0XHRcdFx0XHRlbmRUYWcuaW5uZXJIVE1MID0gYDxpbWcgY2xhc3M9J3JpZ2h0Qm90dG9tX19saWtlJyBzcmM9J2h0dHBzOi8vZGVhbC02LnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vc3RvcmVJbWFnZXMvaWNvbnMvbG9hZGluZy1sb2FkZXItc3ZncmVwby1jb20uc3ZnJyAvPmA7XG5cblx0XHRcdFx0XHRcdC8vIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkucmFuZG9tQ2F0cygpO1xuXHRcdFx0XHRcdFx0Ly8gaWYgKGRhdGEuc3VjY2Vzcykge1xuXG5cdFx0XHRcdFx0XHQvLyBpZiAoZGF0YS5kYXRhLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdC8vIHRoaXMucmVmcmVzaFN0YXRlKHRoaXMuc3RhdGUpO1xuXHRcdFx0XHRcdFx0Ly8gdGhpcy5yZWZyZXNoU3RhdGUoWy4uLnRoaXMuc3RhdGUsIC4uLnNhbXBsZURhdGFdKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSBbLi4udGhpcy5zdGF0ZSwgLi4uc2FtcGxlRGF0YV07XG5cblx0XHRcdFx0XHRcdC8vIH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBlbmRUYWcuY2xhc3NMaXN0LnJlbW92ZSgnc3Bpbm5lcicpO1xuXHRcdFx0XHRcdFx0Ly8gZW5kVGFnLmlubmVyVGV4dCA9IGDinZdObyBNb3JlIFN0dWZm4p2XYDtcblxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGVuZFRhZy5pbm5lckhUTUwgPSAnJztcblx0XHRcdFx0XHRcdFx0ZW5kVGFnLmNsYXNzTGlzdC5yZW1vdmUoJ3NwaW5uZXInKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcblx0XHRcdFx0XHRcdH0sIDIwMDApO1xuXG5cdFx0XHRcdFx0XHQvLyB9XG5cblx0XHRcdFx0XHRcdC8vIH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBcdGFsZXJ0KGRhdGEubWVzc2FnZSk7XG5cdFx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRjb25zdCBlbmRUYWcgPSB0aGlzLiR0YXJnZXQucXVlcnlTZWxlY3RvcignI2VuZCcpO1xuXHRcdGNvbnN0IGl0ZW1zID0gdGhpcy4kdGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0Jyk7XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjayk7XG5cdFx0aXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShpdGVtKSk7XG5cdH1cblxuXHRvcGVuKCkge1xuXHRcdHRoaXMuJHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdHRoaXMuJHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHR9XG59XG5cbmNvbnN0IHNhbXBsZURhdGEgPSBbXG5cdHtcblx0XHR1c2VyOiAnJywgLy8gcGvqsJLsnYQg65Ok6rOg7J6I7J2E7KeALCDsnbTrpoTsnYQg65Ok6rOgIOyeiOydhOyngCDqs6Drr7zsnoXri4jri6QuXG5cdFx0c2VsbGVyOiAn7ZS87Lm07IaMJyxcblx0XHRwcmljZTogJ+KCqTM1LDAwMCwwMDAnLFxuXHRcdG5hbWU6ICftlLzsubTshozsnZgg66qF7ZmUJyxcblx0XHRsb2NhdGlvbjogJ+usuOuemOuPmScsXG5cdFx0Y2F0ZWdvcnk6ICfquLDtg4Ag7KSR6rOg66y87ZKIJyxcblx0XHRpbWdQYXRoOiAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzIwMCcsXG5cdFx0dGltZTogJzPrtoTsoIQnLFxuXHRcdGNoYXRDb3VudDogMyxcblx0XHRsaWtlQ291bnQ6IDIsXG5cdFx0bGlrZTogJ1QnLFxuXHRcdHBrOiAwLFxuXHR9LFxuXHR7XG5cdFx0dXNlcjogJ+2UvOy5tOyGjCcsIC8vIHBr6rCS7J2EIOuTpOqzoOyeiOydhOyngCwg7J2066aE7J2EIOuTpOqzoCDsnojsnYTsp4Ag6rOg66+87J6F64uI64ukLlxuXHRcdHNlbGxlcjogJ+2UvOy5tOyGjCcsXG5cdFx0cHJpY2U6ICfigqkzNSwwMDAsMDAwJyxcblx0XHRuYW1lOiAn7ZS87Lm07IaM7J2YIOuqhe2ZlCcsXG5cdFx0bG9jYXRpb246ICfsnbjssL3rj5knLFxuXHRcdGNhdGVnb3J5OiAn65SU7KeA7YS46riw6riwJyxcblx0XHRpbWdQYXRoOiAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzIwMC8zMDAnLFxuXHRcdHRpbWU6ICcz67aE7KCEJyxcblx0XHRjaGF0Q291bnQ6IDMsXG5cdFx0bGlrZUNvdW50OiAyLFxuXHRcdGxpa2U6ICdUJyxcblx0XHRwazogMCxcblx0fSxcblx0e1xuXHRcdHVzZXI6ICcnLCAvLyBwa+qwkuydhCDrk6Tqs6DsnojsnYTsp4AsIOydtOumhOydhCDrk6Tqs6Ag7J6I7J2E7KeAIOqzoOuvvOyeheuLiOuLpC5cblx0XHRzZWxsZXI6ICftlLzsubTshownLFxuXHRcdHByaWNlOiAn4oKpMzUsMDAwLDAwMCcsXG5cdFx0bmFtZTogJ+2UvOy5tOyGjOydmCDrqoXtmZQnLFxuXHRcdGxvY2F0aW9uOiAn7J247LC964+ZJyxcblx0XHRjYXRlZ29yeTogJ+q4sO2DgCDspJHqs6DrrLztkognLFxuXHRcdGltZ1BhdGg6ICdodHRwczovL3BpY3N1bS5waG90b3MvaWQvMS8yMDAvMzAwJyxcblx0XHR0aW1lOiAnM+u2hOyghCcsXG5cdFx0Y2hhdENvdW50OiAzLFxuXHRcdGxpa2VDb3VudDogMixcblx0XHRsaWtlOiAnVCcsXG5cdFx0cGs6IDAsXG5cdH0sXG5cdHtcblx0XHR1c2VyOiAnJywgLy8gcGvqsJLsnYQg65Ok6rOg7J6I7J2E7KeALCDsnbTrpoTsnYQg65Ok6rOgIOyeiOydhOyngCDqs6Drr7zsnoXri4jri6QuXG5cdFx0c2VsbGVyOiAn7ZS87Lm07IaMJyxcblx0XHRwcmljZTogJ+KCqTM1LDAwMCwwMDAnLFxuXHRcdG5hbWU6ICftlLzsubTshozsnZgg66qF7ZmUJyxcblx0XHRsb2NhdGlvbjogJ+yduOywveuPmScsXG5cdFx0Y2F0ZWdvcnk6ICfquLDtg4Ag7KSR6rOg66y87ZKIJyxcblx0XHRpbWdQYXRoOlxuXHRcdFx0J2h0dHBzOi8vaS5waWNzdW0ucGhvdG9zL2lkLzEwLzI1MDAvMTY2Ny5qcGc/aG1hYz1KMDRXV0NfZWJjaHgzV3d6Yk0tWjRfS0NfTGVMQldyNUxaTWFBa1drRjY4Jyxcblx0XHR0aW1lOiAnM+u2hOyghCcsXG5cdFx0Y2hhdENvdW50OiAzLFxuXHRcdGxpa2VDb3VudDogMixcblx0XHRsaWtlOiAnRicsXG5cdFx0cGs6IDAsXG5cdH0sXG5cdHtcblx0XHR1c2VyOiAn7ZS87Lm07IaMJywgLy8gcGvqsJLsnYQg65Ok6rOg7J6I7J2E7KeALCDsnbTrpoTsnYQg65Ok6rOgIOyeiOydhOyngCDqs6Drr7zsnoXri4jri6QuXG5cdFx0c2VsbGVyOiAn7ZS87Lm07IaMJyxcblx0XHRwcmljZTogJ+KCqTM1LDAwMCwwMDAnLFxuXHRcdG5hbWU6ICftlLzsubTshozsnZgg66qF7ZmUJyxcblx0XHRsb2NhdGlvbjogJ+yduOywveuPmScsXG5cdFx0Y2F0ZWdvcnk6ICfquLDtg4Ag7KSR6rOg66y87ZKIJyxcblx0XHRpbWdQYXRoOlxuXHRcdFx0J2h0dHBzOi8vaS5waWNzdW0ucGhvdG9zL2lkLzEwMC8yNTAwLzE2NTYuanBnP2htYWM9Z1d5Ti03WkIzMnJrQWpNaEtYUWdkSE9JQlJIeVRTZ3p1T0s2VTB2WGIxdycsXG5cdFx0dGltZTogJzPrtoTsoIQnLFxuXHRcdGNoYXRDb3VudDogMyxcblx0XHRsaWtlQ291bnQ6IDIsXG5cdFx0bGlrZTogJ1QnLFxuXHRcdHBrOiAwLFxuXHR9LFxuXHR7XG5cdFx0dXNlcjogJycsIC8vIHBr6rCS7J2EIOuTpOqzoOyeiOydhOyngCwg7J2066aE7J2EIOuTpOqzoCDsnojsnYTsp4Ag6rOg66+87J6F64uI64ukLlxuXHRcdHNlbGxlcjogJ+2UvOy5tOyGjCcsXG5cdFx0cHJpY2U6ICfigqkzNSwwMDAsMDAwJyxcblx0XHRuYW1lOiAn7ZS87Lm07IaM7J2YIOuqhe2ZlCcsXG5cdFx0bG9jYXRpb246ICfsnbjssL3rj5knLFxuXHRcdGNhdGVnb3J5OiAn6riw7YOAIOykkeqzoOusvO2SiCcsXG5cdFx0aW1nUGF0aDpcblx0XHRcdCdodHRwczovL2kucGljc3VtLnBob3Rvcy9pZC8xMDAwLzU2MjYvMzYzNS5qcGc/aG1hYz1xV2gwNjVGcl9NOE9hM3NOc2RETDhuZ1dYdjJKYi1FRTQ5WkluNmMwUC1nJyxcblx0XHR0aW1lOiAnM+u2hOyghCcsXG5cdFx0Y2hhdENvdW50OiAzLFxuXHRcdGxpa2VDb3VudDogMixcblx0XHRsaWtlOiAnVCcsXG5cdFx0cGs6IDAsXG5cdH0sXG5cdHtcblx0XHR1c2VyOiAn7ZS87Lm07IaMJywgLy8gcGvqsJLsnYQg65Ok6rOg7J6I7J2E7KeALCDsnbTrpoTsnYQg65Ok6rOgIOyeiOydhOyngCDqs6Drr7zsnoXri4jri6QuXG5cdFx0c2VsbGVyOiAn7ZS87Lm07IaMJyxcblx0XHRwcmljZTogJ+KCqTM1LDAwMCwwMDAnLFxuXHRcdG5hbWU6ICftlLzsubTshozsnZgg66qF7ZmUJyxcblx0XHRsb2NhdGlvbjogJ+yduOywveuPmScsXG5cdFx0Y2F0ZWdvcnk6ICfquLDtg4Ag7KSR6rOg66y87ZKIJyxcblx0XHRpbWdQYXRoOlxuXHRcdFx0J2h0dHBzOi8vaS5waWNzdW0ucGhvdG9zL2lkLzEwMDMvMTE4MS8xNzcyLmpwZz9obWFjPW9OOWZITVhpcWU5WnEyUk02WFQtUlZaa29qZ1BuRUNXd3lFRjFSdnZUWmsnLFxuXHRcdHRpbWU6ICcz67aE7KCEJyxcblx0XHRjaGF0Q291bnQ6IDMsXG5cdFx0bGlrZUNvdW50OiAyLFxuXHRcdGxpa2U6ICdGJyxcblx0XHRwazogMCxcblx0fSxcblx0e1xuXHRcdHVzZXI6ICcnLCAvLyBwa+qwkuydhCDrk6Tqs6DsnojsnYTsp4AsIOydtOumhOydhCDrk6Tqs6Ag7J6I7J2E7KeAIOqzoOuvvOyeheuLiOuLpC5cblx0XHRzZWxsZXI6ICftlLzsubTshownLFxuXHRcdHByaWNlOiAn4oKpMzUsMDAwLDAwMCcsXG5cdFx0bmFtZTogJ+2UvOy5tOyGjOydmCDrqoXtmZQnLFxuXHRcdGxvY2F0aW9uOiAn7J247LC964+ZJyxcblx0XHRjYXRlZ29yeTogJ+q4sO2DgCDspJHqs6DrrLztkognLFxuXHRcdGltZ1BhdGg6XG5cdFx0XHQnaHR0cHM6Ly9pLnBpY3N1bS5waG90b3MvaWQvMTAxLzI2MjEvMTc0Ny5qcGc/aG1hYz1jdTE1WUdvdFMwZ0lZZEJiUjFoZTVOdEJMWkFBWTZhSVk1QWJPUlJBbmdzJyxcblx0XHR0aW1lOiAnM+u2hOyghCcsXG5cdFx0Y2hhdENvdW50OiAzLFxuXHRcdGxpa2VDb3VudDogMixcblx0XHRsaWtlOiAnVCcsXG5cdFx0cGs6IDAsXG5cdH0sXG5cdHtcblx0XHR1c2VyOiAn7ZS87Lm07IaMJywgLy8gcGvqsJLsnYQg65Ok6rOg7J6I7J2E7KeALCDsnbTrpoTsnYQg65Ok6rOgIOyeiOydhOyngCDqs6Drr7zsnoXri4jri6QuXG5cdFx0c2VsbGVyOiAn7ZS87Lm07IaMJyxcblx0XHRwcmljZTogJ+KCqTM1LDAwMCwwMDAnLFxuXHRcdG5hbWU6ICftlLzsubTshozsnZgg66qF7ZmUJyxcblx0XHRsb2NhdGlvbjogJ+yduOywveuPmScsXG5cdFx0Y2F0ZWdvcnk6ICfquLDtg4Ag7KSR6rOg66y87ZKIJyxcblx0XHRpbWdQYXRoOlxuXHRcdFx0J2h0dHBzOi8vaS5waWNzdW0ucGhvdG9zL2lkLzEwMTUvNjAwMC80MDAwLmpwZz9obWFjPWFIamIwZlJhMXQxNERUSUVCY29DMTJjNXJBWE9Td25WbGFBNXVqeFBRMEknLFxuXHRcdHRpbWU6ICcz67aE7KCEJyxcblx0XHRjaGF0Q291bnQ6IDMsXG5cdFx0bGlrZUNvdW50OiAyLFxuXHRcdGxpa2U6ICdUJyxcblx0XHRwazogMCxcblx0fSxcbl07XG4iLCJpbXBvcnQgJy4vcHJvZHVjdC1tb2RhbC5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlRE9NV2l0aFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jcmVhdGVET01XaXRoU2VsZWN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0TW9kYWwge1xuXHRjb25zdHJ1Y3Rvcih7ICRwYXJlbnQsIG9uQ2xpY2sgfSkge1xuXHRcdHRoaXMuJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignZGl2JywgJy5wcm9kdWN0TW9kYWwnKTtcblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJHRhcmdldCk7XG5cblx0XHR0aGlzLiR0YXJnZXQuaW5uZXJIVE1MID0gYFxuXHRcdFx0PGRpdiBjbGFzcz0ncHJvZHVjdE1vZGFsX193cmFwcGVyJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdE1vZGFsX19vdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RNb2RhbF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdE1vZGFsX191cGRhdGVcIj7siJjsoJXtlZjquLA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RNb2RhbF9fZGVsZXRlXCI+7IKt7KCc7ZWY6riwPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHQ8L2Rpdj5cbiAgICAgICAgICAgICAgYDtcblxuXHRcdHRoaXMub25DbGljayA9IG9uQ2xpY2s7XG5cdFx0dGhpcy4kdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdHRoaXMub25DbGljayhlKTtcblx0XHR9KTtcblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0dGhpcy4kdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0dGhpcy4kdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZURPTVdpdGhTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY3JlYXRlRE9NV2l0aFNlbGVjdG9yJztcbmltcG9ydCAnLi9yZWRpcmVjdC5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWRpcmVjdCB7XG5cdHN0YXRlID0ge1xuXHRcdGxpbms6ICcnLFxuXHRcdG1lc3NhZ2U6ICcnLFxuXHRcdHN0YXR1czogJycsXG5cdFx0Y29udGVudDogJycsXG5cdH07XG5cdGNvbnN0cnVjdG9yKHsgJHBhcmVudCwgaW5pdGlhbFN0YXRlIH0pIHtcblx0XHR0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXHRcdHRoaXMuJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignZGl2JywgJy5yZWRpcmVjdCcpO1xuXHRcdCRwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy4kdGFyZ2V0KTtcblx0XHR0aGlzLiR0YXJnZXQuaW5uZXJIVE1MID0gYFxuXHRcdCAgICA8YnV0dG9uIGNsYXNzPSdyZWRpcmVjdF9fYnV0dG9uJyBkYXRhLWxpbms9JHt0aGlzLnN0YXRlLmxpbmt9PiR7dGhpcy5zdGF0ZS5tZXNzYWdlfTwvYnV0dG9uPlxuXHRcdCAgICA8aW1nIHNyYz1cImh0dHBzOi8vZGVhbC02LnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vc3RvcmVJbWFnZXMvaW1ncy9ub3Rmb3VuZC5naWZcIj5cblx0XHQgICAgPGgxPiR7dGhpcy5zdGF0ZS5zdGF0dXN9PC9oMT5cblx0XHQgICAgPGRpdj4ke3RoaXMuc3RhdGUuY29udGVudH08L2Rpdj5cblx0XHRgO1xuXHR9XG59XG4iLCJpbXBvcnQgJy4vZm9vdGVyLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVET01XaXRoU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NyZWF0ZURPTVdpdGhTZWxlY3Rvcic7XG5pbXBvcnQge1xuXHRGQVZPUklURV9JQ09OLFxuXHRGQVZPUklURV9CT1JERVJfTUlOSV9JQ09OLFxufSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvaWNvbi1wYXRoJztcblxuY29uc3QgaXNVc2VyT3duUHJvZHVjdCA9IChzZWxsZXIsIHVzZXIpID0+IHNlbGxlciA9PT0gdXNlcjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIHtcblx0Y29uc3RydWN0b3IoeyAkcGFyZW50LCBpbml0aWFsU3RhdGUgfSkge1xuXHRcdHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cdFx0dGhpcy53aXNoSWNvbk9uID0gZmFsc2U7IC8vIGFwaSDqtaztmIQg7J207KCE7J2066+A66GcIOyehOyLnOuhnCDrhKPsnYxcblx0XHQvKlxuXHRcdFx0QVBJIOyalOyyreycvOuhnCB3aXNoSWNvbk9uIOyImOyglVxuXHRcdFx0XG5cdFx0XHRnZXRJc1Byb2R1Y3RXaXNoZWRCeVVzZXIoKVxuXHRcdFx0LnJlc29sdmUoKCk9PiB7XG5cdFx0XHRcdHRoaXMud2lzaEljb25PbiA9IHJlc3VsdD87XG5cdFx0XHR9KVxuXHRcdFx0LnJlamVjdCgoKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiYXBpIOyalOyyrSDsl5Drn6xcIik7XG5cdFx0XHR9KVxuXHRcdCovXG5cdFx0dGhpcy4kZm9vdGVyID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCdmb290ZXInLCAnLmRldGFpbF9fZm9vdGVyJyk7XG5cblx0XHR0aGlzLiRmb290ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLndpc2hJY29uSGFuZGxlcik7XG5cblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJGZvb3Rlcik7XG5cblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0c2V0U3RhdGUobmV4dFN0YXRlKSB7XG5cdFx0dGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHRoaXMuJGZvb3Rlci5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd3aXNoJz5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmNyZWF0ZVdpc2hJbWdCdXR0b25UZW1wbGF0ZSgpfVxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd2ZXJ0aWNhbC1saW5lJz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PiR7dGhpcy5zdGF0ZS5wcmljZX3sm5A8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgJHt0aGlzLmNyZWF0ZU9wdGlvbkJ1dHRvblRlbXBsYXRlKCl9XG4gICAgICAgIGA7XG5cdH1cblxuXHRjcmVhdGVXaXNoSW1nQnV0dG9uVGVtcGxhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMud2lzaEljb25PblxuXHRcdFx0PyBgPGltZyBzcmM9JHtGQVZPUklURV9JQ09OfSBjbGFzcz0nd2lzaC1pY29uJyAvPmBcblx0XHRcdDogYDxpbWcgc3JjPSR7RkFWT1JJVEVfQk9SREVSX01JTklfSUNPTn0gY2xhc3M9J3dpc2gtaWNvbicgLz5gO1xuXHR9XG5cblx0Y3JlYXRlT3B0aW9uQnV0dG9uVGVtcGxhdGUoKSB7XG5cdFx0cmV0dXJuIGBcblx0XHQ8YnV0dG9uIFxuXHRcdFx0XHRjbGFzcz1cIm9wdGlvbi1idXR0b25cIlxuXHRcdFx0XHRkYXRhLWxpbms9XCIkeycvY2hhdCd9XG5cdFx0XHRcIj5cblx0XHRcdCR7XG5cdFx0XHRcdGlzVXNlck93blByb2R1Y3QodGhpcy5zdGF0ZS5zZWxsZXIsIHRoaXMuc3RhdGUudXNlcilcblx0XHRcdFx0XHQ/ICfssYTtjIUg66qp66GdIOuztOq4sCdcblx0XHRcdFx0XHQ6ICfrrLjsnZjtlZjquLAnXG5cdFx0XHR9XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRgO1xuXHR9XG5cblx0d2lzaEljb25IYW5kbGVyKHsgdGFyZ2V0IH0pIHtcblx0XHQvLyDsnbTrsqTtirgg7JyE7J6EIOuwqeyLnVxuXHRcdGlmICh0YXJnZXQuY2xhc3NOYW1lID09PSAnd2lzaC1pY29uJykge1xuXHRcdFx0Y29uc3QgY2hhbmdlV2lzaEljb25TdGF0ZSA9ICh0YXJnZXQpID0+IHtcblx0XHRcdFx0dGFyZ2V0LnNyYyA9IHRoaXMud2lzaEljb25PblxuXHRcdFx0XHRcdD8gRkFWT1JJVEVfSUNPTlxuXHRcdFx0XHRcdDogRkFWT1JJVEVfQk9SREVSX01JTklfSUNPTjtcblx0XHRcdH07XG5cblx0XHRcdGxldCByZXNwb25zZSA9IHsgc3RhdHVzQ29kZTogMjAwIH07IC8vIOqwnOuwnCDri6jqs4Qg7J6E7IucIOuzgOyImFxuXG5cdFx0XHQvKlxuXHRcdFx0XHRBUEkg7JqU7LKt7Jy866GcIHdpc2hJY29uT24g7IiY7KCVXG5cdFx0XHRcdOycoOyggOqwgCDsnbQg7JWE7J207YWc7J2EIOyii+yVhO2VmOuKlOyngCDshJzrsoTsl5Ag7KGw7ZqM7ZWcIOqysOqzvOqwkuydhCDquLDspIDsnLzroZwg642w7J207YSw6rCAIOyhtOyerO2VnOuLpOuptFxuXHRcdFx0XHR0aGlzLndpc2hJY29uT24gPSDsmpTssq3qsrDqs7w7XG5cblx0XHRcdFx0dGhpcy5wb3N0V2lzaFN0YXRlQnlVc2VyKClcblx0XHRcdFx0LnJlc29sdmUoKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID09PSAyMDApIHtcblx0XHRcdFx0XHRcdHRoaXMud2lzaEljb25PbiA9ICF0aGlzLndpc2hJY29uT247XG5cdFx0XHRcdFx0XHRjaGFuZ2VXaXNoSWNvblN0YXRlKHRhcmdldCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQucmVqZWN0KGNhbGxiYWNrKVxuXHRcdFx0Ki9cblxuXHRcdFx0aWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDIwMCkge1xuXHRcdFx0XHR0aGlzLndpc2hJY29uT24gPSAhdGhpcy53aXNoSWNvbk9uO1xuXHRcdFx0XHRjaGFuZ2VXaXNoSWNvblN0YXRlKHRhcmdldCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Z2V0SXNQcm9kdWN0V2lzaGVkQnlVc2VyKCkge1xuXHRcdC8qKlxuXHRcdCAqIGdldCBhcGkg7JqU7LKtXG5cdFx0ICovXG5cdFx0Ly8gcmV0dXJuIG5ldyBQcm9taXNlKCk7XG5cdH1cblxuXHRwb3N0V2lzaFN0YXRlQnlVc2VyKCkge1xuXHRcdC8qKlxuXHRcdCAqIHBvc3QgYXBpIOyalOyyrVxuXHRcdCAqL1xuXHRcdC8vICByZXR1cm4gbmV3IFByb21pc2UoKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlRE9NV2l0aFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jcmVhdGVET01XaXRoU2VsZWN0b3InO1xuaW1wb3J0ICcuL2ltZy1jb250YWluZXIuY3NzJztcblxuY29uc3QgaXNDbGFzc1NlbGVjdG9yID0gKHNlbGVjdG9yKSA9PiBzZWxlY3RvclswXSA9PT0gJy4nO1xuXG5jb25zdCBjcmVhdGVCdXR0b24gPSAodGV4dCwgLi4uc2VsZWN0b3JzKSA9PiB7XG5cdGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignYnV0dG9uJywgLi4uc2VsZWN0b3JzKTtcblx0YnV0dG9uLmlubmVyVGV4dCA9IHRleHQ7XG5cdHJldHVybiBidXR0b247XG59O1xuXG5jb25zdCBjcmVhdGVJbWdUZW1wbGF0ZSA9IChzcmMsIC4uLnNlbGVjdG9ycykgPT4ge1xuXHRyZXR1cm4gYCBcblx0XHQ8aW1nIGNsYXNzPVwiJHtzZWxlY3RvcnNcblx0XHRcdC5maWx0ZXIoaXNDbGFzc1NlbGVjdG9yKVxuXHRcdFx0Lm1hcCgoc2VsZWN0b3IpID0+IHNlbGVjdG9yLnNsaWNlKDEpKVxuXHRcdFx0LmpvaW4oJyAnKX1cIiBzcmM9JHtzcmN9IC8+XG5cdGA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWdDb250YWluZXIge1xuXHRjb25zdHJ1Y3Rvcih7ICRwYXJlbnQsIGluaXRpYWxTdGF0ZSB9KSB7XG5cdFx0dGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblx0XHR0aGlzLiRwYXJlbnQgPSAkcGFyZW50O1xuXHRcdHRoaXMuY3VycmVudEltZ0luZGV4ID0gMDtcblx0XHR0aGlzLiRpbWdDb250YWluZXIgPSBjcmVhdGVET01XaXRoU2VsZWN0b3IoJ2RpdicsICcuaW1nLWNvbnRhaW5lcicpO1xuXHRcdHRoaXMuJGltZ0NvbnRhaW5lci5zdHlsZS53aWR0aCA9IGAkezIwICogdGhpcy5zdGF0ZS5sZW5ndGh9cmVtYDtcblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJGltZ0NvbnRhaW5lcik7XG5cblx0XHQvKlxuXHRcdOydtOuvuOyngCDsu6jthYzsnbTrhIjrpbwg7JuA7KeB7J2064qUIOuyhO2KvOydhCDsg53shLHtlanri4jri6QuXG5cdFx0Ki9cblxuXHRcdHRoaXMuJHByZXZCdXR0b24gPSBjcmVhdGVCdXR0b24oJzwnLCAnLm1vdmUnLCAnLnByZXYnKTtcblx0XHR0aGlzLiRuZXh0QnV0dG9uID0gY3JlYXRlQnV0dG9uKCc+JywgJy5tb3ZlJywgJy5uZXh0Jyk7XG5cblx0XHRjb25zdCBpc091dE9mQm91bmQgPSAobW92ZSkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0dGhpcy5jdXJyZW50SW1nSW5kZXggKyBtb3ZlID49IHRoaXMuc3RhdGUubGVuZ3RoIHx8XG5cdFx0XHRcdHRoaXMuY3VycmVudEltZ0luZGV4ICsgbW92ZSA8IDBcblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG1vdmVQcmV2T3JOZXh0SGFuZGxlciA9IChtb3ZlKSA9PiB7XG5cdFx0XHRpZiAoaXNPdXRPZkJvdW5kKG1vdmUpKSByZXR1cm47XG5cdFx0XHR0aGlzLiRpbWdDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke1xuXHRcdFx0XHQtMjAgKiAodGhpcy5jdXJyZW50SW1nSW5kZXggKyBtb3ZlKVxuXHRcdFx0fXJlbSlgO1xuXHRcdFx0dGhpcy5jdXJyZW50SW1nSW5kZXggKz0gbW92ZTtcblx0XHR9O1xuXG5cdFx0dGhpcy4kcHJldkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG5cdFx0XHRtb3ZlUHJldk9yTmV4dEhhbmRsZXIoLTEpXG5cdFx0KTtcblxuXHRcdHRoaXMuJG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuXHRcdFx0bW92ZVByZXZPck5leHRIYW5kbGVyKDEpXG5cdFx0KTtcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGU7XG5cblx0XHRcdGlmIChrZXlDb2RlID09IDM3KSB7XG5cdFx0XHRcdC8vIGxlZnQga2V5XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0bW92ZVByZXZPck5leHRIYW5kbGVyKC0xKTtcblx0XHRcdH0gZWxzZSBpZiAoa2V5Q29kZSA9PSAzOSkge1xuXHRcdFx0XHQvLyByaWdodCBrZXlcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRtb3ZlUHJldk9yTmV4dEhhbmRsZXIoMSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLiRidXR0b25Db250YWluZXIgPSBjcmVhdGVET01XaXRoU2VsZWN0b3IoJ2RpdicsICcubmV4dC1hbmQtcHJldicpO1xuXHRcdHRoaXMuJGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiRwcmV2QnV0dG9uKTtcblx0XHR0aGlzLiRidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kbmV4dEJ1dHRvbik7XG5cblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJGJ1dHRvbkNvbnRhaW5lcik7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fVxuXG5cdHNldFN0YXRlKG5leHRTdGF0ZSkge1xuXHRcdHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR0aGlzLiRpbWdDb250YWluZXIuaW5uZXJIVE1MID0gYFxuXHRcdFx0JHt0aGlzLnN0YXRlLm1hcCgoc3JjKSA9PiBjcmVhdGVJbWdUZW1wbGF0ZShzcmMsICcuZ3JhZGllbnQnKSkuam9pbignXFxuJyl9XHRcblx0XHRgO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVET01XaXRoU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NyZWF0ZURPTVdpdGhTZWxlY3Rvcic7XG5pbXBvcnQgJy4vaW5mby1jb250YWluZXIuY3NzJztcblxuY29uc3QgU1RBVFVTID0gWyftjJDrp6TspJEnLCAn7JiI7JW97KSRJywgJ+2MkOunpOyZhOujjCddO1xuXG5jb25zdCBpc1VzZXJPd25Qcm9kdWN0ID0gKHNlbGxlciwgdXNlcikgPT4gc2VsbGVyID09PSB1c2VyO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvQ29udGFpbmVyIHtcblx0Y29uc3RydWN0b3IoeyAkcGFyZW50LCBpbml0aWFsU3RhdGUgfSkge1xuXHRcdHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cdFx0dGhpcy4kaW5mb0NvbnRhaW5lciA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignZGl2JywgJy5pbmZvLWNvbnRhaW5lcicpO1xuXHRcdCRwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy4kaW5mb0NvbnRhaW5lcik7XG5cblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0c2V0U3RhdGUobmV4dFN0YXRlKSB7XG5cdFx0dGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IGNyZWF0ZVN0YXR1c1NlbGVjdEJ1dHRvblRlbXBsYXRlID0gKHsgc3RhdHVzLCBzZWxsZXIsIHVzZXIgfSkgPT4ge1xuXHRcdFx0c3RhdHVzID0gTWF0aC5taW4oc3RhdHVzLCAyKTtcblxuXHRcdFx0cmV0dXJuIGlzVXNlck93blByb2R1Y3Qoc2VsbGVyLCB1c2VyKVxuXHRcdFx0XHQ/IGBcblx0XHRcdFx0XHQ8c2VsZWN0IG5hbWU9XCJzdGF0dXNcIiB2YWx1ZT0ke3N0YXR1c30gY2xhc3M9XCJpbmZvIHN0YXR1c1wiPlxuXHRcdFx0XHRcdCR7U1RBVFVTLm1hcCgoc3RhdCwgaSkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHN0YXR1cyA9PT0gaVxuXHRcdFx0XHRcdFx0XHQ/IGA8b3B0aW9uIHZhbHVlPSR7aX0gc2VsZWN0ZWQ9XCJzZWxlY3RlZFwifT4ke3N0YXR9PC9vcHRpb24+YFxuXHRcdFx0XHRcdFx0XHQ6IGA8b3B0aW9uIHZhbHVlPSR7aX0gfT4ke3N0YXR9PC9vcHRpb24+YDtcblx0XHRcdFx0XHR9KS5qb2luKCdcXG4nKX1cblx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0YFxuXHRcdFx0XHQ6ICcnO1xuXHRcdH07XG5cblx0XHRjb25zdCBjcmVhdGVQcm9kdWN0SGVhZGVyVGVtcGxhdGUgPSAoe1xuXHRcdFx0dGl0bGUsXG5cdFx0XHRjYXRlZ29yeSxcblx0XHRcdGNyZWF0ZWRBdCxcblx0XHR9KSA9PiB7XG5cdFx0XHRyZXR1cm4gYFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPSdpbmZvJz5cblx0XHRcdFx0XHQ8aDE+JHt0aXRsZX08L2gxPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9J3N1Yi1oZWFkZXItY29udGFpbmVyJz5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPSdncmV5LXRleHQgc21hbGwtdGV4dCc+JHtjYXRlZ29yeX3iiJkke2NyZWF0ZWRBdH08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0YDtcblx0XHR9O1xuXG5cdFx0Y29uc3QgY3JlYXRlUHJvZHVjdERlc2NyaXB0aW9uVGVtcGxhdGUgPSAoeyBjb250ZW50IH0pID0+IHtcblx0XHRcdHJldHVybiBgPGRpdiBjbGFzcz0naW5mbyBkZXNjcmlwdGlvbic+JHtjb250ZW50fTwvZGl2PmA7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNyZWF0ZVByb2R1Y3RDb3VudEluZm9UZW1wbGF0ZSA9ICh7XG5cdFx0XHRjaGF0Q291bnQsXG5cdFx0XHR3aXNoQ291bnQsXG5cdFx0XHR2aXNpdENvdW50LFxuXHRcdH0pID0+IHtcblx0XHRcdHJldHVybiBgXG5cdFx0XHRcdDxkaXYgY2xhc3M9J2luZm8gY291bnQgc3ViLWhlYWRlci1jb250YWluZXInPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPSdncmV5LXRleHQgc21hbGwtdGV4dCc+7LGE7YyFICR7Y2hhdENvdW50feKImeq0gOyLrCAke3dpc2hDb3VudH3iiJnsobDtmowgJHt2aXNpdENvdW50fTwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRgO1xuXHRcdH07XG5cblx0XHRjb25zdCBjcmVhdGVQcm9kdWN0U2VsbGVySW5mb1RlbXBsYXRlID0gKHsgc2VsbGVyLCBsb2NhdGlvbiB9KSA9PiB7XG5cdFx0XHRyZXR1cm4gYFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPSdpbmZvIHNlbGxlciBzbWFsbC10ZXh0Jz5cblx0XHRcdFx0XHQ8ZGl2Pu2MkOunpOyekCDsoJXrs7Q8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PHNwYW4+JHtzZWxsZXJ9PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9J2dyZXkyLXRleHQnPiR7bG9jYXRpb259PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdGA7XG5cdFx0fTtcblxuXHRcdHRoaXMuJGluZm9Db250YWluZXIuaW5uZXJIVE1MID0gYFxuXHRcdFx0JHtjcmVhdGVTdGF0dXNTZWxlY3RCdXR0b25UZW1wbGF0ZSh0aGlzLnN0YXRlKX1cblx0XHRcdCR7Y3JlYXRlUHJvZHVjdEhlYWRlclRlbXBsYXRlKHRoaXMuc3RhdGUpfVxuXHRcdFx0JHtjcmVhdGVQcm9kdWN0RGVzY3JpcHRpb25UZW1wbGF0ZSh0aGlzLnN0YXRlKX1cblx0XHRcdCR7Y3JlYXRlUHJvZHVjdENvdW50SW5mb1RlbXBsYXRlKHRoaXMuc3RhdGUpfVxuXHRcdFx0JHtjcmVhdGVQcm9kdWN0U2VsbGVySW5mb1RlbXBsYXRlKHRoaXMuc3RhdGUpfVxuXHRcdGA7XG5cdH1cbn1cbiIsImltcG9ydCAnLi9zZWN0aW9uLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVET01XaXRoU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NyZWF0ZURPTVdpdGhTZWxlY3Rvcic7XG5pbXBvcnQgSW1nQ29udGFpbmVyIGZyb20gJy4vaW1nLWNvbnRhaW5lci9pbWctY29udGFpbmVyJztcbmltcG9ydCBJbmZvQ29udGFpbmVyIGZyb20gJy4vaW5mby1jb250YWluZXIvaW5mby1jb250YWluZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxTZWN0aW9uIHtcblx0JGltZ0NvbnRhaW5lciA9IG51bGw7XG5cdGluZGV4ID0gMDtcblxuXHRjb25zdHJ1Y3Rvcih7ICRwYXJlbnQsIGluaXRpYWxTdGF0ZSB9KSB7XG5cdFx0dGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblx0XHR0aGlzLiRzZWN0aW9uID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCdzZWN0aW9uJywgJy5zZWN0aW9uJyk7XG5cblx0XHR0aGlzLiRpbWdDb250YWluZXJXcmFwcGVyID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKFxuXHRcdFx0J2RpdicsXG5cdFx0XHQnLmltZy1jb250YWluZXItd3JhcHBlcidcblx0XHQpO1xuXG5cdFx0dGhpcy4kaW5mb0NvbnRhaW5lcldyYXBwZXIgPSBjcmVhdGVET01XaXRoU2VsZWN0b3IoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdCcuaW5mby1jb250YWluZXItd3JhcHBlcidcblx0XHQpO1xuXG5cdFx0dGhpcy4kaW1nQ29udGFpbmVyID0gbmV3IEltZ0NvbnRhaW5lcih7XG5cdFx0XHQkcGFyZW50OiB0aGlzLiRpbWdDb250YWluZXJXcmFwcGVyLFxuXHRcdFx0aW5pdGlhbFN0YXRlOiB0aGlzLnN0YXRlLmltZ1BhdGgsXG5cdFx0fSk7XG5cblx0XHR0aGlzLiRpbmZvQ29udGFpbmVyID0gbmV3IEluZm9Db250YWluZXIoe1xuXHRcdFx0JHBhcmVudDogdGhpcy4kaW5mb0NvbnRhaW5lcldyYXBwZXIsXG5cdFx0XHRpbml0aWFsU3RhdGU6IHRoaXMuc3RhdGUsXG5cdFx0fSk7XG5cblx0XHR0aGlzLiRzZWN0aW9uLmFwcGVuZENoaWxkKHRoaXMuJGltZ0NvbnRhaW5lcldyYXBwZXIpO1xuXHRcdHRoaXMuJHNlY3Rpb24uYXBwZW5kQ2hpbGQodGhpcy4kaW5mb0NvbnRhaW5lcldyYXBwZXIpO1xuXHRcdCRwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy4kc2VjdGlvbik7XG5cdH1cblx0c2V0U3RhdGUobmV4dFN0YXRlKSB7XG5cdFx0dGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcblx0XHR0aGlzLiRpbWdDb250YWluZXIuc2V0U3RhdGUodGhpcy5zdGF0ZS5pbWdQYXRoKTtcblx0XHR0aGlzLiRpbmZvQ29udGFpbmVyLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xuXHR9XG59XG4iLCJpbXBvcnQgJy4vdG9vbC1iYXIuY3NzJztcbmltcG9ydCB7IGNyZWF0ZURPTVdpdGhTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY3JlYXRlRE9NV2l0aFNlbGVjdG9yJztcbmltcG9ydCB7IEFSUk9XX0JBQ0tfSUNPTiwgTU9SRV9WRVJUX0lDT04gfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvaWNvbi1wYXRoJztcblxuY29uc3QgaXNVc2VyT3duUHJvZHVjdCA9IChzZWxsZXIsIHVzZXIpID0+IHNlbGxlciA9PT0gdXNlcjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbEJhciB7XG5cdGNvbnN0cnVjdG9yKHsgJHBhcmVudCwgaW5pdGlhbFN0YXRlLCBvbkNsaWNrIH0pIHtcblx0XHR0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXG5cdFx0dGhpcy4kdGFyZ2V0ID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCduYXYnLCAnLmRldGFpbF9fbmF2Jyk7XG5cblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJHRhcmdldCk7XG5cblx0XHR0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xuXHRcdHRoaXMuJHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHR0aGlzLm9uQ2xpY2soZSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0c2V0U3RhdGUobmV4dFN0YXRlKSB7XG5cdFx0dGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHRoaXMuJHRhcmdldC5pbm5lckhUTUwgPSBgXG5cdFx0XHQ8aW1nIHNyYz0ke0FSUk9XX0JBQ0tfSUNPTn0gY2xhc3M9J2JhY2snIC8+XG5cdFx0XHQke1xuXHRcdFx0XHRpc1VzZXJPd25Qcm9kdWN0KHRoaXMuc3RhdGUuc2VsbGVyLCB0aGlzLnN0YXRlLnVzZXIpXG5cdFx0XHRcdFx0PyBgPGltZyBzcmM9JHtNT1JFX1ZFUlRfSUNPTn0gY2xhc3M9J29wdGlvbicgLz5gXG5cdFx0XHRcdFx0OiAnJ1xuXHRcdFx0fVxuXHRcdGA7XG5cdH1cbn1cbiIsImltcG9ydCAnLi9ib2R5LmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVET01XaXRoU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NyZWF0ZURPTVdpdGhTZWxlY3Rvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvZHlQYXJ0IHtcblx0c3RhdGUgPSBbXTtcblx0Y29uc3RydWN0b3IoeyAkcGFyZW50LCBpbml0aWFsU3RhdGUsIG9uQ2xpY2sgfSkge1xuXHRcdHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cdFx0dGhpcy4kdGFyZ2V0ID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCdkaXYnLCAnLmxvY2F0aW9uJyk7XG5cdFx0JHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLiR0YXJnZXQpO1xuXG5cdFx0dGhpcy4kdGFyZ2V0LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz0nbG9jYXRpb25fX3NwYW4nPlxuICAgICAgICAgICAgPHNwYW4+7KeA7Jet7J2AIOy1nOyGjCAx6rCcIOydtOyDgTwvc3Bhbj5cbiAgICAgICAgICAgIDxicj4gXG4gICAgICAgICAgICA8c3Bhbj7stZzrjIAgMuqwnOq5jOyngCDshKTsoJUg6rCA64ql7ZW07JqULjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J2xvY2F0aW9uX19idG5PdXRlcic+PC9kaXY+XG4gICAgICAgIGA7XG5cblx0XHR0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xuXHRcdHRoaXMuJHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRsZXQgaWR4ID0gMDtcblx0XHRcdGlmIChlLnRhcmdldC5kYXRhc2V0LmlkeCkgaWR4ID0gZS50YXJnZXQuZGF0YXNldC5pZHg7XG5cdFx0XHR0aGlzLm9uQ2xpY2soZSwgaWR4KTtcblx0XHR9KTtcblx0XHR0aGlzLiRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb25fX2J0bk91dGVyJyk7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fVxuXG5cdHNldFN0YXRlKG5leHRTdGF0ZSkge1xuXHRcdHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgcmVzdWx0ID0gJyc7XG5cblx0XHRyZXN1bHQgKz0gdGhpcy5jcmVhdGVNYWluQnV0dG9uKCk7XG5cdFx0cmVzdWx0ICs9IHRoaXMuY3JlYXRlTm9ybWFsQnV0dG9uKCk7XG5cdFx0cmVzdWx0ICs9IHRoaXMuY3JlYXRlUGx1c0J1dHRvbigpO1xuXG5cdFx0dGhpcy4kQnV0dG9uLmlubmVySFRNTCA9IHJlc3VsdDtcblx0fVxuXG5cdGNyZWF0ZU1haW5CdXR0b24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUubGVuZ3RoXG5cdFx0XHQ/IGBcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2xvY2F0aW9uX19tYWluQnRuJz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnN0YXRlWzBdfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPSdsb2NhdGlvbl9fY2FuY2VsQnRuJyBzcmM9XCJodHRwczovL2RlYWwtNi5zMy5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tL3N0b3JlSW1hZ2VzL2ljb25zL2NhbmNlbC5zdmdcIiBkYXRhLWlkeD0nMCcvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICBgXG5cdFx0XHQ6IGBgO1xuXHR9XG5cblx0Y3JlYXRlTm9ybWFsQnV0dG9uKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmxlbmd0aCA+IDFcblx0XHRcdD8gYFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nbG9jYXRpb25fX25vcm1hbEJ0bic+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5zdGF0ZVsxXX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz0nbG9jYXRpb25fX2NhbmNlbEJ0bicgc3JjPVwiaHR0cHM6Ly9kZWFsLTYuczMuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbS9zdG9yZUltYWdlcy9pY29ucy9jYW5jZWxfYmFlbWluLnN2Z1wiIGRhdGEtaWR4PScxJy8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIGBcblx0XHRcdDogYGA7XG5cdH1cblx0Y3JlYXRlUGx1c0J1dHRvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5sZW5ndGggPCAyXG5cdFx0XHQ/IGBcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2xvY2F0aW9uX19wbHVzQnRuJz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nbG9jYXRpb25fX3BsdXMnPlxuICAgICAgICAgICAgICAgICAgICArXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICBgXG5cdFx0XHQ6IGBgO1xuXHR9XG59XG4iLCJpbXBvcnQgJy4vbG9jYXRpb24tbW9kYWwuY3NzJztcbmltcG9ydCB7IGNyZWF0ZURPTVdpdGhTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY3JlYXRlRE9NV2l0aFNlbGVjdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb25Nb2RhbCB7XG5cdGNvbnN0cnVjdG9yKHsgJHBhcmVudCwgb25DbGljayB9KSB7XG5cdFx0dGhpcy4kdGFyZ2V0ID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCdkaXYnLCAnLm1vZGFsJyk7XG5cdFx0JHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLiR0YXJnZXQpO1xuXHRcdHRoaXMuJHRhcmdldC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19vdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW9kYWxfX2d1aWRlXCI+7Jqw66asIOuPmeuEpOulvCDsnoXroKXtlZjshLjsmpQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cIm1vZGFsX19pbnB1dFwiIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPVwi7Iuc4oiZ6rWsIOygnOyZuCwg64+Z66eMIOyeheugpVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2NoZWNrT25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vZGFsX19jYW5jZWxcIj7st6jshow8L3NwYW4+PHNwYW4gY2xhc3M9XCJtb2RhbF9fY29uZmlybVwiPu2ZleyduDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGA7XG5cblx0XHR0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xuXHRcdHRoaXMuJGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19pbnB1dCcpO1xuXHRcdHRoaXMuJGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2NvbmZpcm0nKTtcblxuXHRcdHRoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5iaW5kSW5wdXRFdmVudChlKTtcblx0XHR9KTtcblx0XHR0aGlzLiR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0bGV0IGlucHV0VmFsdWUgPSB0aGlzLiRpbnB1dC52YWx1ZTtcblx0XHRcdHRoaXMub25DbGljayhlLCBpbnB1dFZhbHVlKTtcblx0XHR9KTtcblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0dGhpcy4kdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0dGhpcy4kdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdH1cblxuXHRiaW5kSW5wdXRFdmVudChlKSB7XG5cdFx0dGhpcy5jaGVja1JlZ2V4RXZlbnQoZSk7XG5cdFx0dGhpcy5jaGVja0xlbmd0aEV2ZW50KGUpO1xuXHR9XG5cblx0Y2hlY2tSZWdleEV2ZW50KGUpIHtcblx0XHRjb25zdCByZWdleCA9IC9bXuOEsS3jhY4s6rCALe2eoywwLTl8XS9nO1xuXHRcdGUudGFyZ2V0LnZhbHVlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZShyZWdleCwgJycpO1xuXHR9XG5cblx0Y2hlY2tMZW5ndGhFdmVudChlKSB7XG5cdFx0bGV0IGxlbmd0aCA9IGUudGFyZ2V0LnZhbHVlLmxlbmd0aDtcblx0XHRpZiAobGVuZ3RoID4gMCkgdGhpcy4kY29uZmlybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHRlbHNlIHRoaXMuJGNvbmZpcm1CdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cdH1cbn1cbiIsImltcG9ydCAnLi9ib2R5LmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVET01XaXRoU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NyZWF0ZURPTVdpdGhTZWxlY3Rvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvZHkge1xuXHRjb25zdHJ1Y3Rvcih7ICRwYXJlbnQsIGluaXRpYWxTdGF0ZSwgb25DbGljayB9KSB7XG5cdFx0dGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblxuXHRcdHRoaXMuJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3Rvcignc2VjdGlvbicsICcuY2F0ZWdvcnlMaXN0Jyk7XG5cdFx0JHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLiR0YXJnZXQpO1xuXHRcdHRoaXMuJFdyYXBwZXIgPSBjcmVhdGVET01XaXRoU2VsZWN0b3IoJ2RpdicsICcuY3RnV3JhcHBlcicpO1xuXHRcdHRoaXMuJHRhcmdldC5hcHBlbmRDaGlsZCh0aGlzLiRXcmFwcGVyKTtcblx0XHR0aGlzLiR0YXJnZXQuaW5uZXJIVE1MID0gdGhpcy5yZW5kZXJDYXRlZ29yaWVzKCk7XG5cblx0XHR0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xuXHRcdC8vIHRoaXMuJGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnRfX2NvbmZpcm0nKTtcblxuXHRcdHRoaXMuJHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHR0aGlzLm9uQ2xpY2soZSwgZS50YXJnZXQuZGF0YXNldC5pZHgpO1xuXHRcdH0pO1xuXHR9XG5cblx0b3BlbigpIHtcblx0XHR0aGlzLiR0YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdH1cblxuXHRjbG9zZSgpIHtcblx0XHR0aGlzLiR0YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fVxuXG5cdHJlbmRlckNhdGVnb3JpZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGVcblx0XHRcdC5tYXAoKGNhdGVnb3J5LCBpZHgpID0+IHtcblx0XHRcdFx0cmV0dXJuIGBcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz0nY2F0ZWdvcnlMaXN0X19jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXRlZ29yeUxpc3RfX2ltZycgZGF0YS1pZHg9JHtpZHh9PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtjYXRlZ29yeX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICBgO1xuXHRcdFx0fSlcblx0XHRcdC5qb2luKCcnKTtcblx0fVxufVxuIiwiaW1wb3J0ICcuL2NhdGVnb3J5LmNzcyc7XG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tICcuLi8uLi9iYXNlL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyJztcbmltcG9ydCB7IGNyZWF0ZURPTVdpdGhTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY3JlYXRlRE9NV2l0aFNlbGVjdG9yJztcbmltcG9ydCBCb2R5UGFydCBmcm9tICcuL2JvZHkvYm9keSc7XG5cbmNvbnN0IG1vZGUgPSAn7Lm07YWM6rOg66asJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkge1xuXHRjb25zdHJ1Y3Rvcih7ICRwYXJlbnQsIENBVEVHT1JZX0xJU1QsIG9uQ2xpY2sgfSkge1xuXHRcdHRoaXMuJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignZGl2JywgJy5jYXRlZ29yeVdyYXBwZXInKTtcblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJHRhcmdldCk7XG5cblx0XHR0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xuXHRcdHRoaXMubmF2aWdhdGlvbkJhciA9IG5ldyBOYXZpZ2F0aW9uQmFyKHtcblx0XHRcdCRwYXJlbnQ6IHRoaXMuJHRhcmdldCxcblx0XHRcdGluaXRpYWxTdGF0ZTogbW9kZSxcblx0XHRcdGlzTW9kYWw6IHRydWUsXG5cdFx0XHRvbkNsaWNrOiAoZSwgaWR4KSA9PiB7XG5cdFx0XHRcdHRoaXMub25DbGljayhlLCBpZHgpO1xuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdHRoaXMuYm9keVBhcnQgPSBuZXcgQm9keVBhcnQoe1xuXHRcdFx0JHBhcmVudDogdGhpcy4kdGFyZ2V0LFxuXHRcdFx0aW5pdGlhbFN0YXRlOiBDQVRFR09SWV9MSVNULFxuXHRcdFx0b25DbGljazogKGUsIGlkeCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9uQ2xpY2soZSwgaWR4KTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHQvLyB0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xuXHRcdC8vIHRoaXMuJGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnRfX2NvbmZpcm0nKTtcblxuXHRcdC8vIHRoaXMuJHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0Ly8gXHR0aGlzLm9uQ2xpY2soZSk7XG5cdFx0Ly8gfSk7XG5cdH1cblxuXHRvcGVuKCkge1xuXHRcdHRoaXMuJHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdHRoaXMuJHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0fVxufVxuIiwiaW1wb3J0ICcuL2xvY2F0aW9uLW1pbmktbW9kYWwuY3NzJztcbmltcG9ydCB7IGNyZWF0ZURPTVdpdGhTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY3JlYXRlRE9NV2l0aFNlbGVjdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWluaU1vZGFsIHtcblx0c3RhdGUgPSBbXTtcblx0Y29uc3RydWN0b3IoeyAkcGFyZW50LCBpbml0aWFsU3RhdGUsIG9uQ2xpY2sgfSkge1xuXHRcdHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cdFx0dGhpcy4kdGFyZ2V0ID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCdkaXYnLCAnLm1pbmlNb2RhbCcpO1xuXHRcdCRwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy4kdGFyZ2V0KTtcblxuXHRcdC8vIOyxhO2MhSDqtaztmITsi5wgcmVuZGVyKCkg67m87IScIOyerOyCrOyaqVxuXHRcdHRoaXMuJHRhcmdldC5pbm5lckhUTUwgPSBgXG5cdFx0XHQ8ZGl2IGNsYXNzPSdtaW5pTW9kYWxfX3dyYXBwZXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtaW5pTW9kYWxfX292ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWluaU1vZGFsX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHQ8L2Rpdj5cbiAgICAgICAgICAgICAgYDtcblxuXHRcdHRoaXMub25DbGljayA9IG9uQ2xpY2s7XG5cdFx0dGhpcy4kY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW5pTW9kYWxfX2NvbnRlbnQnKTtcblxuXHRcdHRoaXMuJHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHR0aGlzLm9uQ2xpY2soZSwgZS50YXJnZXQuZGF0YXNldC5pZHgpO1xuXHRcdH0pO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dGhpcy4kY29udGVudC5pbm5lckhUTUwgPVxuXHRcdFx0dGhpcy5yZW5kZXJMb2NhdGlvbk5hbWUoKSArXG5cdFx0XHRgPGRpdiBkYXRhLWxpbms9Jy9sb2NhdGlvbic+64K0IOuPmeuEpCDshKTsoJXtlZjquLA8L2Rpdj5gO1xuXHR9XG5cblx0c2V0U3RhdGUobmV4dFN0YXRlKSB7XG5cdFx0dGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0cmVuZGVyTG9jYXRpb25OYW1lKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlXG5cdFx0XHQubWFwKFxuXHRcdFx0XHQobG9jYXRpb25OYW1lLCBpZHgpID0+XG5cdFx0XHRcdFx0YDxkaXYgY2xhc3M9XCJtaW5pTW9kYWxfX2xvY2F0aW9uXCIgZGF0YS1pZHg9JHtpZHh9PiR7bG9jYXRpb25OYW1lfTwvZGl2PmBcblx0XHRcdClcblx0XHRcdC5qb2luKCcnKTtcblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0dGhpcy4kdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0dGhpcy4kdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdH1cbn1cbiIsImltcG9ydCAnLi9uYXZpZ2F0aW9uLWJhci5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlRE9NV2l0aFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jcmVhdGVET01XaXRoU2VsZWN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTmF2YmFyIHtcblx0c3RhdGUgPSAnJztcblx0Y29uc3RydWN0b3IoeyAkcGFyZW50LCBpbml0aWFsU3RhdGUsIG9uQ2xpY2sgfSkge1xuXHRcdHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cdFx0dGhpcy4kdGFyZ2V0ID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCduYXYnLCAnLm5hdicpO1xuXHRcdCRwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy4kdGFyZ2V0KTtcblxuXHRcdHRoaXMub25DbGljayA9IG9uQ2xpY2s7XG5cblx0XHR0aGlzLiR0YXJnZXQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2X19jYXRlZ29yeSc+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz0nbmF2X19jYXRlZ29yeUltZycgc3JjPSdodHRwczovL2RlYWwtNi5zMy5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tL3N0b3JlSW1hZ2VzL2ljb25zL2NhdGVnb3J5LnN2ZycgYWx0PSdjYXRlZ29yeSc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdl9fbG9jYXRpb24nPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSduYXZfX3JpZ2h0U2lkZSc+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vZGVhbC02LnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vc3RvcmVJbWFnZXMvaWNvbnMvYWNjb3VudC5zdmcnIGFsdD0ncHJvZmlsZScgZGF0YS1saW5rPVwiL3VzZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0naHR0cHM6Ly9kZWFsLTYuczMuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbS9zdG9yZUltYWdlcy9pY29ucy9tZW51LnN2ZycgZGF0YS1saW5rPScvbWVudScgYWx0PSdtZW51Jz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG5cdFx0dGhpcy4kdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdHRoaXMub25DbGljayhlKTtcblx0XHR9KTtcblxuXHRcdHRoaXMuJGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fbG9jYXRpb24nKTtcblxuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblxuXHRzZXRTdGF0ZShuZXdMb2NhdGlvbk5hbWUpIHtcblx0XHR0aGlzLnN0YXRlID0gbmV3TG9jYXRpb25OYW1lO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dGhpcy4kbG9jYXRpb24uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGltZyBjbGFzcz0nbmF2X19sb2NhdGlvbkljb24nIHNyYz0naHR0cHM6Ly9kZWFsLTYuczMuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbS9zdG9yZUltYWdlcy9pY29ucy9sb2NhdGlvbi5zdmcnIGFsdD0nbG9jYXRpb24nPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J25hdl9fbG9jYXRpb25OYW1lJz4ke3RoaXMuc3RhdGV9PC9zcGFuPlxuICAgICAgICBgO1xuXHR9XG59XG4iLCJpbXBvcnQgJy4vd3JpdGUtcG9zdC1idXR0b24uY3NzJztcbmltcG9ydCB7IGNyZWF0ZURPTVdpdGhTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY3JlYXRlRE9NV2l0aFNlbGVjdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV3JpdGVQb3N0QnV0dG9uIHtcblx0Y29uc3RydWN0b3IoeyAkcGFyZW50IH0pIHtcblx0XHR0aGlzLiR0YXJnZXQgPSBjcmVhdGVET01XaXRoU2VsZWN0b3IoJ2J1dHRvbicsICcucG9zdEJ0bicpO1xuXHRcdCRwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy4kdGFyZ2V0KTtcblxuXHRcdHRoaXMuJHRhcmdldC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGRhdGEtbGluaz0nL3dyaXRpbmcnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtbGluaz0nL3dyaXRpbmcnPis8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICBgO1xuXHR9XG59XG4iLCJpbXBvcnQgJy4vbWFpbi1uYXZpZ2F0aW9uLWJhci5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlRE9NV2l0aFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jcmVhdGVET01XaXRoU2VsZWN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uQmFyIHtcblx0c3RhdGUgPSAnMSc7XG5cdGNvbnN0cnVjdG9yKHsgJHBhcmVudCwgaW5pdGlhbFN0YXRlLCBvbkNsaWNrIH0pIHtcblx0XHR0aGlzLiR0YXJnZXQgPSBjcmVhdGVET01XaXRoU2VsZWN0b3IoJ25hdicsICcubWFpbk5hdicpO1xuXHRcdCRwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy4kdGFyZ2V0KTtcblx0XHR0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXG5cdFx0dGhpcy4kdGFyZ2V0LmlubmVySFRNTCA9IGAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21haW5OYXZfX2lubmVyJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtYWluTmF2X19zZWxsIGFjdGl2ZSc+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtaWR4PScxJz7tjJDrp6TrqqnroZ08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21haW5OYXZfX2lubmVyJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtYWluTmF2X19jaGF0Jz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1pZHg9JzInPuyxhO2MhTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWFpbk5hdl9faW5uZXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21haW5OYXZfX2ludGVyZXN0Jz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1pZHg9JzMnPuq0gOyLrOuqqeuhnTwvc3Bhbj5cbiAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cblx0XHR0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xuXG5cdFx0dGhpcy4kc2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluTmF2X19zZWxsJyk7XG5cdFx0dGhpcy4kY2hhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluTmF2X19jaGF0Jyk7XG5cdFx0dGhpcy4kaW50ZXJlc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbk5hdl9faW50ZXJlc3QnKTtcblxuXHRcdHRoaXMuJHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRpZiAoZS50YXJnZXQuZGF0YXNldC5pZHgpIHRoaXMub25DbGljayhlLnRhcmdldC5kYXRhc2V0LmlkeCk7XG5cdFx0fSk7IC8vIOydtOuypO2KuCDsnITsnoTrtoDrtoRcblx0fVxuXG5cdHNldFN0YXRlKG5leHRTdGF0ZSkge1xuXHRcdHRoaXMudXBkYXRlQ2xhc3NMaXN0KG5leHRTdGF0ZSk7XG5cdH1cblxuXHQvLyB1cGRhdGVDbGFzc0xpc3QgOiDqsIEg67KE7Yq8IGNzcyDthqDquIBcblx0dXBkYXRlQ2xhc3NMaXN0KG5leHRTdGF0ZSkge1xuXHRcdGlmIChuZXh0U3RhdGUgPT09ICcxJykge1xuXHRcdFx0dGhpcy4kc2VsbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblx0XHRcdGlmICh0aGlzLnN0YXRlID09PSAnMicpIHtcblx0XHRcdFx0dGhpcy4kY2hhdC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuJGludGVyZXN0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcblx0XHR9IGVsc2UgaWYgKG5leHRTdGF0ZSA9PT0gJzInKSB7XG5cdFx0XHR0aGlzLiRjaGF0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuXHRcdFx0aWYgKHRoaXMuc3RhdGUgPT09ICcxJykge1xuXHRcdFx0XHR0aGlzLiRzZWxsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy4kaW50ZXJlc3QuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLiRpbnRlcmVzdC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblx0XHRcdGlmICh0aGlzLnN0YXRlID09PSAnMicpIHtcblx0XHRcdFx0dGhpcy4kY2hhdC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuJHNlbGwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgJy4vYm9keS5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlRE9NV2l0aFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jcmVhdGVET01XaXRoU2VsZWN0b3InO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Jhc2UvbGFyZ2UtYnV0dG9uL2xhcmdlLWJ1dHRvbic7XG5pbXBvcnQgV2VsY29tZU1vZGFsIGZyb20gJy4uL21vZGFsL21vZGFsJztcbi8vIGltcG9ydCB7IGFwaSB9IGZyb20gJy4uLy4uLy4uL2FwaS9hcGknO1xuXG5jb25zdCBtb2RlID0gJ+2ajOybkOqwgOyehSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvZHlQYXJ0IHtcblx0c3RhdGUgPSB7XG5cdFx0aWQ6ICcnLFxuXHRcdGxvY2F0aW9uOiAnJyxcblx0fTtcblxuXHRjb25zdHJ1Y3Rvcih7ICRwYXJlbnQgfSkge1xuXHRcdHRoaXMuJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignZm9ybScsICcuc2lnbnVwJyk7XG5cdFx0JHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLiR0YXJnZXQpO1xuXG5cdFx0dGhpcy4kdGFyZ2V0LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIOyVhOydtOuUlFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IGNsYXNzPSdsYXJnZUlucHV0JyBpZD0naWQnIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLsmIHrrLgg7Iir7J6QIOyhsO2VqSAyMOyekCDsnbTtlZhcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIOyasOumrCDrj5nrhKRcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dCBjbGFzcz0nbGFyZ2VJbnB1dCcgaWQ9J2xvY2F0aW9uJyB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi7Iuc4oiZ6rWsIOygnOyZuCwg64+Z66eMIOyeheugpVwiPlxuICAgICAgICBgO1xuXG5cdFx0dGhpcy4kaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaWQnKTtcblx0XHR0aGlzLiRsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbicpO1xuXG5cdFx0dGhpcy5idXR0b24gPSBuZXcgQnV0dG9uKHtcblx0XHRcdCRwYXJlbnQ6IHRoaXMuJHRhcmdldCxcblx0XHRcdGluaXRpYWxTdGF0ZTogbW9kZSxcblx0XHRcdG9uQ2xpY2s6IChlKSA9PiB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0aWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2xhcmdlQnV0dG9uJykge1xuXHRcdFx0XHRcdC8vIGFwaS5wb3N0KCcvdXNlci9zaWduLXVwJywge1xuXHRcdFx0XHRcdC8vIFx0aWQ6IHRoaXMuJGlkLnZhbHVlLFxuXHRcdFx0XHRcdC8vIFx0bG9jYXRpb246IHRoaXMuJGxvY2F0aW9uLnZhbHVlLFxuXHRcdFx0XHRcdC8vIH0pXG5cdFx0XHRcdFx0Ly8gXHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy53ZWxjb21lTW9kYWwub3BlbigpO1xuXHRcdFx0XHRcdC8vIH0pXG5cdFx0XHRcdFx0Ly8gLmNhdGNoKChlKSA9PiB7XG5cdFx0XHRcdFx0Ly8gXHRhbGVydChlLm1lc3NhZ2UpO1xuXHRcdFx0XHRcdC8vIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0dGhpcy53ZWxjb21lTW9kYWwgPSBuZXcgV2VsY29tZU1vZGFsKHtcblx0XHRcdCRwYXJlbnQsXG5cdFx0XHRvbkNsaWNrOiAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0ZS50YXJnZXQuY2xhc3NOYW1lID09PSAnd2VsY29tZV9fb3ZlcmxheSdcblx0XHRcdFx0XHQvLyDsmbjrtoAg7YG066atIOyLnCDrsJzsg51cblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0dGhpcy53ZWxjb21lTW9kYWwuY2xvc2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdHRoaXMuJHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG5cdFx0XHRpZiAoZS50YXJnZXQuaWQgPT09ICdpZCcgfHwgZS50YXJnZXQuaWQgPT09ICdsb2NhdGlvbicpIHtcblx0XHRcdFx0ZS50YXJnZXQuaWQgPT09ICdpZCcgPyB0aGlzLmNoZWNrSWRSZWdleChlKSA6ICcnO1xuXHRcdFx0XHRlLnRhcmdldC5pZCA9PT0gJ2xvY2F0aW9uJyA/IHRoaXMuY2hlY2tMb2NhdGlvblJlZ2V4KGUpIDogJyc7XG5cdFx0XHRcdHRoaXMuYWN0aXZhdGVCdXR0b24oKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGFjdGl2YXRlQnV0dG9uKCkge1xuXHRcdGlmICh0aGlzLiRpZC52YWx1ZS5sZW5ndGggPiAwICYmIHRoaXMuJGxvY2F0aW9uLnZhbHVlLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuYnV0dG9uLiR0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmJ1dHRvbi4kdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnKTtcblx0XHR9XG5cdH1cblx0Y2hlY2tMb2NhdGlvblJlZ2V4KGUpIHtcblx0XHRjb25zdCByZWdleCA9IC9bXuOEsS3jhY4s6rCALe2eoywwLTl8XS9nO1xuXHRcdGUudGFyZ2V0LnZhbHVlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZShyZWdleCwgJycpO1xuXHR9XG5cblx0Y2hlY2tJZFJlZ2V4KGUpIHtcblx0XHRjb25zdCByZWdleCA9IC9bXmEteixBLVosMC05fF0vZztcblx0XHRlLnRhcmdldC52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UocmVnZXgsICcnKTtcblx0XHRlLnRhcmdldC52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnNsaWNlKDAsIDIwKTtcblx0fVxufVxuIiwiaW1wb3J0ICcuL21vZGFsLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVET01XaXRoU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NyZWF0ZURPTVdpdGhTZWxlY3Rvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlbGNvbWUge1xuXHRjb25zdHJ1Y3Rvcih7ICRwYXJlbnQsIG9uQ2xpY2sgfSkge1xuXHRcdHRoaXMuJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignZGl2JywgJy53ZWxjb21lJyk7XG5cdFx0JHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLiR0YXJnZXQpO1xuXG5cdFx0dGhpcy4kdGFyZ2V0LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2VsY29tZV9fb3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWxjb21lX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwid2VsY29tZV9fZ3VpZGVcIj7tmozsm5DqsIDsnoXsnYQg7LaV7ZWY7ZWp64uI64uk4p2XPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2VsY29tZV9fYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtbGluaz0nL3VzZXInPuuhnOq3uOyduCDtlZjquLA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGA7XG5cblx0XHR0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xuXG5cdFx0dGhpcy4kdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdHRoaXMub25DbGljayhlKTtcblx0XHR9KTtcblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0dGhpcy4kdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0dGhpcy4kdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdH1cbn1cbiIsImltcG9ydCAnLi9zZWN0aW9uLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVET01XaXRoU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NyZWF0ZURPTVdpdGhTZWxlY3Rvcic7XG5pbXBvcnQgTGFyZ2VCdXR0b24gZnJvbSAnLi4vLi4vYmFzZS9sYXJnZS1idXR0b24vbGFyZ2UtYnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG5cdHN0YXRlID0gJyc7XG5cdGNvbnN0cnVjdG9yKHsgJHBhcmVudCwgaW5pdGlhbFN0YXRlLCBvbkNsaWNrIH0pIHtcblx0XHR0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXHRcdHRoaXMuJHBhcmVudCA9ICRwYXJlbnQ7XG5cdFx0dGhpcy4kc2VjdGlvbiA9IGNyZWF0ZURPTVdpdGhTZWxlY3Rvcignc2VjdGlvbicsICcuc2VjdGlvbicpO1xuXHRcdHRoaXMuJHNlY3Rpb24uaW5uZXJIVE1MID0gYFxuXHRcdFx0PGRpdiBjbGFzcz0ndXB0YWcnPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nZG93bnRhZyc+PC9kaXY+XG5cdFx0YDtcblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJHNlY3Rpb24pO1xuXG5cdFx0dGhpcy4kdXB0YWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXB0YWcnKTtcblx0XHR0aGlzLiRkb3dudGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvd250YWcnKTtcblx0XHR0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xuXG5cdFx0dGhpcy5yZW5kZXIoKTtcblxuXHRcdHRoaXMuJHNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2lucHV0Jykge1xuXHRcdFx0XHR0aGlzLmNoZWNrSWRSZWdleChlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXHRzZXRTdGF0ZShuZXh0U3RhdGUpIHtcblx0XHR0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHRoaXMuY3JlYXRlU2VjdGlvbkNvbnRlbnQodGhpcy4kdXB0YWcsIHRoaXMuc3RhdGUpO1xuXHR9XG5cblx0Y3JlYXRlU2VjdGlvbkNvbnRlbnQoJHBhcmVudCwgc3RhdGUpIHtcblx0XHRpZiAoaXNVc2VyTG9naW4oc3RhdGUpKSB7XG5cdFx0XHRjb25zdCAkdGFyZ2V0ID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCdkaXYnLCAnLnRleHQnKTtcblx0XHRcdCR0YXJnZXQuaW5uZXJIVE1MID0gYCR7c3RhdGV9YDtcblx0XHRcdCRwYXJlbnQuYXBwZW5kQ2hpbGQoJHRhcmdldCk7XG5cdFx0XHR0aGlzLmxhcmdlQnV0dG9uID0gbmV3IExhcmdlQnV0dG9uKHtcblx0XHRcdFx0JHBhcmVudCxcblx0XHRcdFx0aW5pdGlhbFN0YXRlOiAn66Gc6re47JWE7JuDJyxcblx0XHRcdFx0b25DbGljazogKGUpID0+IHtcblx0XHRcdFx0XHR0aGlzLm9uQ2xpY2soZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignZm9ybScsICcuZm9ybScpO1xuXHRcdFx0JHRhcmdldC5pbm5lckhUTUwgPSBgXG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cImlucHV0XCIgbmFtZT1cImlkXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuyVhOydtOuUlOulvCDsnoXroKXtlZjshLjsmpQuXCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPSdsb2dpbl9fYWxlcnQnPuyXhuuKlCBJROyeheuLiOuLpOKdl+Kdl+Kdlzwvc3Bhbj5cblx0XHRcdGA7XG5cdFx0XHQkcGFyZW50LmFwcGVuZENoaWxkKCR0YXJnZXQpO1xuXHRcdFx0dGhpcy4kaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQnKTtcblx0XHRcdHRoaXMuJGFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luX19hbGVydCcpO1xuXHRcdFx0dGhpcy5sYXJnZUJ1dHRvbiA9IG5ldyBMYXJnZUJ1dHRvbih7XG5cdFx0XHRcdCRwYXJlbnQ6ICR0YXJnZXQsXG5cdFx0XHRcdGluaXRpYWxTdGF0ZTogJ+uhnOq3uOyduCcsXG5cdFx0XHRcdG9uQ2xpY2s6IChlKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5vbkNsaWNrKGUsIHRoaXMuJGlucHV0LnZhbHVlKTtcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy4kZG93bnRhZy5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz1cInNpZ251cFwiIGRhdGEtbGluaz1cIi9zaWdudXBcIj7tmozsm5DqsIDsnoU8L2J1dHRvbj5gO1xuXHRcdH1cblx0fVxuXG5cdGNoZWNrSWRSZWdleChlKSB7XG5cdFx0Y29uc3QgcmVnZXggPSAvW15hLXosQS1aLDAtOXxdL2c7XG5cdFx0ZS50YXJnZXQudmFsdWUgPSBlLnRhcmdldC52YWx1ZS5yZXBsYWNlKHJlZ2V4LCAnJyk7XG5cdFx0ZS50YXJnZXQudmFsdWUgPSBlLnRhcmdldC52YWx1ZS5zbGljZSgwLCAyMCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaXNVc2VyTG9naW4oc3RhdGUpIHtcblx0Lyog66Gc6re47J24IOuQmOyWtCDsnojripTsp4Ag7ZmV7J24ICovXG5cdHJldHVybiBzdGF0ZS5sZW5ndGggPiAwO1xufVxuIiwiaW1wb3J0ICcuL2JvZHkuY3NzJztcbmltcG9ydCB7IGNyZWF0ZURPTVdpdGhTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY3JlYXRlRE9NV2l0aFNlbGVjdG9yJztcbmltcG9ydCB7IENBVEVHT1JZX0xJU1QgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvY2F0ZWdvcnktbGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvZHkge1xuXHRzdGF0ZSA9IHt9O1xuXG5cdGNvbnN0cnVjdG9yKHsgJHBhcmVudCwgaW5pdGlhbFN0YXRlLCByZWZyZXNoU3RhdGUgfSkge1xuXHRcdHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cdFx0dGhpcy5yZWZyZXNoU3RhdGUgPSByZWZyZXNoU3RhdGU7XG5cdFx0dGhpcy4kdGFyZ2V0ID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCdkaXYnLCAnLnBvc3QnKTtcblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJHRhcmdldCk7XG5cblx0XHR0aGlzLiR0YXJnZXQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncG9zdF9fY29udGFpbmVyJz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICBcbiAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz0ncG9zdF9fdGl0bGUnIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPVwi6riAIOygnOuqqVwiIHZhbHVlPSR7dGhpcy5zdGF0ZS50aXRsZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXRlZ29yeSc+XG4gICAgICAgICAgICAgICAgPHNwYW4+KO2VhOyImCnsubTthYzqs6Drpqzrpbwg7ISg7YOd7ZW07KO87IS47JqULjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXRlZ29yeV9fYnV0dG9uT3V0ZXInPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPSdwb3N0X19wcmljZScgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9XCLigqkg6rCA6rKpKOyEoO2DneyCrO2VrSlcIiB2YWx1ZT0ke3RoaXMuc3RhdGUucHJpY2V9PlxuICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPSdwb3N0X19jb250ZW50JyBwbGFjZWhvbGRlcj1cIuqyjOyLnOq4gCDrgrTsmqnsnYQg7J6R7ISx7ZW07KO87IS47JqULlwiPiR7dGhpcy5zdGF0ZS5jb250ZW50fTwvdGV4dGFyZWE+XG4gICAgICAgIGA7XG5cblx0XHR0aGlzLiRjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdF9fY29udGFpbmVyJyk7XG5cdFx0dGhpcy4kdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdF9fdGl0bGUnKTtcblx0XHR0aGlzLiRwcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0X19wcmljZScpO1xuXHRcdHRoaXMuJGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdF9fY29udGVudCcpO1xuXHRcdHRoaXMuJGNhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5X19idXR0b25PdXRlcicpO1xuXG5cdFx0dGhpcy4kdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5iaW5kVGl0bGVFdmVudChlKTtcblx0XHR9KTtcblx0XHR0aGlzLiRwcmljZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG5cdFx0XHR0aGlzLmJpbmRQcmljZUtleVVwRXZlbnQoZSk7XG5cdFx0fSk7XG5cdFx0dGhpcy4kcHJpY2UuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5yZWFycmFuZ2VQcmljZShlKTtcblx0XHR9KTtcblx0XHR0aGlzLiRjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcblx0XHRcdHRoaXMuYmluZENvbnRlbnRFdmVudChlKTtcblx0XHR9KTtcblx0XHR0aGlzLiRjYXRlZ29yeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHR0aGlzLmJpbmRDYXRlZ29yeUV2ZW50KGUpO1xuXHRcdH0pO1xuXHRcdHRoaXMuJGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHR0aGlzLmJpbmRJbWFnZUJ1dHRvbkV2ZW50KGUpO1xuXHRcdH0pO1xuXHRcdC8vIHRoaXMuJGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuXHRcdC8vIFx0Y29uc29sZS5sb2codGhpcy4kY29udGFpbmVyKTtcblx0XHQvLyBcdGlmIChlLnRhcmdldC5pZCA9PT0gJyNpbWFnZScpIHtcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xuXHRcdC8vIFx0fVxuXHRcdC8vIH0pO1xuXHRcdC8vIOychOydmCDrsKnsi53snYAgaW5wdXQgZmlsZeydtCDslYTri4wgY29udGFpbmVy6rCAIOy2nOugpS4uICjstpTtm4Qg7JWM7JWE67SQ7JW87ZWg65OvISlcblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0c2V0U3RhdGUobmV4dFN0YXRlKSB7XG5cdFx0dGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHRoaXMuJGNvbnRhaW5lci5pbm5lckhUTUwgPSB0aGlzLnJlbmRlckltYWdlRm9ybSgpICsgdGhpcy5yZW5kZXJJbWFnZSgpO1xuXG5cdFx0dGhpcy4kY2F0ZWdvcnkuaW5uZXJIVE1MID0gdGhpcy5yZW5kZXJCdXR0b24oKTtcblxuXHRcdHRoaXMuJGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlJyk7XG5cdFx0dGhpcy4kaW5wdXQub25jaGFuZ2UgPSAoZSkgPT4ge1xuXHRcdFx0dGhpcy5vbkNoYW5nZUZpbGVFdmVudChlKTtcblx0XHR9O1xuXHR9XG5cblx0b25DaGFuZ2VGaWxlRXZlbnQoZSkge1xuXHRcdGxldCBmaWxlcyA9IGUudGFyZ2V0LmZpbGVzO1xuXG5cdFx0Ly9hcGkg7Zi47LacIO2bhCDtjIzsnbzqsr3roZwg67Cb7JWE7Ji0IC0+IHNldFN0YXRlIC0+IGNoY2VrVmFsdWVBbmRSZWZyZXNoU3RhdGUoKSDtmLjstpxcblxuXHRcdGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG5cdFx0Zm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZXNbMF0pO1xuXG5cdFx0ZmV0Y2goJy9hcGkvdXBsb2FkJywge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRib2R5OiBmb3JtRGF0YSxcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHJlcykgPT4ge1xuXHRcdFx0XHRpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdIdHRwIEVycm9yLi4uJyk7XG5cdFx0XHRcdHJldHVybiByZXMuanNvbigpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3RhdGUuaW1nUGF0aCA9IFsuLi50aGlzLnN0YXRlLmltZ1BhdGgsIGRhdGEuZmlsZVBhdGhdO1xuXHRcdFx0XHR0aGlzLmNoY2VrVmFsdWVBbmRSZWZyZXNoU3RhdGUoKTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goKGUpID0+IGFsZXJ0KGUudG9TdHJpbmcoKSkpO1xuXHR9XG5cblx0cmVuZGVySW1hZ2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUuaW1nUGF0aFxuXHRcdFx0Lm1hcCgoaW1hZ2UsIGlkeCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdwb3N0X19pbWdPdXRlcic+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPSdwb3N0X19pbWdDb250YWluZXInIHNyYz0ke2ltYWdlfSBhbHQ9J2ltYWdlJz5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J3Bvc3RfX3JlbW92ZUJ0bicgZGF0YS1pZHg9JHtpZHh9ID48c3BhbiBjbGFzcz0ncG9zdF9YJyBkYXRhLWlkeD0ke2lkeH0+WDwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgO1xuXHRcdFx0fSlcblx0XHRcdC5qb2luKCcnKTtcblx0fVxuXG5cdHJlbmRlckJ1dHRvbigpIHtcblx0XHRyZXR1cm4gQ0FURUdPUllfTElTVC5tYXAoKGNhdGVnb3J5LCBpZHgpID0+IHtcblx0XHRcdGlmIChjYXRlZ29yeSA9PT0gdGhpcy5zdGF0ZS5jYXRlZ29yeSkge1xuXHRcdFx0XHRyZXR1cm4gYDxidXR0b24gY2xhc3M9J2NhdGVnb3J5X19idXR0b24gYWN0aXZlJyBkYXRhLWlkeD0ke2lkeH0+JHtjYXRlZ29yeX08L2J1dHRvbj5gO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGA8YnV0dG9uIGNsYXNzPSdjYXRlZ29yeV9fYnV0dG9uJyBkYXRhLWlkeD0ke2lkeH0+JHtjYXRlZ29yeX08L2J1dHRvbj5gO1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oJycpO1xuXHR9XG5cblx0cmVuZGVySW1hZ2VGb3JtKCkge1xuXHRcdHJldHVybiBgPGZvcm0gYWN0aW9uPScvJyBtZXRob2Q9XCJwb3N0XCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBjbGFzcz0ncG9zdF9faW1nQ29udGFpbmVyJz5cblx0XHRcdFx0XHQ8aW5wdXQgIGlkPSdpbWFnZScgdHlwZT0nZmlsZScgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz0naHR0cHM6Ly9kZWFsLTYuczMuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbS9zdG9yZUltYWdlcy9pY29ucy9pbWFnZS5zdmcnIGFsdD0naW1hZ2UnPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8c3Bhbj4ke3RoaXMuc3RhdGUuaW1nUGF0aC5sZW5ndGh9LzEwPC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PiBcblx0XHRcdFx0PC9mb3JtPmA7XG5cdH1cblxuXHRyZWFycmFuZ2VQcmljZShlKSB7XG5cdFx0Ly8g7L2k66eI7JmAIOybkOydhCDrtpntmIDso7zripQg7ZWo7IiYXG5cdFx0aWYgKGUudGFyZ2V0LnZhbHVlWzBdICE9PSAn4oKpJykge1xuXHRcdFx0bGV0IGxlbmd0aCA9IGUudGFyZ2V0LnZhbHVlLmxlbmd0aDtcblx0XHRcdGxldCBhcnJheSA9IGUudGFyZ2V0LnZhbHVlLnNwbGl0KCcnKTtcblxuXHRcdFx0aWYgKGxlbmd0aCA+IDMpIHtcblx0XHRcdFx0bGV0IGNvdW50ID0gMTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IGxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcblx0XHRcdFx0XHRpZiAoY291bnQgJSAzID09PSAwKSB7XG5cdFx0XHRcdFx0XHRhcnJheS5zcGxpY2UoaSwgMCwgJywnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y291bnQrKztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgcmVzdWx0ID0gJ+KCqScgKyBhcnJheS5qb2luKCcnKTtcblx0XHRcdGUudGFyZ2V0LnZhbHVlID0gcmVzdWx0O1xuXHRcdH1cblx0fVxuXG5cdGNoZWNrSGF2aW5nQWxsVmFsdWUoKSB7XG5cdFx0Ly8g6rCA6rKp7KCc7Jm4IOuqqOuToCDqsJIg7J6I64qU7KeAIO2ZleyduFxuXHRcdGlmIChcblx0XHRcdHRoaXMuc3RhdGUudGl0bGUubGVuZ3RoID4gMCAmJlxuXHRcdFx0dGhpcy5zdGF0ZS5jb250ZW50Lmxlbmd0aCA+IDAgJiZcblx0XHRcdHRoaXMuc3RhdGUuaW1nUGF0aC5sZW5ndGggPiAwICYmXG5cdFx0XHR0aGlzLnN0YXRlLmNhdGVnb3J5Lmxlbmd0aCA+IDBcblx0XHQpIHtcblx0XHRcdHRoaXMuc3RhdGUuaGF2ZUFsbFZhbHVlID0gdHJ1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5zdGF0ZS5oYXZlQWxsVmFsdWUgPSBmYWxzZTtcblx0fVxuXG5cdGNoY2VrVmFsdWVBbmRSZWZyZXNoU3RhdGUoKSB7XG5cdFx0dGhpcy5jaGVja0hhdmluZ0FsbFZhbHVlKCk7XG5cdFx0dGhpcy5yZWZyZXNoU3RhdGUodGhpcy5zdGF0ZSk7XG5cdH1cblxuXHRiaW5kSW1hZ2VCdXR0b25FdmVudCA9IChlKSA9PiB7XG5cdFx0aWYgKFxuXHRcdFx0ZS50YXJnZXQuY2xhc3NOYW1lID09PSAncG9zdF9fcmVtb3ZlQnRuJyB8fFxuXHRcdFx0ZS50YXJnZXQuY2xhc3NOYW1lID09PSAncG9zdF9YJ1xuXHRcdCkge1xuXHRcdFx0bGV0IGlkeCA9IGUudGFyZ2V0LmRhdGFzZXQuaWR4O1xuXHRcdFx0bGV0IGltYWdlQXJyYXkgPSB0aGlzLnN0YXRlLmltZ1BhdGg7XG5cdFx0XHRpbWFnZUFycmF5LnNwbGljZShpZHgsIDEpO1xuXHRcdFx0dGhpcy5zdGF0ZS5pbWdQYXRoID0gaW1hZ2VBcnJheTtcblx0XHRcdHRoaXMuY2hjZWtWYWx1ZUFuZFJlZnJlc2hTdGF0ZSgpO1xuXHRcdH1cblx0fTtcblxuXHRiaW5kQ29udGVudEV2ZW50KGUpIHtcblx0XHQvLyB0ZXh0YXJlYSDrhpLsnbQg6rCA67OA7KGw7KCIXG5cdFx0dGhpcy4kY29udGVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLiRjb250ZW50LnNjcm9sbEhlaWdodCArICdweCc7XG5cdFx0dGhpcy5zdGF0ZS5jb250ZW50ID0gZS50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5jaGNla1ZhbHVlQW5kUmVmcmVzaFN0YXRlKCk7XG5cdH1cblxuXHRiaW5kVGl0bGVFdmVudChlKSB7XG5cdFx0Ly8g6riA7J6Q7IiYIOygnO2VnCAo7LaU7ZuEIOqyveqzoCBDU1Mg7LaU6rCA7ZW064+EIOuQoOuTrylcblx0XHRpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID4gMzApIHtcblx0XHRcdGUudGFyZ2V0LnZhbHVlID0gZS50YXJnZXQudmFsdWUuc2xpY2UoMCwgMzApO1xuXHRcdH1cblx0XHR0aGlzLnN0YXRlLnRpdGxlID0gZS50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5jaGNla1ZhbHVlQW5kUmVmcmVzaFN0YXRlKCk7XG5cdH1cblxuXHRiaW5kUHJpY2VLZXlVcEV2ZW50KGUpIHtcblx0XHQvLyBudW1iZXLrp4wg67Cb64qU64ukLlxuXHRcdGUudGFyZ2V0LnZhbHVlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSgvW14wLTldL2csICcnKTtcblx0XHR0aGlzLnN0YXRlLnByaWNlID0gZS50YXJnZXQudmFsdWU7XG5cdH1cblxuXHRiaW5kQ2F0ZWdvcnlFdmVudChlKSB7XG5cdFx0aWYgKFxuXHRcdFx0ZS50YXJnZXQuY2xhc3NOYW1lID09PSAnY2F0ZWdvcnlfX2J1dHRvbiBhY3RpdmUnIHx8XG5cdFx0XHRlLnRhcmdldC5jbGFzc05hbWUgPT09ICdjYXRlZ29yeV9fYnV0dG9uJ1xuXHRcdCkge1xuXHRcdFx0dGhpcy5zdGF0ZS5jYXRlZ29yeSA9IENBVEVHT1JZX0xJU1RbZS50YXJnZXQuZGF0YXNldC5pZHhdO1xuXHRcdFx0dGhpcy5jaGNla1ZhbHVlQW5kUmVmcmVzaFN0YXRlKCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gYmluZGluZ0V2ZW50KGUpIHtcblx0Ly8gXHR0aGlzLmhhbmRsZUltYWdlVXBsb2FkRXZlbnQoZSk7XG5cdC8vIH1cblxuXHQvLyBoYW5kbGVJbWFnZVVwbG9hZEV2ZW50KGUpIHtcblx0Ly8gXHRjb25zdCBmaWxlcyA9IHRoaXMuaW1nSW5wdXRFbGVtZW50LmZpbGVzO1xuXHQvLyBcdGNvbnNvbGUubG9nKGZpbGVzLCBlKTtcblx0Ly8gfVxuXG5cdC8vIGNoYW5nZUlucHV0RmlsZUV2ZW50KHZhbHVlKSB7XG5cdC8vIFx0Y29uc29sZS5sb2codmFsdWUpO1xuXHQvLyB9XG59XG4iLCJpbXBvcnQgJy4vZm9vdGVyLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVET01XaXRoU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NyZWF0ZURPTVdpdGhTZWxlY3Rvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciB7XG5cdHN0YXRlID0gJyc7XG5cdC8vIHN0YXRlIDog64+Z64Sk66qFIChzdHJpbmcpXG5cdGNvbnN0cnVjdG9yKHsgJHBhcmVudCwgaW5pdGlhbFN0YXRlIH0pIHtcblx0XHR0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXHRcdHRoaXMuJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignZm9vdGVyJywgJy5mb290ZXInKTtcblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJHRhcmdldCk7XG5cblx0XHR0aGlzLiR0YXJnZXQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vZGVhbC02LnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vc3RvcmVJbWFnZXMvaWNvbnMvbG9jYXRpb25fd2hpdGUuc3ZnJyAgYWx0PSdsb2NhdGlvbic+XG4gICAgICAgICAgICA8c3Bhbj4ke3RoaXMuc3RhdGV9PC9zcGFuPlxuICAgICAgICBgO1xuXHR9XG59XG4iLCJleHBvcnQgY29uc3QgQ0FURUdPUllfTElTVCA9IFtcblx0J+uUlOyngO2EuOq4sOq4sCcsXG5cdCfsg53tmZzqsIDsoIQnLFxuXHQn6rCA6rWsL+yduO2FjOumrOyWtCcsXG5cdCfqsozsnoQv7Leo66+4Jyxcblx0J+yDne2ZnC/qsIDqs7Xsi53tkognLFxuXHQn7Iqk7Y+s7LigL+ugiOyggCcsXG5cdCfsl6zshLHtjKjshZgv7J6h7ZmUJyxcblx0J+uCqOyEse2MqOyFmC/snqHtmZQnLFxuXHQn7Jyg7JWE64+ZJyxcblx0J+u3sO2LsC/rr7jsmqknLFxuXHQn67CY66Ck64+Z66y8Jyxcblx0J+uPhOyEnC/ti7DsvJMv7J2M67CYJyxcblx0J+yLneusvCcsXG5cdCfquLDtg4Ag7KSR6rOg66y87ZKIJyxcbl07XG4iLCJleHBvcnQgY29uc3QgQUREX0lDT04gPVxuXHQnaHR0cHM6Ly9kZWFsLTYuczMuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbS9zdG9yZUltYWdlcy9pY29ucy9hZGQuc3ZnJztcbmV4cG9ydCBjb25zdCBBQ0NPVU5UX0lDT04gPVxuXHQnaHR0cHM6Ly9kZWFsLTYuczMuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbS9zdG9yZUltYWdlcy9pY29ucy9hY2NvdW50LnN2Zyc7XG5leHBvcnQgY29uc3QgQVJST1dfQkFDS19JQ09OID1cblx0J2h0dHBzOi8vZGVhbC02LnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vc3RvcmVJbWFnZXMvaWNvbnMvYXJyb3dfYmFjay5zdmcnOyAvL1xuZXhwb3J0IGNvbnN0IENBTkNFTF9JQ09OID1cblx0J2h0dHBzOi8vZGVhbC02LnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vc3RvcmVJbWFnZXMvaWNvbnMvY2FuY2VsLnN2Zyc7IC8vXG5leHBvcnQgY29uc3QgQVJST1dfRk9SV0FSRF9JQ09OID1cblx0J2h0dHBzOi8vZGVhbC02LnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vc3RvcmVJbWFnZXMvaWNvbnMvYXJyb3dfZm9yd2FyZC5zdmcnO1xuZXhwb3J0IGNvbnN0IENBVEVHT1JZX0lDT04gPVxuXHQnaHR0cHM6Ly9kZWFsLTYuczMuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbS9zdG9yZUltYWdlcy9pY29ucy9jYXRlZ29yeS5zdmcnO1xuZXhwb3J0IGNvbnN0IENIQVRfQlVCQkxFX01JTklfSUNPTiA9XG5cdCdodHRwczovL2RlYWwtNi5zMy5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tL3N0b3JlSW1hZ2VzL2ljb25zL2NoYXRfYnViYmxlX21pbmkuc3ZnJztcbmV4cG9ydCBjb25zdCBET05FX0lDT04gPVxuXHQnaHR0cHM6Ly9kZWFsLTYuczMuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbS9zdG9yZUltYWdlcy9pY29ucy9kb25lLnN2Zyc7XG5leHBvcnQgY29uc3QgRVhJVF9JQ09OID1cblx0J2h0dHBzOi8vZGVhbC02LnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vc3RvcmVJbWFnZXMvaWNvbnMvZXhpdC5zdmcnO1xuZXhwb3J0IGNvbnN0IEVYUEFORF9NT1JFX0lDT04gPVxuXHQnaHR0cHM6Ly9kZWFsLTYuczMuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbS9zdG9yZUltYWdlcy9pY29ucy9leHBhbmRfbW9yZS5zdmcnO1xuZXhwb3J0IGNvbnN0IEZBVk9SSVRFX0JPUkRFUl9NSU5JX0lDT04gPVxuXHQnaHR0cHM6Ly9kZWFsLTYuczMuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbS9zdG9yZUltYWdlcy9pY29ucy9mYXZvcml0ZV9ib3JkZXJfbWluaS5zdmcnO1xuZXhwb3J0IGNvbnN0IEZBVk9SSVRFX0JPUkRFUl9JQ09OID1cblx0J2h0dHBzOi8vZGVhbC02LnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vc3RvcmVJbWFnZXMvaWNvbnMvZmF2b3JpdGVfYm9yZGVyLnN2Zyc7XG5leHBvcnQgY29uc3QgRkFWT1JJVEVfSUNPTiA9XG5cdCdodHRwczovL2RlYWwtNi5zMy5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tL3N0b3JlSW1hZ2VzL2ljb25zL2Zhdm9yaXRlLnN2Zyc7XG5leHBvcnQgY29uc3QgSU1BR0VfSUNPTiA9XG5cdCdodHRwczovL2RlYWwtNi5zMy5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tL3N0b3JlSW1hZ2VzL2ljb25zL2lhbWdlLnN2Zyc7XG5leHBvcnQgY29uc3QgTE9DQVRJT05fSUNPTiA9XG5cdCdodHRwczovL2RlYWwtNi5zMy5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tL3N0b3JlSW1hZ2VzL2ljb25zL2xvY2F0aW9uLnN2Zyc7XG5leHBvcnQgY29uc3QgTUVOVV9JQ09OID1cblx0J2h0dHBzOi8vZGVhbC02LnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vc3RvcmVJbWFnZXMvaWNvbnMvbWVudS5zdmcnO1xuZXhwb3J0IGNvbnN0IE1PUkVfVkVSVF9JQ09OID1cblx0J2h0dHBzOi8vZGVhbC02LnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vc3RvcmVJbWFnZXMvaWNvbnMvbW9yZV92ZXJ0LnN2Zyc7XG5leHBvcnQgY29uc3QgU0VORF9JQ09OID1cblx0J2h0dHBzOi8vZGVhbC02LnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vc3RvcmVJbWFnZXMvaWNvbnMvc2VuZC5zdmcnO1xuIiwiaW1wb3J0IFJlZGlyZWN0IGZyb20gJy4uL2NvbXBvbmVudHMvYmFzZS9yZWRpcmVjdC9yZWRpcmVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kIHtcblx0c3RhdGUgPSB7XG5cdFx0bGluazogJy8nLFxuXHRcdG1lc3NhZ2U6ICdIb21lJyxcblx0XHRzdGF0dXM6ICc0MDQnLFxuXHRcdGNvbnRlbnQ6ICdQYWdlIG5vdCBmb3VuZCcsXG5cdH07XG5cdGNvbnN0cnVjdG9yKCRwYXJlbnQpIHtcblx0XHRuZXcgUmVkaXJlY3Qoe1xuXHRcdFx0JHBhcmVudCxcblx0XHRcdGluaXRpYWxTdGF0ZTogdGhpcy5zdGF0ZSxcblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IFJlZGlyZWN0IGZyb20gJy4uL2NvbXBvbmVudHMvYmFzZS9yZWRpcmVjdC9yZWRpcmVjdCc7XG5pbXBvcnQgeyBuYXZpZ2F0ZVRvIH0gZnJvbSAnLi4vcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90TG9naW4ge1xuXHRzdGF0ZSA9IHtcblx0XHRsaW5rOiAnLycsXG5cdFx0bWVzc2FnZTogJ+uplOyduOycvOuhnCDsnbTrj5ninZcnLFxuXHRcdHN0YXR1czogJycsXG5cdFx0Y29udGVudDogJ1RoaXMgc2VydmljZSByZXF1aXJlcyBsb2dpbicsXG5cdH07XG5cdGNvbnN0cnVjdG9yKCRwYXJlbnQpIHtcblx0XHRuZXcgUmVkaXJlY3QoeyAkcGFyZW50LCBpbml0aWFsU3RhdGU6IHRoaXMuc3RhdGUgfSk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdG5hdmlnYXRlVG8oJy8nKTtcblx0XHR9LCAyMDAwKTtcblx0fVxufVxuIiwiaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL2Jhc2UvbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXInO1xuaW1wb3J0IENoYXRMaXN0cyBmcm9tICcuLi9jb21wb25lbnRzL2Jhc2UvY2hhdC1saXN0L2NoYXQtbGlzdCc7XG5cbmNvbnN0IG1vZGUgPSAn7LGE7YyF7ZWY6riwJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRQYWdlIHtcblx0Y29uc3RydWN0b3IoJHBhcmVudCkge1xuXHRcdG5ldyBOYXZiYXIoe1xuXHRcdFx0JHBhcmVudCxcblx0XHRcdGluaXRpYWxTdGF0ZTogbW9kZSxcblx0XHR9KTtcblxuXHRcdG5ldyBDaGF0TGlzdHMoe1xuXHRcdFx0JHBhcmVudCxcblx0XHRcdGluaXRpYWxTdGF0ZTogc2FtcGxlQ2hhdERhdGEsXG5cdFx0fSk7XG5cdH1cbn1cblxuY29uc3Qgc2FtcGxlQ2hhdERhdGEgPSBbXG5cdHtcblx0XHRpbWdQYXRoOlxuXHRcdFx0J2h0dHBzOi8vZGVhbC02LnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vc3RvcmVJbWFnZXMvaW1ncy8lRTElODQlODMlRTElODUlQTElRTElODQlOEIlRTElODUlQUUlRTElODYlQUIlRTElODQlODUlRTElODUlQTklRTElODQlODMlRTElODUlQjMuanBlZycsXG5cdFx0bmFtZTogJ+yjhOyGoe2VqOuPoC4uJyxcblx0XHRjb250ZW50OiAn7Jy87JWFLi4uJyxcblx0XHR0aW1lOiAnMuyLnOqwhCDsoIQnLFxuXHRcdGNvdW50OiA1LFxuXHR9LFxuXHR7XG5cdFx0aW1nUGF0aDpcblx0XHRcdCdodHRwczovL2RlYWwtNi5zMy5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tL3N0b3JlSW1hZ2VzL2ltZ3MvJUUxJTg0JTgzJUUxJTg1JUExJUUxJTg0JThCJUUxJTg1JUFFJUUxJTg2JUFCJUUxJTg0JTg1JUUxJTg1JUE5JUUxJTg0JTgzJUUxJTg1JUIzLmpwZWcnLFxuXHRcdG5hbWU6ICfso4TshqHtlajrj6AuLicsXG5cdFx0Y29udGVudDogJ+yLnOqwhOydtCDrtoDsobHtlZjsl6wnLFxuXHRcdHRpbWU6ICcx7Iuc6rCEIOyghCcsXG5cdFx0Y291bnQ6IDAsXG5cdH0sXG5cdHtcblx0XHRpbWdQYXRoOlxuXHRcdFx0J2h0dHBzOi8vZGVhbC02LnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vc3RvcmVJbWFnZXMvaW1ncy8lRTElODQlODMlRTElODUlQTElRTElODQlOEIlRTElODUlQUUlRTElODYlQUIlRTElODQlODUlRTElODUlQTklRTElODQlODMlRTElODUlQjMuanBlZycsXG5cdFx0bmFtZTogJ+yjhOyGoe2VqOuPoC4uJyxcblx0XHRjb250ZW50OiAn6rWs7ZiEIOuqu+2WiOyKteuLiOuLpCcsXG5cdFx0dGltZTogJzXsi5zqsIQg7KCEJyxcblx0XHRjb3VudDogNyxcblx0fSxcblx0e1xuXHRcdGltZ1BhdGg6XG5cdFx0XHQnaHR0cHM6Ly9kZWFsLTYuczMuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbS9zdG9yZUltYWdlcy9pbWdzLyVFMSU4NCU4MyVFMSU4NSVBMSVFMSU4NCU4QiVFMSU4NSVBRSVFMSU4NiVBQiVFMSU4NCU4NSVFMSU4NSVBOSVFMSU4NCU4MyVFMSU4NSVCMy5qcGVnJyxcblx0XHRuYW1lOiAn7KOE7Iah7ZWo64+gLi4nLFxuXHRcdGNvbnRlbnQ6ICftlZjtlZjtlZguLi4nLFxuXHRcdHRpbWU6ICcx7Iuc6rCEIOyghCcsXG5cdFx0Y291bnQ6IDMsXG5cdH0sXG5cdHtcblx0XHRpbWdQYXRoOlxuXHRcdFx0J2h0dHBzOi8vZGVhbC02LnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vc3RvcmVJbWFnZXMvaW1ncy8lRTElODQlODMlRTElODUlQTElRTElODQlOEIlRTElODUlQUUlRTElODYlQUIlRTElODQlODUlRTElODUlQTklRTElODQlODMlRTElODUlQjMuanBlZycsXG5cdFx0bmFtZTogJ+yjhOyGoe2VqOuPoC4uJyxcblx0XHRjb250ZW50OiAnSSBhbSBTb3JyeScsXG5cdFx0dGltZTogJzLsi5zqsIQg7KCEJyxcblx0XHRjb3VudDogNSxcblx0fSxcblx0e1xuXHRcdGltZ1BhdGg6XG5cdFx0XHQnaHR0cHM6Ly9kZWFsLTYuczMuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbS9zdG9yZUltYWdlcy9pbWdzLyVFMSU4NCU4MyVFMSU4NSVBMSVFMSU4NCU4QiVFMSU4NSVBRSVFMSU4NiVBQiVFMSU4NCU4NSVFMSU4NSVBOSVFMSU4NCU4MyVFMSU4NSVCMy5qcGVnJyxcblx0XHRuYW1lOiAn7KOE7Iah7ZWo64+gLi4nLFxuXHRcdGNvbnRlbnQ6ICfjhaBfX+OFoCcsXG5cdFx0dGltZTogJzEw7Iuc6rCEIOyghCcsXG5cdFx0Y291bnQ6IDAsXG5cdH0sXG5dO1xuIiwiaW1wb3J0ICcuL2RldGFpbC1wYWdlLmNzcyc7XG5pbXBvcnQgVG9vbEJhciBmcm9tICcuLi9jb21wb25lbnRzL2RldGFpbC1wYWdlL3Rvb2wtYmFyL3Rvb2wtYmFyLmpzJztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvZGV0YWlsLXBhZ2Uvc2VjdGlvbi9zZWN0aW9uJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9kZXRhaWwtcGFnZS9mb290ZXIvZm9vdGVyJztcbmltcG9ydCBQcm9kdWN0TW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9iYXNlL3Byb2R1Y3QtbW9kYWwvcHJvZHVjdC1tb2RhbCc7XG5pbXBvcnQgeyBjcmVhdGVET01XaXRoU2VsZWN0b3IgfSBmcm9tICcuLi91dGlsL2NyZWF0ZURPTVdpdGhTZWxlY3Rvcic7XG5pbXBvcnQgeyBuYXZpZ2F0ZVRvIH0gZnJvbSAnLi4vcm91dGVyJztcbi8vIGltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2FwaS9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxQYWdlIHtcblx0c3RhdGUgPSB7XG5cdFx0Ly8gVEVTVCBDQVNFXG5cdFx0dXNlcjogJ+uCqOyYgeyasCcsIC8vIHBr6rCS7J2EIOuTpOqzoOyeiOydhOyngCwg7J2066aE7J2EIOuTpOqzoCDsnojsnYTsp4Ag6rOg66+87J6F64uI64ukLlxuXHRcdHNlbGxlcjogJ+uCqOyYgeyasCcsXG5cdFx0cHJpY2U6ICfigqkzNSwwMDAnLFxuXHRcdHRpdGxlOiAn67mI7Yuw7KeAIOuhpOufrCDsiqTsvIDsnbTtirghJyxcblx0XHRjb250ZW50OiBg7Ja066aw7Iuc7KCIIOy2lOyWteydmCDtlqXsiJjrpbwg67aI65+sIOydvOycvO2CpOuKlCDroaTrn6wg7Iqk7LyA7J207Yq47J6F64uI64ukLiDruYjti7Dsp4Ag7Yq57ISx7IOBIOyCrOyaqeqwkCDsnojsp4Drp4wg7KCE7LK07KCB7Jy866GcIOq5qOuBl+2VnCDsg4Htg5zsnoXri4jri6QuIOy0rOyYgeyaqSDshoztkojsnbTrgpgsIOqxsOyLpOyXkCDsnqXsi53smqnsnLzroZwg7LaU7LKc7ZW0IOuTnOumveuLiOuLpC4g64uo7ZKIIOyeheqzoCDrkJjsl4jsirXri4jri6QuPGJyPlxuXHRcdFx07IOIIOygnO2SiOycvOuhnCDrs7TsobTrkJwg7KCc7ZKI7Jy866GcIOyghOyaqeuwleyKpOq5jOyngCDrs7TrgrTrk5zrpr3ri4jri6Qu7IKs7J207KaI64qUIDIzNSDsnoXri4jri6QuYCxcblx0XHRzdGF0dXM6IDAsXG5cdFx0bG9jYXRpb246ICfrrLjrnpjrj5knLFxuXHRcdGNhdGVnb3J5OiAn6riw7YOAIOykkeqzoOusvO2SiCcsXG5cdFx0aW1nUGF0aDogW1xuXHRcdFx0J2h0dHBzOi8vZGVhbC02LnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vc3RvcmVJbWFnZXMvaW1ncy9zaG9lcy0xLmpwZycsXG5cdFx0XHQnaHR0cHM6Ly9kZWFsLTYuczMuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbS9zdG9yZUltYWdlcy9pbWdzL3Nob2VzLTEuanBnJyxcblx0XHRcdCdodHRwczovL2RlYWwtNi5zMy5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tL3N0b3JlSW1hZ2VzL2ltZ3Mvc2hvZXMtMS5qcGcnLFxuXHRcdF0sXG5cdFx0Y3JlYXRlZEF0OiAnM+u2hOyghCcsXG5cdFx0Y2hhdENvdW50OiAzLFxuXHRcdHdpc2hDb3VudDogMixcblx0XHR2aXNpdENvdW50OiA1LFxuXHR9O1xuXG5cdGNvbnN0cnVjdG9yKCRwYXJlbnQpIHtcblx0XHR0aGlzLmhhdmVIaXN0b3J5U3RhdGUoKTtcblx0XHRpZiAoIWhpc3Rvcnkuc3RhdGUgJiYgbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvZGV0YWlsLzEnKSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gc2Vjb25kRGF0YTtcblx0XHR9XG5cdFx0dGhpcy4kdGFyZ2V0ID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCdkaXYnLCAnLmRldGFpbC1wYWdlJyk7XG5cdFx0JHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLiR0YXJnZXQpO1xuXG5cdFx0dGhpcy50b29sQmFyID0gbmV3IFRvb2xCYXIoe1xuXHRcdFx0JHBhcmVudDogdGhpcy4kdGFyZ2V0LFxuXHRcdFx0aW5pdGlhbFN0YXRlOiB7XG5cdFx0XHRcdHVzZXI6IHRoaXMuc3RhdGUudXNlcixcblx0XHRcdFx0c2VsbGVyOiB0aGlzLnN0YXRlLnNlbGxlcixcblx0XHRcdH0sXG5cdFx0XHRvbkNsaWNrOiAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnYmFjaycpIHtcblx0XHRcdFx0XHRoaXN0b3J5LnN0YXRlID8gbmF2aWdhdGVUbygnLycpIDogaGlzdG9yeS5iYWNrKC0xKTtcblx0XHRcdFx0fSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdvcHRpb24nKVxuXHRcdFx0XHRcdHRoaXMucHJvZHVjdE1vZGFsLm9wZW4oKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0dGhpcy5zZWN0aW9uID0gbmV3IFNlY3Rpb24oe1xuXHRcdFx0JHBhcmVudDogdGhpcy4kdGFyZ2V0LFxuXHRcdFx0aW5pdGlhbFN0YXRlOiB0aGlzLnN0YXRlLFxuXHRcdH0pO1xuXHRcdHRoaXMuZm9vdGVyID0gbmV3IEZvb3Rlcih7XG5cdFx0XHQkcGFyZW50OiB0aGlzLiR0YXJnZXQsXG5cdFx0XHRpbml0aWFsU3RhdGU6IHtcblx0XHRcdFx0cHJpY2U6IHRoaXMuc3RhdGUucHJpY2UsXG5cdFx0XHRcdHVzZXI6IHRoaXMuc3RhdGUudXNlcixcblx0XHRcdFx0c2VsbGVyOiB0aGlzLnN0YXRlLnNlbGxlcixcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHR0aGlzLnByb2R1Y3RNb2RhbCA9IG5ldyBQcm9kdWN0TW9kYWwoe1xuXHRcdFx0JHBhcmVudDogdGhpcy4kdGFyZ2V0LFxuXHRcdFx0b25DbGljazogKGUpID0+IHtcblx0XHRcdFx0aWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3Byb2R1Y3RNb2RhbF9fb3ZlcmxheScpIHtcblx0XHRcdFx0XHR0aGlzLnByb2R1Y3RNb2RhbC5jbG9zZSgpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3Byb2R1Y3RNb2RhbF9fdXBkYXRlJykge1xuXHRcdFx0XHRcdG5hdmlnYXRlVG8oJy93cml0aW5nJywgdGhpcy5zdGF0ZSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAncHJvZHVjdE1vZGFsX19kZWxldGUnKSB7XG5cdFx0XHRcdFx0Ly8gYXBpLmRlbGV0ZSgnLz9sb2NhdGlvbicpXG5cdFx0XHRcdFx0Ly8gXHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0bmF2aWdhdGVUbygnLycpO1xuXHRcdFx0XHRcdC8vIH0pXG5cdFx0XHRcdFx0Ly8gLmNhdGNoKChlKSA9PiB7XG5cdFx0XHRcdFx0Ly8gXHRhbGVydChlLm1lc3NhZ2UpO1xuXHRcdFx0XHRcdC8vIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0Ly8gaGlzdG9yeS5zdGF0ZSA/ICcnIDogdGhpcy5pbml0aWFsbGl6ZURhdGEoKTtcblx0fVxuXG5cdC8vIOychOyXkCDso7zshJ0g7J6I7J2MLi4hXG5cdC8vIGluaXRpYWxsaXplRGF0YSgpIHtcblx0Lypcblx0XHRcdGFwaSDtmLjstpwgKCDtlITroZzrjZXtirgpXG5cdFx0Ki9cblx0Ly8gXHRhcGkuZ2V0KGxvY2F0aW9uLnBhdGhuYW1lKVxuXHQvLyBcdFx0LnRoZW4oKHJlcykgPT4ge1xuXHQvLyBcdFx0XHR0aGlzLnN0YXRlID0gcmVzLmRhdGE7IC8vIOuvuOyglVxuXHQvLyBcdFx0XHR0aGlzLnNldFN0YXRlKCk7XG5cdC8vIFx0XHR9KVxuXHQvLyBcdFx0LmNhdGNoKCgpID0+IHtcblx0Ly8gXHRcdFx0bmF2aWdhdGVUbygnL25vdGxvZ2luJyk7XG5cdC8vIFx0XHR9KTtcblx0Ly8gfVxuXG5cdHNldFN0YXRlKCkge1xuXHRcdHRoaXMudG9vbEJhci5zZXRTdGF0ZSh7XG5cdFx0XHR1c2VyOiB0aGlzLnN0YXRlLnVzZXIsXG5cdFx0XHRzZWxsZXI6IHRoaXMuc3RhdGUuc2VsbGVyLFxuXHRcdH0pO1xuXHRcdHRoaXMuc2VjdGlvbi5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmZvb3Rlci5zZXRTdGF0ZSh7XG5cdFx0XHRwcmljZTogdGhpcy5zdGF0ZS5wcmljZSxcblx0XHRcdHVzZXI6IHRoaXMuc3RhdGUudXNlcixcblx0XHRcdHNlbGxlcjogdGhpcy5zdGF0ZS5zZWxsZXIsXG5cdFx0fSk7XG5cdH1cblxuXHRoYXZlSGlzdG9yeVN0YXRlKCkge1xuXHRcdGlmIChoaXN0b3J5LnN0YXRlKSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gaGlzdG9yeS5zdGF0ZTtcblx0XHR9XG5cdH1cbn1cblxuY29uc3Qgc2Vjb25kRGF0YSA9IHtcblx0Ly80XG5cdHVzZXI6ICfrgqjsmIHsmrAnLCAvLyBwa+qwkuydhCDrk6Tqs6DsnojsnYTsp4AsIOydtOumhOydhCDrk6Tqs6Ag7J6I7J2E7KeAIOqzoOuvvOyeheuLiOuLpC5cblx0c2VsbGVyOiAn66y47KeA7Zi4Jyxcblx0cHJpY2U6ICfigqk1MCwwMDAnLFxuXHR0aXRsZTogJ+qwpOufreyLnEE1Jyxcblx0Y29udGVudDogYOqwpOufreyLnCBBNSDtjJDrp6Ttlanri4jri6QuIFxuXHQxNkdCIOustOyelOyDgeyXkCDsg53tmZzquLDsiqQg7JW96rCEIOyeiOyKteuLiOuLpC5cblx07KeB6rGw656YIOuLteyLreumrOyXrSDslYTri4jrqbQg7J6l7ZWc7Y+J7Jet7JeQ7IScIO2VqeuLiOuLpC5gLFxuXHRzdGF0dXM6IDAsXG5cdGxvY2F0aW9uOiAn66y4656Y64+ZJyxcblx0Y2F0ZWdvcnk6ICfquLDtg4Ag7KSR6rOg66y87ZKIJyxcblx0aW1nUGF0aDogW1xuXHRcdCdodHRwczovL3BpY3N1bS5waG90b3MvMzAwLzMwMCcsXG5cdFx0J2h0dHBzOi8vcGljc3VtLnBob3Rvcy8zMDAvMzAwJyxcblx0XHQnaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzMwMC8zMDAnLFxuXHRcdCdodHRwczovL3BpY3N1bS5waG90b3MvMzAwLzMwMCcsXG5cdFx0J2h0dHBzOi8vcGljc3VtLnBob3Rvcy8zMDAvMzAwJyxcblx0XSxcblx0Y3JlYXRlZEF0OiAnN+u2hOyghCcsXG5cdGNoYXRDb3VudDogNSxcblx0d2lzaENvdW50OiAyLFxuXHR2aXNpdENvdW50OiA2LFxufTtcbiIsImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9iYXNlL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyJztcbmltcG9ydCBCb2R5IGZyb20gJy4uL2NvbXBvbmVudHMvbG9jYXRpb24tcGFnZS9ib2R5L2JvZHknO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvbG9jYXRpb24tcGFnZS9sb2NhdGlvbi1tb2RhbC9sb2NhdGlvbi1tb2RhbCc7XG5pbXBvcnQgQWxlcnQgZnJvbSAnLi4vY29tcG9uZW50cy9iYXNlL2FsZXJ0L2FsZXJ0Jztcbi8vIGltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2FwaS9hcGknO1xuLy8gaW1wb3J0IHsgbmF2aWdhdGVUbyB9IGZyb20gJy4uL3JvdXRlcic7XG5cbmNvbnN0IG1vZGUgPSAn64K0IOuPmeuEpCDshKTsoJXtlZjquLAnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb25QYWdlIHtcblx0c3RhdGUgPSB7XG5cdFx0YWxsTXlMb2NhdGlvbjogWyfsnbjssL3rj5knXSxcblx0XHRjdXJyZW50SW5kZXg6IDAsIC8vIO2YhOyerCDsupTsiqztlaAg67KE7Yq87J2YIGluZGV4IOy0iOq4sO2ZlFxuXHR9O1xuXG5cdGNvbnN0cnVjdG9yKCRwYXJlbnQpIHtcblx0XHR0aGlzLm5hdmJhciA9IG5ldyBOYXZiYXIoe1xuXHRcdFx0JHBhcmVudCxcblx0XHRcdGluaXRpYWxTdGF0ZTogbW9kZSxcblx0XHR9KTtcblx0XHR0aGlzLmJvZHkgPSBuZXcgQm9keSh7XG5cdFx0XHQkcGFyZW50LFxuXHRcdFx0aW5pdGlhbFN0YXRlOiB0aGlzLnN0YXRlLmFsbE15TG9jYXRpb24sXG5cdFx0XHRvbkNsaWNrOiAoZSwgaWR4KSA9PiB7XG5cdFx0XHRcdHRoaXMuYmluZEJ1dHRvbkNsaWNrRXZlbnQoZSwgaWR4KTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0dGhpcy5tb2RhbCA9IG5ldyBNb2RhbCh7XG5cdFx0XHQkcGFyZW50LFxuXHRcdFx0b25DbGljazogKGUsIGlkeCkgPT4ge1xuXHRcdFx0XHR0aGlzLmJpbmRNb2RhbENsaWNrRXZlbnQoZSwgaWR4KTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0dGhpcy5hbGVydCA9IG5ldyBBbGVydCh7XG5cdFx0XHQkcGFyZW50LFxuXHRcdFx0b25DbGljazogKGUpID0+IHtcblx0XHRcdFx0dGhpcy5iaW5kQWxlcnRDbGlja0V2ZW50KGUpO1xuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdC8vIHRoaXMuaW5pdGlhbGxpemVEYXRhKCk7XG5cdH1cblxuXHQvLyBpbml0aWFsbGl6ZURhdGEoKSB7XG5cdC8vIFx0YXBpLmdldCgnLycpXG5cdC8vIFx0XHQudGhlbigocmVzKSA9PiB7XG5cdC8vIFx0XHRcdGlmIChyZXMuZGF0YS5TdWJMb2NhaXRvbikge1xuXHQvLyBcdFx0XHRcdHRoaXMuc3RhdGUuYWxsTXlMb2NhdGlvbiA9IFtcblx0Ly8gXHRcdFx0XHRcdHJlcy5kYXRhLk1haW5Mb2NhaXRvbixcblx0Ly8gXHRcdFx0XHRcdHJlcy5kYXRhLlN1YkxvY2FpdG9uLFxuXHQvLyBcdFx0XHRcdF07XG5cdC8vIFx0XHRcdH0gZWxzZSB7XG5cdC8vIFx0XHRcdFx0dGhpcy5zdGF0ZS5hbGxNeUxvY2F0aW9uID0gW3Jlcy5kYXRhLk1haW5Mb2NhaXRvbl07XG5cdC8vIFx0XHRcdH1cblxuXHQvLyBcdFx0XHR0aGlzLnNldFN0YXRlKCk7XG5cdC8vIFx0XHR9KVxuXHQvLyBcdFx0LmNhdGNoKCgpID0+IHtcblx0Ly8gXHRcdFx0bmF2aWdhdGVUbygnL25vdGxvZ2luJyk7XG5cdC8vIFx0XHR9KTtcblx0Ly8gfVxuXG5cdHNldFN0YXRlKCkge1xuXHRcdHRoaXMuYm9keS5zZXRTdGF0ZSh0aGlzLnN0YXRlLmFsbE15TG9jYXRpb24pO1xuXHR9XG5cblx0YmluZE1vZGFsQ2xpY2tFdmVudChlLCB2YWx1ZSkge1xuXHRcdGlmIChcblx0XHRcdC8vIOuLq+q4sCDrsI8g7Jm467aAIO2BtOumrSDsi5wg67Cc7IOdXG5cdFx0XHRlLnRhcmdldC5jbGFzc05hbWUgPT09ICdtb2RhbF9fb3ZlcmxheScgfHxcblx0XHRcdGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ21vZGFsX19jYW5jZWwnXG5cdFx0KSB7XG5cdFx0XHR0aGlzLm1vZGFsLmNsb3NlKCk7XG5cdFx0fSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdtb2RhbF9fY29uZmlybSBhY3RpdmUnKSB7XG5cdFx0XHQvLyBhcGkucG9zdCgnLycsIHsgbG9jYXRpb246IHZhbHVlIH0pXG5cdFx0XHQvLyBcdC50aGVuKCgpID0+IHtcblx0XHRcdC8vIO2ZleyduCDtgbTrpq0g7IucIOuwnOyDnVxuXHRcdFx0Ly8gYXBp66GcIOuPmeuEpCDstpTqsIBcblx0XHRcdHRoaXMuc3RhdGUuYWxsTXlMb2NhdGlvbiA9IFsuLi50aGlzLnN0YXRlLmFsbE15TG9jYXRpb24sIHZhbHVlXTtcblx0XHRcdHRoaXMubW9kYWwuY2xvc2UoKTtcblx0XHRcdHRoaXMubW9kYWwuJGlucHV0ID0gJyc7IC8vIGlucHV0IOy0iOq4sO2ZlFxuXHRcdFx0dGhpcy5zZXRTdGF0ZSgpO1xuXHRcdFx0Ly8gfSlcblx0XHRcdC8vIC5jYXRjaCgoZSkgPT4ge1xuXHRcdFx0Ly8gXHRhbGVydChlLm1lc3NhZ2UpO1xuXHRcdFx0Ly8gfSk7XG5cdFx0fVxuXHR9XG5cblx0YmluZFJlbW92ZUxvY2F0aW9uRXZlbnQoaWR4KSB7XG5cdFx0Ly8gYXBpLnB1dCgnLz9sb2NhdGlvbicpXG5cdFx0Ly8gXHQudGhlbigoKSA9PiB7XG5cdFx0bGV0IExvY2F0aW9uQXJyYXkgPSBbLi4udGhpcy5zdGF0ZS5hbGxNeUxvY2F0aW9uXTtcblx0XHRMb2NhdGlvbkFycmF5LnNwbGljZShpZHgsIDEpO1xuXHRcdHRoaXMuc3RhdGUuYWxsTXlMb2NhdGlvbiA9IExvY2F0aW9uQXJyYXk7XG5cdFx0dGhpcy5zZXRTdGF0ZSgpO1xuXG5cdFx0Ly8gfSlcblx0XHQvLyAuY2F0Y2goKGUpID0+IHtcblx0XHQvLyBcdGFsZXJ0KGUubWVzc2FnZSk7XG5cdFx0Ly8gfSk7XG5cdH1cblxuXHRiaW5kQnV0dG9uQ2xpY2tFdmVudChlLCBpZHgpIHtcblx0XHRpZiAoXG5cdFx0XHQvLyBwbHVzIGNsaWNrIGV2ZW50XG5cdFx0XHRlLnRhcmdldC5jbGFzc05hbWUgPT09ICdsb2NhdGlvbl9fcGx1c0J0bicgfHxcblx0XHRcdGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2xvY2F0aW9uX19wbHVzJ1xuXHRcdCkge1xuXHRcdFx0dGhpcy5tb2RhbC5vcGVuKCk7XG5cdFx0fSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdsb2NhdGlvbl9fY2FuY2VsQnRuJykge1xuXHRcdFx0Ly8gY2FuY2VsKFgpIGNsaWNrIGV2ZW50XG5cdFx0XHR0aGlzLmFsZXJ0Lm9wZW4oKTtcblx0XHRcdHRoaXMuc3RhdGUuY3VycmVudEluZGV4ID0gaWR4O1xuXHRcdH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnbG9jYXRpb25fX25vcm1hbEJ0bicpIHtcblx0XHRcdGlmIChpZHggPT09IDApIHtcblx0XHRcdFx0dGhpcy5zdGF0ZS5hbGxNeUxvY2F0aW9uID0gW1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUuYWxsTXlMb2NhdGlvblsxXSxcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmFsbE15TG9jYXRpb25bMF0sXG5cdFx0XHRcdF07XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoKTtcblx0XHRcdH1cblx0XHRcdC8qIFxuXHRcdFx0LS3stpTtm4Qg7JiI7KCVLS1cblx0XHRcdOydvOuwmCDrj5nrhKQgY2xpY2sgZXZlbnQgKCDrqZTsnbgg64+Z64Sk66GcIGNoYW5nZSApXG5cdFx0XHTqt7gg7ZuEIOuLpOyLnCBhcGkg7JqU7LKt7J2EIO2Gte2VtOyEnCDrpqzroIzrjZTrp4Eg67Cp7IudIFxuXHRcdFx0Ki9cblx0XHR9XG5cdH1cblxuXHRiaW5kQWxlcnRDbGlja0V2ZW50KGUpIHtcblx0XHRpZiAoXG5cdFx0XHQvLyDri6vquLAg67CPIOyZuOu2gCDtgbTrpq0g7IucIOuwnOyDnVxuXHRcdFx0ZS50YXJnZXQuY2xhc3NOYW1lID09PSAnYWxlcnRfX292ZXJsYXknIHx8XG5cdFx0XHRlLnRhcmdldC5jbGFzc05hbWUgPT09ICdhbGVydF9fY2FuY2VsJ1xuXHRcdCkge1xuXHRcdFx0dGhpcy5hbGVydC5jbG9zZSgpO1xuXHRcdH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnYWxlcnRfX2NvbmZpcm0nKSB7XG5cdFx0XHQvLyDrgpjqsIDquLAg7YG066atIOyLnCDrsJzsg51cblx0XHRcdHRoaXMuYWxlcnQuY2xvc2UoKTtcblxuXHRcdFx0dGhpcy5iaW5kUmVtb3ZlTG9jYXRpb25FdmVudCh0aGlzLnN0YXRlLmN1cnJlbnRJbmRleCk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi1wYWdlL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyLmpzJztcbmltcG9ydCBQcm9kdWN0TGlzdHMgZnJvbSAnLi4vY29tcG9uZW50cy9iYXNlL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuanMnO1xuaW1wb3J0IFBvc3RCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluLXBhZ2Uvd3JpdGUtcG9zdC1idXR0b24vd3JpdGUtcG9zdC1idXR0b24nO1xuaW1wb3J0IENhdGVnb3J5IGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi1wYWdlL2NhdGVnb3J5L2NhdGVnb3J5LmpzJztcbmltcG9ydCB7IENBVEVHT1JZX0xJU1QgfSBmcm9tICcuLi9jb25zdGFudHMvY2F0ZWdvcnktbGlzdCc7XG5pbXBvcnQgTG9jYXRpb25NaW5pTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluLXBhZ2UvbG9jYXRpb24tbWluaS1tb2RhbC9sb2NhdGlvbi1taW5pLW1vZGFsJztcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2FwaS9hcGknO1xuaW1wb3J0IHsgbmF2aWdhdGVUbyB9IGZyb20gJy4uL3JvdXRlci5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluUGFnZSB7XG5cdHN0YXRlID0ge1xuXHRcdHByb2R1Y3RzOiBzYW1wbGVEYXRhLFxuXHRcdGxvY2F0aW9uTmFtZTogWyfsnbjssL3rj5knLCAn66y4656Y64+ZJ10sIC8vIGRlZmF1bHTroZwg7ZWY64KY64qUIOqwluqzoCDsnojslrTslbwg7ZWc64ukIVxuXHRcdGluZGV4OiAwLFxuXHRcdGNhdGVnb3J5OiAnJyxcblx0fTtcblxuXHRjb25zdHJ1Y3RvcigkcGFyZW50KSB7XG5cdFx0dGhpcy4kcGFyZW50ID0gJHBhcmVudDtcblx0XHR0aGlzLm5hdmJhciA9IG5ldyBOYXZiYXIoe1xuXHRcdFx0JHBhcmVudCxcblx0XHRcdGluaXRpYWxTdGF0ZTogdGhpcy5zdGF0ZS5sb2NhdGlvbk5hbWVbdGhpcy5zdGF0ZS5pbmRleF0sXG5cdFx0XHRvbkNsaWNrOiAoZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmJpbmROYXZCYXJDbGlja0V2ZW50KGUpO1xuXHRcdFx0fSxcblx0XHR9KTtcblx0XHR0aGlzLlByb2R1Y3RMaXN0cyA9IG5ldyBQcm9kdWN0TGlzdHMoe1xuXHRcdFx0JHBhcmVudCxcblx0XHRcdGluaXRpYWxTdGF0ZTogdGhpcy5zdGF0ZS5wcm9kdWN0cyxcblx0XHRcdHJlZnJlc2hTdGF0ZTogKG5leHRTdGF0ZSkgPT4ge1xuXHRcdFx0XHR0aGlzLnN0YXRlLnByb2R1Y3RzID0gbmV4dFN0YXRlO1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKCk7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHRoaXMucG9zdEJ1dHRvbiA9IG5ldyBQb3N0QnV0dG9uKHsgJHBhcmVudCB9KTtcblxuXHRcdHRoaXMuY2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcnkoe1xuXHRcdFx0JHBhcmVudCxcblx0XHRcdENBVEVHT1JZX0xJU1QsXG5cdFx0XHRvbkNsaWNrOiAoZSwgaWR4KSA9PiB7XG5cdFx0XHRcdHRoaXMuYmluZENhdGVnb3J5Q2xpY2tFdmVudChlLCBpZHgpO1xuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdHRoaXMubG9jYXRpb25NaW5pTW9kYWwgPSBuZXcgTG9jYXRpb25NaW5pTW9kYWwoe1xuXHRcdFx0JHBhcmVudCxcblx0XHRcdGluaXRpYWxTdGF0ZTogdGhpcy5zdGF0ZS5sb2NhdGlvbk5hbWUsXG5cdFx0XHRvbkNsaWNrOiAoZSwgaWR4KSA9PiB7XG5cdFx0XHRcdHRoaXMuYmluZExvY2F0aW9uTW9kYWxDbGlja0V2ZW50KGUsIGlkeCk7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0Ly8gdGhpcy5pbml0aWFsbGl6ZURhdGEoKTtcblx0fVxuXG5cdC8vIOychOyXkCDso7zshJ0g7J6I7J2MLi4hXG5cdGluaXRpYWxsaXplRGF0YSgpIHtcblx0XHQvKlxuXHRcdFx0YXBpIO2YuOy2nCAo7J6Q7IugIOuPmeuEpOuTpCwg7ZSE66Gc642V7Yq4KSDtlZzrsojsl5Ag67Cb7J2E7IiYIOyeiOuLpO2VqCFcblx0XHQqL1xuXG5cdFx0YXBpLmdldCgnLycpXG5cdFx0XHQudGhlbigocmVzKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3RhdGUucHJvZHVjdHMgPSByZXMuZGF0YTtcblx0XHRcdFx0aWYgKHJlcy5kYXRhLlN1YkxvY2F0aW9uKSB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5sb2NhdGlvbk5hbWUgPSBbcmVzLmRhdGEuTWFpbkxvY2F0aW9uXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmxvY2F0aW9uTmFtZSA9IFtcblx0XHRcdFx0XHRcdHJlcy5kYXRhLk1haW5Mb2NhdGlvbixcblx0XHRcdFx0XHRcdHJlcy5kYXRhLlN1YkxvY2F0aW9uLFxuXHRcdFx0XHRcdF07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKCk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKCgpID0+IHtcblx0XHRcdFx0bmF2aWdhdGVUbygnL25vdGxvZ2luJyk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHNldFN0YXRlKCkge1xuXHRcdC8v66as66CM642U66eB7YyM7Yq4XG5cdFx0dGhpcy5uYXZiYXIuc2V0U3RhdGUodGhpcy5zdGF0ZS5sb2NhdGlvbk5hbWVbdGhpcy5zdGF0ZS5pbmRleF0pO1xuXHRcdHRoaXMuUHJvZHVjdExpc3RzLnNldFN0YXRlKHRoaXMuc3RhdGUucHJvZHVjdHMpO1xuXHR9XG5cblx0YmluZE5hdkJhckNsaWNrRXZlbnQoZSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNsYXNzTmFtZSk7XG5cdFx0aWYgKFxuXHRcdFx0ZS50YXJnZXQuY2xhc3NOYW1lID09PSAnbmF2X19jYXRlZ29yeUltZycgLy8g7Lm07YWM6rOg66asIO2BtOumrSDsi5wg67Cc7IOdXG5cdFx0KSB7XG5cdFx0XHR0aGlzLmNhdGVnb3J5Lm9wZW4oKTtcblxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuUHJvZHVjdExpc3RzLmNsb3NlKCk7XG5cdFx0XHR9LCA1MDApO1xuXHRcdFx0dGhpcy4kcGFyZW50LnNjcm9sbFRvcCA9IDA7XG5cdFx0fSBlbHNlIGlmIChcblx0XHRcdGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ25hdl9fbG9jYXRpb25JY29uJyB8fFxuXHRcdFx0ZS50YXJnZXQuY2xhc3NOYW1lID09PSAnbmF2X19sb2NhdGlvbk5hbWUnXG5cdFx0KSB7XG5cdFx0XHR0aGlzLmxvY2F0aW9uTWluaU1vZGFsLm9wZW4oKTtcblx0XHR9XG5cdH1cblx0YmluZENhdGVnb3J5Q2xpY2tFdmVudChlLCBpZHgpIHtcblx0XHRpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnbmF2X19wcmV2Jykge1xuXHRcdFx0dGhpcy5jYXRlZ29yeS5jbG9zZSgpO1xuXHRcdFx0dGhpcy5Qcm9kdWN0TGlzdHMub3BlbigpO1xuXHRcdH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnY2F0ZWdvcnlMaXN0X19pbWcnKSB7XG5cdFx0XHR0aGlzLmNhdGVnb3J5LmNsb3NlKCk7XG5cdFx0XHR0aGlzLlByb2R1Y3RMaXN0cy5vcGVuKCk7XG5cdFx0XHR0aGlzLmNhdGVnb3J5ID0gQ0FURUdPUllfTElTVFtpZHhdO1xuXG5cdFx0XHQvKlxuXHRcdFx0XHRhcGkg7Zi47LacICjsnpDsi6Ag64+Z64Sk65OkLCDtlITroZzrjZXtirgpIOuPmeuEpOq4sOykgCDtlITroZzrjZXtirggXG5cdFx0XHQqL1xuXHRcdFx0dGhpcy5zdGF0ZS5wcm9kdWN0cyA9IHNhbXBsZURhdGEuZmlsdGVyKFxuXHRcdFx0XHQodmFsdWUpID0+XG5cdFx0XHRcdFx0dmFsdWUuY2F0ZWdvcnkgPT09IENBVEVHT1JZX0xJU1RbaWR4XSAmJlxuXHRcdFx0XHRcdHZhbHVlLmxvY2F0aW9uID09PSB0aGlzLnN0YXRlLmxvY2F0aW9uTmFtZVt0aGlzLnN0YXRlLmluZGV4XVxuXHRcdFx0KTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoKTtcblxuXHRcdFx0Ly8gYXBpLmdldChgLz9jYXRlZ29yeT0ke3RoaXMuY2F0ZWdvcnl9JnByb2R1Y3Q9JHt0aGlzLlByb2R1Y3RMaXN0c31gKVxuXHRcdFx0Ly8gXHQudGhlbigocmVzKSA9PiB7XG5cdFx0XHQvLyBcdFx0dGhpcy5zdGF0ZS5wcm9kdWN0cyA9IHJlcy5kYXRhO1xuXHRcdFx0Ly8gXHRcdHRoaXMuc2V0U3RhdGUoKTtcblx0XHRcdC8vIFx0fSlcblx0XHRcdC8vIFx0LmNhdGNoKChlKSA9PiB7XG5cdFx0XHQvLyBcdFx0YWxlcnQoZS5tZXNzYWdlKTsgLy8g7J206rG0IOq0nOywrlxuXHRcdFx0Ly8gXHR9KTtcblx0XHR9XG5cdFx0Lypcblx0XHRcdENBVEVHT1JZX0xJU1RbaWR4XTtcblx0XHRcdOq4sOykgOycvOuhnCBhcGkg7Zi47LacIO2bhFxuXHRcdFx0cHJvZHVjdCDrv4zrpqzquLAgKHNldFN0YXRlKVxuXHRcdCovXG5cdH1cblxuXHRiaW5kTG9jYXRpb25Nb2RhbENsaWNrRXZlbnQoZSwgaWR4KSB7XG5cdFx0aWYgKFxuXHRcdFx0ZS50YXJnZXQuY2xhc3NOYW1lID09PSAnbWluaU1vZGFsX19vdmVybGF5J1xuXHRcdFx0Ly8g7Jm467aAIO2BtOumrSDsi5wg67Cc7IOdXG5cdFx0KSB7XG5cdFx0XHR0aGlzLmxvY2F0aW9uTWluaU1vZGFsLmNsb3NlKCk7XG5cdFx0fSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdtaW5pTW9kYWxfX2xvY2F0aW9uJykge1xuXHRcdFx0Ly8g64+Z64SkIO2BtOumrSDsi5wg67Cc7IOdXG5cdFx0XHR0aGlzLmxvY2F0aW9uTWluaU1vZGFsLmNsb3NlKCk7XG5cdFx0XHRpZiAodGhpcy5zdGF0ZS5pbmRleCAhPT0gaWR4KSB7XG5cdFx0XHRcdC8vdGhpcy5zdGF0ZS5sb2NhdGlvbk5hbWVbdGhpcy5zdGF0ZS5pbmRleF0gJiYg7Lm07YWM6rOg66asXG5cdFx0XHRcdC8vIGFwaS5nZXQoJy8nKVxuXHRcdFx0XHQvLyBcdC50aGVuKChyZXMpID0+IHtcblx0XHRcdFx0dGhpcy5zdGF0ZS5pbmRleCA9IGlkeDtcblxuXHRcdFx0XHR0aGlzLnN0YXRlLnByb2R1Y3RzID0gc2FtcGxlRGF0YS5maWx0ZXIoKHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuc3RhdGUuY2F0ZWdvcnkpIHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdHZhbHVlLmxvY2F0aW9uID09PVxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUubG9jYXRpb25OYW1lW051bWJlcihpZHgpXSAmJlxuXHRcdFx0XHRcdFx0XHR2YWx1ZS5jYXRlZ29yeSA9PT0gdGhpcy5zdGF0ZS5jYXRlZ29yeVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0dmFsdWUubG9jYXRpb24gPT09XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUubG9jYXRpb25OYW1lW051bWJlcihpZHgpXVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRoaXMuJHBhcmVudC5zY3JvbGxUbyh7XG5cdFx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJyxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoKTtcblx0XHRcdH1cblx0XHRcdC8vIC5jYXRjaCgoZSkgPT4ge1xuXHRcdFx0Ly8gXHRhbGVydChlLm1lc3NhZ2UpOyAvLyDsnbTqsbQg6rSc7LCuXG5cdFx0XHQvLyB9KTtcblx0XHR9XG5cdH1cbn1cblxuY29uc3Qgc2FtcGxlRGF0YSA9IFtcblx0e1xuXHRcdHVzZXI6ICcnLCAvLyBwa+qwkuydhCDrk6Tqs6DsnojsnYTsp4AsIOydtOumhOydhCDrk6Tqs6Ag7J6I7J2E7KeAIOqzoOuvvOyeheuLiOuLpC5cblx0XHRzZWxsZXI6ICftlLzsubTshownLFxuXHRcdHByaWNlOiAn4oKpMzUsMDAwLDAwMCcsXG5cdFx0bmFtZTogJ+2UvOy5tOyGjOydmCDrqoXtmZQnLFxuXHRcdGxvY2F0aW9uOiAn66y4656Y64+ZJyxcblx0XHRjYXRlZ29yeTogJ+q4sO2DgCDspJHqs6DrrLztkognLFxuXHRcdGltZ1BhdGg6ICdodHRwczovL3BpY3N1bS5waG90b3MvMjAwJyxcblx0XHR0aW1lOiAnM+u2hOyghCcsXG5cdFx0Y2hhdENvdW50OiAzLFxuXHRcdGxpa2VDb3VudDogMixcblx0XHRsaWtlOiAnVCcsXG5cdFx0cGs6IDAsXG5cdH0sXG5cdHtcblx0XHR1c2VyOiAn7ZS87Lm07IaMJywgLy8gcGvqsJLsnYQg65Ok6rOg7J6I7J2E7KeALCDsnbTrpoTsnYQg65Ok6rOgIOyeiOydhOyngCDqs6Drr7zsnoXri4jri6QuXG5cdFx0c2VsbGVyOiAn7ZS87Lm07IaMJyxcblx0XHRwcmljZTogJ+KCqTM1LDAwMCwwMDAnLFxuXHRcdG5hbWU6ICftlLzsubTshozsnZgg66qF7ZmUJyxcblx0XHRsb2NhdGlvbjogJ+yduOywveuPmScsXG5cdFx0Y2F0ZWdvcnk6ICfrlJTsp4DthLjquLDquLAnLFxuXHRcdGltZ1BhdGg6ICdodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzMwMCcsXG5cdFx0dGltZTogJzPrtoTsoIQnLFxuXHRcdGNoYXRDb3VudDogMyxcblx0XHRsaWtlQ291bnQ6IDIsXG5cdFx0bGlrZTogJ1QnLFxuXHRcdHBrOiAxLFxuXHR9LFxuXHR7XG5cdFx0dXNlcjogJ+2UvOy5tOyGjCcsIC8vIHBr6rCS7J2EIOuTpOqzoOyeiOydhOyngCwg7J2066aE7J2EIOuTpOqzoCDsnojsnYTsp4Ag6rOg66+87J6F64uI64ukLlxuXHRcdHNlbGxlcjogJ+2UvOy5tOyGjCcsXG5cdFx0cHJpY2U6ICfigqkzNSwwMDAsMDAwJyxcblx0XHRuYW1lOiAn7ZS87Lm07IaM7J2YIOuqhe2ZlCcsXG5cdFx0bG9jYXRpb246ICfsnbjssL3rj5knLFxuXHRcdGNhdGVnb3J5OiAn6riw7YOAIOykkeqzoOusvO2SiCcsXG5cdFx0aW1nUGF0aDogJ2h0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8xLzIwMC8zMDAnLFxuXHRcdHRpbWU6ICcz67aE7KCEJyxcblx0XHRjaGF0Q291bnQ6IDMsXG5cdFx0bGlrZUNvdW50OiAyLFxuXHRcdGxpa2U6ICdUJyxcblx0XHRwazogMCxcblx0fSxcblx0e1xuXHRcdHVzZXI6ICcnLCAvLyBwa+qwkuydhCDrk6Tqs6DsnojsnYTsp4AsIOydtOumhOydhCDrk6Tqs6Ag7J6I7J2E7KeAIOqzoOuvvOyeheuLiOuLpC5cblx0XHRzZWxsZXI6ICftlLzsubTshownLFxuXHRcdHByaWNlOiAn4oKpMzUsMDAwLDAwMCcsXG5cdFx0bmFtZTogJ+2UvOy5tOyGjOydmCDrqoXtmZQnLFxuXHRcdGxvY2F0aW9uOiAn66y4656Y64+ZJyxcblx0XHRjYXRlZ29yeTogJ+uUlOyngO2EuOq4sOq4sCcsXG5cdFx0aW1nUGF0aDpcblx0XHRcdCdodHRwczovL2kucGljc3VtLnBob3Rvcy9pZC8xMC8yNTAwLzE2NjcuanBnP2htYWM9SjA0V1dDX2ViY2h4M1d3emJNLVo0X0tDX0xlTEJXcjVMWk1hQWtXa0Y2OCcsXG5cdFx0dGltZTogJzPrtoTsoIQnLFxuXHRcdGNoYXRDb3VudDogMyxcblx0XHRsaWtlQ291bnQ6IDIsXG5cdFx0bGlrZTogJ0YnLFxuXHRcdHBrOiAxLFxuXHR9LFxuXHR7XG5cdFx0dXNlcjogJycsIC8vIHBr6rCS7J2EIOuTpOqzoOyeiOydhOyngCwg7J2066aE7J2EIOuTpOqzoCDsnojsnYTsp4Ag6rOg66+87J6F64uI64ukLlxuXHRcdHNlbGxlcjogJ+2UvOy5tOyGjCcsXG5cdFx0cHJpY2U6ICfigqkzNSwwMDAsMDAwJyxcblx0XHRuYW1lOiAn7ZS87Lm07IaM7J2YIOuqhe2ZlCcsXG5cdFx0bG9jYXRpb246ICfsnbjssL3rj5knLFxuXHRcdGNhdGVnb3J5OiAn6riw7YOAIOykkeqzoOusvO2SiCcsXG5cdFx0aW1nUGF0aDpcblx0XHRcdCdodHRwczovL2kucGljc3VtLnBob3Rvcy9pZC8xMDAvMjUwMC8xNjU2LmpwZz9obWFjPWdXeU4tN1pCMzJya0FqTWhLWFFnZEhPSUJSSHlUU2d6dU9LNlUwdlhiMXcnLFxuXHRcdHRpbWU6ICcz67aE7KCEJyxcblx0XHRjaGF0Q291bnQ6IDMsXG5cdFx0bGlrZUNvdW50OiAyLFxuXHRcdGxpa2U6ICdUJyxcblx0XHRwazogMCxcblx0fSxcblx0e1xuXHRcdHVzZXI6ICcnLCAvLyBwa+qwkuydhCDrk6Tqs6DsnojsnYTsp4AsIOydtOumhOydhCDrk6Tqs6Ag7J6I7J2E7KeAIOqzoOuvvOyeheuLiOuLpC5cblx0XHRzZWxsZXI6ICftlLzsubTshownLFxuXHRcdHByaWNlOiAn4oKpMzUsMDAwLDAwMCcsXG5cdFx0bmFtZTogJ+2UvOy5tOyGjOydmCDrqoXtmZQnLFxuXHRcdGxvY2F0aW9uOiAn7J247LC964+ZJyxcblx0XHRjYXRlZ29yeTogJ+uUlOyngO2EuOq4sOq4sCcsXG5cdFx0aW1nUGF0aDpcblx0XHRcdCdodHRwczovL2kucGljc3VtLnBob3Rvcy9pZC8xMDAwLzU2MjYvMzYzNS5qcGc/aG1hYz1xV2gwNjVGcl9NOE9hM3NOc2RETDhuZ1dYdjJKYi1FRTQ5WkluNmMwUC1nJyxcblx0XHR0aW1lOiAnM+u2hOyghCcsXG5cdFx0Y2hhdENvdW50OiAzLFxuXHRcdGxpa2VDb3VudDogMixcblx0XHRsaWtlOiAnRicsXG5cdFx0cGs6IDAsXG5cdH0sXG5cdHtcblx0XHR1c2VyOiAn7ZS87Lm07IaMJywgLy8gcGvqsJLsnYQg65Ok6rOg7J6I7J2E7KeALCDsnbTrpoTsnYQg65Ok6rOgIOyeiOydhOyngCDqs6Drr7zsnoXri4jri6QuXG5cdFx0c2VsbGVyOiAn7ZS87Lm07IaMJyxcblx0XHRwcmljZTogJ+KCqTM1LDAwMCwwMDAnLFxuXHRcdG5hbWU6ICftlLzsubTshozsnZgg66qF7ZmUJyxcblx0XHRsb2NhdGlvbjogJ+usuOuemOuPmScsXG5cdFx0Y2F0ZWdvcnk6ICfrlJTsp4DthLjquLDquLAnLFxuXHRcdGltZ1BhdGg6XG5cdFx0XHQnaHR0cHM6Ly9pLnBpY3N1bS5waG90b3MvaWQvMTAwMy8xMTgxLzE3NzIuanBnP2htYWM9b045ZkhNWGlxZTlacTJSTTZYVC1SVlprb2pnUG5FQ1d3eUVGMVJ2dlRaaycsXG5cdFx0dGltZTogJzPrtoTsoIQnLFxuXHRcdGNoYXRDb3VudDogMyxcblx0XHRsaWtlQ291bnQ6IDIsXG5cdFx0bGlrZTogJ1QnLFxuXHRcdHBrOiAwLFxuXHR9LFxuXHR7XG5cdFx0dXNlcjogJ+2UvOy5tOyGjCcsIC8vIHBr6rCS7J2EIOuTpOqzoOyeiOydhOyngCwg7J2066aE7J2EIOuTpOqzoCDsnojsnYTsp4Ag6rOg66+87J6F64uI64ukLlxuXHRcdHNlbGxlcjogJ+2UvOy5tOyGjCcsXG5cdFx0cHJpY2U6ICfigqkzNSwwMDAsMDAwJyxcblx0XHRuYW1lOiAn7ZS87Lm07IaM7J2YIOuqhe2ZlCcsXG5cdFx0bG9jYXRpb246ICfsnbjssL3rj5knLFxuXHRcdGNhdGVnb3J5OiAn6riw7YOAIOykkeqzoOusvO2SiCcsXG5cdFx0aW1nUGF0aDpcblx0XHRcdCdodHRwczovL2kucGljc3VtLnBob3Rvcy9pZC8xMDEvMjYyMS8xNzQ3LmpwZz9obWFjPWN1MTVZR290UzBnSVlkQmJSMWhlNU50QkxaQUFZNmFJWTVBYk9SUkFuZ3MnLFxuXHRcdHRpbWU6ICcz67aE7KCEJyxcblx0XHRjaGF0Q291bnQ6IDMsXG5cdFx0bGlrZUNvdW50OiAyLFxuXHRcdGxpa2U6ICdUJyxcblx0XHRwazogMCxcblx0fSxcblx0e1xuXHRcdHVzZXI6ICftlLzsubTshownLCAvLyBwa+qwkuydhCDrk6Tqs6DsnojsnYTsp4AsIOydtOumhOydhCDrk6Tqs6Ag7J6I7J2E7KeAIOqzoOuvvOyeheuLiOuLpC5cblx0XHRzZWxsZXI6ICftlLzsubTshownLFxuXHRcdHByaWNlOiAn4oKpMzUsMDAwLDAwMCcsXG5cdFx0bmFtZTogJ+2UvOy5tOyGjOydmCDrqoXtmZQnLFxuXHRcdGxvY2F0aW9uOiAn7J247LC964+ZJyxcblx0XHRjYXRlZ29yeTogJ+q4sO2DgCDspJHqs6DrrLztkognLFxuXHRcdGltZ1BhdGg6XG5cdFx0XHQnaHR0cHM6Ly9pLnBpY3N1bS5waG90b3MvaWQvMTAxNS82MDAwLzQwMDAuanBnP2htYWM9YUhqYjBmUmExdDE0RFRJRUJjb0MxMmM1ckFYT1N3blZsYUE1dWp4UFEwSScsXG5cdFx0dGltZTogJzPrtoTsoIQnLFxuXHRcdGNoYXRDb3VudDogMyxcblx0XHRsaWtlQ291bnQ6IDIsXG5cdFx0bGlrZTogJ0YnLFxuXHRcdHBrOiAwLFxuXHR9LFxuXTtcbiIsImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9iYXNlL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyJztcbmltcG9ydCBNYWluTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbWVudS1wYWdlL21haW4tbmF2aWdhdGlvbi1iYXIvbWFpbi1uYXZpZ2F0aW9uLWJhcic7XG5pbXBvcnQgUHJvZHVjdExpc3RzIGZyb20gJy4uL2NvbXBvbmVudHMvYmFzZS9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmpzJztcbmltcG9ydCBDaGF0TGlzdHMgZnJvbSAnLi4vY29tcG9uZW50cy9iYXNlL2NoYXQtbGlzdC9jaGF0LWxpc3QnO1xuaW1wb3J0IHsgY3JlYXRlRE9NV2l0aFNlbGVjdG9yIH0gZnJvbSAnLi4vdXRpbC9jcmVhdGVET01XaXRoU2VsZWN0b3InO1xuaW1wb3J0ICcuL21lbnUtcGFnZS5jc3MnO1xuLy8gaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vYXBpL2FwaSc7XG4vLyBpbXBvcnQgeyBuYXZpZ2F0ZVRvIH0gZnJvbSAnLi4vcm91dGVyJztcblxuY29uc3QgbW9kZSA9ICfrqZTribQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudVBhZ2Uge1xuXHRzdGF0ZSA9IHtcblx0XHRwcm9kdWN0czogc2FtcGxlRGF0YSxcblx0XHRuYXZpZ2F0b3JJbmRleDogJzEnLFxuXHRcdGNoYXRzOiBzYW1wbGVDaGF0RGF0YSxcblx0fTtcblx0LypcbiAgICAgICAgc3RhdGUubmF2aWdhdG9ySW5kZXhcbiAgICAgICAgMSA6IO2MkOunpOuqqeuhnVxuICAgICAgICAyIDog7LGE7YyFXG4gICAgICAgIDMgOiDqtIDsi6zrqqnroZ1cbiAgICAqL1xuXHRjb25zdHJ1Y3RvcigkcGFyZW50KSB7XG5cdFx0Ly8gY29uc29sZS5sb2cobG9jYXRpb24ucGF0aG5hbWUpO1xuXHRcdHRoaXMuJHBhcmVudCA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignZGl2JywgJy5tZW51V3JhcHBlcicpO1xuXHRcdCRwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy4kcGFyZW50KTtcblxuXHRcdHRoaXMuc3RhdGUucHJvZHVjdHMgPSBzYW1wbGVEYXRhLmZpbHRlcihcblx0XHRcdCh2YWx1ZSkgPT4gdmFsdWUudXNlciA9PT0gdmFsdWUuc2VsbGVyXG5cdFx0KTtcblxuXHRcdHRoaXMubmF2YmFyID0gbmV3IE5hdmJhcih7XG5cdFx0XHQkcGFyZW50OiB0aGlzLiRwYXJlbnQsXG5cdFx0XHRpbml0aWFsU3RhdGU6IG1vZGUsXG5cdFx0XHRvbkNsaWNrOiAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnbmF2X19wcmV2Jykge1xuXHRcdFx0XHRcdHRoaXMuJHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdHRoaXMubWFpbk5hdmJhciA9IG5ldyBNYWluTmF2YmFyKHtcblx0XHRcdCRwYXJlbnQ6IHRoaXMuJHBhcmVudCxcblx0XHRcdGluaXRpYWxTdGF0ZTogdGhpcy5zdGF0ZS5uYXZpZ2F0b3JJbmRleCxcblx0XHRcdG9uQ2xpY2s6IChpZHgpID0+IHtcblx0XHRcdFx0dGhpcy5iaW5kTWFpbk5hdmJhckV2ZW50KGlkeCk7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5wcm9kdWN0TGlzdHMgPSBuZXcgUHJvZHVjdExpc3RzKHtcblx0XHRcdCRwYXJlbnQ6IHRoaXMuJHBhcmVudCxcblx0XHRcdGluaXRpYWxTdGF0ZTogdGhpcy5zdGF0ZS5wcm9kdWN0cyxcblx0XHR9KTtcblxuXHRcdHRoaXMuY2hhdExpc3RzID0gbmV3IENoYXRMaXN0cyh7XG5cdFx0XHQkcGFyZW50OiB0aGlzLiRwYXJlbnQsXG5cdFx0XHRpbml0aWFsU3RhdGU6IHRoaXMuc3RhdGUuY2hhdHMsXG5cdFx0fSk7XG5cdFx0dGhpcy5jaGF0TGlzdHMuY2xvc2UoKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy4kcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHRcdH0sIDApO1xuXHRcdC8vIHRoaXMuaW5pdGlhbGxpemVEYXRhKCk7XG5cdH1cblxuXHQvLyBpbml0aWFsbGl6ZURhdGEoKSB7XG5cdC8qXG5cdFx0XHRhcGkg7Zi47LacICjsnpDsi6DsnZgg7YyQ66ek66qp66GdKVxuXHRcdCovXG5cblx0Ly8gXHRhcGkuZ2V0KCcvJylcblx0Ly8gXHRcdC50aGVuKChyZXMpID0+IHtcblx0Ly8gXHRcdFx0dGhpcy5zdGF0ZS5wcm9kdWN0cyA9IHJlcy5kYXRhLnByb2R1Y3RzO1xuXHQvLyBcdFx0XHR0aGlzLnNldFN0YXRlKCk7XG5cdC8vIFx0XHR9KVxuXHQvLyBcdFx0LmNhdGNoKCgpID0+IHtcblx0Ly8gXHRcdFx0bmF2aWdhdGVUbygnL25vdGxvZ2luJyk7XG5cdC8vIFx0XHR9KTtcblx0Ly8gfVxuXG5cdHNldFN0YXRlKCkge1xuXHRcdC8v66as66CM642U66eB7YyM7Yq4XG5cdFx0dGhpcy5tYWluTmF2YmFyLnNldFN0YXRlKHRoaXMuc3RhdGUubmF2aWdhdG9ySW5kZXgpO1xuXHRcdGlmICh0aGlzLnN0YXRlLm5hdmlnYXRvckluZGV4ID09PSAnMicpIHtcblx0XHRcdHRoaXMucHJvZHVjdExpc3RzLmNsb3NlKCk7XG5cdFx0XHR0aGlzLmNoYXRMaXN0cy5zZXRTdGF0ZSh0aGlzLnN0YXRlLmNoYXRzKTtcblx0XHRcdHRoaXMuY2hhdExpc3RzLm9wZW4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jaGF0TGlzdHMuY2xvc2UoKTtcblx0XHRcdHRoaXMucHJvZHVjdExpc3RzLnNldFN0YXRlKHRoaXMuc3RhdGUucHJvZHVjdHMpO1xuXHRcdFx0dGhpcy5wcm9kdWN0TGlzdHMub3BlbigpO1xuXHRcdH1cblx0fVxuXG5cdC8vIGJpbmRNYWluTmF2YmFyRXZlbnQgOiDtmITsnqwgbmF2IGlkeOyZgCDri6TrpbTri6TrqbQg7LKY66asXG5cdGJpbmRNYWluTmF2YmFyRXZlbnQoaWR4KSB7XG5cdFx0aWYgKGlkeCA9PT0gJzEnICYmIHRoaXMuc3RhdGUubmF2aWdhdG9ySW5kZXggIT09IGlkeCkge1xuXHRcdFx0dGhpcy5zdGF0ZS5uYXZpZ2F0b3JJbmRleCA9ICcxJztcblx0XHRcdC8qXG5cdFx0XHRcdGFwaSDtmLjstpwgKOyekOyLoOydmCDtjJDrp6TrqqnroZ0pXG5cdFx0XHQqL1xuXHRcdFx0Ly8gYXBpLmdldCgnLycpXG5cdFx0XHQvLyBcdC50aGVuKChyZXMpID0+IHtcblx0XHRcdHRoaXMuc3RhdGUucHJvZHVjdHMgPSBzYW1wbGVEYXRhLmZpbHRlcihcblx0XHRcdFx0KHZhbHVlKSA9PiB2YWx1ZS51c2VyID09PSB2YWx1ZS5zZWxsZXJcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuc2V0U3RhdGUoKTtcblx0XHRcdC8vIH0pXG5cdFx0XHQvLyAuY2F0Y2goKCkgPT4ge1xuXHRcdFx0Ly8gXHRuYXZpZ2F0ZVRvKCcvbm90bG9naW4nKTtcblx0XHRcdC8vIH0pO1xuXHRcdH0gZWxzZSBpZiAoaWR4ID09PSAnMicgJiYgdGhpcy5zdGF0ZS5uYXZpZ2F0b3JJbmRleCAhPT0gaWR4KSB7XG5cdFx0XHR0aGlzLnN0YXRlLm5hdmlnYXRvckluZGV4ID0gJzInO1xuXG5cdFx0XHR0aGlzLnNldFN0YXRlKCk7XG5cdFx0fSBlbHNlIGlmIChpZHggPT09ICczJyAmJiB0aGlzLnN0YXRlLm5hdmlnYXRvckluZGV4ICE9PSBpZHgpIHtcblx0XHRcdHRoaXMuc3RhdGUubmF2aWdhdG9ySW5kZXggPSAnMyc7XG5cdFx0XHQvKlxuXHRcdFx0XHRhcGkg7Zi47LacICjsnpDsi6DsnZgg6rSA7Ius66qp66GdKVxuXHRcdFx0Ki9cblx0XHRcdC8vIGFwaS5nZXQoJy8nKVxuXHRcdFx0Ly8gXHQudGhlbigocmVzKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBzYW1wbGVEYXRhLmZpbHRlcihcblx0XHRcdFx0KHZhbHVlKSA9PiB2YWx1ZS51c2VyICE9PSB2YWx1ZS5zZWxsZXJcblx0XHRcdCk7XG5cdFx0XHR0aGlzLnN0YXRlLnByb2R1Y3RzID0gcmVzdWx0O1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSgpO1xuXHRcdH1cblx0fVxufVxuXG5jb25zdCBzYW1wbGVEYXRhID0gW1xuXHR7XG5cdFx0aW1nUGF0aDpcblx0XHRcdCdodHRwczovL2RlYWwtNi5zMy5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tL3N0b3JlSW1hZ2VzL2ltZ3MvcGhvdG8uanBlZycsXG5cdFx0bmFtZTogJ+usuOyngO2YuCcsXG5cdFx0bG9jYXRpb246ICfsnbjssL3rj5knLFxuXHRcdHRpbWU6ICcy7Iuc6rCEIOyghCcsXG5cdFx0cHJpY2U6ICcxMOyWtScsXG5cdFx0bGlrZTogJ1QnLFxuXHRcdGNoYXRDb3VudDogNSxcblx0XHRsaWtlQ291bnQ6IDMsXG5cdFx0dXNlcjogJ+usuOyngO2YuCcsXG5cdFx0c2VsbGVyOiAn66y47KeA7Zi4Jyxcblx0fSxcblx0e1xuXHRcdGltZ1BhdGg6XG5cdFx0XHQnaHR0cHM6Ly9kZWFsLTYuczMuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbS9zdG9yZUltYWdlcy9pbWdzL3Bob3RvLmpwZWcnLFxuXHRcdG5hbWU6ICfrrLjsp4DtmLgnLFxuXHRcdGxvY2F0aW9uOiAn7J247LC964+ZJyxcblx0XHR0aW1lOiAnMuyLnOqwhCDsoIQnLFxuXHRcdHByaWNlOiAnMTDslrUnLFxuXHRcdGxpa2U6ICdGJyxcblx0XHRjaGF0Q291bnQ6IDUsXG5cdFx0bGlrZUNvdW50OiAwLFxuXHRcdHVzZXI6ICfrrLjsp4DtmLgnLFxuXHRcdHNlbGxlcjogJ+usuOyngO2YuCcsXG5cdH0sXG5cdHtcblx0XHRpbWdQYXRoOlxuXHRcdFx0J2h0dHBzOi8vZGVhbC02LnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vc3RvcmVJbWFnZXMvaW1ncy9waG90by5qcGVnJyxcblx0XHRuYW1lOiAn66y47KeA7Zi4Jyxcblx0XHRsb2NhdGlvbjogJ+yduOywveuPmScsXG5cdFx0dGltZTogJzLsi5zqsIQg7KCEJyxcblx0XHRwcmljZTogJzEw7Ja1Jyxcblx0XHRsaWtlOiAnRicsXG5cdFx0Y2hhdENvdW50OiA1LFxuXHRcdGxpa2VDb3VudDogMyxcblx0XHR1c2VyOiAn66y4Jyxcblx0XHRzZWxsZXI6ICfrrLjsp4DtmLgnLFxuXHR9LFxuXHR7XG5cdFx0aW1nUGF0aDpcblx0XHRcdCdodHRwczovL2RlYWwtNi5zMy5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tL3N0b3JlSW1hZ2VzL2ltZ3MvcGhvdG8uanBlZycsXG5cdFx0bmFtZTogJ+usuOyngO2YuCcsXG5cdFx0bG9jYXRpb246ICfsnbjssL3rj5knLFxuXHRcdHRpbWU6ICcy7Iuc6rCEIOyghCcsXG5cdFx0cHJpY2U6ICcxMOyWtScsXG5cdFx0bGlrZTogJ0YnLFxuXHRcdGNoYXRDb3VudDogNSxcblx0XHRsaWtlQ291bnQ6IDMsXG5cdFx0dXNlcjogJ+usuO2YuCcsXG5cdFx0c2VsbGVyOiAn66y47KeA7Zi4Jyxcblx0fSxcblx0e1xuXHRcdGltZ1BhdGg6XG5cdFx0XHQnaHR0cHM6Ly9kZWFsLTYuczMuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbS9zdG9yZUltYWdlcy9pbWdzL3Bob3RvLmpwZWcnLFxuXHRcdG5hbWU6ICfrrLjsp4DtmLgnLFxuXHRcdGxvY2F0aW9uOiAn7J247LC964+ZJyxcblx0XHR0aW1lOiAnMuyLnOqwhCDsoIQnLFxuXHRcdHByaWNlOiAnMTDslrUnLFxuXHRcdGxpa2U6ICdGJyxcblx0XHRjaGF0Q291bnQ6IDUsXG5cdFx0bGlrZUNvdW50OiAzLFxuXHRcdHVzZXI6ICfrrLjsp4DtmLgnLFxuXHRcdHNlbGxlcjogJ+usuOyngO2YuCcsXG5cdH0sXG5dO1xuXG5jb25zdCBzYW1wbGVDaGF0RGF0YSA9IFtcblx0e1xuXHRcdGltZ1BhdGg6XG5cdFx0XHQnaHR0cHM6Ly9kZWFsLTYuczMuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbS9zdG9yZUltYWdlcy9pbWdzLyVFMSU4NCU4MyVFMSU4NSVBMSVFMSU4NCU4QiVFMSU4NSVBRSVFMSU4NiVBQiVFMSU4NCU4NSVFMSU4NSVBOSVFMSU4NCU4MyVFMSU4NSVCMy5qcGVnJyxcblx0XHRuYW1lOiAn7KOE7Iah7ZWo64+gLi4nLFxuXHRcdGNvbnRlbnQ6ICfsnLzslYUuLi4nLFxuXHRcdHRpbWU6ICcy7Iuc6rCEIOyghCcsXG5cdFx0Y291bnQ6IDUsXG5cdH0sXG5cdHtcblx0XHRpbWdQYXRoOlxuXHRcdFx0J2h0dHBzOi8vZGVhbC02LnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vc3RvcmVJbWFnZXMvaW1ncy8lRTElODQlODMlRTElODUlQTElRTElODQlOEIlRTElODUlQUUlRTElODYlQUIlRTElODQlODUlRTElODUlQTklRTElODQlODMlRTElODUlQjMuanBlZycsXG5cdFx0bmFtZTogJ+yjhOyGoe2VqOuPoC4uJyxcblx0XHRjb250ZW50OiAn7Iuc6rCE7J20IOu2gOyhse2VmOyXrCcsXG5cdFx0dGltZTogJzHsi5zqsIQg7KCEJyxcblx0XHRjb3VudDogMCxcblx0fSxcblx0e1xuXHRcdGltZ1BhdGg6XG5cdFx0XHQnaHR0cHM6Ly9kZWFsLTYuczMuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbS9zdG9yZUltYWdlcy9pbWdzLyVFMSU4NCU4MyVFMSU4NSVBMSVFMSU4NCU4QiVFMSU4NSVBRSVFMSU4NiVBQiVFMSU4NCU4NSVFMSU4NSVBOSVFMSU4NCU4MyVFMSU4NSVCMy5qcGVnJyxcblx0XHRuYW1lOiAn7KOE7Iah7ZWo64+gLi4nLFxuXHRcdGNvbnRlbnQ6ICfqtaztmIQg66q77ZaI7Iq164uI64ukJyxcblx0XHR0aW1lOiAnNeyLnOqwhCDsoIQnLFxuXHRcdGNvdW50OiA3LFxuXHR9LFxuXHR7XG5cdFx0aW1nUGF0aDpcblx0XHRcdCdodHRwczovL2RlYWwtNi5zMy5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tL3N0b3JlSW1hZ2VzL2ltZ3MvJUUxJTg0JTgzJUUxJTg1JUExJUUxJTg0JThCJUUxJTg1JUFFJUUxJTg2JUFCJUUxJTg0JTg1JUUxJTg1JUE5JUUxJTg0JTgzJUUxJTg1JUIzLmpwZWcnLFxuXHRcdG5hbWU6ICfso4TshqHtlajrj6AuLicsXG5cdFx0Y29udGVudDogJ+2VmO2VmO2VmC4uLicsXG5cdFx0dGltZTogJzHsi5zqsIQg7KCEJyxcblx0XHRjb3VudDogMyxcblx0fSxcblx0e1xuXHRcdGltZ1BhdGg6XG5cdFx0XHQnaHR0cHM6Ly9kZWFsLTYuczMuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbS9zdG9yZUltYWdlcy9pbWdzLyVFMSU4NCU4MyVFMSU4NSVBMSVFMSU4NCU4QiVFMSU4NSVBRSVFMSU4NiVBQiVFMSU4NCU4NSVFMSU4NSVBOSVFMSU4NCU4MyVFMSU4NSVCMy5qcGVnJyxcblx0XHRuYW1lOiAn7KOE7Iah7ZWo64+gLi4nLFxuXHRcdGNvbnRlbnQ6ICdJIGFtIFNvcnJ5Jyxcblx0XHR0aW1lOiAnMuyLnOqwhCDsoIQnLFxuXHRcdGNvdW50OiA1LFxuXHR9LFxuXHR7XG5cdFx0aW1nUGF0aDpcblx0XHRcdCdodHRwczovL2RlYWwtNi5zMy5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tL3N0b3JlSW1hZ2VzL2ltZ3MvJUUxJTg0JTgzJUUxJTg1JUExJUUxJTg0JThCJUUxJTg1JUFFJUUxJTg2JUFCJUUxJTg0JTg1JUUxJTg1JUE5JUUxJTg0JTgzJUUxJTg1JUIzLmpwZWcnLFxuXHRcdG5hbWU6ICfso4TshqHtlajrj6AuLicsXG5cdFx0Y29udGVudDogJ+OFoF9f44WgJyxcblx0XHR0aW1lOiAnMTDsi5zqsIQg7KCEJyxcblx0XHRjb3VudDogMCxcblx0fSxcbl07XG4iLCJpbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tICcuLi9jb21wb25lbnRzL2Jhc2UvbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vY29tcG9uZW50cy9zaWdudXAtcGFnZS9ib2R5L2JvZHknO1xuXG5jb25zdCBtb2RlID0gJ+2ajOybkOqwgOyehSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25VcFBhZ2Uge1xuXHRjb25zdHJ1Y3RvcigkcGFyZW50KSB7XG5cdFx0dGhpcy5uYXZiYXIgPSBuZXcgTmF2aWdhdGlvbkJhcih7XG5cdFx0XHQkcGFyZW50LFxuXHRcdFx0aW5pdGlhbFN0YXRlOiBtb2RlLFxuXHRcdH0pO1xuXHRcdHRoaXMuYm9keSA9IG5ldyBCb2R5KHsgJHBhcmVudCB9KTtcblx0fVxufVxuIiwiaW1wb3J0IEFwcEJhciBmcm9tICcuLi9jb21wb25lbnRzL2Jhc2UvbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXInO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy91c2VyLXBhZ2Uvc2VjdGlvbi9zZWN0aW9uJztcbmltcG9ydCB7IGNyZWF0ZURPTVdpdGhTZWxlY3RvciB9IGZyb20gJy4uL3V0aWwvY3JlYXRlRE9NV2l0aFNlbGVjdG9yJztcbmltcG9ydCAnLi91c2VyLXBhZ2UuY3NzJztcbmltcG9ydCB7IG5hdmlnYXRlVG8gfSBmcm9tICcuLi9yb3V0ZXInO1xuLy8gaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vYXBpL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJQYWdlIHtcblx0c3RhdGUgPSB7XG5cdFx0bW9kZTogJ+uhnOq3uOyduCcsXG5cdFx0dXNlcjogJycsXG5cdH07XG5cblx0Ly8g7Jik7KeBIGlk66eMIOuwm+yVhOyYpOuptCDrkJzri6QhXG5cdGNvbnN0cnVjdG9yKCRwYXJlbnQpIHtcblx0XHR0aGlzLiRwYXJlbnQgPSBjcmVhdGVET01XaXRoU2VsZWN0b3IoJ2RpdicsICcudXNlcldyYXBwZXInKTtcblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJHBhcmVudCk7XG5cblx0XHR0aGlzLiRhcHBCYXIgPSBuZXcgQXBwQmFyKHtcblx0XHRcdCRwYXJlbnQ6IHRoaXMuJHBhcmVudCxcblx0XHRcdGluaXRpYWxTdGF0ZTogdGhpcy5zdGF0ZS5tb2RlLFxuXHRcdFx0b25DbGljazogKGUpID0+IHtcblx0XHRcdFx0aWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ25hdl9fcHJldicpIHtcblx0XHRcdFx0XHR0aGlzLiRwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHR0aGlzLiRzZWN0aW9uID0gbmV3IFNlY3Rpb24oe1xuXHRcdFx0JHBhcmVudDogdGhpcy4kcGFyZW50LFxuXHRcdFx0aW5pdGlhbFN0YXRlOiB0aGlzLnN0YXRlLnVzZXIsXG5cdFx0XHRvbkNsaWNrOiAoZSwgaW5wdXRWYWx1ZSkgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy5pc1VzZXJMb2dpbigpKSB7XG5cdFx0XHRcdFx0Ly8gYXBpLnBvc3QoJy91c2VyL2xvZ291dCcpXG5cdFx0XHRcdFx0Ly8gXHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0bmF2aWdhdGVUbygnLycpO1xuXHRcdFx0XHRcdC8vIH0pXG5cdFx0XHRcdFx0Ly8gLmNhdGNoKChlKSA9PiB7XG5cdFx0XHRcdFx0Ly8gXHRhbGVydChlLm1lc3NhZ2UpO1xuXHRcdFx0XHRcdC8vIH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRpZiAoaW5wdXRWYWx1ZS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRcdHRoaXMuJHNlY3Rpb24uJGFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuJHNlY3Rpb24uJGFsZXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0fSwgMjAwMCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIGFwaS5wb3N0KCcvdXNlci9zaWduLWluJywgeyBpZDogaW5wdXRWYWx1ZSB9KVxuXHRcdFx0XHRcdFx0Ly8gXHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRuYXZpZ2F0ZVRvKCcvJyk7XG5cdFx0XHRcdFx0XHQvLyB9KVxuXHRcdFx0XHRcdFx0Ly8gLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuJHBhcmVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHR9LCAwKTtcblxuXHRcdC8vIHRoaXMuaW5pdGlhbGxpemVEYXRhKCk7XG5cdH1cblxuXHQvLyBpbml0aWFsbGl6ZURhdGEoKSB7XG5cdC8vIFx0YXBpLmdldCgnL3VzZXIvbWUnKVxuXHQvLyBcdFx0LnRoZW4oKHJlcykgPT4ge1xuXHQvLyBcdFx0XHR0aGlzLnN0YXRlLnVzZXIgPSByZXMuZGF0YS5pZDtcblx0Ly8gXHRcdFx0dGhpcy5zdGF0ZS5tb2RlID0gJ+uCtCDqs4TsoJUnO1xuXHQvLyBcdFx0XHR0aGlzLnNldFN0YXRlKCk7XG5cdC8vIFx0XHR9KVxuXHQvLyBcdFx0LmNhdGNoKCgpID0+IHt9KTtcblx0Ly8gfVxuXG5cdHNldFN0YXRlKCkge1xuXHRcdHRoaXMuJGFwcEJhci5zZXRTdGF0ZSh0aGlzLnN0YXRlLm1vZGUpO1xuXHRcdHRoaXMuJHNlY3Rpb24uc2V0U3RhdGUodGhpcy5zdGF0ZS51c2VyKTtcblx0fVxuXG5cdGlzVXNlckxvZ2luKCkge1xuXHRcdC8qIOycoOyggOqwgCDroZzqt7jsnbgg65CY7Ja0IOyeiOuLpOuptCwgdHJ1ZSDrsJjtmZgg7JWE64uI66m0IGZhbHNlICovXG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUubGVuZ3RoID4gMDtcblx0fVxufVxuIiwiaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi4vY29tcG9uZW50cy9iYXNlL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyJztcbmltcG9ydCBCb2R5IGZyb20gJy4uL2NvbXBvbmVudHMvd3JpdGluZy1wYWdlL2JvZHkvYm9keSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvd3JpdGluZy1wYWdlL2Zvb3Rlci9mb290ZXInO1xuaW1wb3J0IHsgbmF2aWdhdGVUbyB9IGZyb20gJy4uL3JvdXRlcic7XG4vLyBpbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9hcGkvYXBpJztcblxuY29uc3QgbW9kZSA9ICfquIDsk7DquLAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXcml0aW5nUGFnZSB7XG5cdHN0YXRlID0ge1xuXHRcdHVzZXI6ICcnLCAvLyBwa+qwkuydhCDrk6Tqs6DsnojsnYTsp4AsIOydtOumhOydhCDrk6Tqs6Ag7J6I7J2E7KeAIOqzoOuvvOyeheuLiOuLpC5cblx0XHRzZWxsZXI6ICcnLFxuXHRcdHByaWNlOiAnJyxcblx0XHR0aXRsZTogJycsXG5cdFx0Y29udGVudDogJycsXG5cdFx0c3RhdHVzOiAwLFxuXHRcdGxvY2F0aW9uOiAn7J247LC964+ZJywgLy8g6riw67O47KCB7Jy866GcIOycoOyggOydmCDrqZTsnbjrj5nrhKTrpbwg6rCW6rOgIOyeiOyWtOyVvO2VnOuLpC5cblx0XHRjYXRlZ29yeTogJycsXG5cdFx0aW1nUGF0aDogW10sXG5cdFx0Y3JlYXRlZEF0OiAnJyxcblx0XHRjaGF0Q291bnQ6IDAsXG5cdFx0d2lzaENvdW50OiAwLFxuXHRcdHZpc2l0Q291bnQ6IDAsXG5cdFx0aGF2ZUFsbFZhbHVlOiBmYWxzZSxcblx0fTtcblxuXHQvLyBoYXZlQWxsVmFsdWUgOiDrqqjrk6Ag6rCS7J20IOyeiOyWtOyVvCBOYXZiYXIgZG9uZUljb24g7Zmc7ISx7ZmUIOqwgOuKpSFcblx0Y29uc3RydWN0b3IoJHBhcmVudCkge1xuXHRcdHRoaXMuaGF2ZUhpc3RvcnlTdGF0ZSgpO1xuXG5cdFx0dGhpcy5uYXZpZ2F0aW9uQmFyID0gbmV3IE5hdmlnYXRpb25CYXIoe1xuXHRcdFx0JHBhcmVudCxcblx0XHRcdGluaXRpYWxTdGF0ZTogW21vZGUsIHRoaXMuc3RhdGUuaGF2ZUFsbFZhbHVlXSxcblx0XHRcdG9uQ2xpY2s6ICgpID0+IHtcblx0XHRcdFx0aWYgKGhpc3Rvcnkuc3RhdGUpIHtcblx0XHRcdFx0XHQvLyBhcGkudXBkYXRlKCcvJywgdGhpcy5zdGF0ZSlcblx0XHRcdFx0XHQvLyBcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRuYXZpZ2F0ZVRvKCcvZGV0YWlsJywgdGhpcy5zdGF0ZSk7XG5cdFx0XHRcdFx0Ly8gfSlcblx0XHRcdFx0XHQvLyAuY2F0Y2goKGUpID0+IHtcblx0XHRcdFx0XHQvLyBcdGFsZXJ0KGUubWVzc2FnZSk7XG5cdFx0XHRcdFx0Ly8gfSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gYXBpLnBvc3QoJy8nLCB0aGlzLnN0YXRlKVxuXHRcdFx0XHRcdC8vIFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdG5hdmlnYXRlVG8oJy9kZXRhaWwnLCB0aGlzLnN0YXRlKTtcblx0XHRcdFx0XHQvLyB9KVxuXHRcdFx0XHRcdC8vIC5jYXRjaCgoZSkgPT4ge1xuXHRcdFx0XHRcdC8vIFx0YWxlcnQoZS5tZXNzYWdlKTtcblx0XHRcdFx0XHQvLyB9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBzdGF0ZeyXkCB1c2VyaWQg7LaU6rCA7ZWY6rOgICjstpTqsIDslYjtlbTrj4Qg7J247J6Q66GcIOuwm+yVhOyEnCDqtJzssK7snYTrk68pIGhhdmVBbGxWYWx1ZeulvCDrubzrqbQg65Cg65OvIVxuXHRcdFx0XHQvLyDqsozsi5zrrLwgcG9zdCDsmpTssq0gKHRoaXMuc3RhdGUpXG5cdFx0XHRcdC8vIG5hdmlnYXRlVG8oJy9kZXRhaWwnLHRoaXMuc3RhdGUpIFBLIOy2lOqwgO2VtOyVvO2VoOuTryFcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0dGhpcy5ib2R5ID0gbmV3IEJvZHkoe1xuXHRcdFx0JHBhcmVudCxcblx0XHRcdGluaXRpYWxTdGF0ZTogdGhpcy5zdGF0ZSxcblx0XHRcdHJlZnJlc2hTdGF0ZTogKG5leHRTdGF0ZSkgPT4ge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XG5cdFx0XHR9LCAvLyDrtoDrqqjsnZggU3RhdGUg7JeF642w7J207Yq4XG5cdFx0fSk7XG5cdFx0dGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKHtcblx0XHRcdCRwYXJlbnQsXG5cdFx0XHRpbml0aWFsU3RhdGU6IHRoaXMuc3RhdGUubG9jYXRpb24sXG5cdFx0fSk7XG5cblx0XHQvLyBoaXN0b3J5LnN0YXRlID8gJycgOiB0aGlzLmluaXRpYWxsaXplRGF0YSgpO1xuXHR9XG5cblx0Ly8gaW5pdGlhbGxpemVEYXRhKCkge1xuXHQvLyDrqZTsnbjrj5nrhKQgKyDsnKDsoIDrhKTsnoQgLyArIOyFgOufrOuEpOyehChzYW1lKVxuXG5cdC8vIFx0YXBpLmdldCgnLycpXG5cdC8vIFx0XHQudGhlbigocmVzKSA9PiB7XG5cdC8vIFx0XHRcdHRoaXMuc3RhdGUubG9jYXRpb24gPSByZXMuZGF0YS5NYWluTG9jYXRpb247XG5cdC8vIFx0XHRcdHRoaXMuc3RhdGUudXNlciA9IHJlcy5kYXRhLmlkO1xuXHQvLyBcdFx0XHR0aGlzLnN0YXRlLnNlbGxlciA9IHJlcy5kYXRhLmlkO1xuXHQvLyBcdFx0XHR0aGlzLnNldFN0YXRlKCk7XG5cdC8vIFx0XHR9KVxuXHQvLyBcdFx0LmNhdGNoKCgpID0+IHtcblx0Ly8gXHRcdFx0bmF2aWdhdGVUbygnL25vdGxvZ2luJyk7XG5cdC8vIFx0XHR9KTtcblx0Ly8gfVxuXG5cdHNldFN0YXRlKG5leHRTdGF0ZSkge1xuXHRcdHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG5cdFx0dGhpcy5uYXZpZ2F0aW9uQmFyLnNldFN0YXRlKHRoaXMuc3RhdGUuaGF2ZUFsbFZhbHVlKTtcblx0XHR0aGlzLmJvZHkuc2V0U3RhdGUobmV4dFN0YXRlKTtcblx0fVxuXG5cdGhhdmVIaXN0b3J5U3RhdGUoKSB7XG5cdFx0aWYgKGhpc3Rvcnkuc3RhdGUpIHtcblx0XHRcdGxldCB0ZW1wU3RhdGUgPSBoaXN0b3J5LnN0YXRlO1xuXHRcdFx0dGVtcFN0YXRlLmhhdmVBbGxWYWx1ZSA9IHRydWU7XG5cdFx0XHR0aGlzLnN0YXRlID0gdGVtcFN0YXRlO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vcGFnZXMvbWFpbi1wYWdlJztcbmltcG9ydCBEZXRhaWxQYWdlIGZyb20gJy4vcGFnZXMvZGV0YWlsLXBhZ2UnO1xuaW1wb3J0IFNpZ25VcFBhZ2UgZnJvbSAnLi9wYWdlcy9zaWdudXAtcGFnZSc7XG5pbXBvcnQgTG9jYXRpb25QYWdlIGZyb20gJy4vcGFnZXMvbG9jYXRpb24tcGFnZSc7XG5pbXBvcnQgTWVudVBhZ2UgZnJvbSAnLi9wYWdlcy9tZW51LXBhZ2UnO1xuaW1wb3J0IFVzZXJQYWdlIGZyb20gJy4vcGFnZXMvdXNlci1wYWdlJztcbmltcG9ydCBXcml0aW5nUGFnZSBmcm9tICcuL3BhZ2VzL3dyaXRpbmctcGFnZSc7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9wYWdlcy9Ob3RGb3VuZCc7XG5pbXBvcnQgTm90TG9naW4gZnJvbSAnLi9wYWdlcy9Ob3RMb2dpbic7XG5pbXBvcnQgQ2hhdFBhZ2UgZnJvbSAnLi9wYWdlcy9jaGF0LXBhZ2UnO1xuY29uc3QgcGF0aFRvUmVnZXggPSAocGF0aCkgPT5cblx0bmV3IFJlZ0V4cCgnXicgKyBwYXRoLnJlcGxhY2UoL1xcLy9nLCAnXFxcXC8nKS5yZXBsYWNlKC86XFx3Ky9nLCAnKC4rKScpICsgJyQnKTtcblxuY29uc3QgbmF2aWdhdGVUbyA9ICh1cmwsIHByb3BzID0gbnVsbCkgPT4ge1xuXHRoaXN0b3J5LnB1c2hTdGF0ZShwcm9wcywgbnVsbCwgdXJsKTsgLy8gcHJvcHPripQgcG9wc3RhdGXsi5wg7J6Q7Jew7Iqk65+96rKMIOu5hOybjOynhOuLpCFcblx0cm91dGVyKCk7XG59O1xuXG5jb25zdCByb3V0ZXIgPSAoKSA9PiB7XG5cdGNvbnN0IHJvdXRlcyA9IFtcblx0XHR7IHBhdGg6ICcvJywgdmlldzogTWFpblBhZ2UgfSxcblx0XHR7IHBhdGg6ICcvZGV0YWlsJywgdmlldzogRGV0YWlsUGFnZSB9LFxuXHRcdHsgcGF0aDogJy9kZXRhaWwvOmlkJywgdmlldzogRGV0YWlsUGFnZSB9LFxuXHRcdHsgcGF0aDogJy9zaWdudXAnLCB2aWV3OiBTaWduVXBQYWdlIH0sXG5cdFx0eyBwYXRoOiAnL2xvY2F0aW9uJywgdmlldzogTG9jYXRpb25QYWdlIH0sXG5cdFx0eyBwYXRoOiAnL21lbnUnLCB2aWV3OiBNZW51UGFnZSB9LFxuXHRcdHsgcGF0aDogJy91c2VyJywgdmlldzogVXNlclBhZ2UgfSxcblx0XHR7IHBhdGg6ICcvY2hhdCcsIHZpZXc6IENoYXRQYWdlIH0sXG5cdFx0eyBwYXRoOiAnL3dyaXRpbmcnLCB2aWV3OiBXcml0aW5nUGFnZSB9LFxuXHRcdHsgcGF0aDogJy9ub3Rsb2dpbicsIHZpZXc6IE5vdExvZ2luIH0sXG5cdFx0eyBwYXRoOiAnLzpub3Rmb3VuZCcsIHZpZXc6IE5vdEZvdW5kIH0sXG5cdF07XG5cblx0Ly8gVGVzdCBlYWNoIHJvdXRlIGZvciBwb3RlbnRpYWwgbWF0Y2hcblx0Y29uc3QgcG90ZW50aWFsTWF0Y2hlcyA9IHJvdXRlcy5tYXAoKHJvdXRlKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHJvdXRlOiByb3V0ZSxcblx0XHRcdHJlc3VsdDogbG9jYXRpb24ucGF0aG5hbWUubWF0Y2gocGF0aFRvUmVnZXgocm91dGUucGF0aCkpLFxuXHRcdH07XG5cdH0pO1xuXG5cdC8vIGNvbnNvbGUubG9nKCdsJyxsb2NhdGlvbi5wYXRobmFtZSlcblx0Ly8gY29uc29sZS5sb2coJ3AnLHBvdGVudGlhbE1hdGNoZXMpXG5cblx0bGV0IG1hdGNoID0gcG90ZW50aWFsTWF0Y2hlcy5maW5kKFxuXHRcdChwb3RlbnRpYWxNYXRjaCkgPT4gcG90ZW50aWFsTWF0Y2gucmVzdWx0ICE9PSBudWxsXG5cdCk7XG5cdC8vIGNvbnNvbGUubG9nKCdtJyxtYXRjaClcblxuXHRpZiAoIW1hdGNoKSB7XG5cdFx0bWF0Y2ggPSB7XG5cdFx0XHRyb3V0ZTogcm91dGVzWzBdLFxuXHRcdFx0cmVzdWx0OiBbbG9jYXRpb24ucGF0aG5hbWVdLFxuXHRcdH07XG5cdH1cblx0Ly8gY29uc29sZS5sb2cobWF0Y2gucm91dGUpXG5cblx0Y29uc3QgJGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAnKTtcblx0JGFwcC5zY3JvbGxUb3AgPSAwO1xuXHQkYXBwLmlubmVySFRNTCA9ICcnO1xuXHRuZXcgbWF0Y2gucm91dGUudmlldygkYXBwKTtcbn07XG5cbmV4cG9ydCB7IHJvdXRlciwgbmF2aWdhdGVUbyB9O1xuIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZURPTVdpdGhTZWxlY3RvciA9ICh0YWcsIC4uLnNlbGVjdG9ycykgPT4ge1xuXHRjb25zdCAkRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXHRzZWxlY3RvcnMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcblx0XHRpZiAoc2VsZWN0b3JbMF0gPT09ICcjJykge1xuXHRcdFx0JERPTS5pZCA9IHNlbGVjdG9yLnNsaWNlKDEpO1xuXHRcdH1cblxuXHRcdGlmIChzZWxlY3RvclswXSA9PT0gJy4nKSB7XG5cdFx0XHQkRE9NLmNsYXNzTGlzdC5hZGQoc2VsZWN0b3Iuc2xpY2UoMSkpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiAkRE9NO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUltZ0RPTVdpdGhTZWxlY3RvciA9IChzcmMsIC4uLnNlbGVjdG9ycykgPT4ge1xuXHRjb25zdCAkRE9NID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCdpbWcnLCAuLi5zZWxlY3RvcnMpO1xuXHQkRE9NLnNyYyA9IHNyYztcblx0cmV0dXJuICRET007XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vcmVzZXQuY3NzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHsgcm91dGVyLCBuYXZpZ2F0ZVRvIH0gZnJvbSAnLi9yb3V0ZXIuanMnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCByb3V0ZXIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXHRkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRpZiAoZS50YXJnZXQubWF0Y2hlcygnW2RhdGEtbGlua10nKSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0bmF2aWdhdGVUbyhlLnRhcmdldC5ocmVmIHx8IGUudGFyZ2V0LmRhdGFzZXQubGluayk7XG5cdFx0fVxuXHR9KTtcblxuXHRyb3V0ZXIoKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==