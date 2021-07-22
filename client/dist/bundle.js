/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
						<span class='chat__content'>${chat.description}</span>
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
    this.setTarget(initialState);
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
    // 글쓰기 모드에서만 사용
    if (nextState) this.activeDoneIcon = true;else this.activeDoneIcon = false;
    this.render();
  }

  render() {
    this.$target.innerHTML = `
            <img class='nav__prev' src='/icons/arrow_back_black.svg'/>
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
      case '-':
        this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('nav', '.nav--grey');
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
      if (this.activeDoneIcon) return `<img class='nav__doneActive' src="/icons/done_active.svg" />`;
      return `<img class='nav__done' src="/icons/done.svg" />`;
    }

    return ``;
  }

  createExitIcon() {
    if (this.isUser) return `<img class='nav__exit' src="/icons/exit.svg" />`;
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
    this.observeTag();
  }

  createView() {
    /*
    	pk를 이용해 data-link 에 삽입
    */
    return this.state.map(product => {
      return `
			<article class='product'>
				
				<img class='product__imgs' src=${product.imgPath} data-link='/detail'>
			
				<div class='product__info'>
					<span class='product__name' data-link='/detail'>${product.name}</span>
					<div>
						<span class='product__location' data-link='/detail'>${product.location} ∙</span>
						<span class='product__time' data-link='/detail'>${product.time}</span>
					</div>
					<span class='product__price' data-link='/detail'>${product.price}</span>
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
    return `<img class="product__option" src="/icons/more_vert_grey.svg" />`;
  }

  createLikeButton(like) {
    return like === 'T' ? `<img class="product__like" src="/icons/favorite.svg" />` : `<img
					class="product__like"
					src="/icons/favorite_border_mini.svg"
				/>`;
  }

  createChatCount(count) {
    return count > 0 ? `<img class='rightBottom__chat' src='/icons/chat_bubble_mini.svg' />
						<span>${count}</span>` : ``;
  }

  createLikeCount(count) {
    return count > 0 ? `<img class='rightBottom__like' src='/icons/favorite_border_mini.svg' />
						<span>${count}</span>` : ``;
  }

  observeTag() {
    // lazy loading , infinite Scroll 담당
    const observerCallback = (entries, observer) => {
      entries.forEach(async entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'end') {
            observer.unobserve(entry.target); // endTag.classList.add('spinner');
            // endTag.innerHTML = `<img class='rightBottom__like' src='/icons/loading-loader-svgrepo-com.svg' />`;
            // const data = await api.randomCats();
            // if (data.success) {
            // if (data.data.length > 0) {
            // 	this.refreshState([...this.state, ...data.data]);
            //  endTag.innerHTML = ''
            // endTag.classList.remove('spinner');
            // } else {
            // endTag.classList.remove('spinner');

            endTag.innerText = `❗No More Stuff❗`; // }
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
    this.$target.addEventListener('click', e => {
      onClick(e);
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
		    <img src="/imgs/notfound.gif">
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

  setState() {}

  render() {}

  createWishImgButtonTemplate() {
    return this.wishIconOn ? `<img src=${_constants_icon_path__WEBPACK_IMPORTED_MODULE_2__.FAVORITE_ICON} class='wish-icon' />` : `<img src=${_constants_icon_path__WEBPACK_IMPORTED_MODULE_2__.FAVORITE_BORDER_MINI_ICON} class='wish-icon' />`;
  }

  createOptionButtonTemplate() {
    return `
		<button 
				class="option-button"
				data-link="${isUserOwnProduct(this.state.seller, this.state.user) ? '/chat' : '/chat/10'}
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
      console.log('pushed key ' + e.key);

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
    this.$imgContainer.innerHTML = `
			${this.state.map(src => createImgTemplate(src, '.gradient')).join('\n')}	
		`;
    this.render();
  }

  render() {}

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
      description
    }) => {
      return `<div class='info description'>${description}</div>`;
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
    this.render();
  }

  setState() {}

  render() {}

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




const isUserOwnProduct = (seller, user) => seller == user;

class ToolBar {
  constructor({
    $parent,
    initialState,
    onClick
  }) {
    this.state = initialState;
    this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_1__.createDOMWithSelector)('nav', '.detail__nav');
    this.state.seller = 'test';
    this.state.user = 'test';
    $parent.appendChild(this.$target);
    this.$target.innerHTML = `
			<img src=${_constants_icon_path__WEBPACK_IMPORTED_MODULE_2__.ARROW_BACK_ICON} class='back' />
			${isUserOwnProduct(this.state.seller, this.state.user) ? `<img src=${_constants_icon_path__WEBPACK_IMPORTED_MODULE_2__.MORE_VERT_ICON} class='option' />` : ''}
		`;
    this.$target.addEventListener('click', e => {
      onClick(e);
    });
  }

  setState() {}

  render() {}

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
                <img class='location__cancelBtn' src="/icons/cancel.svg" data-idx='0'/>
            </button>
            ` : ``;
  }

  createNormalButton() {
    return this.state.length > 1 ? `
            <button class='location__normalBtn'>
                <span>
                    ${this.state[1]}
                </span>
                <img class='location__cancelBtn' src="/icons/cancel_baemin.svg" data-idx='1'/>
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
    const regex = /[^가-힣,0-9|]/g;
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


 // import CATEGORY_ICON from '/imgs/category.svg'; 경로문제 발생 (보류)

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
                <img class='nav__categoryImg' src='/icons/category.svg' alt='category'>
            </div>
            <div class='nav__location'>
                
            </div>
            <div class='nav__rightSide'>
                <img src='/icons/account.svg' alt='profile' data-link="/user">
                <img src='/icons/menu.svg' data-link='/menu' alt='menu'>
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
            <img class='nav__locationIcon' src='/icons/location.svg' alt='location'>
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
          // api (this.state 정보 인자)
          // 회원가입 알림 및 클릭시 로그인 이동
          console.log('api 처리');
          this.welcomeModal.open();
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
    const regex = /[^가-힣,0-9|]/g;
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
            <textarea class='post__content' placeholder="게시글 내용을 작성해주세요.">${this.state.description}</textarea>
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
      console.log(e.target.files);
      /*
      	let files = e.target.files;
      		api 호출 후 파일경로 받아옴 -> setState -> chcekValueAndRefreshState() 호출
      	
      	let formData = new FormData();
      	const config = {
      		header: { 'content-type': 'multipart/fomr-data' }
      	}
      	formData.append("file", files)
      		아래처럼 로직 (가상)
      	axios.post('/api/board/image', formData, config)
      		.then(response => {
      			if (response.data.success) {
      				setImages([...Images, response.data.filePath])
      				props.refreshFunction([...Images, response.data.filePath])
      				setShow(true)
      			} else {
      				alert('파일을 저장하는데 실패했습니다.')
      			}
      		})
      */
    };
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
					<input  id='image' type='file' accept=".jpg, .jpeg, .png" multiple>
					<img src='/icons/image.svg' alt='image'>
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
    if (this.state.title.length > 0 && this.state.description.length > 0 && this.state.imgPath.length > 0 && this.state.category.length > 0) {
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
    this.state.description = e.target.value;
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
            <img src='/icons/location_white.svg'  alt='location'>
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
const ADD_ICON = '/icons/add.svg';
const ACCOUNT_ICON = '/icons/account.svg';
const ARROW_BACK_ICON = '/icons/arrow_back.svg'; //

const CANCEL_ICON = '/icons/cancel.svg'; //

const ARROW_FORWARD_ICON = '/icons/arrow_forward.svg';
const CATEGORY_ICON = '/icons/category.svg';
const CHAT_BUBBLE_MINI_ICON = '/icons/chat_bubble_mini.svg';
const DONE_ICON = '/icons/done.svg';
const EXIT_ICON = '/icons/exit.svg';
const EXPAND_MORE_ICON = '/icons/expand_more.svg';
const FAVORITE_BORDER_MINI_ICON = '/icons/favorite_border_mini.svg';
const FAVORITE_BORDER_ICON = '/icons/favorite_border.svg';
const FAVORITE_ICON = '/icons/favorite.svg';
const IMAGE_ICON = '/icons/iamge.svg';
const LOCATION_ICON = '/icons/location.svg';
const MENU_ICON = '/icons/menu.svg';
const MORE_VERT_ICON = '/icons/more_vert.svg';
const SEND_ICON = '/icons/send.svg';

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
/* harmony import */ var _components_base_navigation_bar_navigation_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/base/navigation-bar/navigation-bar */ "./src/components/base/navigation-bar/navigation-bar.js");
/* harmony import */ var _components_base_redirect_redirect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/base/redirect/redirect */ "./src/components/base/redirect/redirect.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const mode = '-';
class NotFound {
  constructor($parent) {
    _defineProperty(this, "state", {
      link: '/',
      message: 'Home',
      status: '404',
      content: 'Page not found'
    });

    new _components_base_navigation_bar_navigation_bar__WEBPACK_IMPORTED_MODULE_0__.default({
      $parent,
      initialState: mode
    });
    new _components_base_redirect_redirect__WEBPACK_IMPORTED_MODULE_1__.default({
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
/* harmony import */ var _components_base_navigation_bar_navigation_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/base/navigation-bar/navigation-bar */ "./src/components/base/navigation-bar/navigation-bar.js");
/* harmony import */ var _components_base_redirect_redirect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/base/redirect/redirect */ "./src/components/base/redirect/redirect.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const mode = '-';
class NotLogin {
  constructor($parent) {
    _defineProperty(this, "state", {
      link: '/user',
      message: 'Login',
      status: '',
      content: 'This service requires login'
    });

    new _components_base_navigation_bar_navigation_bar__WEBPACK_IMPORTED_MODULE_0__.default({
      $parent,
      initialState: mode
    });
    new _components_base_redirect_redirect__WEBPACK_IMPORTED_MODULE_1__.default({
      $parent,
      initialState: this.state
    });
  }

}

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








class DetailPage {
  constructor($parent) {
    _defineProperty(this, "state", {
      // TEST CASE
      user: '남영우',
      // pk값을 들고있을지, 이름을 들고 있을지 고민입니다.
      seller: '남영',
      price: '₩35,000',
      title: '빈티지 롤러 스케이트!',
      description: `어린시절 추억의 향수를 불러 일으키는 롤러 스케이트입니다. 빈티지 특성상 사용감 있지만 전체적으로 깨끗한 상태입니다. 촬영용 소품이나, 거실에 장식용으로 추천해 드립니다. 단품 입고 되었습니다.<br>
			새 제품으로 보존된 제품으로 전용박스까지 보내드립니다.사이즈는 235 입니다.`,
      status: 0,
      location: '문래동',
      category: '기타 중고물품',
      imgPath: ['/imgs/shoes-1.jpg', '/imgs/shoes-1.jpg', '/imgs/shoes-1.jpg'],
      createdAt: '3분전',
      chatCount: 3,
      wishCount: 2,
      visitCount: 5
    });

    this.haveHistoryState();
    console.log(history.state);
    this.$target = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_5__.createDOMWithSelector)('div', '.detail-page');
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
          /* 
          	api 요청으로 삭제
          */
          (0,_router__WEBPACK_IMPORTED_MODULE_6__.navigateTo)('/');
        }
      }
    });
    $parent.appendChild(this.$target);
  }

  setState() {}

  render() {}

  haveHistoryState() {
    if (history.state) {
      this.state = history.state;
    }
  }

}

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
    });
  }

  setState() {
    this.body.setState(this.state.allMyLocation);
  }

  bindModalClickEvent(e, value) {
    if ( // 닫기 및 외부 클릭 시 발생
    e.target.className === 'modal__overlay' || e.target.className === 'modal__cancel') {
      this.modal.close();
    } else if (e.target.className === 'modal__confirm active') {
      // 확인 클릭 시 발생
      // api로 동네 추가
      this.state.allMyLocation = [...this.state.allMyLocation, value];
      this.modal.close();
      this.modal.$input = ''; // input 초기화

      this.setState();
    }
  }

  bindRemoveLocationEvent(idx) {
    let LocationArray = [...this.state.allMyLocation];
    LocationArray.splice(idx, 1);
    this.state.allMyLocation = LocationArray;
    this.setState();
    /* 
    	--추후 예정--
    	삭제 시(각각 api 요청 동반 예상)
    	2개일때 :
    		idx 0 삭제 -> idx 1을 메인동네로
    		idx 1 삭제 -> 그대로
    	1개일때 :
    		메인 삭제
    */
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
      console.log('MuYaHo');
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
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class MainPage {
  constructor($parent) {
    _defineProperty(this, "state", {
      products: sampleData,
      locationName: ['역삼동', '인창동'],
      index: 0
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
    });
  }

  setState() {
    //리렌더링파트
    this.navbar.setState(this.state.locationName[this.state.index]);
    this.ProductLists.setState(this.state.products);
  }

  render() {//렌더링파트
  }

  bindNavBarClickEvent(e) {
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
      console.log(_constants_category_list__WEBPACK_IMPORTED_MODULE_4__.CATEGORY_LIST[idx]); // api 인자로 물건들 호출
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
        this.state.index = idx; //api 요청 후 product state도 변경 (비동기제어)

        this.$parent.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        this.setState();
      }
    }
  }

}
const sampleData = [{
  imgPath: '/imgs/photo.jpeg',
  name: '문지호',
  location: '인창동',
  time: '2시간 전',
  price: '10억',
  like: 'T',
  chatCount: 5,
  likeCount: 3,
  user: '문지호',
  seller: '남영우'
}, {
  imgPath: '/imgs/photo.jpeg',
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
  imgPath: '/imgs/photo.jpeg',
  name: '문지호',
  location: '인창동',
  time: '2시간 전',
  price: '10억',
  like: 'F',
  chatCount: 5,
  likeCount: 3,
  user: '문지호',
  seller: '문지호'
}, {
  imgPath: '/imgs/photo.jpeg',
  name: '문지호',
  location: '인창동',
  time: '2시간 전',
  price: '10억',
  like: 'F',
  chatCount: 5,
  likeCount: 3,
  user: '문지호',
  seller: '남영우'
}, {
  imgPath: '/imgs/photo.jpeg',
  name: '문지호',
  location: '인창동',
  time: '2시간 전',
  price: '10억',
  like: 'F',
  chatCount: 5,
  likeCount: 3,
  user: '문지호',
  seller: '남영우'
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
      locationName: '역삼동',
      navigatorIndex: '1',
      chats: sampleChatData
    });

    console.log(location.pathname);
    this.$parent = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_4__.createDOMWithSelector)('div', '.menuWrapper');
    $parent.appendChild(this.$parent);
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
    }, 0);
  }

  setState() {
    //리렌더링파트
    this.mainNavbar.setState(this.state.navigatorIndex);

    if (this.state.navigatorIndex === '2') {
      this.productLists.close();
      this.chatLists.open();
      this.chatLists.setState(this.state.chats); // 수정 할 부분(api로 newData 필요)
    } else {
      this.chatLists.close();
      this.productLists.open();
      this.productLists.setState(this.state.products); // 수정 할 부분(api로 newData 필요) 분기처리 후에!
    }
    /*
    	bindMainNavbarEvent 에서 api 처리해줘도 될듯! (이게 더 맞는듯)
    */

  } // bindMainNavbarEvent : 현재 nav idx와 다르다면 처리


  bindMainNavbarEvent(idx) {
    if (idx === '1' && this.state.navigatorIndex !== idx) {
      this.state.navigatorIndex = '1';
      this.setState();
    } else if (idx === '2' && this.state.navigatorIndex !== idx) {
      this.state.navigatorIndex = '2';
      this.setState();
    } else if (idx === '3' && this.state.navigatorIndex !== idx) {
      this.state.navigatorIndex = '3';
      this.setState();
    }
  }

}
const sampleData = [{
  imgPath: '/imgs/photo.jpeg',
  name: '문지호',
  location: '인창동',
  time: '2시간 전',
  price: '10억',
  like: 'T',
  chatCount: 5,
  likeCount: 3
}, {
  imgPath: '/imgs/photo.jpeg',
  name: '문지호',
  location: '인창동',
  time: '2시간 전',
  price: '10억',
  like: 'F',
  chatCount: 5,
  likeCount: 0
}, {
  imgPath: '/imgs/photo.jpeg',
  name: '문지호',
  location: '인창동',
  time: '2시간 전',
  price: '10억',
  like: 'F',
  chatCount: 5,
  likeCount: 3
}, {
  imgPath: '/imgs/photo.jpeg',
  name: '문지호',
  location: '인창동',
  time: '2시간 전',
  price: '10억',
  like: 'F',
  chatCount: 5,
  likeCount: 3
}, {
  imgPath: '/imgs/photo.jpeg',
  name: '문지호',
  location: '인창동',
  time: '2시간 전',
  price: '10억',
  like: 'F',
  chatCount: 5,
  likeCount: 3
}];
const sampleChatData = [{
  imgPath: '/imgs/photo.jpeg',
  name: '문지호',
  description: 'It is description,t is descriptiont is descriptiont is descriptiont is descriptiont is descriptiont is description',
  time: '2시간 전',
  count: 5
}, {
  imgPath: '/imgs/photo.jpeg',
  name: '문지호',
  description: 'It is description',
  time: '2시간 전',
  count: 0
}, {
  imgPath: '/imgs/photo.jpeg',
  name: '문지호',
  description: 'It is description',
  time: '2시간 전',
  count: 0
}, {
  imgPath: '/imgs/photo.jpeg',
  name: '문지호',
  description: 'It is description',
  time: '2시간 전',
  count: 5
}, {
  imgPath: '/imgs/photo.jpeg',
  name: '문지호',
  description: 'It is description',
  time: '2시간 전',
  count: 5
}, {
  imgPath: '/imgs/photo.jpeg',
  name: '문지호',
  description: 'It is description',
  time: '2시간 전',
  count: 5
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
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const mode = '회원가입';
class SignUpPage {
  constructor($parent) {
    _defineProperty(this, "state", {});

    this.navbar = new _components_base_navigation_bar_navigation_bar__WEBPACK_IMPORTED_MODULE_0__.default({
      $parent,
      initialState: mode
    });
    this.body = new _components_signup_page_body_body__WEBPACK_IMPORTED_MODULE_1__.default({
      $parent
    });
  }

  setState() {//리렌더링파트
  }

  render() {//렌더링파트
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






class UserPage {
  // 오직 id만 받아오면 된다!
  constructor($parent) {
    _defineProperty(this, "state", '');

    this.$parent = (0,_util_createDOMWithSelector__WEBPACK_IMPORTED_MODULE_2__.createDOMWithSelector)('div', '.userWrapper');
    $parent.appendChild(this.$parent);
    this.$appBar = new _components_base_navigation_bar_navigation_bar__WEBPACK_IMPORTED_MODULE_0__.default({
      $parent: this.$parent,
      initialState: this.isUserLogin() ? '내 계정' : '로그인',
      onClick: e => {
        if (e.target.className === 'nav__prev') {
          this.$parent.classList.remove('active');
        }
      }
    });
    this.$section = new _components_user_page_section_section__WEBPACK_IMPORTED_MODULE_1__.default({
      $parent: this.$parent,
      initialState: this.isUserLogin() ? this.state : '',
      onClick: (e, inputValue) => {
        if (this.isUserLogin()) {
          // logout api 호출 (쿠키 제거)만 하면 끝
          (0,_router__WEBPACK_IMPORTED_MODULE_4__.navigateTo)('/');
        } else {
          e.preventDefault();

          if (inputValue.length === 0) {
            this.$section.$alert.classList.add('active');
            setTimeout(() => {
              this.$section.$alert.classList.remove('active');
            }, 2000);
          } else {
            console.log('login'); // login api 호출
            // 성공시 : (쿠키 삽입)만 하면 끝 + navigateTo('/');
            // 실패시 : 경고문구 || 길이가 0이거나
          }
        }
      }
    });
    setTimeout(() => {
      this.$parent.classList.add('active');
    }, 0);
  }

  setState() {
    this.$appBar.setState(this.state);
    this.$section.setState(this.state);
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
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import { navigateTo } from '../router';

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
      description: '',
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
    console.log(this.state);
    this.navigationBar = new _components_base_navigation_bar_navigation_bar__WEBPACK_IMPORTED_MODULE_0__.default({
      $parent,
      initialState: mode,
      onClick: () => {// state에 userid 추가하고 (추가안해도 인자로 받아서 괜찮을듯) haveAllValue를 빼면 될듯!
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
    });
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9iYXNlL2FsZXJ0L2FsZXJ0LmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL2Jhc2UvY2hhdC1saXN0L2NoYXQtbGlzdC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9iYXNlL2xhcmdlLWJ1dHRvbi9sYXJnZS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvYmFzZS9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9iYXNlL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvYmFzZS9wcm9kdWN0LW1vZGFsL3Byb2R1Y3QtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvYmFzZS9yZWRpcmVjdC9yZWRpcmVjdC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9kZXRhaWwtcGFnZS9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL2RldGFpbC1wYWdlL3NlY3Rpb24vaW1nLWNvbnRhaW5lci9pbWctY29udGFpbmVyLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL2RldGFpbC1wYWdlL3NlY3Rpb24vaW5mby1jb250YWluZXIvaW5mby1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvZGV0YWlsLXBhZ2Uvc2VjdGlvbi9zZWN0aW9uLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL2RldGFpbC1wYWdlL3Rvb2wtYmFyL3Rvb2wtYmFyLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL2xvY2F0aW9uLXBhZ2UvYm9keS9ib2R5LmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL2xvY2F0aW9uLXBhZ2UvbG9jYXRpb24tbW9kYWwvbG9jYXRpb24tbW9kYWwuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL2NhdGVnb3J5L2JvZHkvYm9keS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9tYWluLXBhZ2UvY2F0ZWdvcnkvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL2xvY2F0aW9uLW1pbmktbW9kYWwvbG9jYXRpb24tbWluaS1tb2RhbC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9tYWluLXBhZ2UvbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXIuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL3dyaXRlLXBvc3QtYnV0dG9uL3dyaXRlLXBvc3QtYnV0dG9uLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL21lbnUtcGFnZS9tYWluLW5hdmlnYXRpb24tYmFyL21haW4tbmF2aWdhdGlvbi1iYXIuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvc2lnbnVwLXBhZ2UvYm9keS9ib2R5LmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL3NpZ251cC1wYWdlL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL3VzZXItcGFnZS9zZWN0aW9uL3NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvd3JpdGluZy1wYWdlL2JvZHkvYm9keS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy93cml0aW5nLXBhZ2UvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29uc3RhbnRzL2NhdGVnb3J5LWxpc3QuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbnN0YW50cy9pY29uLXBhdGguanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3BhZ2VzL05vdEZvdW5kLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9wYWdlcy9Ob3RMb2dpbi5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvcGFnZXMvZGV0YWlsLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3BhZ2VzL2xvY2F0aW9uLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3BhZ2VzL21haW4tcGFnZS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvcGFnZXMvbWVudS1wYWdlLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9wYWdlcy9zaWdudXAtcGFnZS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvcGFnZXMvdXNlci1wYWdlLmpzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9wYWdlcy93cml0aW5nLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvdXRpbC9jcmVhdGVET01XaXRoU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvYmFzZS9hbGVydC9hbGVydC5jc3M/YmQwNSIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9iYXNlL2NoYXQtbGlzdC9jaGF0LWxpc3QuY3NzP2E4MzkiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvYmFzZS9sYXJnZS1idXR0b24vbGFyZ2UtYnV0dG9uLmNzcz9kMzFhIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL2Jhc2UvbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXIuY3NzPzdjYmYiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvYmFzZS9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNzcz9mYzA3Iiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL2Jhc2UvcHJvZHVjdC1tb2RhbC9wcm9kdWN0LW1vZGFsLmNzcz8xM2M3Iiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL2Jhc2UvcmVkaXJlY3QvcmVkaXJlY3QuY3NzP2IzN2IiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvZGV0YWlsLXBhZ2UvZm9vdGVyL2Zvb3Rlci5jc3M/YmQ2ZSIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9kZXRhaWwtcGFnZS9zZWN0aW9uL2ltZy1jb250YWluZXIvaW1nLWNvbnRhaW5lci5jc3M/NTYyMiIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9kZXRhaWwtcGFnZS9zZWN0aW9uL2luZm8tY29udGFpbmVyL2luZm8tY29udGFpbmVyLmNzcz9hMGVmIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL2RldGFpbC1wYWdlL3NlY3Rpb24vc2VjdGlvbi5jc3M/Y2VmNiIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9kZXRhaWwtcGFnZS90b29sLWJhci90b29sLWJhci5jc3M/YmM1ZCIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9sb2NhdGlvbi1wYWdlL2JvZHkvYm9keS5jc3M/MzMyNCIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9sb2NhdGlvbi1wYWdlL2xvY2F0aW9uLW1vZGFsL2xvY2F0aW9uLW1vZGFsLmNzcz83ZDZmIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL21haW4tcGFnZS9jYXRlZ29yeS9ib2R5L2JvZHkuY3NzPzBhMzciLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL2NhdGVnb3J5L2NhdGVnb3J5LmNzcz84ZGRmIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL21haW4tcGFnZS9sb2NhdGlvbi1taW5pLW1vZGFsL2xvY2F0aW9uLW1pbmktbW9kYWwuY3NzP2M5NmYiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyLmNzcz81N2Y0Iiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL21haW4tcGFnZS93cml0ZS1wb3N0LWJ1dHRvbi93cml0ZS1wb3N0LWJ1dHRvbi5jc3M/ZGYxNCIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9tZW51LXBhZ2UvbWFpbi1uYXZpZ2F0aW9uLWJhci9tYWluLW5hdmlnYXRpb24tYmFyLmNzcz83NTBiIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL3NpZ251cC1wYWdlL2JvZHkvYm9keS5jc3M/ZGNhMiIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy9zaWdudXAtcGFnZS9tb2RhbC9tb2RhbC5jc3M/OWM0MyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29tcG9uZW50cy91c2VyLXBhZ2Uvc2VjdGlvbi9zZWN0aW9uLmNzcz80MjZlIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL3dyaXRpbmctcGFnZS9ib2R5L2JvZHkuY3NzPzZjMGUiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbXBvbmVudHMvd3JpdGluZy1wYWdlL2Zvb3Rlci9mb290ZXIuY3NzP2ExOTciLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2luZGV4LmNzcz9jNDBkIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9wYWdlcy9kZXRhaWwtcGFnZS5jc3M/MGQxMyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvcGFnZXMvbWVudS1wYWdlLmNzcz9hNjNiIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9wYWdlcy91c2VyLXBhZ2UuY3NzPzI5NTkiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3Jlc2V0LmNzcz9jZTM4Iiwid2VicGFjazovL2NsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NsaWVudC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBbGVydCIsImNvbnN0cnVjdG9yIiwiJHBhcmVudCIsIm9uQ2xpY2siLCIkdGFyZ2V0IiwiY3JlYXRlRE9NV2l0aFNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJpbm5lckhUTUwiLCIkY29uZmlybUJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwib3BlbiIsInN0eWxlIiwiZGlzcGxheSIsImNsb3NlIiwiQ2hhdExpc3RzIiwiaW5pdGlhbFN0YXRlIiwic3RhdGUiLCJyZW5kZXIiLCJzZXRTdGF0ZSIsIm5leHRTdGF0ZSIsInJlc3VsdCIsIm1hcCIsImNoYXQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ0aW1lIiwiY3JlYXRlQ2hhdENvdW50IiwiY291bnQiLCJpbWdQYXRoIiwiam9pbiIsIkxhcmdlQnV0dG9uIiwiaW5uZXJUZXh0IiwiTmF2aWdhdGlvbkJhciIsImlzTW9kYWwiLCJzZXRUYXJnZXQiLCJiaW5kUHJldkJ1dHRvbkNsaWNrRXZlbnQiLCIkaWNvbiIsInRhcmdldCIsImNsYXNzTmFtZSIsImFjdGl2ZURvbmVJY29uIiwiY3JlYXRlRXhpdEljb24iLCJjcmVhdGVEb25lSWNvbiIsImRvbmVJY29uIiwiaXNVc2VyIiwic2V0VGltZW91dCIsImhpc3RvcnkiLCJiYWNrIiwiUHJvZHVjdExpc3RzIiwicmVmcmVzaFN0YXRlIiwiY3JlYXRlVmlldyIsIm9ic2VydmVUYWciLCJwcm9kdWN0IiwibG9jYXRpb24iLCJwcmljZSIsImlzVXNlck93blByb2R1Y3QiLCJzZWxsZXIiLCJ1c2VyIiwiY3JlYXRlT3B0aW9uQnV0dG9uIiwiY3JlYXRlTGlrZUJ1dHRvbiIsImxpa2UiLCJjaGF0Q291bnQiLCJjcmVhdGVMaWtlQ291bnQiLCJsaWtlQ291bnQiLCJvYnNlcnZlckNhbGxiYWNrIiwiZW50cmllcyIsIm9ic2VydmVyIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJpZCIsInVub2JzZXJ2ZSIsImVuZFRhZyIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXRlbSIsIm9ic2VydmUiLCJQcm9kdWN0TW9kYWwiLCJSZWRpcmVjdCIsImxpbmsiLCJtZXNzYWdlIiwic3RhdHVzIiwiY29udGVudCIsIkZvb3RlciIsIndpc2hJY29uT24iLCIkZm9vdGVyIiwid2lzaEljb25IYW5kbGVyIiwiY3JlYXRlV2lzaEltZ0J1dHRvblRlbXBsYXRlIiwiY3JlYXRlT3B0aW9uQnV0dG9uVGVtcGxhdGUiLCJGQVZPUklURV9JQ09OIiwiRkFWT1JJVEVfQk9SREVSX01JTklfSUNPTiIsImNoYW5nZVdpc2hJY29uU3RhdGUiLCJzcmMiLCJyZXNwb25zZSIsInN0YXR1c0NvZGUiLCJnZXRJc1Byb2R1Y3RXaXNoZWRCeVVzZXIiLCJwb3N0V2lzaFN0YXRlQnlVc2VyIiwiaXNDbGFzc1NlbGVjdG9yIiwic2VsZWN0b3IiLCJjcmVhdGVCdXR0b24iLCJ0ZXh0Iiwic2VsZWN0b3JzIiwiYnV0dG9uIiwiY3JlYXRlSW1nVGVtcGxhdGUiLCJmaWx0ZXIiLCJzbGljZSIsIkltZ0NvbnRhaW5lciIsImN1cnJlbnRJbWdJbmRleCIsIiRpbWdDb250YWluZXIiLCJ3aWR0aCIsImxlbmd0aCIsIiRwcmV2QnV0dG9uIiwiJG5leHRCdXR0b24iLCJpc091dE9mQm91bmQiLCJtb3ZlIiwibW92ZVByZXZPck5leHRIYW5kbGVyIiwidHJhbnNmb3JtIiwid2luZG93Iiwia2V5Q29kZSIsImNvbnNvbGUiLCJsb2ciLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsIiRidXR0b25Db250YWluZXIiLCJTVEFUVVMiLCJJbmZvQ29udGFpbmVyIiwiJGluZm9Db250YWluZXIiLCJjcmVhdGVTdGF0dXNTZWxlY3RCdXR0b25UZW1wbGF0ZSIsIk1hdGgiLCJtaW4iLCJzdGF0IiwiaSIsImNyZWF0ZVByb2R1Y3RIZWFkZXJUZW1wbGF0ZSIsInRpdGxlIiwiY2F0ZWdvcnkiLCJjcmVhdGVkQXQiLCJjcmVhdGVQcm9kdWN0RGVzY3JpcHRpb25UZW1wbGF0ZSIsImNyZWF0ZVByb2R1Y3RDb3VudEluZm9UZW1wbGF0ZSIsIndpc2hDb3VudCIsInZpc2l0Q291bnQiLCJjcmVhdGVQcm9kdWN0U2VsbGVySW5mb1RlbXBsYXRlIiwiRGV0YWlsU2VjdGlvbiIsIiRzZWN0aW9uIiwiJGltZ0NvbnRhaW5lcldyYXBwZXIiLCIkaW5mb0NvbnRhaW5lcldyYXBwZXIiLCJUb29sQmFyIiwiQVJST1dfQkFDS19JQ09OIiwiTU9SRV9WRVJUX0lDT04iLCJCb2R5UGFydCIsImlkeCIsImRhdGFzZXQiLCIkQnV0dG9uIiwiY3JlYXRlTWFpbkJ1dHRvbiIsImNyZWF0ZU5vcm1hbEJ1dHRvbiIsImNyZWF0ZVBsdXNCdXR0b24iLCJMb2NhdGlvbk1vZGFsIiwiJGlucHV0IiwiYmluZElucHV0RXZlbnQiLCJpbnB1dFZhbHVlIiwidmFsdWUiLCJjaGVja1JlZ2V4RXZlbnQiLCJjaGVja0xlbmd0aEV2ZW50IiwicmVnZXgiLCJyZXBsYWNlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiQm9keSIsIiRXcmFwcGVyIiwicmVuZGVyQ2F0ZWdvcmllcyIsIm1vZGUiLCJDYXRlZ29yeSIsIkNBVEVHT1JZX0xJU1QiLCJuYXZpZ2F0aW9uQmFyIiwiYm9keVBhcnQiLCJNaW5pTW9kYWwiLCIkY29udGVudCIsInJlbmRlckxvY2F0aW9uTmFtZSIsImxvY2F0aW9uTmFtZSIsIk1haW5OYXZiYXIiLCIkbG9jYXRpb24iLCJuZXdMb2NhdGlvbk5hbWUiLCJXcml0ZVBvc3RCdXR0b24iLCIkc2VsbCIsIiRjaGF0IiwiJGludGVyZXN0IiwidXBkYXRlQ2xhc3NMaXN0IiwidG9nZ2xlIiwiJGlkIiwiQnV0dG9uIiwid2VsY29tZU1vZGFsIiwiV2VsY29tZU1vZGFsIiwiY2hlY2tJZFJlZ2V4IiwiY2hlY2tMb2NhdGlvblJlZ2V4IiwiYWN0aXZhdGVCdXR0b24iLCJXZWxjb21lIiwiU2VjdGlvbiIsIiR1cHRhZyIsIiRkb3dudGFnIiwiY3JlYXRlU2VjdGlvbkNvbnRlbnQiLCJpc1VzZXJMb2dpbiIsImxhcmdlQnV0dG9uIiwiJGFsZXJ0IiwiaW1hZ2VBcnJheSIsInNwbGljZSIsImNoY2VrVmFsdWVBbmRSZWZyZXNoU3RhdGUiLCIkY29udGFpbmVyIiwiJHRpdGxlIiwiJHByaWNlIiwiJGNhdGVnb3J5IiwiYmluZFRpdGxlRXZlbnQiLCJiaW5kUHJpY2VLZXlVcEV2ZW50IiwicmVhcnJhbmdlUHJpY2UiLCJiaW5kQ29udGVudEV2ZW50IiwiYmluZENhdGVnb3J5RXZlbnQiLCJiaW5kSW1hZ2VCdXR0b25FdmVudCIsInJlbmRlckltYWdlRm9ybSIsInJlbmRlckltYWdlIiwicmVuZGVyQnV0dG9uIiwib25jaGFuZ2UiLCJmaWxlcyIsImltYWdlIiwiYXJyYXkiLCJzcGxpdCIsImNoZWNrSGF2aW5nQWxsVmFsdWUiLCJoYXZlQWxsVmFsdWUiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJBRERfSUNPTiIsIkFDQ09VTlRfSUNPTiIsIkNBTkNFTF9JQ09OIiwiQVJST1dfRk9SV0FSRF9JQ09OIiwiQ0FURUdPUllfSUNPTiIsIkNIQVRfQlVCQkxFX01JTklfSUNPTiIsIkRPTkVfSUNPTiIsIkVYSVRfSUNPTiIsIkVYUEFORF9NT1JFX0lDT04iLCJGQVZPUklURV9CT1JERVJfSUNPTiIsIklNQUdFX0lDT04iLCJMT0NBVElPTl9JQ09OIiwiTUVOVV9JQ09OIiwiU0VORF9JQ09OIiwiTm90Rm91bmQiLCJOYXZiYXIiLCJOb3RMb2dpbiIsIkRldGFpbFBhZ2UiLCJoYXZlSGlzdG9yeVN0YXRlIiwidG9vbEJhciIsIm5hdmlnYXRlVG8iLCJwcm9kdWN0TW9kYWwiLCJzZWN0aW9uIiwiZm9vdGVyIiwiTG9jYXRpb25QYWdlIiwiYWxsTXlMb2NhdGlvbiIsImN1cnJlbnRJbmRleCIsIm5hdmJhciIsImJvZHkiLCJiaW5kQnV0dG9uQ2xpY2tFdmVudCIsIm1vZGFsIiwiTW9kYWwiLCJiaW5kTW9kYWxDbGlja0V2ZW50IiwiYWxlcnQiLCJiaW5kQWxlcnRDbGlja0V2ZW50IiwiYmluZFJlbW92ZUxvY2F0aW9uRXZlbnQiLCJMb2NhdGlvbkFycmF5IiwiTWFpblBhZ2UiLCJwcm9kdWN0cyIsInNhbXBsZURhdGEiLCJpbmRleCIsImJpbmROYXZCYXJDbGlja0V2ZW50IiwicG9zdEJ1dHRvbiIsIlBvc3RCdXR0b24iLCJiaW5kQ2F0ZWdvcnlDbGlja0V2ZW50IiwibG9jYXRpb25NaW5pTW9kYWwiLCJMb2NhdGlvbk1pbmlNb2RhbCIsImJpbmRMb2NhdGlvbk1vZGFsQ2xpY2tFdmVudCIsInNjcm9sbFRvcCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJNZW51UGFnZSIsIm5hdmlnYXRvckluZGV4IiwiY2hhdHMiLCJzYW1wbGVDaGF0RGF0YSIsInBhdGhuYW1lIiwibWFpbk5hdmJhciIsImJpbmRNYWluTmF2YmFyRXZlbnQiLCJwcm9kdWN0TGlzdHMiLCJjaGF0TGlzdHMiLCJTaWduVXBQYWdlIiwiVXNlclBhZ2UiLCIkYXBwQmFyIiwiQXBwQmFyIiwiV3JpdGluZ1BhZ2UiLCJ0ZW1wU3RhdGUiLCJwYXRoVG9SZWdleCIsInBhdGgiLCJSZWdFeHAiLCJ1cmwiLCJwcm9wcyIsInB1c2hTdGF0ZSIsInJvdXRlciIsInJvdXRlcyIsInZpZXciLCJwb3RlbnRpYWxNYXRjaGVzIiwicm91dGUiLCJtYXRjaCIsImZpbmQiLCJwb3RlbnRpYWxNYXRjaCIsIiRhcHAiLCJ0YWciLCIkRE9NIiwiY3JlYXRlRWxlbWVudCIsImNyZWF0ZUltZ0RPTVdpdGhTZWxlY3RvciIsIm1hdGNoZXMiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLE1BQU1BLEtBQU4sQ0FBWTtBQUMxQkMsYUFBVyxDQUFDO0FBQUVDLFdBQUY7QUFBV0M7QUFBWCxHQUFELEVBQXVCO0FBQ2pDLFNBQUtDLE9BQUwsR0FBZUMsa0ZBQXFCLENBQUMsS0FBRCxFQUFRLFFBQVIsQ0FBcEM7QUFDQUgsV0FBTyxDQUFDSSxXQUFSLENBQW9CLEtBQUtGLE9BQXpCLEVBRmlDLENBSWpDOztBQUNBLFNBQUtBLE9BQUwsQ0FBYUcsU0FBYixHQUEwQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBUkU7QUFVQSxTQUFLSixPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLSyxjQUFMLEdBQXNCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXRCO0FBRUEsU0FBS04sT0FBTCxDQUFhTyxnQkFBYixDQUE4QixPQUE5QixFQUF3Q0MsQ0FBRCxJQUFPO0FBQzdDLFdBQUtULE9BQUwsQ0FBYVMsQ0FBYjtBQUNBLEtBRkQ7QUFHQTs7QUFFREMsTUFBSSxHQUFHO0FBQ04sU0FBS1QsT0FBTCxDQUFhVSxLQUFiLENBQW1CQyxPQUFuQixHQUE2QixPQUE3QjtBQUNBOztBQUVEQyxPQUFLLEdBQUc7QUFDUCxTQUFLWixPQUFMLENBQWFVLEtBQWIsQ0FBbUJDLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0E7O0FBOUJ5QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIM0I7QUFDQTtBQUNlLE1BQU1FLFNBQU4sQ0FBZ0I7QUFHOUJoQixhQUFXLENBQUM7QUFBRUMsV0FBRjtBQUFXZ0I7QUFBWCxHQUFELEVBQTRCO0FBQUEsbUNBRi9CLEVBRStCOztBQUN0QyxTQUFLQyxLQUFMLEdBQWFELFlBQWI7QUFDQSxTQUFL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QUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQWxNLE1BQU0sQ0FBQzdHLGdCQUFQLENBQXdCLFVBQXhCLEVBQW9DcVMsOENBQXBDO0FBRUF2UyxRQUFRLENBQUNFLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0FBQ25ERixVQUFRLENBQUMwUCxJQUFULENBQWN4UCxnQkFBZCxDQUErQixPQUEvQixFQUF5Q0MsQ0FBRCxJQUFPO0FBQzlDLFFBQUlBLENBQUMsQ0FBQzRCLE1BQUYsQ0FBU3FSLE9BQVQsQ0FBaUIsYUFBakIsQ0FBSixFQUFxQztBQUNwQ2pULE9BQUMsQ0FBQ2lILGNBQUY7QUFDQThILDREQUFVLENBQUMvTyxDQUFDLENBQUM0QixNQUFGLENBQVNzUixJQUFULElBQWlCbFQsQ0FBQyxDQUFDNEIsTUFBRixDQUFTaUgsT0FBVCxDQUFpQnZFLElBQW5DLENBQVY7QUFDQTtBQUNELEdBTEQ7QUFPQThOLG9EQUFNO0FBQ04sQ0FURCxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9hbGVydC5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlRE9NV2l0aFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jcmVhdGVET01XaXRoU2VsZWN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGVydCB7XG5cdGNvbnN0cnVjdG9yKHsgJHBhcmVudCwgb25DbGljayB9KSB7XG5cdFx0dGhpcy4kdGFyZ2V0ID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCdkaXYnLCAnLmFsZXJ0Jyk7XG5cdFx0JHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLiR0YXJnZXQpO1xuXG5cdFx0Ly8g7LGE7YyFIOq1rO2YhOyLnCByZW5kZXIoKSDrubzshJwg7J6s7IKs7JqpXG5cdFx0dGhpcy4kdGFyZ2V0LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnRfX292ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnRfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbGVydF9fZ3VpZGVcIj7soJXrp5DroZwg7IKt7KCc7ZWY7Iuc6rKg7Iq164uI6rmMPzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0X19jaGVja09uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbGVydF9fY2FuY2VsXCI+7Leo7IaMPC9zcGFuPjxzcGFuIGNsYXNzPVwiYWxlcnRfX2NvbmZpcm1cIj7sgq3soJw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgO1xuXG5cdFx0dGhpcy5vbkNsaWNrID0gb25DbGljaztcblx0XHR0aGlzLiRjb25maXJtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0X19jb25maXJtJyk7XG5cblx0XHR0aGlzLiR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5vbkNsaWNrKGUpO1xuXHRcdH0pO1xuXHR9XG5cblx0b3BlbigpIHtcblx0XHR0aGlzLiR0YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdH1cblxuXHRjbG9zZSgpIHtcblx0XHR0aGlzLiR0YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fVxufVxuIiwiaW1wb3J0ICcuL2NoYXQtbGlzdC5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlRE9NV2l0aFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jcmVhdGVET01XaXRoU2VsZWN0b3InO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdExpc3RzIHtcblx0c3RhdGUgPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcih7ICRwYXJlbnQsIGluaXRpYWxTdGF0ZSB9KSB7XG5cdFx0dGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblx0XHR0aGlzLiR0YXJnZXQgPSBjcmVhdGVET01XaXRoU2VsZWN0b3IoJ3NlY3Rpb24nLCAnLmNoYXRPdXRsaW5lJyk7XG5cdFx0JHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLiR0YXJnZXQpO1xuXG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fVxuXG5cdHNldFN0YXRlKG5leHRTdGF0ZSkge1xuXHRcdHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCByZXN1bHQgPSB0aGlzLnN0YXRlXG5cdFx0XHQubWFwKChjaGF0KSA9PiB7XG5cdFx0XHRcdHJldHVybiBgXG5cdFx0XHRcdDxhcnRpY2xlIGNsYXNzPSdjaGF0Jz5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPSdjaGF0X19pbmZvJz5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPSdjaGF0X19uYW1lJz4ke2NoYXQubmFtZX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz0nY2hhdF9fY29udGVudCc+JHtjaGF0LmRlc2NyaXB0aW9ufTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY2hhdF9fcmlnaHRTaWRlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2NoYXRfX3RpbWUnPiR7Y2hhdC50aW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuY3JlYXRlQ2hhdENvdW50KGNoYXQuY291bnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPSdjaGF0X19pbWdzJyBzcmM9JHtjaGF0LmltZ1BhdGh9PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHRgO1xuXHRcdFx0fSlcblx0XHRcdC5qb2luKCcnKTtcblxuXHRcdHRoaXMuJHRhcmdldC5pbm5lckhUTUwgPSByZXN1bHQ7XG5cdH1cblxuXHRjcmVhdGVDaGF0Q291bnQoY291bnQpIHtcblx0XHRyZXR1cm4gY291bnQgPiAwXG5cdFx0XHQ/IGA8ZGl2IGNsYXNzPSdjaGF0X19jb3VudCc+PHNwYW4+JHtjb3VudH08L3NwYW4+PC9kaXY+YFxuXHRcdFx0OiBgYDtcblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0dGhpcy4kdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0dGhpcy4kdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdH1cbn1cbiIsImltcG9ydCAnLi9sYXJnZS1idXR0b24uY3NzJztcbmltcG9ydCB7IGNyZWF0ZURPTVdpdGhTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY3JlYXRlRE9NV2l0aFNlbGVjdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFyZ2VCdXR0b24ge1xuXHRzdGF0ZSA9ICcnO1xuXG5cdGNvbnN0cnVjdG9yKHsgJHBhcmVudCwgaW5pdGlhbFN0YXRlLCBvbkNsaWNrIH0pIHtcblx0XHR0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXHRcdGlmICh0aGlzLnN0YXRlID09PSAn7ZqM7JuQ6rCA7J6FJylcblx0XHRcdHRoaXMuJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3Rvcihcblx0XHRcdFx0J2J1dHRvbicsXG5cdFx0XHRcdCcubGFyZ2VCdXR0b24nLFxuXHRcdFx0XHQnLmRpc2FibGUnXG5cdFx0XHQpO1xuXHRcdGVsc2UgdGhpcy4kdGFyZ2V0ID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCdidXR0b24nLCAnLmxhcmdlQnV0dG9uJyk7XG5cblx0XHR0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xuXHRcdCRwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy4kdGFyZ2V0KTtcblxuXHRcdHRoaXMuJHRhcmdldC5pbm5lclRleHQgPSB0aGlzLnN0YXRlO1xuXHRcdHRoaXMuJHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHR0aGlzLm9uQ2xpY2soZSk7XG5cdFx0fSk7XG5cdH1cbn1cbiIsImltcG9ydCAnLi9uYXZpZ2F0aW9uLWJhci5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlRE9NV2l0aFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jcmVhdGVET01XaXRoU2VsZWN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uQmFyIHtcblx0c3RhdGUgPSAnJztcblx0JHRhcmdldCA9IG51bGw7XG5cdGlzVXNlciA9IGZhbHNlO1xuXHRpc01vZGFsID0gZmFsc2U7XG5cdGRvbmVJY29uID0gZmFsc2U7IC8vIOq4gOyTsOq4sCDrqqjrk5wg67OA7IiYXG5cdGFjdGl2ZURvbmVJY29uID0gZmFsc2U7IC8vIOq4gOyTsOq4sCDrqqjrk5wg67OA7IiYXG5cblx0Y29uc3RydWN0b3IoeyAkcGFyZW50LCBpbml0aWFsU3RhdGUsIG9uQ2xpY2ssIGlzTW9kYWwgPSBmYWxzZSB9KSB7XG5cdFx0dGhpcy5pc01vZGFsID0gaXNNb2RhbDtcblx0XHR0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXHRcdHRoaXMuc2V0VGFyZ2V0KGluaXRpYWxTdGF0ZSk7XG5cblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJHRhcmdldCk7XG5cblx0XHR0aGlzLiR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5iaW5kUHJldkJ1dHRvbkNsaWNrRXZlbnQoZSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLiRpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9faWNvbicpO1xuXHRcdHRoaXMub25DbGljayA9IG9uQ2xpY2s7XG5cblx0XHR0aGlzLiR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ25hdl9fZG9uZUFjdGl2ZScpIHtcblx0XHRcdFx0dGhpcy5vbkNsaWNrKCk7XG5cdFx0XHR9XG5cdFx0XHQvLyDstpTtm4Qg7LGE7YyFIOuCmOqwgOq4sOyXkCDrjIDtlZwg7J2067Kk7Yq464+EIOyXrOq4sCFcblx0XHR9KTtcblxuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblxuXHRzZXRTdGF0ZShuZXh0U3RhdGUpIHtcblx0XHQvLyDquIDsk7DquLAg66qo65Oc7JeQ7ISc66eMIOyCrOyaqVxuXHRcdGlmIChuZXh0U3RhdGUpIHRoaXMuYWN0aXZlRG9uZUljb24gPSB0cnVlO1xuXHRcdGVsc2UgdGhpcy5hY3RpdmVEb25lSWNvbiA9IGZhbHNlO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dGhpcy4kdGFyZ2V0LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9J25hdl9fcHJldicgc3JjPScvaWNvbnMvYXJyb3dfYmFja19ibGFjay5zdmcnLz5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICR7dGhpcy5zdGF0ZX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdl9faWNvbic+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmNyZWF0ZUV4aXRJY29uKCl9XG5cdFx0XHRcdCR7dGhpcy5jcmVhdGVEb25lSWNvbigpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cdH1cblxuXHRzZXRUYXJnZXQoaW5pdGlhbFN0YXRlKSB7XG5cdFx0c3dpdGNoIChpbml0aWFsU3RhdGUpIHtcblx0XHRcdGNhc2UgJ+uCtCDrj5nrhKQg7ISk7KCV7ZWY6riwJzpcblx0XHRcdGNhc2UgJ+2ajOybkOqwgOyehSc6XG5cdFx0XHRjYXNlICfroZzqt7jsnbgnOlxuXHRcdFx0Y2FzZSAn64K0IOqzhOyglSc6XG5cdFx0XHRjYXNlICfrqZTribQnOlxuXHRcdFx0Y2FzZSAn7Lm07YWM6rOg66asJzpcblx0XHRcdGNhc2UgJy0nOlxuXHRcdFx0XHR0aGlzLiR0YXJnZXQgPSBjcmVhdGVET01XaXRoU2VsZWN0b3IoJ25hdicsICcubmF2LS1ncmV5Jyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAn6riA7JOw6riwJzpcblx0XHRcdFx0dGhpcy4kdGFyZ2V0ID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCduYXYnLCAnLm5hdi0td2hpdGUnKTtcblx0XHRcdFx0dGhpcy5kb25lSWNvbiA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhpcy4kdGFyZ2V0ID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCduYXYnLCAnLm5hdi0td2hpdGUnKTtcblx0XHRcdFx0dGhpcy5pc1VzZXIgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRjcmVhdGVEb25lSWNvbigpIHtcblx0XHRpZiAodGhpcy5kb25lSWNvbikge1xuXHRcdFx0aWYgKHRoaXMuYWN0aXZlRG9uZUljb24pXG5cdFx0XHRcdHJldHVybiBgPGltZyBjbGFzcz0nbmF2X19kb25lQWN0aXZlJyBzcmM9XCIvaWNvbnMvZG9uZV9hY3RpdmUuc3ZnXCIgLz5gO1xuXHRcdFx0cmV0dXJuIGA8aW1nIGNsYXNzPSduYXZfX2RvbmUnIHNyYz1cIi9pY29ucy9kb25lLnN2Z1wiIC8+YDtcblx0XHR9XG5cdFx0cmV0dXJuIGBgO1xuXHR9XG5cblx0Y3JlYXRlRXhpdEljb24oKSB7XG5cdFx0aWYgKHRoaXMuaXNVc2VyKVxuXHRcdFx0cmV0dXJuIGA8aW1nIGNsYXNzPSduYXZfX2V4aXQnIHNyYz1cIi9pY29ucy9leGl0LnN2Z1wiIC8+YDtcblx0XHRyZXR1cm4gYGA7XG5cdH1cblxuXHRiaW5kUHJldkJ1dHRvbkNsaWNrRXZlbnQoZSkge1xuXHRcdGlmICh0aGlzLmlzTW9kYWwgPT09IHRydWUpIHtcblx0XHRcdHRoaXMub25DbGljayhlLCAwKTtcblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0KGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ25hdl9fcHJldicgJiYgdGhpcy5zdGF0ZSA9PT0gJ+uplOuJtCcpIHx8XG5cdFx0XHQoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnbmF2X19wcmV2JyAmJiB0aGlzLnN0YXRlID09PSAn64K0IOqzhOyglScpIHx8XG5cdFx0XHQoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnbmF2X19wcmV2JyAmJiB0aGlzLnN0YXRlID09PSAn66Gc6re47J24Jylcblx0XHQpIHtcblx0XHRcdHRoaXMub25DbGljayhlKTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRoaXN0b3J5LmJhY2soLTEpO1xuXHRcdFx0fSwgNDAwKTtcblx0XHR9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ25hdl9fcHJldicpIGhpc3RvcnkuYmFjaygtMSk7XG5cdH1cbn1cbiIsImltcG9ydCAnLi9wcm9kdWN0LWxpc3QuY3NzJztcbmltcG9ydCB7IGNyZWF0ZURPTVdpdGhTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY3JlYXRlRE9NV2l0aFNlbGVjdG9yJztcbi8vIGltcG9ydCBQcm9kdWN0TW9kYWwgZnJvbSAnLi4vcHJvZHVjdC1tb2RhbC9wcm9kdWN0LW1vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdExpc3RzIHtcblx0c3RhdGUgPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcih7ICRwYXJlbnQsIGluaXRpYWxTdGF0ZSwgcmVmcmVzaFN0YXRlIH0pIHtcblx0XHR0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXHRcdHRoaXMuJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3Rvcignc2VjdGlvbicsICcucHJvZHVjdE91dGxpbmUnKTtcblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJHRhcmdldCk7XG5cblx0XHR0aGlzLnJlZnJlc2hTdGF0ZSA9IHJlZnJlc2hTdGF0ZTtcblxuXHRcdHRoaXMucmVuZGVyKCk7XG5cdFx0Lyp0aGlzLnByb2R1Y3RNb2RhbCA9IG5ldyBQcm9kdWN0TW9kYWwoe1xuXHRcdFx0JHBhcmVudDogdGhpcy4kdGFyZ2V0LFxuXHRcdH0pOyDrs7TrpZg7ICovXG5cdH1cblxuXHRzZXRTdGF0ZShuZXh0U3RhdGUpIHtcblx0XHR0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dGhpcy4kdGFyZ2V0LmlubmVySFRNTCA9IHRoaXMuY3JlYXRlVmlldygpO1xuXHRcdHRoaXMub2JzZXJ2ZVRhZygpO1xuXHR9XG5cblx0Y3JlYXRlVmlldygpIHtcblx0XHQvKlxuXHRcdFx0cGvrpbwg7J207Jqp7ZW0IGRhdGEtbGluayDsl5Ag7IK97J6FXG5cdFx0Ki9cblx0XHRyZXR1cm4gKFxuXHRcdFx0dGhpcy5zdGF0ZVxuXHRcdFx0XHQubWFwKChwcm9kdWN0KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGBcblx0XHRcdDxhcnRpY2xlIGNsYXNzPSdwcm9kdWN0Jz5cblx0XHRcdFx0XG5cdFx0XHRcdDxpbWcgY2xhc3M9J3Byb2R1Y3RfX2ltZ3MnIHNyYz0ke3Byb2R1Y3QuaW1nUGF0aH0gZGF0YS1saW5rPScvZGV0YWlsJz5cblx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPSdwcm9kdWN0X19pbmZvJz5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz0ncHJvZHVjdF9fbmFtZScgZGF0YS1saW5rPScvZGV0YWlsJz4ke3Byb2R1Y3QubmFtZX08L3NwYW4+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPSdwcm9kdWN0X19sb2NhdGlvbicgZGF0YS1saW5rPScvZGV0YWlsJz4ke3Byb2R1Y3QubG9jYXRpb259IOKImTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPSdwcm9kdWN0X190aW1lJyBkYXRhLWxpbms9Jy9kZXRhaWwnPiR7cHJvZHVjdC50aW1lfTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz0ncHJvZHVjdF9fcHJpY2UnIGRhdGEtbGluaz0nL2RldGFpbCc+JHtwcm9kdWN0LnByaWNlfTwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQke1xuXHRcdFx0XHRcdHRoaXMuaXNVc2VyT3duUHJvZHVjdChwcm9kdWN0LnNlbGxlciwgcHJvZHVjdC51c2VyKVxuXHRcdFx0XHRcdFx0PyB0aGlzLmNyZWF0ZU9wdGlvbkJ1dHRvbigpXG5cdFx0XHRcdFx0XHQ6IHRoaXMuY3JlYXRlTGlrZUJ1dHRvbihwcm9kdWN0Lmxpa2UpXG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdFxuXG5cdFx0XHRcdDxkaXYgY2xhc3M9J3JpZ2h0Qm90dG9tJyA+XG5cdFx0XHRcdFx0JHt0aGlzLmNyZWF0ZUNoYXRDb3VudChwcm9kdWN0LmNoYXRDb3VudCl9XG5cdFx0XHRcdFx0JHt0aGlzLmNyZWF0ZUxpa2VDb3VudChwcm9kdWN0Lmxpa2VDb3VudCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFxuXHRcdFx0PC9hcnRpY2xlPlxuXHRcdGA7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5qb2luKCcnKSArIGA8ZGl2IGlkPVwiZW5kXCIgY2xhc3M9J3Byb2R1Y3QnPjwvZGl2PmBcblx0XHQpO1xuXG5cdFx0Lypcblx0XHRcdOqzoOugpO2VoCDrtoDrtoQhXG5cdFx0XHQxLiB1c2Vy7JmAIOq3uCDsg4Htkogg7KO87J247J24IOqyveyasCA6IGxpa2Ug64yA7IugICc6JyDslYTsnbTsvZhcblx0XHRcdDIuIHByb2R1Y3Tsl5AgdXNlciBpZCBmaWVsZCDrhKPslrTshJwgdXNlcmlk7JmAIOu5hOq1kO2VnOuLpC5cblx0XHRcdDMuIGxpa2Ug66qo64247J20IOuUsOuhnCDtlYTsmpTtlaDrk68/IHVzZXLsmYAgcHJvZHVjdOulvCDsl67snYBcblx0XHQqL1xuXHR9XG5cdGlzVXNlck93blByb2R1Y3Qoc2VsbGVyLCB1c2VyKSB7XG5cdFx0cmV0dXJuIHNlbGxlciA9PT0gdXNlcjtcblx0fVxuXG5cdGNyZWF0ZU9wdGlvbkJ1dHRvbigpIHtcblx0XHRyZXR1cm4gYDxpbWcgY2xhc3M9XCJwcm9kdWN0X19vcHRpb25cIiBzcmM9XCIvaWNvbnMvbW9yZV92ZXJ0X2dyZXkuc3ZnXCIgLz5gO1xuXHR9XG5cblx0Y3JlYXRlTGlrZUJ1dHRvbihsaWtlKSB7XG5cdFx0cmV0dXJuIGxpa2UgPT09ICdUJ1xuXHRcdFx0PyBgPGltZyBjbGFzcz1cInByb2R1Y3RfX2xpa2VcIiBzcmM9XCIvaWNvbnMvZmF2b3JpdGUuc3ZnXCIgLz5gXG5cdFx0XHQ6IGA8aW1nXG5cdFx0XHRcdFx0Y2xhc3M9XCJwcm9kdWN0X19saWtlXCJcblx0XHRcdFx0XHRzcmM9XCIvaWNvbnMvZmF2b3JpdGVfYm9yZGVyX21pbmkuc3ZnXCJcblx0XHRcdFx0Lz5gO1xuXHR9XG5cblx0Y3JlYXRlQ2hhdENvdW50KGNvdW50KSB7XG5cdFx0cmV0dXJuIGNvdW50ID4gMFxuXHRcdFx0PyBgPGltZyBjbGFzcz0ncmlnaHRCb3R0b21fX2NoYXQnIHNyYz0nL2ljb25zL2NoYXRfYnViYmxlX21pbmkuc3ZnJyAvPlxuXHRcdFx0XHRcdFx0PHNwYW4+JHtjb3VudH08L3NwYW4+YFxuXHRcdFx0OiBgYDtcblx0fVxuXG5cdGNyZWF0ZUxpa2VDb3VudChjb3VudCkge1xuXHRcdHJldHVybiBjb3VudCA+IDBcblx0XHRcdD8gYDxpbWcgY2xhc3M9J3JpZ2h0Qm90dG9tX19saWtlJyBzcmM9Jy9pY29ucy9mYXZvcml0ZV9ib3JkZXJfbWluaS5zdmcnIC8+XG5cdFx0XHRcdFx0XHQ8c3Bhbj4ke2NvdW50fTwvc3Bhbj5gXG5cdFx0XHQ6IGBgO1xuXHR9XG5cblx0b2JzZXJ2ZVRhZygpIHtcblx0XHQvLyBsYXp5IGxvYWRpbmcgLCBpbmZpbml0ZSBTY3JvbGwg64u064u5XG5cdFx0Y29uc3Qgb2JzZXJ2ZXJDYWxsYmFjayA9IChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xuXHRcdFx0ZW50cmllcy5mb3JFYWNoKGFzeW5jIChlbnRyeSkgPT4ge1xuXHRcdFx0XHRpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcblx0XHRcdFx0XHRpZiAoZW50cnkudGFyZ2V0LmlkID09PSAnZW5kJykge1xuXHRcdFx0XHRcdFx0b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG5cblx0XHRcdFx0XHRcdC8vIGVuZFRhZy5jbGFzc0xpc3QuYWRkKCdzcGlubmVyJyk7XG5cdFx0XHRcdFx0XHQvLyBlbmRUYWcuaW5uZXJIVE1MID0gYDxpbWcgY2xhc3M9J3JpZ2h0Qm90dG9tX19saWtlJyBzcmM9Jy9pY29ucy9sb2FkaW5nLWxvYWRlci1zdmdyZXBvLWNvbS5zdmcnIC8+YDtcblxuXHRcdFx0XHRcdFx0Ly8gY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5yYW5kb21DYXRzKCk7XG5cdFx0XHRcdFx0XHQvLyBpZiAoZGF0YS5zdWNjZXNzKSB7XG5cblx0XHRcdFx0XHRcdC8vIGlmIChkYXRhLmRhdGEubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0Ly8gXHR0aGlzLnJlZnJlc2hTdGF0ZShbLi4udGhpcy5zdGF0ZSwgLi4uZGF0YS5kYXRhXSk7XG5cdFx0XHRcdFx0XHQvLyAgZW5kVGFnLmlubmVySFRNTCA9ICcnXG5cdFx0XHRcdFx0XHQvLyBlbmRUYWcuY2xhc3NMaXN0LnJlbW92ZSgnc3Bpbm5lcicpO1xuXHRcdFx0XHRcdFx0Ly8gfSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIGVuZFRhZy5jbGFzc0xpc3QucmVtb3ZlKCdzcGlubmVyJyk7XG5cdFx0XHRcdFx0XHRlbmRUYWcuaW5uZXJUZXh0ID0gYOKdl05vIE1vcmUgU3R1ZmbinZdgO1xuXG5cdFx0XHRcdFx0XHQvLyB9XG5cblx0XHRcdFx0XHRcdC8vIH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBcdGFsZXJ0KGRhdGEubWVzc2FnZSk7XG5cdFx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRjb25zdCBlbmRUYWcgPSB0aGlzLiR0YXJnZXQucXVlcnlTZWxlY3RvcignI2VuZCcpO1xuXHRcdGNvbnN0IGl0ZW1zID0gdGhpcy4kdGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0Jyk7XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjayk7XG5cdFx0aXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShpdGVtKSk7XG5cdH1cblxuXHRvcGVuKCkge1xuXHRcdHRoaXMuJHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdHRoaXMuJHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHR9XG59XG4iLCJpbXBvcnQgJy4vcHJvZHVjdC1tb2RhbC5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlRE9NV2l0aFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jcmVhdGVET01XaXRoU2VsZWN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0TW9kYWwge1xuXHRjb25zdHJ1Y3Rvcih7ICRwYXJlbnQsIG9uQ2xpY2sgfSkge1xuXHRcdHRoaXMuJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignZGl2JywgJy5wcm9kdWN0TW9kYWwnKTtcblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJHRhcmdldCk7XG5cblx0XHR0aGlzLiR0YXJnZXQuaW5uZXJIVE1MID0gYFxuXHRcdFx0PGRpdiBjbGFzcz0ncHJvZHVjdE1vZGFsX193cmFwcGVyJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdE1vZGFsX19vdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RNb2RhbF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdE1vZGFsX191cGRhdGVcIj7siJjsoJXtlZjquLA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RNb2RhbF9fZGVsZXRlXCI+7IKt7KCc7ZWY6riwPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHQ8L2Rpdj5cbiAgICAgICAgICAgICAgYDtcblxuXHRcdHRoaXMuJHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRvbkNsaWNrKGUpO1xuXHRcdH0pO1xuXHR9XG5cblx0b3BlbigpIHtcblx0XHR0aGlzLiR0YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdH1cblxuXHRjbG9zZSgpIHtcblx0XHR0aGlzLiR0YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlRE9NV2l0aFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jcmVhdGVET01XaXRoU2VsZWN0b3InO1xuaW1wb3J0ICcuL3JlZGlyZWN0LmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZGlyZWN0IHtcblx0c3RhdGUgPSB7XG5cdFx0bGluazogJycsXG5cdFx0bWVzc2FnZTogJycsXG5cdFx0c3RhdHVzOiAnJyxcblx0XHRjb250ZW50OiAnJyxcblx0fTtcblx0Y29uc3RydWN0b3IoeyAkcGFyZW50LCBpbml0aWFsU3RhdGUgfSkge1xuXHRcdHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cdFx0dGhpcy4kdGFyZ2V0ID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCdkaXYnLCAnLnJlZGlyZWN0Jyk7XG5cdFx0JHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLiR0YXJnZXQpO1xuXHRcdHRoaXMuJHRhcmdldC5pbm5lckhUTUwgPSBgXG5cdFx0ICAgIDxidXR0b24gY2xhc3M9J3JlZGlyZWN0X19idXR0b24nIGRhdGEtbGluaz0ke3RoaXMuc3RhdGUubGlua30+JHt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9idXR0b24+XG5cdFx0ICAgIDxpbWcgc3JjPVwiL2ltZ3Mvbm90Zm91bmQuZ2lmXCI+XG5cdFx0ICAgIDxoMT4ke3RoaXMuc3RhdGUuc3RhdHVzfTwvaDE+XG5cdFx0ICAgIDxkaXY+JHt0aGlzLnN0YXRlLmNvbnRlbnR9PC9kaXY+XG5cdFx0YDtcblx0fVxufVxuIiwiaW1wb3J0ICcuL2Zvb3Rlci5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlRE9NV2l0aFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jcmVhdGVET01XaXRoU2VsZWN0b3InO1xuaW1wb3J0IHtcblx0RkFWT1JJVEVfSUNPTixcblx0RkFWT1JJVEVfQk9SREVSX01JTklfSUNPTixcbn0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2ljb24tcGF0aCc7XG5cbmNvbnN0IGlzVXNlck93blByb2R1Y3QgPSAoc2VsbGVyLCB1c2VyKSA9PiBzZWxsZXIgPT09IHVzZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciB7XG5cdGNvbnN0cnVjdG9yKHsgJHBhcmVudCwgaW5pdGlhbFN0YXRlIH0pIHtcblx0XHR0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXHRcdHRoaXMud2lzaEljb25PbiA9IGZhbHNlOyAvLyBhcGkg6rWs7ZiEIOydtOyghOydtOuvgOuhnCDsnoTsi5zroZwg64Sj7J2MXG5cdFx0Lypcblx0XHRcdEFQSSDsmpTssq3snLzroZwgd2lzaEljb25PbiDsiJjsoJVcblx0XHRcdFxuXHRcdFx0Z2V0SXNQcm9kdWN0V2lzaGVkQnlVc2VyKClcblx0XHRcdC5yZXNvbHZlKCgpPT4ge1xuXHRcdFx0XHR0aGlzLndpc2hJY29uT24gPSByZXN1bHQ/O1xuXHRcdFx0fSlcblx0XHRcdC5yZWplY3QoKCkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcImFwaSDsmpTssq0g7JeQ65+sXCIpO1xuXHRcdFx0fSlcblx0XHQqL1xuXHRcdHRoaXMuJGZvb3RlciA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignZm9vdGVyJywgJy5kZXRhaWxfX2Zvb3RlcicpO1xuXG5cdFx0dGhpcy4kZm9vdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy53aXNoSWNvbkhhbmRsZXIpO1xuXG5cdFx0JHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLiRmb290ZXIpO1xuXG5cdFx0dGhpcy4kZm9vdGVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3dpc2gnPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuY3JlYXRlV2lzaEltZ0J1dHRvblRlbXBsYXRlKCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZlcnRpY2FsLWxpbmUnPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+JHt0aGlzLnN0YXRlLnByaWNlfeybkDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAke3RoaXMuY3JlYXRlT3B0aW9uQnV0dG9uVGVtcGxhdGUoKX1cbiAgICAgICAgYDtcblx0fVxuXG5cdHNldFN0YXRlKCkge31cblxuXHRyZW5kZXIoKSB7fVxuXG5cdGNyZWF0ZVdpc2hJbWdCdXR0b25UZW1wbGF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy53aXNoSWNvbk9uXG5cdFx0XHQ/IGA8aW1nIHNyYz0ke0ZBVk9SSVRFX0lDT059IGNsYXNzPSd3aXNoLWljb24nIC8+YFxuXHRcdFx0OiBgPGltZyBzcmM9JHtGQVZPUklURV9CT1JERVJfTUlOSV9JQ09OfSBjbGFzcz0nd2lzaC1pY29uJyAvPmA7XG5cdH1cblxuXHRjcmVhdGVPcHRpb25CdXR0b25UZW1wbGF0ZSgpIHtcblx0XHRyZXR1cm4gYFxuXHRcdDxidXR0b24gXG5cdFx0XHRcdGNsYXNzPVwib3B0aW9uLWJ1dHRvblwiXG5cdFx0XHRcdGRhdGEtbGluaz1cIiR7XG5cdFx0XHRcdFx0aXNVc2VyT3duUHJvZHVjdCh0aGlzLnN0YXRlLnNlbGxlciwgdGhpcy5zdGF0ZS51c2VyKVxuXHRcdFx0XHRcdFx0PyAnL2NoYXQnXG5cdFx0XHRcdFx0XHQ6ICcvY2hhdC8xMCdcblx0XHRcdFx0fVxuXHRcdFx0XCI+XG5cdFx0XHQke1xuXHRcdFx0XHRpc1VzZXJPd25Qcm9kdWN0KHRoaXMuc3RhdGUuc2VsbGVyLCB0aGlzLnN0YXRlLnVzZXIpXG5cdFx0XHRcdFx0PyAn7LGE7YyFIOuqqeuhnSDrs7TquLAnXG5cdFx0XHRcdFx0OiAn66y47J2Y7ZWY6riwJ1xuXHRcdFx0fVxuXHRcdFx0PC9idXR0b24+XG5cdFx0YDtcblx0fVxuXG5cdHdpc2hJY29uSGFuZGxlcih7IHRhcmdldCB9KSB7XG5cdFx0Ly8g7J2067Kk7Yq4IOychOyehCDrsKnsi51cblx0XHRpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3dpc2gtaWNvbicpIHtcblx0XHRcdGNvbnN0IGNoYW5nZVdpc2hJY29uU3RhdGUgPSAodGFyZ2V0KSA9PiB7XG5cdFx0XHRcdHRhcmdldC5zcmMgPSB0aGlzLndpc2hJY29uT25cblx0XHRcdFx0XHQ/IEZBVk9SSVRFX0lDT05cblx0XHRcdFx0XHQ6IEZBVk9SSVRFX0JPUkRFUl9NSU5JX0lDT047XG5cdFx0XHR9O1xuXG5cdFx0XHRsZXQgcmVzcG9uc2UgPSB7IHN0YXR1c0NvZGU6IDIwMCB9OyAvLyDqsJzrsJwg64uo6rOEIOyehOyLnCDrs4DsiJhcblxuXHRcdFx0Lypcblx0XHRcdFx0QVBJIOyalOyyreycvOuhnCB3aXNoSWNvbk9uIOyImOyglVxuXHRcdFx0XHTsnKDsoIDqsIAg7J20IOyVhOydtO2FnOydhCDsoovslYTtlZjripTsp4Ag7ISc67KE7JeQIOyhsO2ajO2VnCDqsrDqs7zqsJLsnYQg6riw7KSA7Jy866GcIOuNsOydtO2EsOqwgCDsobTsnqztlZzri6TrqbRcblx0XHRcdFx0dGhpcy53aXNoSWNvbk9uID0g7JqU7LKt6rKw6rO8O1xuXG5cdFx0XHRcdHRoaXMucG9zdFdpc2hTdGF0ZUJ5VXNlcigpXG5cdFx0XHRcdC5yZXNvbHZlKCgpID0+IHtcblx0XHRcdFx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XG5cdFx0XHRcdFx0XHR0aGlzLndpc2hJY29uT24gPSAhdGhpcy53aXNoSWNvbk9uO1xuXHRcdFx0XHRcdFx0Y2hhbmdlV2lzaEljb25TdGF0ZSh0YXJnZXQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0LnJlamVjdChjYWxsYmFjaylcblx0XHRcdCovXG5cblx0XHRcdGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID09PSAyMDApIHtcblx0XHRcdFx0dGhpcy53aXNoSWNvbk9uID0gIXRoaXMud2lzaEljb25Pbjtcblx0XHRcdFx0Y2hhbmdlV2lzaEljb25TdGF0ZSh0YXJnZXQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGdldElzUHJvZHVjdFdpc2hlZEJ5VXNlcigpIHtcblx0XHQvKipcblx0XHQgKiBnZXQgYXBpIOyalOyyrVxuXHRcdCAqL1xuXHRcdC8vIHJldHVybiBuZXcgUHJvbWlzZSgpO1xuXHR9XG5cblx0cG9zdFdpc2hTdGF0ZUJ5VXNlcigpIHtcblx0XHQvKipcblx0XHQgKiBwb3N0IGFwaSDsmpTssq1cblx0XHQgKi9cblx0XHQvLyAgcmV0dXJuIG5ldyBQcm9taXNlKCk7XG5cdH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZURPTVdpdGhTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY3JlYXRlRE9NV2l0aFNlbGVjdG9yJztcbmltcG9ydCAnLi9pbWctY29udGFpbmVyLmNzcyc7XG5cbmNvbnN0IGlzQ2xhc3NTZWxlY3RvciA9IChzZWxlY3RvcikgPT4gc2VsZWN0b3JbMF0gPT09ICcuJztcblxuY29uc3QgY3JlYXRlQnV0dG9uID0gKHRleHQsIC4uLnNlbGVjdG9ycykgPT4ge1xuXHRjb25zdCBidXR0b24gPSBjcmVhdGVET01XaXRoU2VsZWN0b3IoJ2J1dHRvbicsIC4uLnNlbGVjdG9ycyk7XG5cdGJ1dHRvbi5pbm5lclRleHQgPSB0ZXh0O1xuXHRyZXR1cm4gYnV0dG9uO1xufTtcblxuY29uc3QgY3JlYXRlSW1nVGVtcGxhdGUgPSAoc3JjLCAuLi5zZWxlY3RvcnMpID0+IHtcblx0cmV0dXJuIGAgXG5cdFx0PGltZyBjbGFzcz1cIiR7c2VsZWN0b3JzXG5cdFx0XHQuZmlsdGVyKGlzQ2xhc3NTZWxlY3Rvcilcblx0XHRcdC5tYXAoKHNlbGVjdG9yKSA9PiBzZWxlY3Rvci5zbGljZSgxKSlcblx0XHRcdC5qb2luKCcgJyl9XCIgc3JjPSR7c3JjfSAvPlxuXHRgO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1nQ29udGFpbmVyIHtcblx0Y29uc3RydWN0b3IoeyAkcGFyZW50LCBpbml0aWFsU3RhdGUgfSkge1xuXHRcdHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cdFx0dGhpcy4kcGFyZW50ID0gJHBhcmVudDtcblx0XHR0aGlzLmN1cnJlbnRJbWdJbmRleCA9IDA7XG5cdFx0dGhpcy4kaW1nQ29udGFpbmVyID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCdkaXYnLCAnLmltZy1jb250YWluZXInKTtcblx0XHR0aGlzLiRpbWdDb250YWluZXIuc3R5bGUud2lkdGggPSBgJHsyMCAqIHRoaXMuc3RhdGUubGVuZ3RofXJlbWA7XG5cdFx0JHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLiRpbWdDb250YWluZXIpO1xuXG5cdFx0Lypcblx0XHTsnbTrr7jsp4Ag7Luo7YWM7J2064SI66W8IOybgOyngeydtOuKlCDrsoTtirzsnYQg7IOd7ISx7ZWp64uI64ukLlxuXHRcdCovXG5cblx0XHR0aGlzLiRwcmV2QnV0dG9uID0gY3JlYXRlQnV0dG9uKCc8JywgJy5tb3ZlJywgJy5wcmV2Jyk7XG5cdFx0dGhpcy4kbmV4dEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignPicsICcubW92ZScsICcubmV4dCcpO1xuXG5cdFx0Y29uc3QgaXNPdXRPZkJvdW5kID0gKG1vdmUpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHRoaXMuY3VycmVudEltZ0luZGV4ICsgbW92ZSA+PSB0aGlzLnN0YXRlLmxlbmd0aCB8fFxuXHRcdFx0XHR0aGlzLmN1cnJlbnRJbWdJbmRleCArIG1vdmUgPCAwXG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRjb25zdCBtb3ZlUHJldk9yTmV4dEhhbmRsZXIgPSAobW92ZSkgPT4ge1xuXHRcdFx0aWYgKGlzT3V0T2ZCb3VuZChtb3ZlKSkgcmV0dXJuO1xuXHRcdFx0dGhpcy4kaW1nQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtcblx0XHRcdFx0LTIwICogKHRoaXMuY3VycmVudEltZ0luZGV4ICsgbW92ZSlcblx0XHRcdH1yZW0pYDtcblx0XHRcdHRoaXMuY3VycmVudEltZ0luZGV4ICs9IG1vdmU7XG5cdFx0fTtcblxuXHRcdHRoaXMuJHByZXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuXHRcdFx0bW92ZVByZXZPck5leHRIYW5kbGVyKC0xKVxuXHRcdCk7XG5cblx0XHR0aGlzLiRuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cblx0XHRcdG1vdmVQcmV2T3JOZXh0SGFuZGxlcigxKVxuXHRcdCk7XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlO1xuXHRcdFx0Y29uc29sZS5sb2coJ3B1c2hlZCBrZXkgJyArIGUua2V5KTtcblxuXHRcdFx0aWYgKGtleUNvZGUgPT0gMzcpIHtcblx0XHRcdFx0Ly8gbGVmdCBrZXlcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRtb3ZlUHJldk9yTmV4dEhhbmRsZXIoLTEpO1xuXHRcdFx0fSBlbHNlIGlmIChrZXlDb2RlID09IDM5KSB7XG5cdFx0XHRcdC8vIHJpZ2h0IGtleVxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdG1vdmVQcmV2T3JOZXh0SGFuZGxlcigxKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMuJGJ1dHRvbkNvbnRhaW5lciA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignZGl2JywgJy5uZXh0LWFuZC1wcmV2Jyk7XG5cdFx0dGhpcy4kYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJHByZXZCdXR0b24pO1xuXHRcdHRoaXMuJGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiRuZXh0QnV0dG9uKTtcblxuXHRcdCRwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy4kYnV0dG9uQ29udGFpbmVyKTtcblxuXHRcdHRoaXMuJGltZ0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXG5cdFx0XHQke3RoaXMuc3RhdGUubWFwKChzcmMpID0+IGNyZWF0ZUltZ1RlbXBsYXRlKHNyYywgJy5ncmFkaWVudCcpKS5qb2luKCdcXG4nKX1cdFxuXHRcdGA7XG5cblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0cmVuZGVyKCkge31cbn1cbiIsImltcG9ydCB7IGNyZWF0ZURPTVdpdGhTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY3JlYXRlRE9NV2l0aFNlbGVjdG9yJztcbmltcG9ydCAnLi9pbmZvLWNvbnRhaW5lci5jc3MnO1xuXG5jb25zdCBTVEFUVVMgPSBbJ+2MkOunpOykkScsICfsmIjslb3spJEnLCAn7YyQ66ek7JmE66OMJ107XG5cbmNvbnN0IGlzVXNlck93blByb2R1Y3QgPSAoc2VsbGVyLCB1c2VyKSA9PiBzZWxsZXIgPT09IHVzZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZm9Db250YWluZXIge1xuXHRjb25zdHJ1Y3Rvcih7ICRwYXJlbnQsIGluaXRpYWxTdGF0ZSB9KSB7XG5cdFx0dGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblx0XHR0aGlzLiRpbmZvQ29udGFpbmVyID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCdkaXYnLCAnLmluZm8tY29udGFpbmVyJyk7XG5cdFx0JHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLiRpbmZvQ29udGFpbmVyKTtcblxuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgY3JlYXRlU3RhdHVzU2VsZWN0QnV0dG9uVGVtcGxhdGUgPSAoeyBzdGF0dXMsIHNlbGxlciwgdXNlciB9KSA9PiB7XG5cdFx0XHRzdGF0dXMgPSBNYXRoLm1pbihzdGF0dXMsIDIpO1xuXG5cdFx0XHRyZXR1cm4gaXNVc2VyT3duUHJvZHVjdChzZWxsZXIsIHVzZXIpXG5cdFx0XHRcdD8gYFxuXHRcdFx0XHRcdDxzZWxlY3QgbmFtZT1cInN0YXR1c1wiIHZhbHVlPSR7c3RhdHVzfSBjbGFzcz1cImluZm8gc3RhdHVzXCI+XG5cdFx0XHRcdFx0JHtTVEFUVVMubWFwKChzdGF0LCBpKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc3RhdHVzID09PSBpXG5cdFx0XHRcdFx0XHRcdD8gYDxvcHRpb24gdmFsdWU9JHtpfSBzZWxlY3RlZD1cInNlbGVjdGVkXCJ9PiR7c3RhdH08L29wdGlvbj5gXG5cdFx0XHRcdFx0XHRcdDogYDxvcHRpb24gdmFsdWU9JHtpfSB9PiR7c3RhdH08L29wdGlvbj5gO1xuXHRcdFx0XHRcdH0pLmpvaW4oJ1xcbicpfVxuXHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRgXG5cdFx0XHRcdDogJyc7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNyZWF0ZVByb2R1Y3RIZWFkZXJUZW1wbGF0ZSA9ICh7XG5cdFx0XHR0aXRsZSxcblx0XHRcdGNhdGVnb3J5LFxuXHRcdFx0Y3JlYXRlZEF0LFxuXHRcdH0pID0+IHtcblx0XHRcdHJldHVybiBgXG5cdFx0XHRcdDxkaXYgY2xhc3M9J2luZm8nPlxuXHRcdFx0XHRcdDxoMT4ke3RpdGxlfTwvaDE+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz0nc3ViLWhlYWRlci1jb250YWluZXInPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9J2dyZXktdGV4dCBzbWFsbC10ZXh0Jz4ke2NhdGVnb3J5feKImSR7Y3JlYXRlZEF0fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRgO1xuXHRcdH07XG5cblx0XHRjb25zdCBjcmVhdGVQcm9kdWN0RGVzY3JpcHRpb25UZW1wbGF0ZSA9ICh7IGRlc2NyaXB0aW9uIH0pID0+IHtcblx0XHRcdHJldHVybiBgPGRpdiBjbGFzcz0naW5mbyBkZXNjcmlwdGlvbic+JHtkZXNjcmlwdGlvbn08L2Rpdj5gO1xuXHRcdH07XG5cblx0XHRjb25zdCBjcmVhdGVQcm9kdWN0Q291bnRJbmZvVGVtcGxhdGUgPSAoe1xuXHRcdFx0Y2hhdENvdW50LFxuXHRcdFx0d2lzaENvdW50LFxuXHRcdFx0dmlzaXRDb3VudCxcblx0XHR9KSA9PiB7XG5cdFx0XHRyZXR1cm4gYFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPSdpbmZvIGNvdW50IHN1Yi1oZWFkZXItY29udGFpbmVyJz5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz0nZ3JleS10ZXh0IHNtYWxsLXRleHQnPuyxhO2MhSAke2NoYXRDb3VudH3iiJnqtIDsi6wgJHt3aXNoQ291bnR94oiZ7KGw7ZqMICR7dmlzaXRDb3VudH08L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0YDtcblx0XHR9O1xuXG5cdFx0Y29uc3QgY3JlYXRlUHJvZHVjdFNlbGxlckluZm9UZW1wbGF0ZSA9ICh7IHNlbGxlciwgbG9jYXRpb24gfSkgPT4ge1xuXHRcdFx0cmV0dXJuIGBcblx0XHRcdFx0PGRpdiBjbGFzcz0naW5mbyBzZWxsZXIgc21hbGwtdGV4dCc+XG5cdFx0XHRcdFx0PGRpdj7tjJDrp6TsnpAg7KCV67O0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxzcGFuPiR7c2VsbGVyfTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPSdncmV5Mi10ZXh0Jz4ke2xvY2F0aW9ufTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRgO1xuXHRcdH07XG5cblx0XHR0aGlzLiRpbmZvQ29udGFpbmVyLmlubmVySFRNTCA9IGBcblx0XHRcdCR7Y3JlYXRlU3RhdHVzU2VsZWN0QnV0dG9uVGVtcGxhdGUodGhpcy5zdGF0ZSl9XG5cdFx0XHQke2NyZWF0ZVByb2R1Y3RIZWFkZXJUZW1wbGF0ZSh0aGlzLnN0YXRlKX1cblx0XHRcdCR7Y3JlYXRlUHJvZHVjdERlc2NyaXB0aW9uVGVtcGxhdGUodGhpcy5zdGF0ZSl9XG5cdFx0XHQke2NyZWF0ZVByb2R1Y3RDb3VudEluZm9UZW1wbGF0ZSh0aGlzLnN0YXRlKX1cblx0XHRcdCR7Y3JlYXRlUHJvZHVjdFNlbGxlckluZm9UZW1wbGF0ZSh0aGlzLnN0YXRlKX1cblx0XHRgO1xuXHR9XG59XG4iLCJpbXBvcnQgJy4vc2VjdGlvbi5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlRE9NV2l0aFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jcmVhdGVET01XaXRoU2VsZWN0b3InO1xuaW1wb3J0IEltZ0NvbnRhaW5lciBmcm9tICcuL2ltZy1jb250YWluZXIvaW1nLWNvbnRhaW5lcic7XG5pbXBvcnQgSW5mb0NvbnRhaW5lciBmcm9tICcuL2luZm8tY29udGFpbmVyL2luZm8tY29udGFpbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlsU2VjdGlvbiB7XG5cdCRpbWdDb250YWluZXIgPSBudWxsO1xuXHRpbmRleCA9IDA7XG5cblx0Y29uc3RydWN0b3IoeyAkcGFyZW50LCBpbml0aWFsU3RhdGUgfSkge1xuXHRcdHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cdFx0dGhpcy4kc2VjdGlvbiA9IGNyZWF0ZURPTVdpdGhTZWxlY3Rvcignc2VjdGlvbicsICcuc2VjdGlvbicpO1xuXG5cdFx0dGhpcy4kaW1nQ29udGFpbmVyV3JhcHBlciA9IGNyZWF0ZURPTVdpdGhTZWxlY3Rvcihcblx0XHRcdCdkaXYnLFxuXHRcdFx0Jy5pbWctY29udGFpbmVyLXdyYXBwZXInXG5cdFx0KTtcblxuXHRcdHRoaXMuJGluZm9Db250YWluZXJXcmFwcGVyID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKFxuXHRcdFx0J2RpdicsXG5cdFx0XHQnLmluZm8tY29udGFpbmVyLXdyYXBwZXInXG5cdFx0KTtcblxuXHRcdHRoaXMuJGltZ0NvbnRhaW5lciA9IG5ldyBJbWdDb250YWluZXIoe1xuXHRcdFx0JHBhcmVudDogdGhpcy4kaW1nQ29udGFpbmVyV3JhcHBlcixcblx0XHRcdGluaXRpYWxTdGF0ZTogdGhpcy5zdGF0ZS5pbWdQYXRoLFxuXHRcdH0pO1xuXG5cdFx0dGhpcy4kaW5mb0NvbnRhaW5lciA9IG5ldyBJbmZvQ29udGFpbmVyKHtcblx0XHRcdCRwYXJlbnQ6IHRoaXMuJGluZm9Db250YWluZXJXcmFwcGVyLFxuXHRcdFx0aW5pdGlhbFN0YXRlOiB0aGlzLnN0YXRlLFxuXHRcdH0pO1xuXG5cdFx0dGhpcy4kc2VjdGlvbi5hcHBlbmRDaGlsZCh0aGlzLiRpbWdDb250YWluZXJXcmFwcGVyKTtcblx0XHR0aGlzLiRzZWN0aW9uLmFwcGVuZENoaWxkKHRoaXMuJGluZm9Db250YWluZXJXcmFwcGVyKTtcblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJHNlY3Rpb24pO1xuXG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fVxuXHRzZXRTdGF0ZSgpIHt9XG5cblx0cmVuZGVyKCkge31cbn1cbiIsImltcG9ydCAnLi90b29sLWJhci5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlRE9NV2l0aFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jcmVhdGVET01XaXRoU2VsZWN0b3InO1xuaW1wb3J0IHsgQVJST1dfQkFDS19JQ09OLCBNT1JFX1ZFUlRfSUNPTiB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9pY29uLXBhdGgnO1xuXG5jb25zdCBpc1VzZXJPd25Qcm9kdWN0ID0gKHNlbGxlciwgdXNlcikgPT4gc2VsbGVyID09IHVzZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2xCYXIge1xuXHRjb25zdHJ1Y3Rvcih7ICRwYXJlbnQsIGluaXRpYWxTdGF0ZSwgb25DbGljayB9KSB7XG5cdFx0dGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblx0XHR0aGlzLiR0YXJnZXQgPSBjcmVhdGVET01XaXRoU2VsZWN0b3IoJ25hdicsICcuZGV0YWlsX19uYXYnKTtcblx0XHR0aGlzLnN0YXRlLnNlbGxlciA9ICd0ZXN0Jztcblx0XHR0aGlzLnN0YXRlLnVzZXIgPSAndGVzdCc7XG5cdFx0JHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLiR0YXJnZXQpO1xuXG5cdFx0dGhpcy4kdGFyZ2V0LmlubmVySFRNTCA9IGBcblx0XHRcdDxpbWcgc3JjPSR7QVJST1dfQkFDS19JQ09OfSBjbGFzcz0nYmFjaycgLz5cblx0XHRcdCR7XG5cdFx0XHRcdGlzVXNlck93blByb2R1Y3QodGhpcy5zdGF0ZS5zZWxsZXIsIHRoaXMuc3RhdGUudXNlcilcblx0XHRcdFx0XHQ/IGA8aW1nIHNyYz0ke01PUkVfVkVSVF9JQ09OfSBjbGFzcz0nb3B0aW9uJyAvPmBcblx0XHRcdFx0XHQ6ICcnXG5cdFx0XHR9XG5cdFx0YDtcblxuXHRcdHRoaXMuJHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRvbkNsaWNrKGUpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2V0U3RhdGUoKSB7fVxuXG5cdHJlbmRlcigpIHt9XG59XG4iLCJpbXBvcnQgJy4vYm9keS5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlRE9NV2l0aFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jcmVhdGVET01XaXRoU2VsZWN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2R5UGFydCB7XG5cdHN0YXRlID0gW107XG5cdGNvbnN0cnVjdG9yKHsgJHBhcmVudCwgaW5pdGlhbFN0YXRlLCBvbkNsaWNrIH0pIHtcblx0XHR0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXHRcdHRoaXMuJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignZGl2JywgJy5sb2NhdGlvbicpO1xuXHRcdCRwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy4kdGFyZ2V0KTtcblxuXHRcdHRoaXMuJHRhcmdldC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9J2xvY2F0aW9uX19zcGFuJz5cbiAgICAgICAgICAgIDxzcGFuPuyngOyXreydgCDstZzshowgMeqwnCDsnbTsg4E8L3NwYW4+XG4gICAgICAgICAgICA8YnI+IFxuICAgICAgICAgICAgPHNwYW4+7LWc64yAIDLqsJzquYzsp4Ag7ISk7KCVIOqwgOuKpe2VtOyalC48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdsb2NhdGlvbl9fYnRuT3V0ZXInPjwvZGl2PlxuICAgICAgICBgO1xuXG5cdFx0dGhpcy5vbkNsaWNrID0gb25DbGljaztcblx0XHR0aGlzLiR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0bGV0IGlkeCA9IDA7XG5cdFx0XHRpZiAoZS50YXJnZXQuZGF0YXNldC5pZHgpIGlkeCA9IGUudGFyZ2V0LmRhdGFzZXQuaWR4O1xuXHRcdFx0dGhpcy5vbkNsaWNrKGUsIGlkeCk7XG5cdFx0fSk7XG5cdFx0dGhpcy4kQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uX19idG5PdXRlcicpO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblxuXHRzZXRTdGF0ZShuZXh0U3RhdGUpIHtcblx0XHR0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHJlc3VsdCA9ICcnO1xuXG5cdFx0cmVzdWx0ICs9IHRoaXMuY3JlYXRlTWFpbkJ1dHRvbigpO1xuXHRcdHJlc3VsdCArPSB0aGlzLmNyZWF0ZU5vcm1hbEJ1dHRvbigpO1xuXHRcdHJlc3VsdCArPSB0aGlzLmNyZWF0ZVBsdXNCdXR0b24oKTtcblxuXHRcdHRoaXMuJEJ1dHRvbi5pbm5lckhUTUwgPSByZXN1bHQ7XG5cdH1cblxuXHRjcmVhdGVNYWluQnV0dG9uKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmxlbmd0aFxuXHRcdFx0PyBgXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdsb2NhdGlvbl9fbWFpbkJ0bic+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5zdGF0ZVswXX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz0nbG9jYXRpb25fX2NhbmNlbEJ0bicgc3JjPVwiL2ljb25zL2NhbmNlbC5zdmdcIiBkYXRhLWlkeD0nMCcvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICBgXG5cdFx0XHQ6IGBgO1xuXHR9XG5cblx0Y3JlYXRlTm9ybWFsQnV0dG9uKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmxlbmd0aCA+IDFcblx0XHRcdD8gYFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nbG9jYXRpb25fX25vcm1hbEJ0bic+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5zdGF0ZVsxXX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz0nbG9jYXRpb25fX2NhbmNlbEJ0bicgc3JjPVwiL2ljb25zL2NhbmNlbF9iYWVtaW4uc3ZnXCIgZGF0YS1pZHg9JzEnLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgYFxuXHRcdFx0OiBgYDtcblx0fVxuXHRjcmVhdGVQbHVzQnV0dG9uKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmxlbmd0aCA8IDJcblx0XHRcdD8gYFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nbG9jYXRpb25fX3BsdXNCdG4nPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdsb2NhdGlvbl9fcGx1cyc+XG4gICAgICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIGBcblx0XHRcdDogYGA7XG5cdH1cbn1cbiIsImltcG9ydCAnLi9sb2NhdGlvbi1tb2RhbC5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlRE9NV2l0aFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jcmVhdGVET01XaXRoU2VsZWN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvbk1vZGFsIHtcblx0Y29uc3RydWN0b3IoeyAkcGFyZW50LCBvbkNsaWNrIH0pIHtcblx0XHR0aGlzLiR0YXJnZXQgPSBjcmVhdGVET01XaXRoU2VsZWN0b3IoJ2RpdicsICcubW9kYWwnKTtcblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJHRhcmdldCk7XG5cdFx0dGhpcy4kdGFyZ2V0LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX292ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb2RhbF9fZ3VpZGVcIj7smrDrpqwg64+Z64Sk66W8IOyeheugpe2VmOyEuOyalDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibW9kYWxfX2lucHV0XCIgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9XCLsi5ziiJnqtawg7KCc7Jm4LCDrj5nrp4wg7J6F66ClXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fY2hlY2tPbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW9kYWxfX2NhbmNlbFwiPuy3qOyGjDwvc3Bhbj48c3BhbiBjbGFzcz1cIm1vZGFsX19jb25maXJtXCI+7ZmV7J24PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYDtcblxuXHRcdHRoaXMub25DbGljayA9IG9uQ2xpY2s7XG5cdFx0dGhpcy4kaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2lucHV0Jyk7XG5cdFx0dGhpcy4kY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY29uZmlybScpO1xuXG5cdFx0dGhpcy4kaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG5cdFx0XHR0aGlzLmJpbmRJbnB1dEV2ZW50KGUpO1xuXHRcdH0pO1xuXHRcdHRoaXMuJHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRsZXQgaW5wdXRWYWx1ZSA9IHRoaXMuJGlucHV0LnZhbHVlO1xuXHRcdFx0dGhpcy5vbkNsaWNrKGUsIGlucHV0VmFsdWUpO1xuXHRcdH0pO1xuXHR9XG5cblx0b3BlbigpIHtcblx0XHR0aGlzLiR0YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdH1cblxuXHRjbG9zZSgpIHtcblx0XHR0aGlzLiR0YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fVxuXG5cdGJpbmRJbnB1dEV2ZW50KGUpIHtcblx0XHR0aGlzLmNoZWNrUmVnZXhFdmVudChlKTtcblx0XHR0aGlzLmNoZWNrTGVuZ3RoRXZlbnQoZSk7XG5cdH1cblxuXHRjaGVja1JlZ2V4RXZlbnQoZSkge1xuXHRcdGNvbnN0IHJlZ2V4ID0gL1te6rCALe2eoywwLTl8XS9nO1xuXHRcdGUudGFyZ2V0LnZhbHVlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZShyZWdleCwgJycpO1xuXHR9XG5cblx0Y2hlY2tMZW5ndGhFdmVudChlKSB7XG5cdFx0bGV0IGxlbmd0aCA9IGUudGFyZ2V0LnZhbHVlLmxlbmd0aDtcblx0XHRpZiAobGVuZ3RoID4gMCkgdGhpcy4kY29uZmlybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHRlbHNlIHRoaXMuJGNvbmZpcm1CdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cdH1cbn1cbiIsImltcG9ydCAnLi9ib2R5LmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVET01XaXRoU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NyZWF0ZURPTVdpdGhTZWxlY3Rvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvZHkge1xuXHRjb25zdHJ1Y3Rvcih7ICRwYXJlbnQsIGluaXRpYWxTdGF0ZSwgb25DbGljayB9KSB7XG5cdFx0dGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblxuXHRcdHRoaXMuJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3Rvcignc2VjdGlvbicsICcuY2F0ZWdvcnlMaXN0Jyk7XG5cdFx0JHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLiR0YXJnZXQpO1xuXHRcdHRoaXMuJFdyYXBwZXIgPSBjcmVhdGVET01XaXRoU2VsZWN0b3IoJ2RpdicsICcuY3RnV3JhcHBlcicpO1xuXHRcdHRoaXMuJHRhcmdldC5hcHBlbmRDaGlsZCh0aGlzLiRXcmFwcGVyKTtcblx0XHR0aGlzLiR0YXJnZXQuaW5uZXJIVE1MID0gdGhpcy5yZW5kZXJDYXRlZ29yaWVzKCk7XG5cblx0XHR0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xuXHRcdC8vIHRoaXMuJGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnRfX2NvbmZpcm0nKTtcblxuXHRcdHRoaXMuJHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHR0aGlzLm9uQ2xpY2soZSwgZS50YXJnZXQuZGF0YXNldC5pZHgpO1xuXHRcdH0pO1xuXHR9XG5cblx0b3BlbigpIHtcblx0XHR0aGlzLiR0YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdH1cblxuXHRjbG9zZSgpIHtcblx0XHR0aGlzLiR0YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fVxuXG5cdHJlbmRlckNhdGVnb3JpZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGVcblx0XHRcdC5tYXAoKGNhdGVnb3J5LCBpZHgpID0+IHtcblx0XHRcdFx0cmV0dXJuIGBcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz0nY2F0ZWdvcnlMaXN0X19jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXRlZ29yeUxpc3RfX2ltZycgZGF0YS1pZHg9JHtpZHh9PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtjYXRlZ29yeX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICBgO1xuXHRcdFx0fSlcblx0XHRcdC5qb2luKCcnKTtcblx0fVxufVxuIiwiaW1wb3J0ICcuL2NhdGVnb3J5LmNzcyc7XG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tICcuLi8uLi9iYXNlL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyJztcbmltcG9ydCB7IGNyZWF0ZURPTVdpdGhTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY3JlYXRlRE9NV2l0aFNlbGVjdG9yJztcbmltcG9ydCBCb2R5UGFydCBmcm9tICcuL2JvZHkvYm9keSc7XG5cbmNvbnN0IG1vZGUgPSAn7Lm07YWM6rOg66asJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkge1xuXHRjb25zdHJ1Y3Rvcih7ICRwYXJlbnQsIENBVEVHT1JZX0xJU1QsIG9uQ2xpY2sgfSkge1xuXHRcdHRoaXMuJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignZGl2JywgJy5jYXRlZ29yeVdyYXBwZXInKTtcblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJHRhcmdldCk7XG5cblx0XHR0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xuXHRcdHRoaXMubmF2aWdhdGlvbkJhciA9IG5ldyBOYXZpZ2F0aW9uQmFyKHtcblx0XHRcdCRwYXJlbnQ6IHRoaXMuJHRhcmdldCxcblx0XHRcdGluaXRpYWxTdGF0ZTogbW9kZSxcblx0XHRcdGlzTW9kYWw6IHRydWUsXG5cdFx0XHRvbkNsaWNrOiAoZSwgaWR4KSA9PiB7XG5cdFx0XHRcdHRoaXMub25DbGljayhlLCBpZHgpO1xuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdHRoaXMuYm9keVBhcnQgPSBuZXcgQm9keVBhcnQoe1xuXHRcdFx0JHBhcmVudDogdGhpcy4kdGFyZ2V0LFxuXHRcdFx0aW5pdGlhbFN0YXRlOiBDQVRFR09SWV9MSVNULFxuXHRcdFx0b25DbGljazogKGUsIGlkeCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9uQ2xpY2soZSwgaWR4KTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHQvLyB0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xuXHRcdC8vIHRoaXMuJGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnRfX2NvbmZpcm0nKTtcblxuXHRcdC8vIHRoaXMuJHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0Ly8gXHR0aGlzLm9uQ2xpY2soZSk7XG5cdFx0Ly8gfSk7XG5cdH1cblxuXHRvcGVuKCkge1xuXHRcdHRoaXMuJHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdHRoaXMuJHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0fVxufVxuIiwiaW1wb3J0ICcuL2xvY2F0aW9uLW1pbmktbW9kYWwuY3NzJztcbmltcG9ydCB7IGNyZWF0ZURPTVdpdGhTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY3JlYXRlRE9NV2l0aFNlbGVjdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWluaU1vZGFsIHtcblx0c3RhdGUgPSBbXTtcblx0Y29uc3RydWN0b3IoeyAkcGFyZW50LCBpbml0aWFsU3RhdGUsIG9uQ2xpY2sgfSkge1xuXHRcdHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cdFx0dGhpcy4kdGFyZ2V0ID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCdkaXYnLCAnLm1pbmlNb2RhbCcpO1xuXHRcdCRwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy4kdGFyZ2V0KTtcblxuXHRcdC8vIOyxhO2MhSDqtaztmITsi5wgcmVuZGVyKCkg67m87IScIOyerOyCrOyaqVxuXHRcdHRoaXMuJHRhcmdldC5pbm5lckhUTUwgPSBgXG5cdFx0XHQ8ZGl2IGNsYXNzPSdtaW5pTW9kYWxfX3dyYXBwZXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtaW5pTW9kYWxfX292ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWluaU1vZGFsX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHQ8L2Rpdj5cbiAgICAgICAgICAgICAgYDtcblxuXHRcdHRoaXMub25DbGljayA9IG9uQ2xpY2s7XG5cdFx0dGhpcy4kY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW5pTW9kYWxfX2NvbnRlbnQnKTtcblxuXHRcdHRoaXMuJHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHR0aGlzLm9uQ2xpY2soZSwgZS50YXJnZXQuZGF0YXNldC5pZHgpO1xuXHRcdH0pO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dGhpcy4kY29udGVudC5pbm5lckhUTUwgPVxuXHRcdFx0dGhpcy5yZW5kZXJMb2NhdGlvbk5hbWUoKSArXG5cdFx0XHRgPGRpdiBkYXRhLWxpbms9Jy9sb2NhdGlvbic+64K0IOuPmeuEpCDshKTsoJXtlZjquLA8L2Rpdj5gO1xuXHR9XG5cblx0c2V0U3RhdGUobmV4dFN0YXRlKSB7XG5cdFx0dGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0cmVuZGVyTG9jYXRpb25OYW1lKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlXG5cdFx0XHQubWFwKFxuXHRcdFx0XHQobG9jYXRpb25OYW1lLCBpZHgpID0+XG5cdFx0XHRcdFx0YDxkaXYgY2xhc3M9XCJtaW5pTW9kYWxfX2xvY2F0aW9uXCIgZGF0YS1pZHg9JHtpZHh9PiR7bG9jYXRpb25OYW1lfTwvZGl2PmBcblx0XHRcdClcblx0XHRcdC5qb2luKCcnKTtcblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0dGhpcy4kdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0dGhpcy4kdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdH1cbn1cbiIsImltcG9ydCAnLi9uYXZpZ2F0aW9uLWJhci5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlRE9NV2l0aFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jcmVhdGVET01XaXRoU2VsZWN0b3InO1xuLy8gaW1wb3J0IENBVEVHT1JZX0lDT04gZnJvbSAnL2ltZ3MvY2F0ZWdvcnkuc3ZnJzsg6rK966Gc66y47KCcIOuwnOyDnSAo67O066WYKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTmF2YmFyIHtcblx0c3RhdGUgPSAnJztcblx0Y29uc3RydWN0b3IoeyAkcGFyZW50LCBpbml0aWFsU3RhdGUsIG9uQ2xpY2sgfSkge1xuXHRcdHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cdFx0dGhpcy4kdGFyZ2V0ID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCduYXYnLCAnLm5hdicpO1xuXHRcdCRwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy4kdGFyZ2V0KTtcblxuXHRcdHRoaXMub25DbGljayA9IG9uQ2xpY2s7XG5cblx0XHR0aGlzLiR0YXJnZXQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2X19jYXRlZ29yeSc+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz0nbmF2X19jYXRlZ29yeUltZycgc3JjPScvaWNvbnMvY2F0ZWdvcnkuc3ZnJyBhbHQ9J2NhdGVnb3J5Jz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2X19sb2NhdGlvbic+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdl9fcmlnaHRTaWRlJz5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL2ljb25zL2FjY291bnQuc3ZnJyBhbHQ9J3Byb2ZpbGUnIGRhdGEtbGluaz1cIi91c2VyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9pY29ucy9tZW51LnN2ZycgZGF0YS1saW5rPScvbWVudScgYWx0PSdtZW51Jz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG5cdFx0dGhpcy4kdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdHRoaXMub25DbGljayhlKTtcblx0XHR9KTtcblxuXHRcdHRoaXMuJGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fbG9jYXRpb24nKTtcblxuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblxuXHRzZXRTdGF0ZShuZXdMb2NhdGlvbk5hbWUpIHtcblx0XHR0aGlzLnN0YXRlID0gbmV3TG9jYXRpb25OYW1lO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dGhpcy4kbG9jYXRpb24uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGltZyBjbGFzcz0nbmF2X19sb2NhdGlvbkljb24nIHNyYz0nL2ljb25zL2xvY2F0aW9uLnN2ZycgYWx0PSdsb2NhdGlvbic+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nbmF2X19sb2NhdGlvbk5hbWUnPiR7dGhpcy5zdGF0ZX08L3NwYW4+XG4gICAgICAgIGA7XG5cdH1cbn1cbiIsImltcG9ydCAnLi93cml0ZS1wb3N0LWJ1dHRvbi5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlRE9NV2l0aFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jcmVhdGVET01XaXRoU2VsZWN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXcml0ZVBvc3RCdXR0b24ge1xuXHRjb25zdHJ1Y3Rvcih7ICRwYXJlbnQgfSkge1xuXHRcdHRoaXMuJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignYnV0dG9uJywgJy5wb3N0QnRuJyk7XG5cdFx0JHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLiR0YXJnZXQpO1xuXG5cdFx0dGhpcy4kdGFyZ2V0LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgZGF0YS1saW5rPScvd3JpdGluZyc+XG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1saW5rPScvd3JpdGluZyc+Kzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIGA7XG5cdH1cbn1cbiIsImltcG9ydCAnLi9tYWluLW5hdmlnYXRpb24tYmFyLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVET01XaXRoU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NyZWF0ZURPTVdpdGhTZWxlY3Rvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb25CYXIge1xuXHRzdGF0ZSA9ICcxJztcblx0Y29uc3RydWN0b3IoeyAkcGFyZW50LCBpbml0aWFsU3RhdGUsIG9uQ2xpY2sgfSkge1xuXHRcdHRoaXMuJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignbmF2JywgJy5tYWluTmF2Jyk7XG5cdFx0JHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLiR0YXJnZXQpO1xuXHRcdHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cblx0XHR0aGlzLiR0YXJnZXQuaW5uZXJIVE1MID0gYCAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWFpbk5hdl9faW5uZXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21haW5OYXZfX3NlbGwgYWN0aXZlJz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1pZHg9JzEnPu2MkOunpOuqqeuhnTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWFpbk5hdl9faW5uZXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21haW5OYXZfX2NoYXQnPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWlkeD0nMic+7LGE7YyFPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdtYWluTmF2X19pbm5lcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWFpbk5hdl9faW50ZXJlc3QnPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWlkeD0nMyc+6rSA7Ius66qp66GdPC9zcGFuPlxuICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuXHRcdHRoaXMub25DbGljayA9IG9uQ2xpY2s7XG5cblx0XHR0aGlzLiRzZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5OYXZfX3NlbGwnKTtcblx0XHR0aGlzLiRjaGF0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5OYXZfX2NoYXQnKTtcblx0XHR0aGlzLiRpbnRlcmVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluTmF2X19pbnRlcmVzdCcpO1xuXG5cdFx0dGhpcy4kdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdGlmIChlLnRhcmdldC5kYXRhc2V0LmlkeCkgdGhpcy5vbkNsaWNrKGUudGFyZ2V0LmRhdGFzZXQuaWR4KTtcblx0XHR9KTsgLy8g7J2067Kk7Yq4IOychOyehOu2gOu2hFxuXHR9XG5cblx0c2V0U3RhdGUobmV4dFN0YXRlKSB7XG5cdFx0dGhpcy51cGRhdGVDbGFzc0xpc3QobmV4dFN0YXRlKTtcblx0fVxuXG5cdC8vIHVwZGF0ZUNsYXNzTGlzdCA6IOqwgSDrsoTtirwgY3NzIO2GoOq4gFxuXHR1cGRhdGVDbGFzc0xpc3QobmV4dFN0YXRlKSB7XG5cdFx0aWYgKG5leHRTdGF0ZSA9PT0gJzEnKSB7XG5cdFx0XHR0aGlzLiRzZWxsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuXHRcdFx0aWYgKHRoaXMuc3RhdGUgPT09ICcyJykge1xuXHRcdFx0XHR0aGlzLiRjaGF0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy4kaW50ZXJlc3QuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuXHRcdH0gZWxzZSBpZiAobmV4dFN0YXRlID09PSAnMicpIHtcblx0XHRcdHRoaXMuJGNoYXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cdFx0XHRpZiAodGhpcy5zdGF0ZSA9PT0gJzEnKSB7XG5cdFx0XHRcdHRoaXMuJHNlbGwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLiRpbnRlcmVzdC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuJGludGVyZXN0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuXHRcdFx0aWYgKHRoaXMuc3RhdGUgPT09ICcyJykge1xuXHRcdFx0XHR0aGlzLiRjaGF0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy4kc2VsbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCAnLi9ib2R5LmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVET01XaXRoU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NyZWF0ZURPTVdpdGhTZWxlY3Rvcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYmFzZS9sYXJnZS1idXR0b24vbGFyZ2UtYnV0dG9uJztcbmltcG9ydCBXZWxjb21lTW9kYWwgZnJvbSAnLi4vbW9kYWwvbW9kYWwnO1xuXG5jb25zdCBtb2RlID0gJ+2ajOybkOqwgOyehSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvZHlQYXJ0IHtcblx0c3RhdGUgPSB7XG5cdFx0aWQ6ICcnLFxuXHRcdGxvY2F0aW9uOiAnJyxcblx0fTtcblxuXHRjb25zdHJ1Y3Rvcih7ICRwYXJlbnQgfSkge1xuXHRcdHRoaXMuJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignZm9ybScsICcuc2lnbnVwJyk7XG5cdFx0JHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLiR0YXJnZXQpO1xuXG5cdFx0dGhpcy4kdGFyZ2V0LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIOyVhOydtOuUlFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IGNsYXNzPSdsYXJnZUlucHV0JyBpZD0naWQnIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLsmIHrrLgg7Iir7J6QIOyhsO2VqSAyMOyekCDsnbTtlZhcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIOyasOumrCDrj5nrhKRcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dCBjbGFzcz0nbGFyZ2VJbnB1dCcgaWQ9J2xvY2F0aW9uJyB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi7Iuc4oiZ6rWsIOygnOyZuCwg64+Z66eMIOyeheugpVwiPlxuICAgICAgICBgO1xuXG5cdFx0dGhpcy4kaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaWQnKTtcblx0XHR0aGlzLiRsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbicpO1xuXG5cdFx0dGhpcy5idXR0b24gPSBuZXcgQnV0dG9uKHtcblx0XHRcdCRwYXJlbnQ6IHRoaXMuJHRhcmdldCxcblx0XHRcdGluaXRpYWxTdGF0ZTogbW9kZSxcblx0XHRcdG9uQ2xpY2s6IChlKSA9PiB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0aWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2xhcmdlQnV0dG9uJykge1xuXHRcdFx0XHRcdC8vIGFwaSAodGhpcy5zdGF0ZSDsoJXrs7Qg7J247J6QKVxuXHRcdFx0XHRcdC8vIO2ajOybkOqwgOyehSDslYzrprwg67CPIO2BtOumreyLnCDroZzqt7jsnbgg7J2064+ZXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2FwaSDsspjrpqwnKTtcblx0XHRcdFx0XHR0aGlzLndlbGNvbWVNb2RhbC5vcGVuKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHR0aGlzLndlbGNvbWVNb2RhbCA9IG5ldyBXZWxjb21lTW9kYWwoe1xuXHRcdFx0JHBhcmVudCxcblx0XHRcdG9uQ2xpY2s6IChlKSA9PiB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRlLnRhcmdldC5jbGFzc05hbWUgPT09ICd3ZWxjb21lX19vdmVybGF5J1xuXHRcdFx0XHRcdC8vIOyZuOu2gCDtgbTrpq0g7IucIOuwnOyDnVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHR0aGlzLndlbGNvbWVNb2RhbC5jbG9zZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0dGhpcy4kdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcblx0XHRcdGlmIChlLnRhcmdldC5pZCA9PT0gJ2lkJyB8fCBlLnRhcmdldC5pZCA9PT0gJ2xvY2F0aW9uJykge1xuXHRcdFx0XHRlLnRhcmdldC5pZCA9PT0gJ2lkJyA/IHRoaXMuY2hlY2tJZFJlZ2V4KGUpIDogJyc7XG5cdFx0XHRcdGUudGFyZ2V0LmlkID09PSAnbG9jYXRpb24nID8gdGhpcy5jaGVja0xvY2F0aW9uUmVnZXgoZSkgOiAnJztcblx0XHRcdFx0dGhpcy5hY3RpdmF0ZUJ1dHRvbigpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0YWN0aXZhdGVCdXR0b24oKSB7XG5cdFx0aWYgKHRoaXMuJGlkLnZhbHVlLmxlbmd0aCA+IDAgJiYgdGhpcy4kbG9jYXRpb24udmFsdWUubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5idXR0b24uJHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYnV0dG9uLiR0YXJnZXQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScpO1xuXHRcdH1cblx0fVxuXHRjaGVja0xvY2F0aW9uUmVnZXgoZSkge1xuXHRcdGNvbnN0IHJlZ2V4ID0gL1te6rCALe2eoywwLTl8XS9nO1xuXHRcdGUudGFyZ2V0LnZhbHVlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZShyZWdleCwgJycpO1xuXHR9XG5cblx0Y2hlY2tJZFJlZ2V4KGUpIHtcblx0XHRjb25zdCByZWdleCA9IC9bXmEteixBLVosMC05fF0vZztcblx0XHRlLnRhcmdldC52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UocmVnZXgsICcnKTtcblx0XHRlLnRhcmdldC52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnNsaWNlKDAsIDIwKTtcblx0fVxufVxuIiwiaW1wb3J0ICcuL21vZGFsLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVET01XaXRoU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NyZWF0ZURPTVdpdGhTZWxlY3Rvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlbGNvbWUge1xuXHRjb25zdHJ1Y3Rvcih7ICRwYXJlbnQsIG9uQ2xpY2sgfSkge1xuXHRcdHRoaXMuJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignZGl2JywgJy53ZWxjb21lJyk7XG5cdFx0JHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLiR0YXJnZXQpO1xuXG5cdFx0dGhpcy4kdGFyZ2V0LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2VsY29tZV9fb3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWxjb21lX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwid2VsY29tZV9fZ3VpZGVcIj7tmozsm5DqsIDsnoXsnYQg7LaV7ZWY7ZWp64uI64uk4p2XPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2VsY29tZV9fYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtbGluaz0nL3VzZXInPuuhnOq3uOyduCDtlZjquLA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGA7XG5cblx0XHR0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xuXG5cdFx0dGhpcy4kdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdHRoaXMub25DbGljayhlKTtcblx0XHR9KTtcblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0dGhpcy4kdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0dGhpcy4kdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdH1cbn1cbiIsImltcG9ydCAnLi9zZWN0aW9uLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVET01XaXRoU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NyZWF0ZURPTVdpdGhTZWxlY3Rvcic7XG5pbXBvcnQgTGFyZ2VCdXR0b24gZnJvbSAnLi4vLi4vYmFzZS9sYXJnZS1idXR0b24vbGFyZ2UtYnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG5cdHN0YXRlID0gJyc7XG5cdGNvbnN0cnVjdG9yKHsgJHBhcmVudCwgaW5pdGlhbFN0YXRlLCBvbkNsaWNrIH0pIHtcblx0XHR0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXHRcdHRoaXMuJHBhcmVudCA9ICRwYXJlbnQ7XG5cdFx0dGhpcy4kc2VjdGlvbiA9IGNyZWF0ZURPTVdpdGhTZWxlY3Rvcignc2VjdGlvbicsICcuc2VjdGlvbicpO1xuXHRcdHRoaXMuJHNlY3Rpb24uaW5uZXJIVE1MID0gYFxuXHRcdFx0PGRpdiBjbGFzcz0ndXB0YWcnPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nZG93bnRhZyc+PC9kaXY+XG5cdFx0YDtcblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJHNlY3Rpb24pO1xuXG5cdFx0dGhpcy4kdXB0YWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXB0YWcnKTtcblx0XHR0aGlzLiRkb3dudGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvd250YWcnKTtcblx0XHR0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xuXG5cdFx0dGhpcy5yZW5kZXIoKTtcblxuXHRcdHRoaXMuJHNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2lucHV0Jykge1xuXHRcdFx0XHR0aGlzLmNoZWNrSWRSZWdleChlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXHRzZXRTdGF0ZShuZXh0U3RhdGUpIHtcblx0XHR0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHRoaXMuY3JlYXRlU2VjdGlvbkNvbnRlbnQodGhpcy4kdXB0YWcsIHRoaXMuc3RhdGUpO1xuXHR9XG5cblx0Y3JlYXRlU2VjdGlvbkNvbnRlbnQoJHBhcmVudCwgc3RhdGUpIHtcblx0XHRpZiAoaXNVc2VyTG9naW4oc3RhdGUpKSB7XG5cdFx0XHRjb25zdCAkdGFyZ2V0ID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCdkaXYnLCAnLnRleHQnKTtcblx0XHRcdCR0YXJnZXQuaW5uZXJIVE1MID0gYCR7c3RhdGV9YDtcblx0XHRcdCRwYXJlbnQuYXBwZW5kQ2hpbGQoJHRhcmdldCk7XG5cdFx0XHR0aGlzLmxhcmdlQnV0dG9uID0gbmV3IExhcmdlQnV0dG9uKHtcblx0XHRcdFx0JHBhcmVudCxcblx0XHRcdFx0aW5pdGlhbFN0YXRlOiAn66Gc6re47JWE7JuDJyxcblx0XHRcdFx0b25DbGljazogKGUpID0+IHtcblx0XHRcdFx0XHR0aGlzLm9uQ2xpY2soZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignZm9ybScsICcuZm9ybScpO1xuXHRcdFx0JHRhcmdldC5pbm5lckhUTUwgPSBgXG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cImlucHV0XCIgbmFtZT1cImlkXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuyVhOydtOuUlOulvCDsnoXroKXtlZjshLjsmpQuXCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPSdsb2dpbl9fYWxlcnQnPuyXhuuKlCBJROyeheuLiOuLpOKdl+Kdl+Kdlzwvc3Bhbj5cblx0XHRcdGA7XG5cdFx0XHQkcGFyZW50LmFwcGVuZENoaWxkKCR0YXJnZXQpO1xuXHRcdFx0dGhpcy4kaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQnKTtcblx0XHRcdHRoaXMuJGFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luX19hbGVydCcpO1xuXHRcdFx0dGhpcy5sYXJnZUJ1dHRvbiA9IG5ldyBMYXJnZUJ1dHRvbih7XG5cdFx0XHRcdCRwYXJlbnQ6ICR0YXJnZXQsXG5cdFx0XHRcdGluaXRpYWxTdGF0ZTogJ+uhnOq3uOyduCcsXG5cdFx0XHRcdG9uQ2xpY2s6IChlKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5vbkNsaWNrKGUsIHRoaXMuJGlucHV0LnZhbHVlKTtcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy4kZG93bnRhZy5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz1cInNpZ251cFwiIGRhdGEtbGluaz1cIi9zaWdudXBcIj7tmozsm5DqsIDsnoU8L2J1dHRvbj5gO1xuXHRcdH1cblx0fVxuXG5cdGNoZWNrSWRSZWdleChlKSB7XG5cdFx0Y29uc3QgcmVnZXggPSAvW15hLXosQS1aLDAtOXxdL2c7XG5cdFx0ZS50YXJnZXQudmFsdWUgPSBlLnRhcmdldC52YWx1ZS5yZXBsYWNlKHJlZ2V4LCAnJyk7XG5cdFx0ZS50YXJnZXQudmFsdWUgPSBlLnRhcmdldC52YWx1ZS5zbGljZSgwLCAyMCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaXNVc2VyTG9naW4oc3RhdGUpIHtcblx0Lyog66Gc6re47J24IOuQmOyWtCDsnojripTsp4Ag7ZmV7J24ICovXG5cdHJldHVybiBzdGF0ZS5sZW5ndGggPiAwO1xufVxuIiwiaW1wb3J0ICcuL2JvZHkuY3NzJztcbmltcG9ydCB7IGNyZWF0ZURPTVdpdGhTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY3JlYXRlRE9NV2l0aFNlbGVjdG9yJztcbmltcG9ydCB7IENBVEVHT1JZX0xJU1QgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvY2F0ZWdvcnktbGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvZHkge1xuXHRzdGF0ZSA9IHt9O1xuXG5cdGNvbnN0cnVjdG9yKHsgJHBhcmVudCwgaW5pdGlhbFN0YXRlLCByZWZyZXNoU3RhdGUgfSkge1xuXHRcdHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cdFx0dGhpcy5yZWZyZXNoU3RhdGUgPSByZWZyZXNoU3RhdGU7XG5cdFx0dGhpcy4kdGFyZ2V0ID0gY3JlYXRlRE9NV2l0aFNlbGVjdG9yKCdkaXYnLCAnLnBvc3QnKTtcblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJHRhcmdldCk7XG5cblx0XHR0aGlzLiR0YXJnZXQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncG9zdF9fY29udGFpbmVyJz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICBcbiAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz0ncG9zdF9fdGl0bGUnIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPVwi6riAIOygnOuqqVwiIHZhbHVlPSR7dGhpcy5zdGF0ZS50aXRsZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXRlZ29yeSc+XG4gICAgICAgICAgICAgICAgPHNwYW4+KO2VhOyImCnsubTthYzqs6Drpqzrpbwg7ISg7YOd7ZW07KO87IS47JqULjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXRlZ29yeV9fYnV0dG9uT3V0ZXInPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPSdwb3N0X19wcmljZScgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9XCLigqkg6rCA6rKpKOyEoO2DneyCrO2VrSlcIiB2YWx1ZT0ke3RoaXMuc3RhdGUucHJpY2V9PlxuICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPSdwb3N0X19jb250ZW50JyBwbGFjZWhvbGRlcj1cIuqyjOyLnOq4gCDrgrTsmqnsnYQg7J6R7ISx7ZW07KO87IS47JqULlwiPiR7dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn08L3RleHRhcmVhPlxuICAgICAgICBgO1xuXG5cdFx0dGhpcy4kY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3RfX2NvbnRhaW5lcicpO1xuXHRcdHRoaXMuJHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3RfX3RpdGxlJyk7XG5cdFx0dGhpcy4kcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdF9fcHJpY2UnKTtcblx0XHR0aGlzLiRjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3RfX2NvbnRlbnQnKTtcblx0XHR0aGlzLiRjYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeV9fYnV0dG9uT3V0ZXInKTtcblxuXHRcdHRoaXMuJHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcblx0XHRcdHRoaXMuYmluZFRpdGxlRXZlbnQoZSk7XG5cdFx0fSk7XG5cdFx0dGhpcy4kcHJpY2UuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5iaW5kUHJpY2VLZXlVcEV2ZW50KGUpO1xuXHRcdH0pO1xuXHRcdHRoaXMuJHByaWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKGUpID0+IHtcblx0XHRcdHRoaXMucmVhcnJhbmdlUHJpY2UoZSk7XG5cdFx0fSk7XG5cdFx0dGhpcy4kY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG5cdFx0XHR0aGlzLmJpbmRDb250ZW50RXZlbnQoZSk7XG5cdFx0fSk7XG5cdFx0dGhpcy4kY2F0ZWdvcnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5iaW5kQ2F0ZWdvcnlFdmVudChlKTtcblx0XHR9KTtcblx0XHR0aGlzLiRjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5iaW5kSW1hZ2VCdXR0b25FdmVudChlKTtcblx0XHR9KTtcblx0XHQvLyB0aGlzLiRjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcblx0XHQvLyBcdGNvbnNvbGUubG9nKHRoaXMuJGNvbnRhaW5lcik7XG5cdFx0Ly8gXHRpZiAoZS50YXJnZXQuaWQgPT09ICcjaW1hZ2UnKSB7XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcblx0XHQvLyBcdH1cblx0XHQvLyB9KTtcblx0XHQvLyDsnITsnZgg67Cp7Iud7J2AIGlucHV0IGZpbGXsnbQg7JWE64uMIGNvbnRhaW5lcuqwgCDstpzroKUuLiAo7LaU7ZuEIOyVjOyVhOu0kOyVvO2VoOuTryEpXG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fVxuXG5cdHNldFN0YXRlKG5leHRTdGF0ZSkge1xuXHRcdHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR0aGlzLiRjb250YWluZXIuaW5uZXJIVE1MID0gdGhpcy5yZW5kZXJJbWFnZUZvcm0oKSArIHRoaXMucmVuZGVySW1hZ2UoKTtcblxuXHRcdHRoaXMuJGNhdGVnb3J5LmlubmVySFRNTCA9IHRoaXMucmVuZGVyQnV0dG9uKCk7XG5cblx0XHR0aGlzLiRpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZScpO1xuXHRcdHRoaXMuJGlucHV0Lm9uY2hhbmdlID0gKGUpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGUudGFyZ2V0LmZpbGVzKTtcblx0XHRcdC8qXG5cdFx0XHRcdGxldCBmaWxlcyA9IGUudGFyZ2V0LmZpbGVzO1xuXG5cdFx0XHRcdGFwaSDtmLjstpwg7ZuEIO2MjOydvOqyveuhnCDrsJvslYTsmLQgLT4gc2V0U3RhdGUgLT4gY2hjZWtWYWx1ZUFuZFJlZnJlc2hTdGF0ZSgpIO2YuOy2nFxuXHRcdFx0XHRcblx0XHRcdFx0bGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0XHRcdGNvbnN0IGNvbmZpZyA9IHtcblx0XHRcdFx0XHRoZWFkZXI6IHsgJ2NvbnRlbnQtdHlwZSc6ICdtdWx0aXBhcnQvZm9tci1kYXRhJyB9XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlcylcblxuXHRcdFx0XHTslYTrnpjsspjrn7wg66Gc7KeBICjqsIDsg4EpXG5cdFx0XHRcdGF4aW9zLnBvc3QoJy9hcGkvYm9hcmQvaW1hZ2UnLCBmb3JtRGF0YSwgY29uZmlnKVxuXHRcdFx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0XHRcdGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRcdFx0c2V0SW1hZ2VzKFsuLi5JbWFnZXMsIHJlc3BvbnNlLmRhdGEuZmlsZVBhdGhdKVxuXHRcdFx0XHRcdFx0XHRwcm9wcy5yZWZyZXNoRnVuY3Rpb24oWy4uLkltYWdlcywgcmVzcG9uc2UuZGF0YS5maWxlUGF0aF0pXG5cdFx0XHRcdFx0XHRcdHNldFNob3codHJ1ZSlcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGFsZXJ0KCftjIzsnbzsnYQg7KCA7J6l7ZWY64qU642wIOyLpO2MqO2WiOyKteuLiOuLpC4nKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHQqL1xuXHRcdH07XG5cdH1cblxuXHRyZW5kZXJJbWFnZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5pbWdQYXRoXG5cdFx0XHQubWFwKChpbWFnZSwgaWR4KSA9PiB7XG5cdFx0XHRcdHJldHVybiBgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Bvc3RfX2ltZ091dGVyJz5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9J3Bvc3RfX2ltZ0NvbnRhaW5lcicgc3JjPSR7aW1hZ2V9IGFsdD0naW1hZ2UnPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0ncG9zdF9fcmVtb3ZlQnRuJyBkYXRhLWlkeD0ke2lkeH0gPjxzcGFuIGNsYXNzPSdwb3N0X1gnIGRhdGEtaWR4PSR7aWR4fT5YPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG5cdFx0XHR9KVxuXHRcdFx0LmpvaW4oJycpO1xuXHR9XG5cblx0cmVuZGVyQnV0dG9uKCkge1xuXHRcdHJldHVybiBDQVRFR09SWV9MSVNULm1hcCgoY2F0ZWdvcnksIGlkeCkgPT4ge1xuXHRcdFx0aWYgKGNhdGVnb3J5ID09PSB0aGlzLnN0YXRlLmNhdGVnb3J5KSB7XG5cdFx0XHRcdHJldHVybiBgPGJ1dHRvbiBjbGFzcz0nY2F0ZWdvcnlfX2J1dHRvbiBhY3RpdmUnIGRhdGEtaWR4PSR7aWR4fT4ke2NhdGVnb3J5fTwvYnV0dG9uPmA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gYDxidXR0b24gY2xhc3M9J2NhdGVnb3J5X19idXR0b24nIGRhdGEtaWR4PSR7aWR4fT4ke2NhdGVnb3J5fTwvYnV0dG9uPmA7XG5cdFx0XHR9XG5cdFx0fSkuam9pbignJyk7XG5cdH1cblxuXHRyZW5kZXJJbWFnZUZvcm0oKSB7XG5cdFx0cmV0dXJuIGA8Zm9ybSBhY3Rpb249Jy8nIG1ldGhvZD1cInBvc3RcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIGNsYXNzPSdwb3N0X19pbWdDb250YWluZXInPlxuXHRcdFx0XHRcdDxpbnB1dCAgaWQ9J2ltYWdlJyB0eXBlPSdmaWxlJyBhY2NlcHQ9XCIuanBnLCAuanBlZywgLnBuZ1wiIG11bHRpcGxlPlxuXHRcdFx0XHRcdDxpbWcgc3JjPScvaWNvbnMvaW1hZ2Uuc3ZnJyBhbHQ9J2ltYWdlJz5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PHNwYW4+JHt0aGlzLnN0YXRlLmltZ1BhdGgubGVuZ3RofS8xMDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj4gXG5cdFx0XHRcdDwvZm9ybT5gO1xuXHR9XG5cblx0cmVhcnJhbmdlUHJpY2UoZSkge1xuXHRcdC8vIOy9pOuniOyZgCDsm5DsnYQg67aZ7ZiA7KO864qUIO2VqOyImFxuXHRcdGlmIChlLnRhcmdldC52YWx1ZVswXSAhPT0gJ+KCqScpIHtcblx0XHRcdGxldCBsZW5ndGggPSBlLnRhcmdldC52YWx1ZS5sZW5ndGg7XG5cdFx0XHRsZXQgYXJyYXkgPSBlLnRhcmdldC52YWx1ZS5zcGxpdCgnJyk7XG5cblx0XHRcdGlmIChsZW5ndGggPiAzKSB7XG5cdFx0XHRcdGxldCBjb3VudCA9IDE7XG5cdFx0XHRcdGZvciAobGV0IGkgPSBsZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG5cdFx0XHRcdFx0aWYgKGNvdW50ICUgMyA9PT0gMCkge1xuXHRcdFx0XHRcdFx0YXJyYXkuc3BsaWNlKGksIDAsICcsJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvdW50Kys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bGV0IHJlc3VsdCA9ICfigqknICsgYXJyYXkuam9pbignJyk7XG5cdFx0XHRlLnRhcmdldC52YWx1ZSA9IHJlc3VsdDtcblx0XHR9XG5cdH1cblxuXHRjaGVja0hhdmluZ0FsbFZhbHVlKCkge1xuXHRcdC8vIOqwgOqyqeygnOyZuCDrqqjrk6Ag6rCSIOyeiOuKlOyngCDtmZXsnbhcblx0XHRpZiAoXG5cdFx0XHR0aGlzLnN0YXRlLnRpdGxlLmxlbmd0aCA+IDAgJiZcblx0XHRcdHRoaXMuc3RhdGUuZGVzY3JpcHRpb24ubGVuZ3RoID4gMCAmJlxuXHRcdFx0dGhpcy5zdGF0ZS5pbWdQYXRoLmxlbmd0aCA+IDAgJiZcblx0XHRcdHRoaXMuc3RhdGUuY2F0ZWdvcnkubGVuZ3RoID4gMFxuXHRcdCkge1xuXHRcdFx0dGhpcy5zdGF0ZS5oYXZlQWxsVmFsdWUgPSB0cnVlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnN0YXRlLmhhdmVBbGxWYWx1ZSA9IGZhbHNlO1xuXHR9XG5cblx0Y2hjZWtWYWx1ZUFuZFJlZnJlc2hTdGF0ZSgpIHtcblx0XHR0aGlzLmNoZWNrSGF2aW5nQWxsVmFsdWUoKTtcblx0XHR0aGlzLnJlZnJlc2hTdGF0ZSh0aGlzLnN0YXRlKTtcblx0fVxuXG5cdGJpbmRJbWFnZUJ1dHRvbkV2ZW50ID0gKGUpID0+IHtcblx0XHRpZiAoXG5cdFx0XHRlLnRhcmdldC5jbGFzc05hbWUgPT09ICdwb3N0X19yZW1vdmVCdG4nIHx8XG5cdFx0XHRlLnRhcmdldC5jbGFzc05hbWUgPT09ICdwb3N0X1gnXG5cdFx0KSB7XG5cdFx0XHRsZXQgaWR4ID0gZS50YXJnZXQuZGF0YXNldC5pZHg7XG5cdFx0XHRsZXQgaW1hZ2VBcnJheSA9IHRoaXMuc3RhdGUuaW1nUGF0aDtcblx0XHRcdGltYWdlQXJyYXkuc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHR0aGlzLnN0YXRlLmltZ1BhdGggPSBpbWFnZUFycmF5O1xuXHRcdFx0dGhpcy5jaGNla1ZhbHVlQW5kUmVmcmVzaFN0YXRlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdGJpbmRDb250ZW50RXZlbnQoZSkge1xuXHRcdC8vIHRleHRhcmVhIOuGkuydtCDqsIDrs4DsobDsoIhcblx0XHR0aGlzLiRjb250ZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuJGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4Jztcblx0XHR0aGlzLnN0YXRlLmRlc2NyaXB0aW9uID0gZS50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5jaGNla1ZhbHVlQW5kUmVmcmVzaFN0YXRlKCk7XG5cdH1cblxuXHRiaW5kVGl0bGVFdmVudChlKSB7XG5cdFx0Ly8g6riA7J6Q7IiYIOygnO2VnCAo7LaU7ZuEIOqyveqzoCBDU1Mg7LaU6rCA7ZW064+EIOuQoOuTrylcblx0XHRpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID4gMzApIHtcblx0XHRcdGUudGFyZ2V0LnZhbHVlID0gZS50YXJnZXQudmFsdWUuc2xpY2UoMCwgMzApO1xuXHRcdH1cblx0XHR0aGlzLnN0YXRlLnRpdGxlID0gZS50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5jaGNla1ZhbHVlQW5kUmVmcmVzaFN0YXRlKCk7XG5cdH1cblxuXHRiaW5kUHJpY2VLZXlVcEV2ZW50KGUpIHtcblx0XHQvLyBudW1iZXLrp4wg67Cb64qU64ukLlxuXHRcdGUudGFyZ2V0LnZhbHVlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSgvW14wLTldL2csICcnKTtcblx0XHR0aGlzLnN0YXRlLnByaWNlID0gZS50YXJnZXQudmFsdWU7XG5cdH1cblxuXHRiaW5kQ2F0ZWdvcnlFdmVudChlKSB7XG5cdFx0aWYgKFxuXHRcdFx0ZS50YXJnZXQuY2xhc3NOYW1lID09PSAnY2F0ZWdvcnlfX2J1dHRvbiBhY3RpdmUnIHx8XG5cdFx0XHRlLnRhcmdldC5jbGFzc05hbWUgPT09ICdjYXRlZ29yeV9fYnV0dG9uJ1xuXHRcdCkge1xuXHRcdFx0dGhpcy5zdGF0ZS5jYXRlZ29yeSA9IENBVEVHT1JZX0xJU1RbZS50YXJnZXQuZGF0YXNldC5pZHhdO1xuXHRcdFx0dGhpcy5jaGNla1ZhbHVlQW5kUmVmcmVzaFN0YXRlKCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gYmluZGluZ0V2ZW50KGUpIHtcblx0Ly8gXHR0aGlzLmhhbmRsZUltYWdlVXBsb2FkRXZlbnQoZSk7XG5cdC8vIH1cblxuXHQvLyBoYW5kbGVJbWFnZVVwbG9hZEV2ZW50KGUpIHtcblx0Ly8gXHRjb25zdCBmaWxlcyA9IHRoaXMuaW1nSW5wdXRFbGVtZW50LmZpbGVzO1xuXHQvLyBcdGNvbnNvbGUubG9nKGZpbGVzLCBlKTtcblx0Ly8gfVxuXG5cdC8vIGNoYW5nZUlucHV0RmlsZUV2ZW50KHZhbHVlKSB7XG5cdC8vIFx0Y29uc29sZS5sb2codmFsdWUpO1xuXHQvLyB9XG59XG4iLCJpbXBvcnQgJy4vZm9vdGVyLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVET01XaXRoU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NyZWF0ZURPTVdpdGhTZWxlY3Rvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciB7XG5cdHN0YXRlID0gJyc7XG5cdC8vIHN0YXRlIDog64+Z64Sk66qFIChzdHJpbmcpXG5cdGNvbnN0cnVjdG9yKHsgJHBhcmVudCwgaW5pdGlhbFN0YXRlIH0pIHtcblx0XHR0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXHRcdHRoaXMuJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignZm9vdGVyJywgJy5mb290ZXInKTtcblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJHRhcmdldCk7XG5cblx0XHR0aGlzLiR0YXJnZXQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGltZyBzcmM9Jy9pY29ucy9sb2NhdGlvbl93aGl0ZS5zdmcnICBhbHQ9J2xvY2F0aW9uJz5cbiAgICAgICAgICAgIDxzcGFuPiR7dGhpcy5zdGF0ZX08L3NwYW4+XG4gICAgICAgIGA7XG5cdH1cbn1cbiIsImV4cG9ydCBjb25zdCBDQVRFR09SWV9MSVNUID0gW1xuXHQn65SU7KeA7YS46riw6riwJyxcblx0J+yDne2ZnOqwgOyghCcsXG5cdCfqsIDqtawv7J247YWM66as7Ja0Jyxcblx0J+qyjOyehC/st6jrr7gnLFxuXHQn7IOd7ZmcL+qwgOqzteyLne2SiCcsXG5cdCfsiqTtj6zsuKAv66CI7KCAJyxcblx0J+yXrOyEse2MqOyFmC/snqHtmZQnLFxuXHQn64Ko7ISx7Yyo7IWYL+yeoe2ZlCcsXG5cdCfsnKDslYTrj5knLFxuXHQn67ew7YuwL+uvuOyaqScsXG5cdCfrsJjroKTrj5nrrLwnLFxuXHQn64+E7IScL+2LsOy8ky/snYzrsJgnLFxuXHQn7Iud66y8Jyxcblx0J+q4sO2DgCDspJHqs6DrrLztkognLFxuXTtcbiIsImV4cG9ydCBjb25zdCBBRERfSUNPTiA9ICcvaWNvbnMvYWRkLnN2Zyc7XG5leHBvcnQgY29uc3QgQUNDT1VOVF9JQ09OID0gJy9pY29ucy9hY2NvdW50LnN2Zyc7XG5leHBvcnQgY29uc3QgQVJST1dfQkFDS19JQ09OID0gJy9pY29ucy9hcnJvd19iYWNrLnN2Zyc7IC8vXG5leHBvcnQgY29uc3QgQ0FOQ0VMX0lDT04gPSAnL2ljb25zL2NhbmNlbC5zdmcnOyAvL1xuZXhwb3J0IGNvbnN0IEFSUk9XX0ZPUldBUkRfSUNPTiA9ICcvaWNvbnMvYXJyb3dfZm9yd2FyZC5zdmcnO1xuZXhwb3J0IGNvbnN0IENBVEVHT1JZX0lDT04gPSAnL2ljb25zL2NhdGVnb3J5LnN2Zyc7XG5leHBvcnQgY29uc3QgQ0hBVF9CVUJCTEVfTUlOSV9JQ09OID0gJy9pY29ucy9jaGF0X2J1YmJsZV9taW5pLnN2Zyc7XG5leHBvcnQgY29uc3QgRE9ORV9JQ09OID0gJy9pY29ucy9kb25lLnN2Zyc7XG5leHBvcnQgY29uc3QgRVhJVF9JQ09OID0gJy9pY29ucy9leGl0LnN2Zyc7XG5leHBvcnQgY29uc3QgRVhQQU5EX01PUkVfSUNPTiA9ICcvaWNvbnMvZXhwYW5kX21vcmUuc3ZnJztcbmV4cG9ydCBjb25zdCBGQVZPUklURV9CT1JERVJfTUlOSV9JQ09OID0gJy9pY29ucy9mYXZvcml0ZV9ib3JkZXJfbWluaS5zdmcnO1xuZXhwb3J0IGNvbnN0IEZBVk9SSVRFX0JPUkRFUl9JQ09OID0gJy9pY29ucy9mYXZvcml0ZV9ib3JkZXIuc3ZnJztcbmV4cG9ydCBjb25zdCBGQVZPUklURV9JQ09OID0gJy9pY29ucy9mYXZvcml0ZS5zdmcnO1xuZXhwb3J0IGNvbnN0IElNQUdFX0lDT04gPSAnL2ljb25zL2lhbWdlLnN2Zyc7XG5leHBvcnQgY29uc3QgTE9DQVRJT05fSUNPTiA9ICcvaWNvbnMvbG9jYXRpb24uc3ZnJztcbmV4cG9ydCBjb25zdCBNRU5VX0lDT04gPSAnL2ljb25zL21lbnUuc3ZnJztcbmV4cG9ydCBjb25zdCBNT1JFX1ZFUlRfSUNPTiA9ICcvaWNvbnMvbW9yZV92ZXJ0LnN2Zyc7XG5leHBvcnQgY29uc3QgU0VORF9JQ09OID0gJy9pY29ucy9zZW5kLnN2Zyc7XG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvYmFzZS9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhcic7XG5pbXBvcnQgUmVkaXJlY3QgZnJvbSAnLi4vY29tcG9uZW50cy9iYXNlL3JlZGlyZWN0L3JlZGlyZWN0JztcblxuY29uc3QgbW9kZSA9ICctJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90Rm91bmQge1xuXHRzdGF0ZSA9IHtcblx0XHRsaW5rOiAnLycsXG5cdFx0bWVzc2FnZTogJ0hvbWUnLFxuXHRcdHN0YXR1czogJzQwNCcsXG5cdFx0Y29udGVudDogJ1BhZ2Ugbm90IGZvdW5kJyxcblx0fTtcblx0Y29uc3RydWN0b3IoJHBhcmVudCkge1xuXHRcdG5ldyBOYXZiYXIoe1xuXHRcdFx0JHBhcmVudCxcblx0XHRcdGluaXRpYWxTdGF0ZTogbW9kZSxcblx0XHR9KTtcblxuXHRcdG5ldyBSZWRpcmVjdCh7XG5cdFx0XHQkcGFyZW50LFxuXHRcdFx0aW5pdGlhbFN0YXRlOiB0aGlzLnN0YXRlLFxuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvYmFzZS9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhcic7XG5pbXBvcnQgUmVkaXJlY3QgZnJvbSAnLi4vY29tcG9uZW50cy9iYXNlL3JlZGlyZWN0L3JlZGlyZWN0JztcblxuY29uc3QgbW9kZSA9ICctJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90TG9naW4ge1xuXHRzdGF0ZSA9IHtcblx0XHRsaW5rOiAnL3VzZXInLFxuXHRcdG1lc3NhZ2U6ICdMb2dpbicsXG5cdFx0c3RhdHVzOiAnJyxcblx0XHRjb250ZW50OiAnVGhpcyBzZXJ2aWNlIHJlcXVpcmVzIGxvZ2luJyxcblx0fTtcblx0Y29uc3RydWN0b3IoJHBhcmVudCkge1xuXHRcdG5ldyBOYXZiYXIoe1xuXHRcdFx0JHBhcmVudCxcblx0XHRcdGluaXRpYWxTdGF0ZTogbW9kZSxcblx0XHR9KTtcblxuXHRcdG5ldyBSZWRpcmVjdCh7ICRwYXJlbnQsIGluaXRpYWxTdGF0ZTogdGhpcy5zdGF0ZSB9KTtcblx0fVxufVxuIiwiaW1wb3J0ICcuL2RldGFpbC1wYWdlLmNzcyc7XG5pbXBvcnQgVG9vbEJhciBmcm9tICcuLi9jb21wb25lbnRzL2RldGFpbC1wYWdlL3Rvb2wtYmFyL3Rvb2wtYmFyLmpzJztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvZGV0YWlsLXBhZ2Uvc2VjdGlvbi9zZWN0aW9uJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9kZXRhaWwtcGFnZS9mb290ZXIvZm9vdGVyJztcbmltcG9ydCBQcm9kdWN0TW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9iYXNlL3Byb2R1Y3QtbW9kYWwvcHJvZHVjdC1tb2RhbCc7XG5pbXBvcnQgeyBjcmVhdGVET01XaXRoU2VsZWN0b3IgfSBmcm9tICcuLi91dGlsL2NyZWF0ZURPTVdpdGhTZWxlY3Rvcic7XG5pbXBvcnQgeyBuYXZpZ2F0ZVRvIH0gZnJvbSAnLi4vcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlsUGFnZSB7XG5cdHN0YXRlID0ge1xuXHRcdC8vIFRFU1QgQ0FTRVxuXHRcdHVzZXI6ICfrgqjsmIHsmrAnLCAvLyBwa+qwkuydhCDrk6Tqs6DsnojsnYTsp4AsIOydtOumhOydhCDrk6Tqs6Ag7J6I7J2E7KeAIOqzoOuvvOyeheuLiOuLpC5cblx0XHRzZWxsZXI6ICfrgqjsmIEnLFxuXHRcdHByaWNlOiAn4oKpMzUsMDAwJyxcblx0XHR0aXRsZTogJ+u5iO2LsOyngCDroaTrn6wg7Iqk7LyA7J207Yq4IScsXG5cdFx0ZGVzY3JpcHRpb246IGDslrTrprDsi5zsoIgg7LaU7Ja17J2YIO2WpeyImOulvCDrtojrn6wg7J287Jy87YKk64qUIOuhpOufrCDsiqTsvIDsnbTtirjsnoXri4jri6QuIOu5iO2LsOyngCDtirnshLHsg4Eg7IKs7Jqp6rCQIOyeiOyngOunjCDsoITssrTsoIHsnLzroZwg6rmo64GX7ZWcIOyDge2DnOyeheuLiOuLpC4g7LSs7JiB7JqpIOyGjO2SiOydtOuCmCwg6rGw7Iuk7JeQIOyepeyLneyaqeycvOuhnCDstpTsspztlbQg65Oc66a964uI64ukLiDri6jtkogg7J6F6rOgIOuQmOyXiOyKteuLiOuLpC48YnI+XG5cdFx0XHTsg4gg7KCc7ZKI7Jy866GcIOuztOyhtOuQnCDsoJztkojsnLzroZwg7KCE7Jqp67CV7Iqk6rmM7KeAIOuztOuCtOuTnOumveuLiOuLpC7sgqzsnbTspojripQgMjM1IOyeheuLiOuLpC5gLFxuXHRcdHN0YXR1czogMCxcblx0XHRsb2NhdGlvbjogJ+usuOuemOuPmScsXG5cdFx0Y2F0ZWdvcnk6ICfquLDtg4Ag7KSR6rOg66y87ZKIJyxcblx0XHRpbWdQYXRoOiBbXG5cdFx0XHQnL2ltZ3Mvc2hvZXMtMS5qcGcnLFxuXHRcdFx0Jy9pbWdzL3Nob2VzLTEuanBnJyxcblx0XHRcdCcvaW1ncy9zaG9lcy0xLmpwZycsXG5cdFx0XSxcblx0XHRjcmVhdGVkQXQ6ICcz67aE7KCEJyxcblx0XHRjaGF0Q291bnQ6IDMsXG5cdFx0d2lzaENvdW50OiAyLFxuXHRcdHZpc2l0Q291bnQ6IDUsXG5cdH07XG5cblx0Y29uc3RydWN0b3IoJHBhcmVudCkge1xuXHRcdHRoaXMuaGF2ZUhpc3RvcnlTdGF0ZSgpO1xuXHRcdGNvbnNvbGUubG9nKGhpc3Rvcnkuc3RhdGUpO1xuXHRcdHRoaXMuJHRhcmdldCA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignZGl2JywgJy5kZXRhaWwtcGFnZScpO1xuXG5cdFx0dGhpcy50b29sQmFyID0gbmV3IFRvb2xCYXIoe1xuXHRcdFx0JHBhcmVudDogdGhpcy4kdGFyZ2V0LFxuXHRcdFx0aW5pdGlhbFN0YXRlOiB7XG5cdFx0XHRcdHVzZXI6IHRoaXMuc3RhdGUudXNlcixcblx0XHRcdFx0c2VsbGVyOiB0aGlzLnN0YXRlLnNlbGxlcixcblx0XHRcdH0sXG5cdFx0XHRvbkNsaWNrOiAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnYmFjaycpIHtcblx0XHRcdFx0XHRoaXN0b3J5LnN0YXRlID8gbmF2aWdhdGVUbygnLycpIDogaGlzdG9yeS5iYWNrKC0xKTtcblx0XHRcdFx0fSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdvcHRpb24nKVxuXHRcdFx0XHRcdHRoaXMucHJvZHVjdE1vZGFsLm9wZW4oKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0dGhpcy5zZWN0aW9uID0gbmV3IFNlY3Rpb24oe1xuXHRcdFx0JHBhcmVudDogdGhpcy4kdGFyZ2V0LFxuXHRcdFx0aW5pdGlhbFN0YXRlOiB0aGlzLnN0YXRlLFxuXHRcdH0pO1xuXHRcdHRoaXMuZm9vdGVyID0gbmV3IEZvb3Rlcih7XG5cdFx0XHQkcGFyZW50OiB0aGlzLiR0YXJnZXQsXG5cdFx0XHRpbml0aWFsU3RhdGU6IHtcblx0XHRcdFx0cHJpY2U6IHRoaXMuc3RhdGUucHJpY2UsXG5cdFx0XHRcdHVzZXI6IHRoaXMuc3RhdGUudXNlcixcblx0XHRcdFx0c2VsbGVyOiB0aGlzLnN0YXRlLnNlbGxlcixcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHR0aGlzLnByb2R1Y3RNb2RhbCA9IG5ldyBQcm9kdWN0TW9kYWwoe1xuXHRcdFx0JHBhcmVudDogdGhpcy4kdGFyZ2V0LFxuXHRcdFx0b25DbGljazogKGUpID0+IHtcblx0XHRcdFx0aWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3Byb2R1Y3RNb2RhbF9fb3ZlcmxheScpIHtcblx0XHRcdFx0XHR0aGlzLnByb2R1Y3RNb2RhbC5jbG9zZSgpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3Byb2R1Y3RNb2RhbF9fdXBkYXRlJykge1xuXHRcdFx0XHRcdG5hdmlnYXRlVG8oJy93cml0aW5nJywgdGhpcy5zdGF0ZSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAncHJvZHVjdE1vZGFsX19kZWxldGUnKSB7XG5cdFx0XHRcdFx0LyogXG5cdFx0XHRcdFx0XHRhcGkg7JqU7LKt7Jy866GcIOyCreygnFxuXHRcdFx0XHRcdCovXG5cdFx0XHRcdFx0bmF2aWdhdGVUbygnLycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0JHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLiR0YXJnZXQpO1xuXHR9XG5cblx0c2V0U3RhdGUoKSB7fVxuXG5cdHJlbmRlcigpIHt9XG5cblx0aGF2ZUhpc3RvcnlTdGF0ZSgpIHtcblx0XHRpZiAoaGlzdG9yeS5zdGF0ZSkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IGhpc3Rvcnkuc3RhdGU7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvYmFzZS9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9jb21wb25lbnRzL2xvY2F0aW9uLXBhZ2UvYm9keS9ib2R5JztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL2xvY2F0aW9uLXBhZ2UvbG9jYXRpb24tbW9kYWwvbG9jYXRpb24tbW9kYWwnO1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvYmFzZS9hbGVydC9hbGVydCc7XG5cbmNvbnN0IG1vZGUgPSAn64K0IOuPmeuEpCDshKTsoJXtlZjquLAnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb25QYWdlIHtcblx0c3RhdGUgPSB7XG5cdFx0YWxsTXlMb2NhdGlvbjogWyfsnbjssL3rj5knXSxcblx0XHRjdXJyZW50SW5kZXg6IDAsIC8vIO2YhOyerCDsupTsiqztlaAg67KE7Yq87J2YIGluZGV4IOy0iOq4sO2ZlFxuXHR9O1xuXG5cdGNvbnN0cnVjdG9yKCRwYXJlbnQpIHtcblx0XHR0aGlzLm5hdmJhciA9IG5ldyBOYXZiYXIoe1xuXHRcdFx0JHBhcmVudCxcblx0XHRcdGluaXRpYWxTdGF0ZTogbW9kZSxcblx0XHR9KTtcblx0XHR0aGlzLmJvZHkgPSBuZXcgQm9keSh7XG5cdFx0XHQkcGFyZW50LFxuXHRcdFx0aW5pdGlhbFN0YXRlOiB0aGlzLnN0YXRlLmFsbE15TG9jYXRpb24sXG5cdFx0XHRvbkNsaWNrOiAoZSwgaWR4KSA9PiB7XG5cdFx0XHRcdHRoaXMuYmluZEJ1dHRvbkNsaWNrRXZlbnQoZSwgaWR4KTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0dGhpcy5tb2RhbCA9IG5ldyBNb2RhbCh7XG5cdFx0XHQkcGFyZW50LFxuXHRcdFx0b25DbGljazogKGUsIGlkeCkgPT4ge1xuXHRcdFx0XHR0aGlzLmJpbmRNb2RhbENsaWNrRXZlbnQoZSwgaWR4KTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0dGhpcy5hbGVydCA9IG5ldyBBbGVydCh7XG5cdFx0XHQkcGFyZW50LFxuXHRcdFx0b25DbGljazogKGUpID0+IHtcblx0XHRcdFx0dGhpcy5iaW5kQWxlcnRDbGlja0V2ZW50KGUpO1xuXHRcdFx0fSxcblx0XHR9KTtcblx0fVxuXG5cdHNldFN0YXRlKCkge1xuXHRcdHRoaXMuYm9keS5zZXRTdGF0ZSh0aGlzLnN0YXRlLmFsbE15TG9jYXRpb24pO1xuXHR9XG5cblx0YmluZE1vZGFsQ2xpY2tFdmVudChlLCB2YWx1ZSkge1xuXHRcdGlmIChcblx0XHRcdC8vIOuLq+q4sCDrsI8g7Jm467aAIO2BtOumrSDsi5wg67Cc7IOdXG5cdFx0XHRlLnRhcmdldC5jbGFzc05hbWUgPT09ICdtb2RhbF9fb3ZlcmxheScgfHxcblx0XHRcdGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ21vZGFsX19jYW5jZWwnXG5cdFx0KSB7XG5cdFx0XHR0aGlzLm1vZGFsLmNsb3NlKCk7XG5cdFx0fSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdtb2RhbF9fY29uZmlybSBhY3RpdmUnKSB7XG5cdFx0XHQvLyDtmZXsnbgg7YG066atIOyLnCDrsJzsg51cblx0XHRcdC8vIGFwaeuhnCDrj5nrhKQg7LaU6rCAXG5cdFx0XHR0aGlzLnN0YXRlLmFsbE15TG9jYXRpb24gPSBbLi4udGhpcy5zdGF0ZS5hbGxNeUxvY2F0aW9uLCB2YWx1ZV07XG5cdFx0XHR0aGlzLm1vZGFsLmNsb3NlKCk7XG5cdFx0XHR0aGlzLm1vZGFsLiRpbnB1dCA9ICcnOyAvLyBpbnB1dCDstIjquLDtmZRcblx0XHRcdHRoaXMuc2V0U3RhdGUoKTtcblx0XHR9XG5cdH1cblxuXHRiaW5kUmVtb3ZlTG9jYXRpb25FdmVudChpZHgpIHtcblx0XHRsZXQgTG9jYXRpb25BcnJheSA9IFsuLi50aGlzLnN0YXRlLmFsbE15TG9jYXRpb25dO1xuXHRcdExvY2F0aW9uQXJyYXkuc3BsaWNlKGlkeCwgMSk7XG5cdFx0dGhpcy5zdGF0ZS5hbGxNeUxvY2F0aW9uID0gTG9jYXRpb25BcnJheTtcblx0XHR0aGlzLnNldFN0YXRlKCk7XG5cdFx0LyogXG5cdFx0XHQtLey2lO2bhCDsmIjsoJUtLVxuXHRcdFx07IKt7KCcIOyLnCjqsIHqsIEgYXBpIOyalOyyrSDrj5nrsJgg7JiI7IOBKVxuXHRcdFx0MuqwnOydvOuVjCA6XG5cdFx0XHRcdGlkeCAwIOyCreygnCAtPiBpZHggMeydhCDrqZTsnbjrj5nrhKTroZxcblx0XHRcdFx0aWR4IDEg7IKt7KCcIC0+IOq3uOuMgOuhnFxuXHRcdFx0MeqwnOydvOuVjCA6XG5cdFx0XHRcdOuplOyduCDsgq3soJxcblx0XHQqL1xuXHR9XG5cblx0YmluZEJ1dHRvbkNsaWNrRXZlbnQoZSwgaWR4KSB7XG5cdFx0aWYgKFxuXHRcdFx0Ly8gcGx1cyBjbGljayBldmVudFxuXHRcdFx0ZS50YXJnZXQuY2xhc3NOYW1lID09PSAnbG9jYXRpb25fX3BsdXNCdG4nIHx8XG5cdFx0XHRlLnRhcmdldC5jbGFzc05hbWUgPT09ICdsb2NhdGlvbl9fcGx1cydcblx0XHQpIHtcblx0XHRcdHRoaXMubW9kYWwub3BlbigpO1xuXHRcdH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnbG9jYXRpb25fX2NhbmNlbEJ0bicpIHtcblx0XHRcdC8vIGNhbmNlbChYKSBjbGljayBldmVudFxuXHRcdFx0dGhpcy5hbGVydC5vcGVuKCk7XG5cdFx0XHR0aGlzLnN0YXRlLmN1cnJlbnRJbmRleCA9IGlkeDtcblx0XHR9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2xvY2F0aW9uX19ub3JtYWxCdG4nKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnTXVZYUhvJyk7XG5cdFx0XHQvKiBcblx0XHRcdC0t7LaU7ZuEIOyYiOyglS0tXG5cdFx0XHTsnbzrsJgg64+Z64SkIGNsaWNrIGV2ZW50ICgg66mU7J24IOuPmeuEpOuhnCBjaGFuZ2UgKVxuXHRcdFx06re4IO2bhCDri6Tsi5wgYXBpIOyalOyyreydhCDthrXtlbTshJwg66as66CM642U66eBIOuwqeyLnSBcblx0XHRcdCovXG5cdFx0fVxuXHR9XG5cblx0YmluZEFsZXJ0Q2xpY2tFdmVudChlKSB7XG5cdFx0aWYgKFxuXHRcdFx0Ly8g64ur6riwIOuwjyDsmbjrtoAg7YG066atIOyLnCDrsJzsg51cblx0XHRcdGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2FsZXJ0X19vdmVybGF5JyB8fFxuXHRcdFx0ZS50YXJnZXQuY2xhc3NOYW1lID09PSAnYWxlcnRfX2NhbmNlbCdcblx0XHQpIHtcblx0XHRcdHRoaXMuYWxlcnQuY2xvc2UoKTtcblx0XHR9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2FsZXJ0X19jb25maXJtJykge1xuXHRcdFx0Ly8g64KY6rCA6riwIO2BtOumrSDsi5wg67Cc7IOdXG5cdFx0XHR0aGlzLmFsZXJ0LmNsb3NlKCk7XG5cdFx0XHR0aGlzLmJpbmRSZW1vdmVMb2NhdGlvbkV2ZW50KHRoaXMuc3RhdGUuY3VycmVudEluZGV4KTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluLXBhZ2UvbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXIuanMnO1xuaW1wb3J0IFByb2R1Y3RMaXN0cyBmcm9tICcuLi9jb21wb25lbnRzL2Jhc2UvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5qcyc7XG5pbXBvcnQgUG9zdEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL21haW4tcGFnZS93cml0ZS1wb3N0LWJ1dHRvbi93cml0ZS1wb3N0LWJ1dHRvbic7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluLXBhZ2UvY2F0ZWdvcnkvY2F0ZWdvcnkuanMnO1xuaW1wb3J0IHsgQ0FURUdPUllfTElTVCB9IGZyb20gJy4uL2NvbnN0YW50cy9jYXRlZ29yeS1saXN0JztcbmltcG9ydCBMb2NhdGlvbk1pbmlNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL21haW4tcGFnZS9sb2NhdGlvbi1taW5pLW1vZGFsL2xvY2F0aW9uLW1pbmktbW9kYWwnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblBhZ2Uge1xuXHRzdGF0ZSA9IHtcblx0XHRwcm9kdWN0czogc2FtcGxlRGF0YSxcblx0XHRsb2NhdGlvbk5hbWU6IFsn7Jet7IK864+ZJywgJ+yduOywveuPmSddLFxuXHRcdGluZGV4OiAwLFxuXHR9O1xuXG5cdGNvbnN0cnVjdG9yKCRwYXJlbnQpIHtcblx0XHR0aGlzLiRwYXJlbnQgPSAkcGFyZW50O1xuXHRcdHRoaXMubmF2YmFyID0gbmV3IE5hdmJhcih7XG5cdFx0XHQkcGFyZW50LFxuXHRcdFx0aW5pdGlhbFN0YXRlOiB0aGlzLnN0YXRlLmxvY2F0aW9uTmFtZVt0aGlzLnN0YXRlLmluZGV4XSxcblx0XHRcdG9uQ2xpY2s6IChlKSA9PiB7XG5cdFx0XHRcdHRoaXMuYmluZE5hdkJhckNsaWNrRXZlbnQoZSk7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHRoaXMuUHJvZHVjdExpc3RzID0gbmV3IFByb2R1Y3RMaXN0cyh7XG5cdFx0XHQkcGFyZW50LFxuXHRcdFx0aW5pdGlhbFN0YXRlOiB0aGlzLnN0YXRlLnByb2R1Y3RzLFxuXHRcdFx0cmVmcmVzaFN0YXRlOiAobmV4dFN0YXRlKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3RhdGUucHJvZHVjdHMgPSBuZXh0U3RhdGU7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0dGhpcy5wb3N0QnV0dG9uID0gbmV3IFBvc3RCdXR0b24oeyAkcGFyZW50IH0pO1xuXG5cdFx0dGhpcy5jYXRlZ29yeSA9IG5ldyBDYXRlZ29yeSh7XG5cdFx0XHQkcGFyZW50LFxuXHRcdFx0Q0FURUdPUllfTElTVCxcblx0XHRcdG9uQ2xpY2s6IChlLCBpZHgpID0+IHtcblx0XHRcdFx0dGhpcy5iaW5kQ2F0ZWdvcnlDbGlja0V2ZW50KGUsIGlkeCk7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5sb2NhdGlvbk1pbmlNb2RhbCA9IG5ldyBMb2NhdGlvbk1pbmlNb2RhbCh7XG5cdFx0XHQkcGFyZW50LFxuXHRcdFx0aW5pdGlhbFN0YXRlOiB0aGlzLnN0YXRlLmxvY2F0aW9uTmFtZSxcblx0XHRcdG9uQ2xpY2s6IChlLCBpZHgpID0+IHtcblx0XHRcdFx0dGhpcy5iaW5kTG9jYXRpb25Nb2RhbENsaWNrRXZlbnQoZSwgaWR4KTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH1cblxuXHRzZXRTdGF0ZSgpIHtcblx0XHQvL+umrOugjOuNlOunge2MjO2KuFxuXHRcdHRoaXMubmF2YmFyLnNldFN0YXRlKHRoaXMuc3RhdGUubG9jYXRpb25OYW1lW3RoaXMuc3RhdGUuaW5kZXhdKTtcblx0XHR0aGlzLlByb2R1Y3RMaXN0cy5zZXRTdGF0ZSh0aGlzLnN0YXRlLnByb2R1Y3RzKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHQvL+ugjOuNlOunge2MjO2KuFxuXHR9XG5cblx0YmluZE5hdkJhckNsaWNrRXZlbnQoZSkge1xuXHRcdGlmIChcblx0XHRcdGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ25hdl9fY2F0ZWdvcnlJbWcnIC8vIOy5tO2FjOqzoOumrCDtgbTrpq0g7IucIOuwnOyDnVxuXHRcdCkge1xuXHRcdFx0dGhpcy5jYXRlZ29yeS5vcGVuKCk7XG5cblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLlByb2R1Y3RMaXN0cy5jbG9zZSgpO1xuXHRcdFx0fSwgNTAwKTtcblx0XHRcdHRoaXMuJHBhcmVudC5zY3JvbGxUb3AgPSAwO1xuXHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRlLnRhcmdldC5jbGFzc05hbWUgPT09ICduYXZfX2xvY2F0aW9uSWNvbicgfHxcblx0XHRcdGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ25hdl9fbG9jYXRpb25OYW1lJ1xuXHRcdCkge1xuXHRcdFx0dGhpcy5sb2NhdGlvbk1pbmlNb2RhbC5vcGVuKCk7XG5cdFx0fVxuXHR9XG5cdGJpbmRDYXRlZ29yeUNsaWNrRXZlbnQoZSwgaWR4KSB7XG5cdFx0aWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ25hdl9fcHJldicpIHtcblx0XHRcdHRoaXMuY2F0ZWdvcnkuY2xvc2UoKTtcblx0XHRcdHRoaXMuUHJvZHVjdExpc3RzLm9wZW4oKTtcblx0XHR9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2NhdGVnb3J5TGlzdF9faW1nJykge1xuXHRcdFx0dGhpcy5jYXRlZ29yeS5jbG9zZSgpO1xuXHRcdFx0dGhpcy5Qcm9kdWN0TGlzdHMub3BlbigpO1xuXHRcdFx0Y29uc29sZS5sb2coQ0FURUdPUllfTElTVFtpZHhdKTsgLy8gYXBpIOyduOyekOuhnCDrrLzqsbTrk6Qg7Zi47LacXG5cdFx0fVxuXHRcdC8qXG5cdFx0XHRDQVRFR09SWV9MSVNUW2lkeF07XG5cdFx0XHTquLDspIDsnLzroZwgYXBpIO2YuOy2nCDtm4Rcblx0XHRcdHByb2R1Y3Qg67+M66as6riwIChzZXRTdGF0ZSlcblx0XHQqL1xuXHR9XG5cblx0YmluZExvY2F0aW9uTW9kYWxDbGlja0V2ZW50KGUsIGlkeCkge1xuXHRcdGlmIChcblx0XHRcdGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ21pbmlNb2RhbF9fb3ZlcmxheSdcblx0XHRcdC8vIOyZuOu2gCDtgbTrpq0g7IucIOuwnOyDnVxuXHRcdCkge1xuXHRcdFx0dGhpcy5sb2NhdGlvbk1pbmlNb2RhbC5jbG9zZSgpO1xuXHRcdH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnbWluaU1vZGFsX19sb2NhdGlvbicpIHtcblx0XHRcdC8vIOuPmeuEpCDtgbTrpq0g7IucIOuwnOyDnVxuXHRcdFx0dGhpcy5sb2NhdGlvbk1pbmlNb2RhbC5jbG9zZSgpO1xuXHRcdFx0aWYgKHRoaXMuc3RhdGUuaW5kZXggIT09IGlkeCkge1xuXHRcdFx0XHR0aGlzLnN0YXRlLmluZGV4ID0gaWR4O1xuXHRcdFx0XHQvL2FwaSDsmpTssq0g7ZuEIHByb2R1Y3Qgc3RhdGXrj4Qg67OA6rK9ICjruYTrj5nquLDsoJzslrQpXG5cdFx0XHRcdHRoaXMuJHBhcmVudC5zY3JvbGxUbyh7XG5cdFx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJyxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuY29uc3Qgc2FtcGxlRGF0YSA9IFtcblx0e1xuXHRcdGltZ1BhdGg6ICcvaW1ncy9waG90by5qcGVnJyxcblx0XHRuYW1lOiAn66y47KeA7Zi4Jyxcblx0XHRsb2NhdGlvbjogJ+yduOywveuPmScsXG5cdFx0dGltZTogJzLsi5zqsIQg7KCEJyxcblx0XHRwcmljZTogJzEw7Ja1Jyxcblx0XHRsaWtlOiAnVCcsXG5cdFx0Y2hhdENvdW50OiA1LFxuXHRcdGxpa2VDb3VudDogMyxcblx0XHR1c2VyOiAn66y47KeA7Zi4Jyxcblx0XHRzZWxsZXI6ICfrgqjsmIHsmrAnLFxuXHR9LFxuXHR7XG5cdFx0aW1nUGF0aDogJy9pbWdzL3Bob3RvLmpwZWcnLFxuXHRcdG5hbWU6ICfrrLjsp4DtmLgnLFxuXHRcdGxvY2F0aW9uOiAn7J247LC964+ZJyxcblx0XHR0aW1lOiAnMuyLnOqwhCDsoIQnLFxuXHRcdHByaWNlOiAnMTDslrUnLFxuXHRcdGxpa2U6ICdGJyxcblx0XHRjaGF0Q291bnQ6IDUsXG5cdFx0bGlrZUNvdW50OiAwLFxuXHRcdHVzZXI6ICfrrLjsp4DtmLgnLFxuXHRcdHNlbGxlcjogJ+usuOyngO2YuCcsXG5cdH0sXG5cdHtcblx0XHRpbWdQYXRoOiAnL2ltZ3MvcGhvdG8uanBlZycsXG5cdFx0bmFtZTogJ+usuOyngO2YuCcsXG5cdFx0bG9jYXRpb246ICfsnbjssL3rj5knLFxuXHRcdHRpbWU6ICcy7Iuc6rCEIOyghCcsXG5cdFx0cHJpY2U6ICcxMOyWtScsXG5cdFx0bGlrZTogJ0YnLFxuXHRcdGNoYXRDb3VudDogNSxcblx0XHRsaWtlQ291bnQ6IDMsXG5cdFx0dXNlcjogJ+usuOyngO2YuCcsXG5cdFx0c2VsbGVyOiAn66y47KeA7Zi4Jyxcblx0fSxcblx0e1xuXHRcdGltZ1BhdGg6ICcvaW1ncy9waG90by5qcGVnJyxcblx0XHRuYW1lOiAn66y47KeA7Zi4Jyxcblx0XHRsb2NhdGlvbjogJ+yduOywveuPmScsXG5cdFx0dGltZTogJzLsi5zqsIQg7KCEJyxcblx0XHRwcmljZTogJzEw7Ja1Jyxcblx0XHRsaWtlOiAnRicsXG5cdFx0Y2hhdENvdW50OiA1LFxuXHRcdGxpa2VDb3VudDogMyxcblx0XHR1c2VyOiAn66y47KeA7Zi4Jyxcblx0XHRzZWxsZXI6ICfrgqjsmIHsmrAnLFxuXHR9LFxuXHR7XG5cdFx0aW1nUGF0aDogJy9pbWdzL3Bob3RvLmpwZWcnLFxuXHRcdG5hbWU6ICfrrLjsp4DtmLgnLFxuXHRcdGxvY2F0aW9uOiAn7J247LC964+ZJyxcblx0XHR0aW1lOiAnMuyLnOqwhCDsoIQnLFxuXHRcdHByaWNlOiAnMTDslrUnLFxuXHRcdGxpa2U6ICdGJyxcblx0XHRjaGF0Q291bnQ6IDUsXG5cdFx0bGlrZUNvdW50OiAzLFxuXHRcdHVzZXI6ICfrrLjsp4DtmLgnLFxuXHRcdHNlbGxlcjogJ+uCqOyYgeyasCcsXG5cdH0sXG5dO1xuIiwiaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL2Jhc2UvbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXInO1xuaW1wb3J0IE1haW5OYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9tZW51LXBhZ2UvbWFpbi1uYXZpZ2F0aW9uLWJhci9tYWluLW5hdmlnYXRpb24tYmFyJztcbmltcG9ydCBQcm9kdWN0TGlzdHMgZnJvbSAnLi4vY29tcG9uZW50cy9iYXNlL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuanMnO1xuaW1wb3J0IENoYXRMaXN0cyBmcm9tICcuLi9jb21wb25lbnRzL2Jhc2UvY2hhdC1saXN0L2NoYXQtbGlzdCc7XG5pbXBvcnQgeyBjcmVhdGVET01XaXRoU2VsZWN0b3IgfSBmcm9tICcuLi91dGlsL2NyZWF0ZURPTVdpdGhTZWxlY3Rvcic7XG5pbXBvcnQgJy4vbWVudS1wYWdlLmNzcyc7XG5cbmNvbnN0IG1vZGUgPSAn66mU64m0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVQYWdlIHtcblx0c3RhdGUgPSB7XG5cdFx0cHJvZHVjdHM6IHNhbXBsZURhdGEsXG5cdFx0bG9jYXRpb25OYW1lOiAn7Jet7IK864+ZJyxcblx0XHRuYXZpZ2F0b3JJbmRleDogJzEnLFxuXHRcdGNoYXRzOiBzYW1wbGVDaGF0RGF0YSxcblx0fTtcblx0LypcbiAgICAgICAgc3RhdGUubmF2aWdhdG9ySW5kZXhcbiAgICAgICAgMSA6IO2MkOunpOuqqeuhnVxuICAgICAgICAyIDog7LGE7YyFXG4gICAgICAgIDMgOiDqtIDsi6zrqqnroZ1cbiAgICAqL1xuXHRjb25zdHJ1Y3RvcigkcGFyZW50KSB7XG5cdFx0Y29uc29sZS5sb2cobG9jYXRpb24ucGF0aG5hbWUpO1xuXHRcdHRoaXMuJHBhcmVudCA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignZGl2JywgJy5tZW51V3JhcHBlcicpO1xuXHRcdCRwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy4kcGFyZW50KTtcblxuXHRcdHRoaXMubmF2YmFyID0gbmV3IE5hdmJhcih7XG5cdFx0XHQkcGFyZW50OiB0aGlzLiRwYXJlbnQsXG5cdFx0XHRpbml0aWFsU3RhdGU6IG1vZGUsXG5cdFx0XHRvbkNsaWNrOiAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnbmF2X19wcmV2Jykge1xuXHRcdFx0XHRcdHRoaXMuJHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdHRoaXMubWFpbk5hdmJhciA9IG5ldyBNYWluTmF2YmFyKHtcblx0XHRcdCRwYXJlbnQ6IHRoaXMuJHBhcmVudCxcblx0XHRcdGluaXRpYWxTdGF0ZTogdGhpcy5zdGF0ZS5uYXZpZ2F0b3JJbmRleCxcblx0XHRcdG9uQ2xpY2s6IChpZHgpID0+IHtcblx0XHRcdFx0dGhpcy5iaW5kTWFpbk5hdmJhckV2ZW50KGlkeCk7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5wcm9kdWN0TGlzdHMgPSBuZXcgUHJvZHVjdExpc3RzKHtcblx0XHRcdCRwYXJlbnQ6IHRoaXMuJHBhcmVudCxcblx0XHRcdGluaXRpYWxTdGF0ZTogdGhpcy5zdGF0ZS5wcm9kdWN0cyxcblx0XHR9KTtcblxuXHRcdHRoaXMuY2hhdExpc3RzID0gbmV3IENoYXRMaXN0cyh7XG5cdFx0XHQkcGFyZW50OiB0aGlzLiRwYXJlbnQsXG5cdFx0XHRpbml0aWFsU3RhdGU6IHRoaXMuc3RhdGUuY2hhdHMsXG5cdFx0fSk7XG5cdFx0dGhpcy5jaGF0TGlzdHMuY2xvc2UoKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy4kcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHRcdH0sIDApO1xuXHR9XG5cblx0c2V0U3RhdGUoKSB7XG5cdFx0Ly/rpqzroIzrjZTrp4HtjIztirhcblx0XHR0aGlzLm1haW5OYXZiYXIuc2V0U3RhdGUodGhpcy5zdGF0ZS5uYXZpZ2F0b3JJbmRleCk7XG5cdFx0aWYgKHRoaXMuc3RhdGUubmF2aWdhdG9ySW5kZXggPT09ICcyJykge1xuXHRcdFx0dGhpcy5wcm9kdWN0TGlzdHMuY2xvc2UoKTtcblx0XHRcdHRoaXMuY2hhdExpc3RzLm9wZW4oKTtcblx0XHRcdHRoaXMuY2hhdExpc3RzLnNldFN0YXRlKHRoaXMuc3RhdGUuY2hhdHMpOyAvLyDsiJjsoJUg7ZWgIOu2gOu2hChhcGnroZwgbmV3RGF0YSDtlYTsmpQpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2hhdExpc3RzLmNsb3NlKCk7XG5cdFx0XHR0aGlzLnByb2R1Y3RMaXN0cy5vcGVuKCk7XG5cdFx0XHR0aGlzLnByb2R1Y3RMaXN0cy5zZXRTdGF0ZSh0aGlzLnN0YXRlLnByb2R1Y3RzKTsgLy8g7IiY7KCVIO2VoCDrtoDrtoQoYXBp66GcIG5ld0RhdGEg7ZWE7JqUKSDrtoTquLDsspjrpqwg7ZuE7JeQIVxuXHRcdH1cblxuXHRcdC8qXG5cdFx0XHRiaW5kTWFpbk5hdmJhckV2ZW50IOyXkOyEnCBhcGkg7LKY66as7ZW07KSY64+EIOuQoOuTryEgKOydtOqyjCDrjZQg66ee64qU65OvKVxuXHRcdCovXG5cdH1cblxuXHQvLyBiaW5kTWFpbk5hdmJhckV2ZW50IDog7ZiE7J6sIG5hdiBpZHjsmYAg64uk66W064uk66m0IOyymOumrFxuXHRiaW5kTWFpbk5hdmJhckV2ZW50KGlkeCkge1xuXHRcdGlmIChpZHggPT09ICcxJyAmJiB0aGlzLnN0YXRlLm5hdmlnYXRvckluZGV4ICE9PSBpZHgpIHtcblx0XHRcdHRoaXMuc3RhdGUubmF2aWdhdG9ySW5kZXggPSAnMSc7XG5cdFx0XHR0aGlzLnNldFN0YXRlKCk7XG5cdFx0fSBlbHNlIGlmIChpZHggPT09ICcyJyAmJiB0aGlzLnN0YXRlLm5hdmlnYXRvckluZGV4ICE9PSBpZHgpIHtcblx0XHRcdHRoaXMuc3RhdGUubmF2aWdhdG9ySW5kZXggPSAnMic7XG5cdFx0XHR0aGlzLnNldFN0YXRlKCk7XG5cdFx0fSBlbHNlIGlmIChpZHggPT09ICczJyAmJiB0aGlzLnN0YXRlLm5hdmlnYXRvckluZGV4ICE9PSBpZHgpIHtcblx0XHRcdHRoaXMuc3RhdGUubmF2aWdhdG9ySW5kZXggPSAnMyc7XG5cdFx0XHR0aGlzLnNldFN0YXRlKCk7XG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IHNhbXBsZURhdGEgPSBbXG5cdHtcblx0XHRpbWdQYXRoOiAnL2ltZ3MvcGhvdG8uanBlZycsXG5cdFx0bmFtZTogJ+usuOyngO2YuCcsXG5cdFx0bG9jYXRpb246ICfsnbjssL3rj5knLFxuXHRcdHRpbWU6ICcy7Iuc6rCEIOyghCcsXG5cdFx0cHJpY2U6ICcxMOyWtScsXG5cdFx0bGlrZTogJ1QnLFxuXHRcdGNoYXRDb3VudDogNSxcblx0XHRsaWtlQ291bnQ6IDMsXG5cdH0sXG5cdHtcblx0XHRpbWdQYXRoOiAnL2ltZ3MvcGhvdG8uanBlZycsXG5cdFx0bmFtZTogJ+usuOyngO2YuCcsXG5cdFx0bG9jYXRpb246ICfsnbjssL3rj5knLFxuXHRcdHRpbWU6ICcy7Iuc6rCEIOyghCcsXG5cdFx0cHJpY2U6ICcxMOyWtScsXG5cdFx0bGlrZTogJ0YnLFxuXHRcdGNoYXRDb3VudDogNSxcblx0XHRsaWtlQ291bnQ6IDAsXG5cdH0sXG5cdHtcblx0XHRpbWdQYXRoOiAnL2ltZ3MvcGhvdG8uanBlZycsXG5cdFx0bmFtZTogJ+usuOyngO2YuCcsXG5cdFx0bG9jYXRpb246ICfsnbjssL3rj5knLFxuXHRcdHRpbWU6ICcy7Iuc6rCEIOyghCcsXG5cdFx0cHJpY2U6ICcxMOyWtScsXG5cdFx0bGlrZTogJ0YnLFxuXHRcdGNoYXRDb3VudDogNSxcblx0XHRsaWtlQ291bnQ6IDMsXG5cdH0sXG5cdHtcblx0XHRpbWdQYXRoOiAnL2ltZ3MvcGhvdG8uanBlZycsXG5cdFx0bmFtZTogJ+usuOyngO2YuCcsXG5cdFx0bG9jYXRpb246ICfsnbjssL3rj5knLFxuXHRcdHRpbWU6ICcy7Iuc6rCEIOyghCcsXG5cdFx0cHJpY2U6ICcxMOyWtScsXG5cdFx0bGlrZTogJ0YnLFxuXHRcdGNoYXRDb3VudDogNSxcblx0XHRsaWtlQ291bnQ6IDMsXG5cdH0sXG5cdHtcblx0XHRpbWdQYXRoOiAnL2ltZ3MvcGhvdG8uanBlZycsXG5cdFx0bmFtZTogJ+usuOyngO2YuCcsXG5cdFx0bG9jYXRpb246ICfsnbjssL3rj5knLFxuXHRcdHRpbWU6ICcy7Iuc6rCEIOyghCcsXG5cdFx0cHJpY2U6ICcxMOyWtScsXG5cdFx0bGlrZTogJ0YnLFxuXHRcdGNoYXRDb3VudDogNSxcblx0XHRsaWtlQ291bnQ6IDMsXG5cdH0sXG5dO1xuXG5jb25zdCBzYW1wbGVDaGF0RGF0YSA9IFtcblx0e1xuXHRcdGltZ1BhdGg6ICcvaW1ncy9waG90by5qcGVnJyxcblx0XHRuYW1lOiAn66y47KeA7Zi4Jyxcblx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdCdJdCBpcyBkZXNjcmlwdGlvbix0IGlzIGRlc2NyaXB0aW9udCBpcyBkZXNjcmlwdGlvbnQgaXMgZGVzY3JpcHRpb250IGlzIGRlc2NyaXB0aW9udCBpcyBkZXNjcmlwdGlvbnQgaXMgZGVzY3JpcHRpb24nLFxuXHRcdHRpbWU6ICcy7Iuc6rCEIOyghCcsXG5cdFx0Y291bnQ6IDUsXG5cdH0sXG5cdHtcblx0XHRpbWdQYXRoOiAnL2ltZ3MvcGhvdG8uanBlZycsXG5cdFx0bmFtZTogJ+usuOyngO2YuCcsXG5cdFx0ZGVzY3JpcHRpb246ICdJdCBpcyBkZXNjcmlwdGlvbicsXG5cdFx0dGltZTogJzLsi5zqsIQg7KCEJyxcblx0XHRjb3VudDogMCxcblx0fSxcblx0e1xuXHRcdGltZ1BhdGg6ICcvaW1ncy9waG90by5qcGVnJyxcblx0XHRuYW1lOiAn66y47KeA7Zi4Jyxcblx0XHRkZXNjcmlwdGlvbjogJ0l0IGlzIGRlc2NyaXB0aW9uJyxcblx0XHR0aW1lOiAnMuyLnOqwhCDsoIQnLFxuXHRcdGNvdW50OiAwLFxuXHR9LFxuXHR7XG5cdFx0aW1nUGF0aDogJy9pbWdzL3Bob3RvLmpwZWcnLFxuXHRcdG5hbWU6ICfrrLjsp4DtmLgnLFxuXHRcdGRlc2NyaXB0aW9uOiAnSXQgaXMgZGVzY3JpcHRpb24nLFxuXHRcdHRpbWU6ICcy7Iuc6rCEIOyghCcsXG5cdFx0Y291bnQ6IDUsXG5cdH0sXG5cdHtcblx0XHRpbWdQYXRoOiAnL2ltZ3MvcGhvdG8uanBlZycsXG5cdFx0bmFtZTogJ+usuOyngO2YuCcsXG5cdFx0ZGVzY3JpcHRpb246ICdJdCBpcyBkZXNjcmlwdGlvbicsXG5cdFx0dGltZTogJzLsi5zqsIQg7KCEJyxcblx0XHRjb3VudDogNSxcblx0fSxcblx0e1xuXHRcdGltZ1BhdGg6ICcvaW1ncy9waG90by5qcGVnJyxcblx0XHRuYW1lOiAn66y47KeA7Zi4Jyxcblx0XHRkZXNjcmlwdGlvbjogJ0l0IGlzIGRlc2NyaXB0aW9uJyxcblx0XHR0aW1lOiAnMuyLnOqwhCDsoIQnLFxuXHRcdGNvdW50OiA1LFxuXHR9LFxuXTtcbiIsImltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvYmFzZS9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9jb21wb25lbnRzL3NpZ251cC1wYWdlL2JvZHkvYm9keSc7XG5cbmNvbnN0IG1vZGUgPSAn7ZqM7JuQ6rCA7J6FJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25VcFBhZ2Uge1xuXHRzdGF0ZSA9IHt9O1xuXG5cdGNvbnN0cnVjdG9yKCRwYXJlbnQpIHtcblx0XHR0aGlzLm5hdmJhciA9IG5ldyBOYXZpZ2F0aW9uQmFyKHtcblx0XHRcdCRwYXJlbnQsXG5cdFx0XHRpbml0aWFsU3RhdGU6IG1vZGUsXG5cdFx0fSk7XG5cdFx0dGhpcy5ib2R5ID0gbmV3IEJvZHkoeyAkcGFyZW50IH0pO1xuXHR9XG5cblx0c2V0U3RhdGUoKSB7XG5cdFx0Ly/rpqzroIzrjZTrp4HtjIztirhcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHQvL+ugjOuNlOunge2MjO2KuFxuXHR9XG59XG4iLCJpbXBvcnQgQXBwQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvYmFzZS9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhcic7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL3VzZXItcGFnZS9zZWN0aW9uL3NlY3Rpb24nO1xuaW1wb3J0IHsgY3JlYXRlRE9NV2l0aFNlbGVjdG9yIH0gZnJvbSAnLi4vdXRpbC9jcmVhdGVET01XaXRoU2VsZWN0b3InO1xuaW1wb3J0ICcuL3VzZXItcGFnZS5jc3MnO1xuaW1wb3J0IHsgbmF2aWdhdGVUbyB9IGZyb20gJy4uL3JvdXRlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyUGFnZSB7XG5cdHN0YXRlID0gJyc7XG5cblx0Ly8g7Jik7KeBIGlk66eMIOuwm+yVhOyYpOuptCDrkJzri6QhXG5cdGNvbnN0cnVjdG9yKCRwYXJlbnQpIHtcblx0XHR0aGlzLiRwYXJlbnQgPSBjcmVhdGVET01XaXRoU2VsZWN0b3IoJ2RpdicsICcudXNlcldyYXBwZXInKTtcblx0XHQkcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuJHBhcmVudCk7XG5cblx0XHR0aGlzLiRhcHBCYXIgPSBuZXcgQXBwQmFyKHtcblx0XHRcdCRwYXJlbnQ6IHRoaXMuJHBhcmVudCxcblx0XHRcdGluaXRpYWxTdGF0ZTogdGhpcy5pc1VzZXJMb2dpbigpID8gJ+uCtCDqs4TsoJUnIDogJ+uhnOq3uOyduCcsXG5cdFx0XHRvbkNsaWNrOiAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnbmF2X19wcmV2Jykge1xuXHRcdFx0XHRcdHRoaXMuJHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdHRoaXMuJHNlY3Rpb24gPSBuZXcgU2VjdGlvbih7XG5cdFx0XHQkcGFyZW50OiB0aGlzLiRwYXJlbnQsXG5cdFx0XHRpbml0aWFsU3RhdGU6IHRoaXMuaXNVc2VyTG9naW4oKSA/IHRoaXMuc3RhdGUgOiAnJyxcblx0XHRcdG9uQ2xpY2s6IChlLCBpbnB1dFZhbHVlKSA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLmlzVXNlckxvZ2luKCkpIHtcblx0XHRcdFx0XHQvLyBsb2dvdXQgYXBpIO2YuOy2nCAo7L+g7YKkIOygnOqxsCnrp4wg7ZWY66m0IOuBnVxuXHRcdFx0XHRcdG5hdmlnYXRlVG8oJy8nKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0aWYgKGlucHV0VmFsdWUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHR0aGlzLiRzZWN0aW9uLiRhbGVydC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0aGlzLiRzZWN0aW9uLiRhbGVydC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdH0sIDIwMDApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnbG9naW4nKTtcblx0XHRcdFx0XHRcdC8vIGxvZ2luIGFwaSDtmLjstpxcblx0XHRcdFx0XHRcdC8vIOyEseqzteyLnCA6ICjsv6DtgqQg7IK97J6FKeunjCDtlZjrqbQg64GdICsgbmF2aWdhdGVUbygnLycpO1xuXHRcdFx0XHRcdFx0Ly8g7Iuk7Yyo7IucIDog6rK96rOg66y46rWsIHx8IOq4uOydtOqwgCAw7J206rGw64KYXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLiRwYXJlbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdFx0fSwgMCk7XG5cdH1cblxuXHRzZXRTdGF0ZSgpIHtcblx0XHR0aGlzLiRhcHBCYXIuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy4kc2VjdGlvbi5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcblx0fVxuXG5cdGlzVXNlckxvZ2luKCkge1xuXHRcdC8qIOycoOyggOqwgCDroZzqt7jsnbgg65CY7Ja0IOyeiOuLpOuptCwgdHJ1ZSDrsJjtmZgg7JWE64uI66m0IGZhbHNlICovXG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUubGVuZ3RoID4gMDtcblx0fVxufVxuIiwiaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi4vY29tcG9uZW50cy9iYXNlL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyJztcbmltcG9ydCBCb2R5IGZyb20gJy4uL2NvbXBvbmVudHMvd3JpdGluZy1wYWdlL2JvZHkvYm9keSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvd3JpdGluZy1wYWdlL2Zvb3Rlci9mb290ZXInO1xuLy8gaW1wb3J0IHsgbmF2aWdhdGVUbyB9IGZyb20gJy4uL3JvdXRlcic7XG5jb25zdCBtb2RlID0gJ+q4gOyTsOq4sCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdyaXRpbmdQYWdlIHtcblx0c3RhdGUgPSB7XG5cdFx0dXNlcjogJycsIC8vIHBr6rCS7J2EIOuTpOqzoOyeiOydhOyngCwg7J2066aE7J2EIOuTpOqzoCDsnojsnYTsp4Ag6rOg66+87J6F64uI64ukLlxuXHRcdHNlbGxlcjogJycsXG5cdFx0cHJpY2U6ICcnLFxuXHRcdHRpdGxlOiAnJyxcblx0XHRkZXNjcmlwdGlvbjogJycsXG5cdFx0c3RhdHVzOiAwLFxuXHRcdGxvY2F0aW9uOiAn7J247LC964+ZJywgLy8g6riw67O47KCB7Jy866GcIOycoOyggOydmCDrqZTsnbjrj5nrhKTrpbwg6rCW6rOgIOyeiOyWtOyVvO2VnOuLpC5cblx0XHRjYXRlZ29yeTogJycsXG5cdFx0aW1nUGF0aDogW10sXG5cdFx0Y3JlYXRlZEF0OiAnJyxcblx0XHRjaGF0Q291bnQ6IDAsXG5cdFx0d2lzaENvdW50OiAwLFxuXHRcdHZpc2l0Q291bnQ6IDAsXG5cdFx0aGF2ZUFsbFZhbHVlOiBmYWxzZSxcblx0fTtcblxuXHQvLyBoYXZlQWxsVmFsdWUgOiDrqqjrk6Ag6rCS7J20IOyeiOyWtOyVvCBOYXZiYXIgZG9uZUljb24g7Zmc7ISx7ZmUIOqwgOuKpSFcblx0Y29uc3RydWN0b3IoJHBhcmVudCkge1xuXHRcdHRoaXMuaGF2ZUhpc3RvcnlTdGF0ZSgpO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMubmF2aWdhdGlvbkJhciA9IG5ldyBOYXZpZ2F0aW9uQmFyKHtcblx0XHRcdCRwYXJlbnQsXG5cdFx0XHRpbml0aWFsU3RhdGU6IG1vZGUsXG5cdFx0XHRvbkNsaWNrOiAoKSA9PiB7XG5cdFx0XHRcdC8vIHN0YXRl7JeQIHVzZXJpZCDstpTqsIDtlZjqs6AgKOy2lOqwgOyViO2VtOuPhCDsnbjsnpDroZwg67Cb7JWE7IScIOq0nOywruydhOuTrykgaGF2ZUFsbFZhbHVl66W8IOu5vOuptCDrkKDrk68hXG5cdFx0XHRcdC8vIOqyjOyLnOusvCBwb3N0IOyalOyyrSAodGhpcy5zdGF0ZSlcblx0XHRcdFx0Ly8gbmF2aWdhdGVUbygnL2RldGFpbCcsdGhpcy5zdGF0ZSkgUEsg7LaU6rCA7ZW07JW87ZWg65OvIVxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHR0aGlzLmJvZHkgPSBuZXcgQm9keSh7XG5cdFx0XHQkcGFyZW50LFxuXHRcdFx0aW5pdGlhbFN0YXRlOiB0aGlzLnN0YXRlLFxuXHRcdFx0cmVmcmVzaFN0YXRlOiAobmV4dFN0YXRlKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlKTtcblx0XHRcdH0sIC8vIOu2gOuqqOydmCBTdGF0ZSDsl4XrjbDsnbTtirhcblx0XHR9KTtcblx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoe1xuXHRcdFx0JHBhcmVudCxcblx0XHRcdGluaXRpYWxTdGF0ZTogdGhpcy5zdGF0ZS5sb2NhdGlvbixcblx0XHR9KTtcblx0fVxuXG5cdHNldFN0YXRlKG5leHRTdGF0ZSkge1xuXHRcdHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG5cdFx0dGhpcy5uYXZpZ2F0aW9uQmFyLnNldFN0YXRlKHRoaXMuc3RhdGUuaGF2ZUFsbFZhbHVlKTtcblx0XHR0aGlzLmJvZHkuc2V0U3RhdGUobmV4dFN0YXRlKTtcblx0fVxuXG5cdGhhdmVIaXN0b3J5U3RhdGUoKSB7XG5cdFx0aWYgKGhpc3Rvcnkuc3RhdGUpIHtcblx0XHRcdGxldCB0ZW1wU3RhdGUgPSBoaXN0b3J5LnN0YXRlO1xuXHRcdFx0dGVtcFN0YXRlLmhhdmVBbGxWYWx1ZSA9IHRydWU7XG5cdFx0XHR0aGlzLnN0YXRlID0gdGVtcFN0YXRlO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vcGFnZXMvbWFpbi1wYWdlJztcbmltcG9ydCBEZXRhaWxQYWdlIGZyb20gJy4vcGFnZXMvZGV0YWlsLXBhZ2UnO1xuaW1wb3J0IFNpZ25VcFBhZ2UgZnJvbSAnLi9wYWdlcy9zaWdudXAtcGFnZSc7XG5pbXBvcnQgTG9jYXRpb25QYWdlIGZyb20gJy4vcGFnZXMvbG9jYXRpb24tcGFnZSc7XG5pbXBvcnQgTWVudVBhZ2UgZnJvbSAnLi9wYWdlcy9tZW51LXBhZ2UnO1xuaW1wb3J0IFVzZXJQYWdlIGZyb20gJy4vcGFnZXMvdXNlci1wYWdlJztcbmltcG9ydCBXcml0aW5nUGFnZSBmcm9tICcuL3BhZ2VzL3dyaXRpbmctcGFnZSc7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9wYWdlcy9Ob3RGb3VuZCc7XG5pbXBvcnQgTm90TG9naW4gZnJvbSAnLi9wYWdlcy9Ob3RMb2dpbic7XG5jb25zdCBwYXRoVG9SZWdleCA9IChwYXRoKSA9PlxuXHRuZXcgUmVnRXhwKCdeJyArIHBhdGgucmVwbGFjZSgvXFwvL2csICdcXFxcLycpLnJlcGxhY2UoLzpcXHcrL2csICcoLispJykgKyAnJCcpO1xuXG5jb25zdCBuYXZpZ2F0ZVRvID0gKHVybCwgcHJvcHMgPSBudWxsKSA9PiB7XG5cdGhpc3RvcnkucHVzaFN0YXRlKHByb3BzLCBudWxsLCB1cmwpOyAvLyBwcm9wc+uKlCBwb3BzdGF0ZeyLnCDsnpDsl7DsiqTrn73qsowg67mE7JuM7KeE64ukIVxuXHRyb3V0ZXIoKTtcbn07XG5cbmNvbnN0IHJvdXRlciA9ICgpID0+IHtcblx0Y29uc3Qgcm91dGVzID0gW1xuXHRcdHsgcGF0aDogJy8nLCB2aWV3OiBNYWluUGFnZSB9LFxuXHRcdHsgcGF0aDogJy9kZXRhaWwnLCB2aWV3OiBEZXRhaWxQYWdlIH0sXG5cdFx0eyBwYXRoOiAnL2RldGFpbC86aWQnLCB2aWV3OiBEZXRhaWxQYWdlIH0sXG5cdFx0eyBwYXRoOiAnL3NpZ251cCcsIHZpZXc6IFNpZ25VcFBhZ2UgfSxcblx0XHR7IHBhdGg6ICcvbG9jYXRpb24nLCB2aWV3OiBMb2NhdGlvblBhZ2UgfSxcblx0XHR7IHBhdGg6ICcvbWVudScsIHZpZXc6IE1lbnVQYWdlIH0sXG5cdFx0eyBwYXRoOiAnL3VzZXInLCB2aWV3OiBVc2VyUGFnZSB9LFxuXHRcdHsgcGF0aDogJy93cml0aW5nJywgdmlldzogV3JpdGluZ1BhZ2UgfSxcblx0XHR7IHBhdGg6ICcvbm90bG9naW4nLCB2aWV3OiBOb3RMb2dpbiB9LFxuXHRcdHsgcGF0aDogJy86bm90Zm91bmQnLCB2aWV3OiBOb3RGb3VuZCB9LFxuXHRdO1xuXG5cdC8vIFRlc3QgZWFjaCByb3V0ZSBmb3IgcG90ZW50aWFsIG1hdGNoXG5cdGNvbnN0IHBvdGVudGlhbE1hdGNoZXMgPSByb3V0ZXMubWFwKChyb3V0ZSkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRyb3V0ZTogcm91dGUsXG5cdFx0XHRyZXN1bHQ6IGxvY2F0aW9uLnBhdGhuYW1lLm1hdGNoKHBhdGhUb1JlZ2V4KHJvdXRlLnBhdGgpKSxcblx0XHR9O1xuXHR9KTtcblxuXHQvLyBjb25zb2xlLmxvZygnbCcsbG9jYXRpb24ucGF0aG5hbWUpXG5cdC8vIGNvbnNvbGUubG9nKCdwJyxwb3RlbnRpYWxNYXRjaGVzKVxuXG5cdGxldCBtYXRjaCA9IHBvdGVudGlhbE1hdGNoZXMuZmluZChcblx0XHQocG90ZW50aWFsTWF0Y2gpID0+IHBvdGVudGlhbE1hdGNoLnJlc3VsdCAhPT0gbnVsbFxuXHQpO1xuXHQvLyBjb25zb2xlLmxvZygnbScsbWF0Y2gpXG5cblx0aWYgKCFtYXRjaCkge1xuXHRcdG1hdGNoID0ge1xuXHRcdFx0cm91dGU6IHJvdXRlc1swXSxcblx0XHRcdHJlc3VsdDogW2xvY2F0aW9uLnBhdGhuYW1lXSxcblx0XHR9O1xuXHR9XG5cdC8vIGNvbnNvbGUubG9nKG1hdGNoLnJvdXRlKVxuXG5cdGNvbnN0ICRhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwJyk7XG5cdCRhcHAuc2Nyb2xsVG9wID0gMDtcblx0JGFwcC5pbm5lckhUTUwgPSAnJztcblx0bmV3IG1hdGNoLnJvdXRlLnZpZXcoJGFwcCk7XG59O1xuXG5leHBvcnQgeyByb3V0ZXIsIG5hdmlnYXRlVG8gfTtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVET01XaXRoU2VsZWN0b3IgPSAodGFnLCAuLi5zZWxlY3RvcnMpID0+IHtcblx0Y29uc3QgJERPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblx0c2VsZWN0b3JzLmZvckVhY2goKHNlbGVjdG9yKSA9PiB7XG5cdFx0aWYgKHNlbGVjdG9yWzBdID09PSAnIycpIHtcblx0XHRcdCRET00uaWQgPSBzZWxlY3Rvci5zbGljZSgxKTtcblx0XHR9XG5cblx0XHRpZiAoc2VsZWN0b3JbMF0gPT09ICcuJykge1xuXHRcdFx0JERPTS5jbGFzc0xpc3QuYWRkKHNlbGVjdG9yLnNsaWNlKDEpKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gJERPTTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVJbWdET01XaXRoU2VsZWN0b3IgPSAoc3JjLCAuLi5zZWxlY3RvcnMpID0+IHtcblx0Y29uc3QgJERPTSA9IGNyZWF0ZURPTVdpdGhTZWxlY3RvcignaW1nJywgLi4uc2VsZWN0b3JzKTtcblx0JERPTS5zcmMgPSBzcmM7XG5cdHJldHVybiAkRE9NO1xufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCB7IHJvdXRlciwgbmF2aWdhdGVUbyB9IGZyb20gJy4vcm91dGVyLmpzJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgcm91dGVyKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0aWYgKGUudGFyZ2V0Lm1hdGNoZXMoJ1tkYXRhLWxpbmtdJykpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdG5hdmlnYXRlVG8oZS50YXJnZXQuaHJlZiB8fCBlLnRhcmdldC5kYXRhc2V0LmxpbmspO1xuXHRcdH1cblx0fSk7XG5cblx0cm91dGVyKCk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=