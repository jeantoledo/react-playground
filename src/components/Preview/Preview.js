import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

import Component from '../Component'

import './style.css';

const Preview = () => {
  const [ components, setComponents ] = useState([])

  const [ _, drop ] = useDrop({
    accept: "component",
    drop: item => {
      const newComponent = { type: item.component };
      setComponents(components => components.concat(newComponent));
    },
    collect: monitor => ({ isOver: !!monitor.isOver() })
  })

  return (
    <div className="stage-grid" ref={drop}>
      { components && components.map(component => (
        <Component type={component.type}>{component.type}</Component>
      ))}
    </div>
  );
}

export default Preview;
