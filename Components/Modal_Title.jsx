import React, { Component} from 'React';
import ReactBootstrap, { FormGroup, FormControl } from 'react-bootstrap';

const Modal_Recipe_Title = () => {
	return (
		<div>
			<form>
				<FormGroup>
					<FormControl id="title" type="text" placeholder="Recipe Name?" />
				</FormGroup>
			</form>
		</div>

	)
}

export default Modal_Recipe_Title;
