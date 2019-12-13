import React from 'react';

import Button from '../Button';
import Textbox from '../Textbox'
import Label from '../Label'
import TitleAndSubtitle from '../TitleAndSubtitle'

const componentRelations = {
  Label: Label,
  UIButton: Button,
  Textbox: Textbox,
  TitleAndSubtitle: TitleAndSubtitle
};

const Component = ({ component, properties }) => {
  const AnotherComponent = componentRelations[component.code]
  if (!AnotherComponent) return null;
  return <AnotherComponent {...properties} />;
};

export default Component;
