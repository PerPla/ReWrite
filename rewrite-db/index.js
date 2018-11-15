'use strict'

const setupDatabase = require('./lib/db')
const setupModeloActos = require('./models/actos')
const setupModeloArticulo = require('./models/articulo')
const setupModeloDialogo = require('./models/dialogo')
const setupModeloDramatico = require('./models/dramatico')
const setupModeloEnsayo = require('./models/ensayo')
const setupModeloEstrofa = require('./models/estrofa')
const setupModeloLirico = require('./models/lirico')
const setupModeloNarrativo = require('./models/narrativo')
const setupModeloObra = require('./models/obra')
const setupModeloPersonaje = require('./models/personaje')
const setupModeloReferencias = require('./models/referencias')
const setupModeloResumen = require('./models/resumen')
const setupModeloTipo = require('./models/tipo')
const setupModeloUsuario = require('./models/usuario')

const setupActos = require('./lib/actos')
const setupArticulo = require('./lib/articulo')
const setupDialogo = require('./lib/dialogo')
const setupDramatico = require('./lib/dramatico')
const setupEnsayo = require('./lib/ensayo')
const setupEstrofa = require('./lib/estrofa')
const setupLirico = require('./lib/lirico')
const setupNarrativo = require('./lib/narrativo')
const setupObra = require('./lib/obra')
const setupPersonaje = require('./lib/personaje')
const setupReferencias = require('./lib/referencias')
const setupResumen = require('./lib/resumen')
const setupTipo = require('./lib/tipo')
const setupUsuario = require('./lib/usuario')


module.exports = async function (config) {
    const sequelize = setupDatabase(config)
    const ModeloActos = setupModeloActos(config)
    const ModeloArticulo = setupModeloArticulo(config)
    const ModeloDialogo = setupModeloDialogo(config)
    const ModeloDramatico = setupModeloDramatico(config)
    const ModeloEnsayo = setupModeloEnsayo(config)
    const ModeloEstrofa = setupModeloEstrofa(config)
    const ModeloLirico = setupModeloLirico(config)
    const ModeloNarrativo = setupModeloNarrativo(config)
    const ModeloObra = setupModeloObra(config)
    const ModeloPersonaje = setupModeloPersonaje(config)
    const ModeloReferencias = setupModeloReferencias(config)
    const ModeloResumen = setupModeloResumen(config)
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

    const Actos = setupActos(ModeloActos)
    const Articulo = setupArticulo(ModeloArticulo)
    const Dialogo = setupDialogo(ModeloDialogo)
    const Dramatico = setupDramatico(ModeloDramatico)
    const Ensayo = setupEnsayo(ModeloEnsayo)
    const Estrofa = setupEstrofa(ModeloEstrofa)
    const Lirico = setupLirico(ModeloLirico)
    const Narrativo = setupNarrativo(ModeloNarrativo)
    const Obra = setupObra(ModeloObra)
    const Personaje = setupPersonaje(ModeloPersonaje)
    const Referencias = setupReferencias(ModeloReferencias)
    const Resumen = setupResumen(ModeloResumen)
    const Tipo = setupTipo(ModeloTipo)
    const Usuario = setupUsuario(ModeloUsuario)

    return {
        Actos,
        Articulo,
        Dialogo,
        Dramatico,
        Ensayo,
        Estrofa,
        Lirico,
        Narrativo,
        Obra,
        Personaje,
        Referencias,
        Resumen,
        Tipo,
        Usuario
    }
}