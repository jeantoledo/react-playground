import React, { Component } from 'react';
import SplitPane from 'react-split-pane';

import Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import './App.css';
import './UISplitPane.style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Preview from './components/Preview';
import ComponentList from './components/ComponentList'

class App extends Component {
  render() {
    return (
      <DndProvider backend={Backend}>
        <SplitPane split="vertical" minSize={50} defaultSize={300}>
          <div>
            <ComponentList />
          </div>
          <div>
            <Preview />
          </div>
        </SplitPane>
      </DndProvider>
    );
  }
}

export default App;
