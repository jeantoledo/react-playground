import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import DragableListItem from '../DragableListItem';

const ComponentList = () => (
  <ListGroup>
    <DragableListItem component="Label">Label</DragableListItem>
    <DragableListItem component="UIButton">Button</DragableListItem>
    <DragableListItem component="Textbox">Textbox</DragableListItem>
  </ListGroup>
)

export default ComponentList;
