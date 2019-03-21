import React, { Component } from 'react';
import Loader from '../../components/Loader/Loader';

export default class NoMatch extends Component {
	render() {
		return (
			<article>
				<section>
					<h1>Error 404 - Page not found</h1>
					<Loader />
				</section>
			</article>
		);
	}
}
