import React from 'react';

import Label from '../Label'

const componentRelations = {
  Component1: Label,
  Component2: Label
};

const DesignSystemComponent = ({ type, children, props }) => {
  if (componentRelations[type] == null) return null;
  const Component = componentRelations[type];
  return <Component {...props}>{children}</Component>;
};

export default DesignSystemComponent;
