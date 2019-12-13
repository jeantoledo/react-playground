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
import Utils from './utils/Utils';

const App = props => {
  const {
    components,
    currentComponentIndex,
    onPropertyChanged,
    onComponentChanged,
    onComponentAdded,
    onChangeCurrentComponentIndex
  } = props

  const generateCodeString = () => {
    const lines = components.map(({ data, properties }) => {
      let childrenString = properties.children || '';

      let propsString = Object.keys(properties).map(key => {
        if(key === 'children') return '';
        return `${key}="${properties[key]}"`;
      }).join(' ');

      return `<${data.code} ${propsString}>${childrenString}<\\${data.code}>`;
    });

    return `
    import React from 'react';

    const Page = () => (
      ${lines.join('\n')}
    );

    export default Page;
    `;
  }

  const downloadCode = () => {
    const code = generateCodeString();
    Utils.downloadStringAsFile('Page.jsx', code);
  };

  return (
    <div>
      <Header>
        <a className="brand" href="#"><strong>RD</strong> | Design Studio</a>
        <img className="download-icon" src={downloadIcon} onClick={downloadCode}></img>
      </Header>

      <DndProvider backend={Backend}>
        <SplitPane className="main-content" split="vertical" minSize={50} defaultSize={300}>
          <ComponentList />
          <div>
            <SplitPane split="vertical" minSize={50} defaultSize={'70%'}>
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
