import React from 'react';
import './style.css';
import Placeholder from '../Placeholder';

const Preview = ({ components, onComponentChanged, onComponentAdded, onChangeCurrentComponentIndex }) => {
  return (
    <div className="stage-grid">
      { components.map((component, index) => (
          <Placeholder
            key={index}
            componentIndex={index}
            component={component}
            onComponentChanged={onComponentChanged}
            onChangeCurrentComponentIndex={onChangeCurrentComponentIndex}
          />
      )) }
      <Placeholder onComponentAdded={onComponentAdded} />
    </div>
  )
}

export default Preview;
