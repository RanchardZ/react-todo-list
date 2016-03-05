
import React from 'react'  
import { render } from 'react-dom' 
import App from '../components/App'

// var React = require('react')
// var render = require('react-dom').render;
render(
	// define the encompassing component,
	// DOM element we want to mount it to

	// JSX syntax
	<App/>,
	document.getElementById('app')
)