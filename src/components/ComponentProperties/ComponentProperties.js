import React from 'react';
import shortid from 'shortid';
import Textbox from '../Textbox'

import './style.css';

class ComponentProperty extends React.Component {
  handleChange(event) {
    const { property, onPropertyChanged } = this.props

    onPropertyChanged({ name: property.name, value: event.target.value })
  }

  render() {
    const { name, value } = this.props.property

    return (
      <div className="sidebar-properties__item">
        <div className="property__name">{name}:</div>
        <Textbox onChange={this.handleChange.bind(this)}>{value}</Textbox>
      </div>
    )
  }
}

const ComponentProperties = ({ properties, onPropertyChanged }) => {
  return (
    <div className="sidebar-properties">
      <div className="sidebar-properties__title">Configurações</div>
      {
        properties.map(property => (
          <ComponentProperty key={shortid.generate()} property={property} onPropertyChanged={onPropertyChanged} />
        ))
      }
    </div>
  )
};


export default ComponentProperties;
