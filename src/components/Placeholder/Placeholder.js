import React from 'react';
import { useDrop } from 'react-dnd';
import Component from '../Component';
import './style.css';
import dragAndDropIcon from '../../assets/drag-and-drop.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

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
      {!component &&
        <div className="center">
          <img className="drag-and-drop-icon" src={dragAndDropIcon}></img>
          <br></br>
          <span>Arraste um componente aqui para criar protótipos incríveis
            &nbsp;
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </div>
      }
    </div>
  );
}

export default Placeholder;
