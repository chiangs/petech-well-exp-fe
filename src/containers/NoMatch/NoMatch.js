import React, { Component } from 'react';
import css from './NoMatch.module.css';
import { Link } from 'react-router-dom';
import { index } from '../../components/Navigation/_routes';

export default class NoMatch extends Component {
	render() {
		const title = 'Error 404 - Page not found';
		const subtitle =
			'The resource you are looking for might have been removed, had its name changed, or is temporarily unavailable.';
		const instructions =
			'Please try again by using the navigation menu above, or';
		const linkText = ' click here to go back to the home page.';

		return (
			<article className={css.NoMatch}>
				<section className={css.NoMatch__TitleSection}>
					<h1 className={css.NoMatch__Title}>{title}</h1>
					<h2 className={css.NoMatch__Subtitle}>{subtitle}</h2>
				</section>
				<section className={css.NoMatch__Instructions}>
					<p>
						{instructions} <Link to={index.route}>{linkText}</Link>
					</p>
				</section>
			</article>
		);
	}
}
