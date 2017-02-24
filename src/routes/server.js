import React from 'react/dist/react.min'
import { Route } from 'react-router'

import App from './containers'

/**
 * Route for server side rendering
 */

export default () => {
	return(
		<Route path="/" component={App}>
		</Route>
	)
}
