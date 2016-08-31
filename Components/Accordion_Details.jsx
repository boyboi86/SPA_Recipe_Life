import React, { Component } from 'react';
import ReactBootstrap, { Panel, Accordion, Button } from 'react-bootstrap';
import Ingredient_Item from './Accordion_Detail_Ingredients.jsx';

class Accordion_Detail extends Component {

  remove(index){
      const recipes = this.props.recipeDetail;
        recipes.splice(index, 1);
        this.forceUpdate(localStorage.setItem("recipeBook", JSON.stringify(recipes)));
        }

  render() {
    const recipe_all = this.props.recipeDetail.map((el,index)=>{
      return (
            <Panel header={ el.title } eventKey={index} key={index}>
              <Ingredient_Item ingredient = { el.ingredients } />
                <Button bsStyle="danger" onClick ={ this.remove.bind(this, index) }>Delete</Button>
            </Panel>
            )
          });
    return (
      <Accordion>
        {recipe_all}
      </Accordion>
    )
  }
}

// const Accordion_Detail = (props) => {
//   const recipe_all = props.recipeDetail.map((el,index)=>{
//     return (
//         <Panel header={ el.title } eventKey={index} key={index}>
//         <Ingredient_Item ingredient = { el.ingredients } />
//       </Panel>
//     )
//   })
//   return (
//     <Accordion>
//       {recipe_all}
//       </Accordion>
//   )
// }




export default Accordion_Detail;
