const components = [
  {
    name: "Label",
    code: "Label",
    propertyLabels: {
      children: "Texto"
    }
  },
  {
    name: "Button",
    code: "UIButton",
    propertyLabels: {
      children: "Texto"
    }
  },
  {
    name: "Textbox",
    code: "textbox",
    propertyLabels: {
      value: "Texto"
    }
  }
]

const DataProvider = {
  getComponents() {
    return components
  }
}

export default DataProvider
