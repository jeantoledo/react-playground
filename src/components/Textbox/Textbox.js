import React from 'react';
import FormControl from 'react-bootstrap/FormControl';

const Textbox = ({ children, onChange }) => {
  return <FormControl value={children} onChange={onChange} />
}

export default Textbox
