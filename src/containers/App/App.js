import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { index, noMatch } from '../../components/Navigation/_routes';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import NoMatch from '../NoMatch/NoMatch';
import css from './App.module.css';

class App extends Component {
	render() {
		return (
			<div className={css.App}>
				<Layout>
					<Switch>
						<Route exact path={index.route} component={Home} />
						<Route exact path={noMatch.route} component={NoMatch} />
						<Route component={NoMatch} />
					</Switch>
				</Layout>
			</div>
		);
	}
}

export default App;
