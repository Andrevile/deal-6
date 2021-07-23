import MainPage from './pages/main-page';
import DetailPage from './pages/detail-page';
import SignUpPage from './pages/signup-page';
import LocationPage from './pages/location-page';
import MenuPage from './pages/menu-page';
import UserPage from './pages/user-page';
import WritingPage from './pages/writing-page';
import NotFound from './pages/NotFound';
import NotLogin from './pages/NotLogin';
import ChatPage from './pages/chat-page';
const pathToRegex = (path) =>
	new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const navigateTo = (url, props = null) => {
	history.pushState(props, null, url); // props는 popstate시 자연스럽게 비워진다!
	router();
};

const router = () => {
	const routes = [
		{ path: '/', view: MainPage },
		{ path: '/detail', view: DetailPage },
		{ path: '/detail/:id', view: DetailPage },
		{ path: '/signup', view: SignUpPage },
		{ path: '/location', view: LocationPage },
		{ path: '/menu', view: MenuPage },
		{ path: '/user', view: UserPage },
		{ path: '/chat', view: ChatPage },
		{ path: '/writing', view: WritingPage },
		{ path: '/notlogin', view: NotLogin },
		{ path: '/:notfound', view: NotFound },
	];

	// Test each route for potential match
	const potentialMatches = routes.map((route) => {
		return {
			route: route,
			result: location.pathname.match(pathToRegex(route.path)),
		};
	});

	// console.log('l',location.pathname)
	// console.log('p',potentialMatches)

	let match = potentialMatches.find(
		(potentialMatch) => potentialMatch.result !== null
	);
	// console.log('m',match)

	if (!match) {
		match = {
			route: routes[0],
			result: [location.pathname],
		};
	}
	// console.log(match.route)

	const $app = document.querySelector('.app');
	$app.scrollTop = 0;
	$app.innerHTML = '';
	new match.route.view($app);
};

export { router, navigateTo };
