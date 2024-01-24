const bodyParser = require('body-parser')
const pacientes = require('./pacientesRoutes.js')
const profissionais = require('./profissionaisRoutes.js')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(pacientes)
  app.use(profissionais)
}