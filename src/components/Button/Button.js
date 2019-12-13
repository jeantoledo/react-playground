import React from 'react';
import BootstrapButton from 'react-bootstrap/Button';

const Button = ({ className, children }) => {
  return <BootstrapButton className={className}>{children}</BootstrapButton>
}

Button.defaultProps = {
  children: "Button"
}

export default Button
