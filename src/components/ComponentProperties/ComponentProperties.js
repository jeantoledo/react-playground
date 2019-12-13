import React from 'react';
import Textbox from '../Textbox'

import './style.css';

class ComponentProperty extends React.Component {
  handleChange(event) {
    const { property, onPropertyChanged } = this.props

    onPropertyChanged({ code: property.code, value: event.target.value })
  }

  render() {
    const { property } = this.props

    return (
      <div className="sidebar-properties__item">
        <div className="sidebar-property__item-name">{property.label}:</div>
        <Textbox className="sidebar-property__item-value" onChange={this.handleChange.bind(this)} value={property.value}></Textbox>
      </div>
    )
  }
}

const ComponentProperties = ({ properties, component, onPropertyChanged }) => {
  if (!component) return null

  const formattedProperies = Object.keys(component.propertyLabels)
    .map(code => {
      return {
        code,
        label: component.propertyLabels[code],
        value: (properties && properties[code]) || ""
      }
    })

  return (
    <div className="sidebar-properties">
      <div className="sidebar-properties__title">Configurações</div>
      {
        formattedProperies.map((property, index) => (
          <ComponentProperty key={index} property={property} onPropertyChanged={onPropertyChanged} />
        ))
      }
    </div>
  )
};


export default ComponentProperties;
