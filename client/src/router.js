import Mainpage from './pages/main-page'

const pathToRegex = (path) =>
	new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const navigateTo = (url) => {
	history.pushState(null, null, url);
	router();
};

const router = () => {
	const routes = [
		{ path: '/', view: Mainpage},
		// { path: '/another', view: Page2 },
		// { path: '/posts/:id', view: PostView },
		// { path: '/settings', view: Settings },
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
