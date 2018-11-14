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


    ModeloEstrofa.hasMany(ModeloTipo,
        {
            foreignKey: 'estrofaId',
            constraints: false,
        })

    ModeloTipo.belongsTo(ModeloEstrofa,
        {
            foreignKey: 'estrofaId',
            constraits: false,
            as: 'estrofa'
        })


    ModeloUsuario.bulkCreate([
        {usuario: 'Angelito', contrasena: 'angelito123', avatar: 'pornhub.com'},
        {usuario: 'Cabezon', contrasena: 'megustanlosmemes', avatar: 'xvideos.com'}
    ])

    ModeloEstrofa.bulkCreate([
        {versos: 'VERSOS1'},
        {versos: 'VERSOS2'},
        {versos: 'VERSOS3'}
    ])

    ModeloTipo.bulkCreate([
        {nombre: 'Nombre1', numeroVersos: 1, rima: 1, estrofaId: 1},
        {nombre: 'Nombre2', numeroVersos: 2, rima: 2, estrofaId: 1},
        {nombre: 'Nombre3', numeroVersos: 3, rima: 3, estrofaId: 2}
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