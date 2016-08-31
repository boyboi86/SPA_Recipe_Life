import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Accordion from './Components/Accordion.jsx';
import Modal from './Components/Modal.jsx';

class App extends Component {

	render() {
		return (
			<div>
				<Accordion />
				<Modal />
			</div>
		)
	}
}

ReactDom.render( <App />, document.getElementById('App'));
