import React, { Component } from 'react';
import ReactBootstrap, { ListGroup, ListGroupItem } from 'react-bootstrap';

const Ingredient_Item = (props) => {
  const Individual_Item = props.ingredient.map((el,index) => {
    return (
        <ListGroupItem key={index}>
          { el }
        </ListGroupItem>
    )
  })
  return (
    <ListGroup>
      { Individual_Item }
    </ListGroup>
)
}


export default Ingredient_Item;
