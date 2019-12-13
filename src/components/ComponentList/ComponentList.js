import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import DragableListItem from './DragableListItem';

import ComponentDataProvider from '../../dataProviders/components'

import './style.css';

const ComponentList = () => (
  <div className="sidebar-components">
    <div className="sidebar-components__title">
      Componentes
    </div>
    <ListGroup>
      {
        ComponentDataProvider.getComponents()
          .map((componentData, index) => <DragableListItem key={index} component={componentData}>{componentData.name}</DragableListItem>)
      }
    </ListGroup>
  </div>
)

export default ComponentList;
