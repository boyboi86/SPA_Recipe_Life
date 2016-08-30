import React, { Component } from 'react';
import ReactBootstrap, { Accordion } from 'react-bootstrap';
import Accordion_Detail from './Components/Accordion_Details.jsx';

class Hello extends Component {
 constructor(props){
 		super(props);

 const RecipeData = [
 	{title: "Pumpkin Pie", ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]},
 	{title: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]},
 	{title: "Onion Pie", ingredients: ["Onion", "Pie Crust", "Sounds Yummy right?"]}];

/*If you wish to reset localStorage uncomment this part and comment out the below code*/
  // localStorage.recipeBook = JSON.stringify(RecipeData);
  // this.state={ term: JSON.parse(localStorage.recipeBook)}

/*This will allow localStorage to persit your data after refresh*/
	 	if(typeof localStorage["recipeBook"] !== "undefined"){
	 		this.state={ term: JSON.parse(localStorage.recipeBook)}
	 	} else {
	 		localStorage.recipeBook = JSON.stringify(RecipeData);
	 		this.state={ term: JSON.parse(localStorage.recipeBook)}
	 	}
  }


	render(){
			return(
				<div>
	    			<Accordion_Detail recipeDetail = { this.state.term }/>
				</div>
			)
		}
}

export default Hello;
