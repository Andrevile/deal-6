export const createDOMWithSelector = (tag, ...selectors) => {
	const $DOM = document.createElement(tag);
	selectors.forEach((selector) => {
		if (selector[0] === '#') {
			$DOM.id = selector.slice(1);
		}

		if (selector[0] === '.') {
			$DOM.classList.add(selector.slice(1));
		}
	});
	return $DOM;
};

export const createImgDOMWithSelector = (src, ...selectors) => {
	const $DOM = createDOMWithSelector('img', ...selectors);
	$DOM.src = src;
	return $DOM;
};
