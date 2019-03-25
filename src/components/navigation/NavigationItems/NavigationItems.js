import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../_routes';
import css from './NavigationItems.module.css';

const navigationItems = () => {
	const routesArray = routes;
	const navLinks = routesArray.map((routeObj, index) => (
		<li className={css.NavigationItems__NavItem} key={index}>
			<NavLink
				className={css.NavigationItems__NavItem}
				activeClassName={css.Active}
				to={routeObj.route}
				exact>
				{routeObj.label}
			</NavLink>
		</li>
	));
	const navItems = routesArray.length > 0 ? navLinks : null;

	return <ul className={css.NavigationItems}>{navItems}</ul>;
};

export default navigationItems;
