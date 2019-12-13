import React from 'react';
import shortid from 'shortid';
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
    <ComponentProperty key={shortid.generate()} property={property} onPropertyChanged={onPropertyChanged} />
  ))
}

export default ComponentProperties;
