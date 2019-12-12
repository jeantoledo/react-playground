import React from 'react';

// import { UIButton } from '@resultadosdigitais/tangram-react';
import Button from 'react-bootstrap/Button';
import Textbox from '../Textbox'
import Label from '../Label'

const componentRelations = {
  Label: Label,
  UIButton: Button,
  Textbox: Textbox
};

const Component = ({ type, children, props }) => {
  const AnotherComponent = componentRelations[type]
  if (!AnotherComponent) return null;
  return <AnotherComponent {...props}>{children}</AnotherComponent>;
};

export default Component;
