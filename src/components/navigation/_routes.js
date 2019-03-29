// * Routes as objects {label, route}
// * Define navigation menu by inserting / removing from the routes array
export const index = { label: 'Home', route: '/' };
export const newExp = { label: 'Add experiences', route: '/new' };
export const searchExp = { label: 'Search experiences', route: '/search' };
export const login = { label: 'Login', route: '/login' };
export const noMatch = { label: 'Page not found', route: '/page-not-found' };

export const routes = [index, newExp, searchExp];
