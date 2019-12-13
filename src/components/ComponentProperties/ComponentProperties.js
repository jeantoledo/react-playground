import React from 'react';
import Textbox from '../Textbox'

class ComponentProperty extends React.Component {
  handleChange(event) {
    const { property, onPropertyChanged } = this.props

    onPropertyChanged({ name: property.name, value: event.target.value })
  }

  render() {
    const { name, value } = this.props.property

    return (
      <div>
        <div>{name}:</div>
        <Textbox onChange={this.handleChange.bind(this)}>{value}</Textbox>
      </div>
    )
  }
}

const ComponentProperties = ({ properties, onPropertyChanged }) => {
  return properties.map(property => (
    <ComponentProperty property={property} onPropertyChanged={onPropertyChanged} />
  ))
}

export default ComponentProperties;
