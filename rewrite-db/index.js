'use strict'

const setupDatabase = require('./lib/db')
const setupModeloEstrofa = require('./models/estrofa')
const setupModeloObra = require('./models/obra')
const setupModeloTipo = require('./models/tipo')
const setupModeloUsuario = require('./models/usuario')

const setupEstrofa = require('./lib/estrofa')
const setupObra = require('./lib/obra')
const setupTipo = require('./lib/tipo')
const setupUsuario = require('./lib/usuario')

module.exports = async function (config) {
    const sequelize = setupDatabase(config)
    const ModeloEstrofa = setupModeloEstrofa(config)
    const ModeloObra = setupModeloObra(config)
    const ModeloTipo = setupModeloTipo(config)
    const ModeloUsuario = setupModeloUsuario(config)

    ModeloEstrofa.hasMany(ModeloTipo, { as: 'tipos' })
    ModeloTipo.belongsTo(ModeloEstrofa)


    ModeloUsuario.bulkCreate([
        {usuario: 'Angelito', contrasena: 'angelito123', avatar: 'pornhub.com'},
        {usuario: 'Cabezon', contrasena: 'megustanlosmemes', avatar: 'xvideos.com'}
    ])


    await sequelize.authenticate()

    if(config.setup) {
        await sequelize.sync({force: true})
    }

    const Estrofa = setupEstrofa(ModeloEstrofa)
    const Obra = setupObra(ModeloObra)
    const Tipo = setupTipo(ModeloTipo)
    const Usuario = setupUsuario(ModeloUsuario)

    return {
        Estrofa,
        Obra,
        Tipo,
        Usuario
    }
}