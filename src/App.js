import React, { Component } from 'react';
import SplitPane from 'react-split-pane';

import Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import './App.css';
import './UISplitPane.style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Preview from './components/Preview';
import ComponentList from './components/ComponentList'
import ComponentProperties from './components/ComponentProperties'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentProperties: [ { name: 'Título', value: 'A volta' }, { name: 'Subtítulo', value: 'dos que não foram' } ]
    }
  }

  handlePropertyChanged(changedProperty) {
    const currentProperties = this.state.currentProperties
    const [ property ] = currentProperties.filter(prop => prop.name === changedProperty.name)
    property.value = changedProperty.value

    this.setState(Object.assign(this.state, { currentProperties }))
  }

  render() {
    const properties = this.state.currentProperties

    return (
      <DndProvider backend={Backend}>
        <SplitPane split="vertical" minSize={50} defaultSize={300}>
          <div>
            <ComponentList />
          </div>
          <div>
            <SplitPane split="vertical" minSize={50} defaultSize={300}>
              <div>
                <Preview />
              </div>
              <div>
                <ComponentProperties properties={properties} onPropertyChanged={this.handlePropertyChanged.bind(this)} />
              </div>
            </SplitPane>
          </div>
        </SplitPane>
      </DndProvider>
    );
  }
}

export default App;
