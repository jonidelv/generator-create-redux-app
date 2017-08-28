const fs = require('fs')
const path = require('path')
const pageContainers = fs.readdirSync(
  path.join(__dirname, '../../src/containers')
)
const pageModules = fs.readdirSync(path.join(__dirname, '../../src/modules'))
const components = pageContainers.concat(pageModules)

function containersExists(comp) {
  return components.indexOf(comp) >= 0
}

module.exports = containersExists
