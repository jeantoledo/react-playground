import React, { Component } from 'react';
import SplitPane from 'react-split-pane';

import Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import './App.css';
import './UISplitPane.style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Preview from './components/Preview';
import ComponentList from './components/ComponentList'

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <a className="brand" href="#"><strong>RD</strong> | Design Studio</a>
        </Header>
        <DndProvider backend={Backend}>
          <SplitPane split="vertical" minSize={50} defaultSize={300}>
            <div className="sidebar-components">
              <div className="sidebar-components__title">
                Componentes
              </div>
              <ComponentList />
            </div>
            <div>
              <Preview />
            </div>
          </SplitPane>
        </DndProvider>
      </div>
    );
  }
}

export default App;
