import React from 'react';

import App from './App'

class StatefulApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentProperties: [ { name: 'Título', value: 'A volta' }, { name: 'Subtítulo', value: 'dos que não foram' } ]
    }
  }

  handlePropertyChanged(changedProperty) {
    const state = this.state

    const currentProperties = state.currentProperties
    const [ property ] = currentProperties.filter(prop => prop.name === changedProperty.name)
    property.value = changedProperty.value

    this.setState(Object.assign(state, { currentProperties }))
  }

  render() {
    const properties = this.state.currentProperties

    return <App properties={properties} onPropertyChanged={this.handlePropertyChanged.bind(this)} />
  }
}

export default StatefulApp
