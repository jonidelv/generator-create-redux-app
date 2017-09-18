const containerExists = require('../utils/containerExists')

module.exports = {
  description: 'Add a container component',
  prompts: [
    {
      type: 'input',
      name: 'fileDir',
      message: 'What is the file directory, finished with /',
      default: 'containers/',
      validate: value => {
        if (/.+/.test(value)) {
          return containerExists(value) ? 'A container with this name already exists' : true
        }

        return 'The file directory is required'
      },
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'FormContainer',
      validate: value => {
        if (/.+/.test(value)) {
          return containerExists(value) ? 'A container with this name already exists' : true
        }

        return 'The name is required'
      },
    },
    {
      type: 'list',
      name: 'component',
      message: 'Select a base component:',
      default: 'PureComponent',
      choices: () => ['PureComponent', 'Component'],
    },
    {
      type: 'confirm',
      name: 'addRedux',
      default: true,
      message: 'Do you want to add Redux tho this container ?',
    },
    {
      type: 'input',
      name: 'actionsFile',
      message: 'What is the name of its actions file ?',
      default: 'FormActions',
      when: value => {
        return value.addRedux ? true : false
      },
    },
    {
      type: 'confirm',
      name: 'addSelectors',
      message: 'Do you want to include Reselect library to add Selectors ?',
      default: false,
      when: value => {
        return value.addRedux ? true : false
      },
    },
  ],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: '../src/{{fileDir}}{{properCase name}}.js',
        templateFile: './container/index.js.hbs',
        abortOnFail: true,
      },
    ]

    return actions
  },
}
