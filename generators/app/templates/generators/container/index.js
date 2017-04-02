const componentExists = require('../utils/componentExists')

module.exports = {
  description: 'Add a container component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'FormContainer',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ?
          'A component or container with this name already exists' :
          true
      }

      return 'The name is required'
    },
  }, {
    type: 'list',
    name: 'component',
    message: 'Select a base component:',
    default: 'PureComponent',
    choices: () => ['PureComponent', 'Component'],
  }, {
    type: 'confirm',
    name: 'addRedux',
    default: true,
    message: 'Do you want to add Redux tho this container ?',
  }, {
    type: 'input',
    name: 'actionsFile',
    message: 'What is the name of its actions file ?',
    default: 'FormActions',
    when: (value) => {
      return value.addRedux ? true : false
    },
  }],
  actions: (data) => {
    // Generate index.js and index.test.js
    const actions = [{
      type: 'add',
      path: '../src/containers/{{properCase name}}.js',
      templateFile: './container/index.js.hbs',
      abortOnFail: true,
    }]

    return actions
  },
}
