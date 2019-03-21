import React from 'react';
import css from './Navigation.module.css';
import NavigationItems from './NavigationItems/NavigationItems';

const navigation = () => (
	<nav className={css.Navigation}>
		<NavigationItems />
	</nav>
);

export default navigation;
