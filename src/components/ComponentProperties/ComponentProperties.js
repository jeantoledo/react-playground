import React from 'react';
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
        <div className="sidebar-property__item-name">{name}:</div>
        <Textbox className="sidebar-property__item-value" onChange={this.handleChange.bind(this)}>{value}</Textbox>
      </div>
    )
  }
}

const ComponentProperties = ({ properties, onPropertyChanged }) => {
  return (
    <div className="sidebar-properties">
      <div className="sidebar-properties__title">Configurações</div>
      {
        properties.map((property, index) => (
          <ComponentProperty key={index} property={property} onPropertyChanged={onPropertyChanged} />
        ))
      }
    </div>
  )
};


export default ComponentProperties;
