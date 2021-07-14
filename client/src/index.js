import Page1 from "./pages/1page/1page.js";
import Page2 from "./pages/2page/2page.js";
import "./styles/index.css";

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = () => {
  const routes = [
    { path: "/", view: Page1 },
    { path: "/ano", view: Page2 },
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

  const app = document.querySelector(".app");
  app.innerHTML = "";
  new match.route.view(app);
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
