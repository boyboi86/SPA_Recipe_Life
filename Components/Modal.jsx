import React, { Component } from 'react';
import ReactBootstrap, { Button, Modal } from 'react-bootstrap';
import Modal_Recipe_Title from './Modal_Title.jsx';
import Modal_Recipe_Text from './Modal_Text.jsx';


export default class World extends Component {
	constructor(props){
		 super(props);

this.state = {showModal: false}
	 }

	open(){
		 this.setState({ showModal: true})
	}

	close() {
		 this.setState({ showModal: false })
	}
/*localStorage require serialization */
  add() {
    const New_Title = document.getElementById("title").value;
    const New_Ingredients = document.getElementById("ingredients").value.split(", ");
    var New_Recipe = {title: New_Title, ingredients: New_Ingredients};
		const Final_Update = JSON.parse(localStorage.recipeBook);
		Final_Update.push(New_Recipe);
		localStorage.setItem('recipeBook', JSON.stringify(Final_Update));
    this.setState({ showModal: false})
  }

  render() {
    return (
    	<div>
    		<Button bsStyle="primary" bsSize="large" onClick={this.open.bind(this)}>Add Recipe</Button>
    			<Modal show={this.state.showModal} onHide={this.close.bind(this)}>
	          		<Modal.Header closeButton>
	            		<Modal.Title>New Recipe</Modal.Title>
						        <Modal_Recipe_Title />
	          			</Modal.Header>
  	          			<Modal.Body>
  	            		  <Modal_Recipe_Text />
  	            		</Modal.Body>
				          <Modal.Footer>
			            	<Button onClick={this.close.bind(this)}>Close</Button>
                    <Button bsStyle="primary" onClick={this.add.bind(this)}>Add</Button>
			          	</Modal.Footer>
        		</Modal>
    	</div>
    	)
  }
}
