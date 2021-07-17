import './chat-lists.css';
import { createDOMWithSelector } from '../../../util/createDOMWithSelector';
export default class ChatLists {
	state = [];

	constructor({ $parent, initialState }) {
		this.state = initialState;
		this.$target = createDOMWithSelector('section', '.chatOutline');
		$parent.appendChild(this.$target);

		this.render();
	}

	setState(nextState) {
		this.state = nextState;
		this.render();
	}

	render() {
		const result = this.state
			.map((chat) => {
				return `
				<article class='chat'>
					
					<div class='chat__info'>
						<span class='chat__name'>${chat.name}</span>
						<span class='chat__content'>${chat.content}</span>
					</div>
					
                    <div class='chat__rightSide'>
                        <div>
                            <span class='chat__time'>${chat.time}</span>
                            ${this.viewChatCount(chat.count)}
                        </div>
                        <img class='chat__imgs' src=${chat.imgPath}>
                    </div>
						
				</article>
			`;
			})
			.join('');

		this.$target.innerHTML = result;
	}

	viewChatCount = (count) => {
		return count > 0
			? `<div class='chat__count'><span>${count}</span></div>`
			: ``;
	};

	open() {
		this.$target.style.display = 'block';
	}

	close() {
		this.$target.style.display = 'none';
	}
}
