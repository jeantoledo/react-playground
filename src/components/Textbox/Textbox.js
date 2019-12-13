import React from 'react';
import FormControl from 'react-bootstrap/FormControl';

const Textbox = ({ className, value, onChange }) => {
  return <FormControl className={className} value={value} onChange={onChange} />
}

Textbox.defaultProps = {
  onChange: event => null
}

export default Textbox
