import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import DragableListItem from '../DragableListItem';

import './style.css';

const ComponentList = () => (
  <div className="sidebar-components">
    <div className="sidebar-components__title">
      Componentes
    </div>
    <ListGroup>
      <DragableListItem component="Label">Label</DragableListItem>
      <DragableListItem component="UIButton">Button</DragableListItem>
      <DragableListItem component="Textbox">Textbox</DragableListItem>
    </ListGroup>
  </div>
)

export default ComponentList;
