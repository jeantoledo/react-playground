import React from 'react';
import FormControl from 'react-bootstrap/FormControl';

const Textbox = ({ className, children, onChange }) => {
  return <FormControl className={className} value={children} onChange={onChange} />
}

export default Textbox
