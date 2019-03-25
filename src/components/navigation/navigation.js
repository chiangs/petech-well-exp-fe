import React from 'react';
import css from './Navigation.module.css';
import NavigationItems from './NavigationItems/NavigationItems';
import logo from '../../_assets/images/logo-equinor-primary-rgb.png';

const navigation = () => (
	<nav className={css.Navigation}>
		<section className={css.Navigation__LogoSection}>
			<img src={logo} alt="Equinor logo" />
		</section>
		<NavigationItems />
	</nav>
);

export default navigation;
