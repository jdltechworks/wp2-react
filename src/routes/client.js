import React, { Component } from 'react/dist/react.min'
import { browserHistory, IndexRoute, Router, Route } from 'react-router'
import App from '../containers'
import User from '../containers/User'
import Chart from '../containers/Chart'
import Login from '../containers/Login'

/**
 * Routes that are intended for the client rendering
 * @return Component Group of routes
 */
export default () => {
	return(
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={User} />
				<Route path="/chart" component={Chart}></Route>
				<Route path="/login" component={Login}></Route>
			</Route>
		</Router>
	)
}