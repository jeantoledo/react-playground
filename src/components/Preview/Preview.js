import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

import Component from '../Component'

import './style.css';

const Preview = props => {
  const [ component, setComponent ] = useState("Label")

  const [ _, drop ] = useDrop({
    accept: "component",
    drop: item => setComponent(item.component),
    collect: monitor => ({ isOver: !!monitor.isOver() })
  })

  return (
    <div className="stage-grid" ref={drop}>
      <Component type={component}>{component}</Component>
    </div>
  );
}

export default Preview;
