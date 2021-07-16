import './reset.css';
import './index.css';
import { router, navigateTo } from './router.js';

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
	document.body.addEventListener('click', (e) => {
		if (e.target.matches('[data-link]')) {
			e.preventDefault();
			navigateTo(e.target.href || e.target.dataset.link);
		}
	});

	router();
});
