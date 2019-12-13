import React from 'react';
import { useDrop } from 'react-dnd';

import Component from '../Component'

import './style.css';

const Preview = ({ properties, component, onComponentChanged }) => {
  const [ _, drop ] = useDrop({
    accept: "component",
    drop: item => onComponentChanged(item.component),
    collect: monitor => ({ isOver: !!monitor.isOver() })
  })

  return (
    <div className="stage-grid" ref={drop}>
      {component && <Component component={component} properties={properties} />}
    </div>
  );
}

export default Preview;
