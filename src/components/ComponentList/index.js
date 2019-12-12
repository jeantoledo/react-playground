import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import DragableListItem from '../DragableListItem';

const ComponentList = () => (
  <ListGroup>
    <DragableListItem component="Component1">Componente 1</DragableListItem>
    <DragableListItem component="Component2">Componente 2</DragableListItem>
  </ListGroup>
)

export default ComponentList;
