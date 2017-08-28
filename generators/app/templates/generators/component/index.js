const componentExists = require('../utils/componentExists')

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Stateless Function',
      choices: () => [
        'Stateless Function (Pure)',
        'Stateless Function',
        'ES6 Class (Pure)',
        'ES6 Class',
      ],
    },
    {
      type: 'input',
      name: 'fileDir',
      message: 'What is the file directory, finished with /',
      default: 'components/',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component with this name already exists'
            : true
        }

        return 'The file directory is required'
      },
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component with this name already exists'
            : true
        }

        return 'The name is required'
      },
    },
  ],
  actions: data => {
    let componentTemplate

    switch (data.type) {
      case 'ES6 Class': {
        componentTemplate = './component/es6.js.hbs'
        break
      }
      case 'ES6 Class (Pure)': {
        componentTemplate = './component/es6.pure.js.hbs'
        break
      }
      case 'Stateless Function': {
        componentTemplate = './component/stateless.js.hbs'
        break
      }
      case 'Stateless Function (Pure)': {
        componentTemplate = './component/stateless.pure.js.hbs'
        break
      }
      default: {
        componentTemplate = './component/es6.js.hbs'
      }
    }

    const actions = [
      {
        type: 'add',
        path: '../src/{{fileDir}}/{{properCase name}}.js',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
    ]

    return actions
  },
}
