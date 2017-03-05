/* eslint-disable global-require */
module.exports = process.env.NODE_ENV === 'production' ?
  require('./configureStore.prod') :
  require('./configureStore.dev')
