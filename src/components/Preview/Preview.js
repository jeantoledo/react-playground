import React from 'react';
import { useDrop } from 'react-dnd';

import Component from '../Component'

import './style.css';

const Placeholder = ({ componentIndex, component, onComponentChanged, onComponentAdded }) => {
  const [ { isOver }, drop ] = useDrop({
    accept: "component",
    drop: item => {
      if (!component) return onComponentAdded(item.component)
      console.log(item.component)
      onComponentChanged(componentIndex, item.component)
    },
    collect: monitor => ({ isOver: !!monitor.isOver() })
  })

  return (
    <div className={ isOver ? "placeholder-over" : "placeholder"} ref={drop}>
      {component && <Component component={component.data} properties={component.properties} />}
      {!component && "Arraste um componente aqui"}
    </div>
  );
}

const Preview = ({ components, currentComponentIndex, onComponentChanged, onComponentAdded }) => {
  return (
    <div className="stage-grid">
      {
        components.map((component, index) => (
          <Placeholder key={index} componentIndex={index} component={component} onComponentChanged={onComponentChanged} />
        ))
      }
      <Placeholder onComponentAdded={onComponentAdded} />
    </div>
  )
}

export default Preview;
