import React from 'react';

import Button from 'react-bootstrap/Button';
import Textbox from '../Textbox'
import Label from '../Label'

const componentRelations = {
  Label: Label,
  UIButton: Button,
  Textbox: Textbox
};

const Component = ({ component, props }) => {
  const AnotherComponent = componentRelations[component.code]
  if (!AnotherComponent) return null;
  return <AnotherComponent {...props}>{component.name}</AnotherComponent>;
};

export default Component;
