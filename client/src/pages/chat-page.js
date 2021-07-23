import Navbar from '../components/base/navigation-bar/navigation-bar';
import ChatLists from '../components/base/chat-list/chat-list';

const mode = '채팅하기';
export default class ChatPage {
	constructor($parent) {
		new Navbar({
			$parent,
			initialState: mode,
		});

		new ChatLists({
			$parent,
			initialState: sampleChatData,
		});
	}
}

const sampleChatData = [
	{
		imgPath:
			'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
		name: '죄송함돠..',
		content: '으악...',
		time: '2시간 전',
		count: 5,
	},
	{
		imgPath:
			'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
		name: '죄송함돠..',
		content: '시간이 부족하여',
		time: '1시간 전',
		count: 0,
	},
	{
		imgPath:
			'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
		name: '죄송함돠..',
		content: '구현 못했습니다',
		time: '5시간 전',
		count: 7,
	},
	{
		imgPath:
			'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
		name: '죄송함돠..',
		content: '하하하...',
		time: '1시간 전',
		count: 3,
	},
	{
		imgPath:
			'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
		name: '죄송함돠..',
		content: 'I am Sorry',
		time: '2시간 전',
		count: 5,
	},
	{
		imgPath:
			'https://deal-6.s3.ap-northeast-2.amazonaws.com/storeImages/imgs/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg',
		name: '죄송함돠..',
		content: 'ㅠ__ㅠ',
		time: '10시간 전',
		count: 0,
	},
];
