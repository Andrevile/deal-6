export const createDOMwithSelector = (tag, ...selectors) => {
    const DOM = document.createElement(tag);
    
    selectors.forEach( (selector) => {
        if(selector[0] === '#') {
            DOM.id = selector.slice(1);
          }
    
        if(selector[0] === '.') {
            DOM.classList.add(selector.slice(1));
        }
    })
    return DOM;
};
  