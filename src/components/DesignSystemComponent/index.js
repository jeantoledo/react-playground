import React from 'react';
// import { UIButton } from '@resultadosdigitais/tangram-react';

import Label from '../Label'

const componentRelations = {
  Label: Label,
  // UIButton: UIButton
};

const DesignSystemComponent = ({ type, children, props }) => {
  if (componentRelations[type] == null) return null;
  const Component = componentRelations[type];
  return <Component {...props}>{children}</Component>;
};

export default DesignSystemComponent;