import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ReactBootstrap, { Accordion } from 'react-bootstrap';

import Hello from './hello.jsx';
import World from './world.jsx';

class App extends Component {

	render() {
		return (
			<div>
				<Hello />
				<World />
			</div>
		)
	}
}

ReactDom.render( <App />, document.getElementById('App'));
