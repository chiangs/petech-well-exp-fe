import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { index, newExp, noMatch } from '../../components/Navigation/_routes';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import NoMatch from '../NoMatch/NoMatch';
// import New from '../NewExperience/NewExperience';
import css from './App.module.css';

const New = lazy(() => import('../NewExperience/NewExperience'));

class App extends Component {
	render() {
		// ? will be 2 route variables for auth / notAuth
		const routes = (
			<Switch>
				<Route exact path={index.route} component={Home} />
				{/* <Route exact path={newExp.route} render={() => 
				<New />} /> */}
				<Route exact path={newExp.route} component={New} />
				<Route exact path={noMatch.route} component={NoMatch} />
				<Route component={NoMatch} />
			</Switch>
		);

		return (
			<div className={css.App}>
				<Layout>
					<Suspense fallback={<Loader />}>{routes}</Suspense>
				</Layout>
			</div>
		);
	}
}

export default withRouter(App);
