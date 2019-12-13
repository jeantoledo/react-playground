import React from 'react';
import SplitPane from 'react-split-pane';

import Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import './App.css';
import './UISplitPane.style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Preview from './components/Preview';
import ComponentList from './components/ComponentList';
import ComponentProperties from './components/ComponentProperties';

import downloadIcon from './assets/download.svg';

const App = props => {
  const {
    components,
    currentComponentIndex,
    onPropertyChanged,
    onComponentChanged,
    onComponentAdded,
    onChangeCurrentComponentIndex
  } = props

  return (
    <div>
      <Header>
        <a className="brand" href="#"><strong>RD</strong> | Design Studio</a>
        <img className="download-icon" src={downloadIcon} onClick={() => alert('download')}></img>
      </Header>
      <DndProvider backend={Backend}>
        <SplitPane className="main-content" split="vertical" minSize={50} defaultSize={300}>
          <ComponentList />
          <div>
            <SplitPane split="vertical" minSize={50} defaultSize={300}>
              <div className="stage">
                <Preview
                  currentComponentIndex={currentComponentIndex}
                  components={components}
                  onComponentChanged={onComponentChanged}
                  onComponentAdded={onComponentAdded}
                  onChangeCurrentComponentIndex={onChangeCurrentComponentIndex}
                />
              </div>
              <div>
                <ComponentProperties currentComponentIndex={currentComponentIndex} components={components} onPropertyChanged={onPropertyChanged} />
              </div>
            </SplitPane>
          </div>
        </SplitPane>
      </DndProvider>
    </div>
  )
}

export default App;
