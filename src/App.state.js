import React from 'react';

import App from './App'

class StatefulApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentComponentIndex: -1,
      components: [] // tuple of component and properties
    }
  }

  handleChangeCurrentComponentIndex(newIndex) {
    this.setState(Object.assign(this.state, { currentComponentIndex: newIndex }))
  }

  handlePropertyChanged(changedProperty) {
    const { currentComponentIndex, components } = this.state

    const properties = components[currentComponentIndex].properties
    properties[changedProperty.code] = changedProperty.value

    this.setState(Object.assign(this.state, { components }))
  }

  handleComponentChanged(componentIndex, changedComponent) {
    const { components } = this.state
    components[componentIndex] = { data: changedComponent, properties: {} }

    this.setState(Object.assign(this.state, { components, currentComponentIndex: componentIndex }))
  }

  handleComponentAdded(newComponent) {
    const { components } = this.state
    components.push({
      data: newComponent,
      properties: {}
    })

    this.setState(Object.assign(this.state, { components, currentComponentIndex: components.length - 1 }))
  }

  render() {
    const { components, currentComponentIndex } = this.state

    return (
      <App currentComponentIndex={currentComponentIndex} components={components}
        onPropertyChanged={this.handlePropertyChanged.bind(this)}
        onComponentChanged={this.handleComponentChanged.bind(this)}
        onComponentAdded={this.handleComponentAdded.bind(this)}
        onChangeCurrentComponentIndex={this.handleChangeCurrentComponentIndex.bind(this)}
      />
    )
  }
}

export default StatefulApp
