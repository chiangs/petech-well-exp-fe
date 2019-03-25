import React from 'react';
import css from './Navigation.module.css';
import NavigationItems from './NavigationItems/NavigationItems';
import logo from '../../_assets/images/logo-equinor-primary-rgb.png';
import { Link } from 'react-router-dom';
import { index } from './_routes';
import UserInfo from './UserInfo/UserInfo';

const navigation = () => (
	<nav className={css.Navigation}>
		<section className={css.Navigation__LogoSection}>
			<Link to={index.route}>
				<img src={logo} alt="Equinor logo" />
			</Link>
		</section>
		<section className={css.Navigation__NavigationItems}>
			<NavigationItems />
			<UserInfo />
		</section>
	</nav>
);

export default navigation;
