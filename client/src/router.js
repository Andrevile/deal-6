import MainPage from './pages/main-page';
import DetailPage from './pages/detail-page';
import SignUpPage from './pages/signup-page';
import LocationPage from './pages/location-page';
import MenuPage from './pages/menu-page';

const pathToRegex = (path) =>
	new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const navigateTo = (url) => {
	history.pushState(null, null, url);
	router();
};

const router = () => {
	const routes = [
		{ path: '/', view: MainPage },
		{ path: '/detail', view: DetailPage },
		{ path: '/signup', view: SignUpPage },
		{ path: '/location', view: LocationPage },
		{ path: '/menu', view: MenuPage },
		// { path: '/posts/:id', view: PostView },
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

	const app = document.querySelector('.app');
	app.innerHTML = '';
	new match.route.view(app);
};

export { router, navigateTo };
