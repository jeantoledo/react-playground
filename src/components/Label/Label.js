import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ children }) => (
    <label>{children}</label>
);

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Label;
