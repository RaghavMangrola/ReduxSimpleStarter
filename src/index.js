import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

var config = require('./config')

const API_KEY = config.API_KEY

// Create a new component. This componenet should produce some HTML
const App = () => {
    return (
			<div>
				<SearchBar />
			</div>
    )
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))