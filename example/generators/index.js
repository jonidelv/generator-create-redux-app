const fs = require('fs')
const path = require('path')
const componentGenerator = require('./component/index.js')
const containerGenerator = require('./container/index.js')

module.exports = (plop) => {
  plop.setGenerator('Component', componentGenerator)
  plop.setGenerator('Container', containerGenerator)
  plop.addHelper('directory', (comp) => {
    try {
      fs.accessSync(
        path.join(__dirname, `../src/containers/${comp}`), fs.F_OK
      )
      return `containers/${comp}`
    } catch (e) {
      return `components/${comp}`
    }
  })
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'))
}
