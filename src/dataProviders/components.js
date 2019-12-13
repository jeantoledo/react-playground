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
    code: "Textbox",
    propertyLabels: {
      value: "Texto"
    }
  },
  {
    name: "TitleAndSubtitle",
    code: "TitleAndSubtitle",
    propertyLabels: {
      title: "Título",
      subtitle: "Subtítulo"
    }
  }
]

const DataProvider = {
  getComponents() {
    return components
  }
}

export default DataProvider
