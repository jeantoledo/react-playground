import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

import DesignSystemComponent from '../DesignSystemComponent'

const Preview = props => {
  const [ component, setComponent ] = useState("Label")

  const [ _, drop ] = useDrop({
    accept: "component",
    drop: item => { alert(item.component); setComponent(item.component) },
    collect: monitor => ({ isOver: !!monitor.isOver() })
  })

  return (
    <div ref={drop} style={{ backgroundColor: 'red' }}>
      <DesignSystemComponent type={component}>{component}</DesignSystemComponent>
    </div>
  );
}

export default Preview;
