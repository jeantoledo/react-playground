import React from 'react';
import { useDrop } from 'react-dnd';
import Component from '../Component';
import './style.css';

const Placeholder = ({
  componentIndex,
  component,
  onComponentChanged,
  onComponentAdded,
  onChangeCurrentComponentIndex
}) => {
  const [ { isOver }, drop ] = useDrop({
    accept: "component",
    drop: item => {
      if (!component) return onComponentAdded(item.component)
      onComponentChanged(componentIndex, item.component)
    },
    collect: monitor => ({ isOver: !!monitor.isOver() })
  })

  return (
    <div className={ isOver ? "placeholder-over" : "placeholder"} ref={drop}>
      {component &&
        <div className="component-item" onClick={() => onChangeCurrentComponentIndex(componentIndex)}>
          <Component component={component.data} properties={component.properties} />
        </div>
      }
      {!component && "Arraste um componente aqui"}
    </div>
  );
}

export default Placeholder;
