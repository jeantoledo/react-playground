import React from 'react';

import App from './App'

class StatefulApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      properties: {}, //[ { name: 'Título', value: 'A volta' }, { name: 'Subtítulo', value: 'dos que não foram' } ]
      component: null
    }
  }

  handlePropertyChanged(changedProperty) {
    const { properties } = this.state
    properties[changedProperty.code] = changedProperty.value

    this.setState(Object.assign(this.state, { properties }))
  }

  handleComponentChanged(changedComponent) {
    this.setState(Object.assign(this.state, { component: changedComponent, properties: {} }))
  }

  render() {
    const { component, properties } = this.state

    return (
      <App properties={properties} component={component}
           onPropertyChanged={this.handlePropertyChanged.bind(this)}
           onComponentChanged={this.handleComponentChanged.bind(this)}
           />
    )
  }
}

export default StatefulApp
