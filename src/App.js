import React, { Component, useState } from 'react';
import SplitPane from 'react-split-pane';
import './App.css';
import './UISplitPane.style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDrag, useDrop } from 'react-dnd';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import Label from './components/Label';

const ItemTypes = {
  ListGroupItem: 'ListGroup.Item',
}

const ItemDragable = ({ isDragging, children, component }) => {
  const [{ opacity }, dragRef] = useDrag({
    item: { type: ItemTypes.ListGroupItem, component },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
    <ListGroup.Item ref={dragRef} style={{ opacity }}>
      {children}
    </ListGroup.Item>
  )
}

const Preview = props => {
  const [ component, setComponent ] = useState("Component1")

  const [ { isOver }, drop] = useDrop({
    accept: ItemTypes.ListGroupItem,
    drop: (item) => setComponent(item.component),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    })
  })

  return (
    <div ref={drop} style={{ backgroundColor: 'red' }}>
      <NamedComponent type={component}>{component}</NamedComponent>
    </div>
  );
}

const componentRelations = {
  ['Component1']: Label,
  ['Component2']: Label
};

const NamedComponent = ({ type, children, props }) => {
  if (componentRelations[type] == null) return null;
  const AnotherComponent = componentRelations[type];
  return <AnotherComponent {...props}>{children}</AnotherComponent>;
};

class App extends Component {
  render() {
    return (
      <DndProvider backend={Backend}>
        <SplitPane split="vertical" minSize={50} defaultSize={300}>
          <div>
            <ListGroup>
              <ItemDragable component="Component1">Componente 1</ItemDragable>
              <ItemDragable component="Component2">Componente 2</ItemDragable>
            </ListGroup>
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
