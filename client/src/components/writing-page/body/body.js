import './body.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
import { CATEGORY_LIST } from '../../../constants/category-list';

export default class Body {
	state = {};

	constructor({ $parent, initialState, refreshState }) {
		this.state = initialState;
		this.refreshState = refreshState;
		this.$target = createDOMWithSelector('div', '.post');
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

		this.$title.addEventListener('keyup', (e) => {
			this.bindTitleEvent(e);
		});
		this.$price.addEventListener('keyup', (e) => {
			this.bindPriceKeyUpEvent(e);
		});
		this.$price.addEventListener('focusout', (e) => {
			this.rearrangePrice(e);
		});
		this.$content.addEventListener('keyup', (e) => {
			this.bindContentEvent(e);
		});
		this.$category.addEventListener('click', (e) => {
			this.bindCategoryEvent(e);
		});
		this.$container.addEventListener('click', (e) => {
			this.bindImageButtonEvent(e);
		});
		// this.$container.addEventListener('change', (e) => {
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
		this.$input.onchange = (e) => {
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
		return this.state.imgPath
			.map((image, idx) => {
				return `
              <div class='post__imgOuter'>
                  <img class='post__imgContainer' src=${image} alt='image'>
                  <button class='post__removeBtn' data-idx=${idx} ><span class='post_X' data-idx=${idx}>X</span></button>
              </div>
            `;
			})
			.join('');
	}

	renderButton() {
		return CATEGORY_LIST.map((category, idx) => {
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
		if (
			this.state.title.length > 0 &&
			this.state.content.length > 0 &&
			this.state.imgPath.length > 0 &&
			this.state.category.length > 0
		) {
			this.state.haveAllValue = true;
			return;
		}
		this.state.haveAllValue = false;
	}

	chcekValueAndRefreshState() {
		this.checkHavingAllValue();
		this.refreshState(this.state);
	}

	bindImageButtonEvent = (e) => {
		if (
			e.target.className === 'post__removeBtn' ||
			e.target.className === 'post_X'
		) {
			let idx = e.target.dataset.idx;
			let imageArray = this.state.imgPath;
			imageArray.splice(idx, 1);
			this.state.imgPath = imageArray;
			this.chcekValueAndRefreshState();
		}
	};

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
		if (
			e.target.className === 'category__button active' ||
			e.target.className === 'category__button'
		) {
			this.state.category = CATEGORY_LIST[e.target.dataset.idx];
			this.chcekValueAndRefreshState();
		}
	}

	// bindingEvent(e) {
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
