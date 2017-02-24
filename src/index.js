import React, { Component } from 'react/dist/react.min'
import { render } from 'react-dom'
import { browserHistory, IndexRoute, Router, Route } from 'react-router'
import Client from './routes/client'

render(<Client />, document.getElementById('app'))
