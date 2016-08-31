import React, { Component} from 'React';
import ReactBootstrap, { FormGroup, FormControl } from 'react-bootstrap';

const Modal_Recipe_Text = () => {
	return (
		<div>
			<form>
				<FormGroup>
					<FormControl id="ingredients" componentClass="textarea" placeholder="What are the ingredients?" />
				</FormGroup>
			</form>
		</div>

	)
}

export default Modal_Recipe_Text;
