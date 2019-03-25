// * Routes as objects {label, route}
// * Define navigation menu by inserting / removing from the routes array
export const index = { label: 'Home', route: '/' };
export const newExp = { label: 'New Experience', route: '/new' };
export const login = { label: 'Login', route: '/login' };
export const noMatch = { label: 'Page Not Found', route: '/page-not-found' };

export const routes = [index, noMatch];
