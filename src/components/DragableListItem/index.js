import React from 'react';
import { useDrag } from 'react-dnd';
import ListGroup from 'react-bootstrap/ListGroup';

const DragableListItem = ({ isDragging, children, component }) => {
  const [{ opacity }, drag] = useDrag({
    item: { type: 'component', component },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
    <ListGroup.Item ref={drag} style={{ opacity }}>
      {children}
    </ListGroup.Item>
  )
}

export default DragableListItem
