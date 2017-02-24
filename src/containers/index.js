import React, { Component } from 'react/dist/react.min'


/**@class Shared component for the entire server and client rendering */
export default class App extends Component {
	render() {
		const { props } = this;
		const { children } = props;
		return(
			<div className="container">{ children }</div>
		)
	}
}