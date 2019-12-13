import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ children }) => (
    <label>{children}</label>
);

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

Label.defaultProps = {
  children: "Label"
}

export default Label;
