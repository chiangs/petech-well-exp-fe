import React, { Component } from 'react';
import css from './Layout.module.css';
import Navigation from '../../components/Navigation/Navigation';

export default class Layout extends Component {
	render() {
		return (
			<React.Fragment>
				<header>
					<Navigation />
				</header>
				<main id="main" className={css.Content}>
					{this.props.children}
				</main>
			</React.Fragment>
		);
	}
}
