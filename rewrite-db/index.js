'use strict'

const setupDatabase = require ('./lib/db')
const setupModeloActos = require ('./models/actos')
const setupModeloArticulo = require ('./models/articulo')
const setupModeloDialogo = require ('./models/dialogo')
const setupModeloDramatico = require ('./models/dramatico')
const setupModeloEnsayo = require ('./models/ensayo')
const setupModeloEstrofa = require ('./models/estrofa')
const setupModeloLirico = require ('./models/lirico')
const setupModeloNarrativo = require ('./models/narrativo')
const setupModeloObra = require ('./models/obra')
const setupModeloPersonaje = require ('./models/personaje')
const setupModeloReferencias = require ('./models/referencias')
const setupModeloResumen = require ('./models/resumen')
const setupModeloTipo = require ('./models/cat_tipo')
const setupModeloUsuario = require ('./models/usuario')

const setupActos = require ('./lib/actos')
const setupArticulo = require ('./lib/articulo')
const setupDialogo = require ('./lib/dialogo')
const setupDramatico = require ('./lib/dramatico')
const setupEnsayo = require ('./lib/ensayo')
const setupEstrofa = require ('./lib/estrofa')
const setupLirico = require ('./lib/lirico')
const setupNarrativo = require ('./lib/narrativo')
const setupObra = require ('./lib/obra')
const setupPersonaje = require ('./lib/personaje')
const setupReferencias = require ('./lib/referencias')
const setupResumen = require ('./lib/resumen')
const setupTipo = require ('./lib/cat_tipo')
const setupUsuario = require ('./lib/usuario')


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

    let constraint = true;

    //usuario-obras 1:n obras.idUsuario
    ModeloUsuario.hasMany(ModeloObra,
        {
            foreignKey: 'usuarioId',
            constraints: constraint
        })

    ModeloObra.belongsTo(ModeloUsuario,
        {
            foreignKey: 'usuarioId',
            constraints: constraint,
            as: 'usuario'
        })

    //articulo-obra 1:n
    ModeloObra.hasMany(ModeloArticulo,
        {
            foreignKey: 'obraId',
            constraints: constraint
        })

    ModeloArticulo.belongsTo(ModeloObra,
        {
            foreignKey: 'obraId',
            constraints: constraint,
            as: 'obra'
        })

    //ensayo-obra 1:n
    ModeloObra.hasMany(ModeloEnsayo,
        {
            foreignKey: 'obraId',
            constraints: constraint
        })

    ModeloEnsayo.belongsTo(ModeloObra,
        {
            foreignKey: 'obraId',
            constraints: constraint,
            as: 'obra'
        })

    //resumen-obra 1:n
    ModeloObra.hasMany(ModeloResumen,
        {
            foreignKey: 'obraId',
            constraints: constraint
        })

    ModeloResumen.belongsTo(ModeloObra,
        {
            foreignKey: 'obraId',
            constraints: constraint,
            as: 'obra'
        })

    //dramatico-obra 1:n
    ModeloObra.hasMany(ModeloDramatico,
        {
            foreignKey: 'obraId',
            constraints: constraint
        })

    ModeloDramatico.belongsTo(ModeloObra,
        {
            foreignKey: 'obraId',
            constraints: constraint,
            as: 'obra'
        })

    //obra-narrativo 1:n
    ModeloObra.hasMany(ModeloNarrativo,
        {
            foreignKey: 'obraId',
            constraints: constraint
        })

    ModeloNarrativo.belongsTo(ModeloObra,
        {
            foreignKey: 'obraId',
            constraints: constraint,
            as: 'obra'
        })

    //narrativo-personajes 1:m
    ModeloNarrativo.hasMany(ModeloPersonaje,
        {
            foreignKey: 'narrativoId',
            constraints: constraint
        })

    ModeloPersonaje.belongsTo(ModeloNarrativo,
        {
            foreignKey: 'narrativoId',
            constraints: constraint,
            as: 'narrativo'
        })

    //dialogo-personaje 1:n
    ModeloDialogo.hasMany(ModeloPersonaje,
        {
            foreignKey: 'dialogoId',
            constraints: constraint
        })

    ModeloPersonaje.belongsTo(ModeloDialogo,
        {
            foreignKey: 'dialogoId',
            constraints: constraint,
            as: 'dialogo'
        })

    //dramatico-pesonaje 1:n personaje.idDramatico
    ModeloDramatico.hasMany(ModeloPersonaje,
        {
            foreignKey: 'dramaticoId',
            constraints: constraint
        })

    ModeloPersonaje.belongsTo(ModeloDramatico,
        {
            foreignKey: 'dramaticoId',
            constraints: constraint,
            as: 'dramatico'
        })

    //lirico-estrofa 1:n estrofa.idLirico
    ModeloLirico.hasMany(ModeloEstrofa,
        {
            foreignKey: 'liricoId',
            constraints: constraint
        })

    ModeloEstrofa.belongsTo(ModeloLirico,
        {
            foreignKey: 'liricoId',
            constraints: constraint,
            as: 'lirico'
        })

    //dramatico-actos 1:n actos.idDramatico
    ModeloDramatico.hasMany(ModeloActos,
        {
            foreignKey: 'dramaticoId',
            constraints: constraint
        })

    ModeloActos.belongsTo(ModeloDramatico,
        {
            foreignKey: 'dramaticoId',
            constraints: constraint,
            as: 'dramatico'
        })

    //resumen-refrencias 1:n referencias.idResumen
    ModeloResumen.hasMany(ModeloReferencias,
        {
            foreignKey: 'resumenId',
            constraints: constraint
        })

    ModeloReferencias.belongsTo(ModeloResumen,
        {
            foreignKey: 'resumenId',
            constraints: constraint,
            as: 'resumen'
        })

    //ensayo-referencias 1:n referencias.idEnsayo
    ModeloEnsayo.hasMany(ModeloReferencias,
        {
            foreignKey: 'ensayoId',
            constraints: constraint
        })

    ModeloReferencias.belongsTo(ModeloEnsayo,
        {
            foreignKey: 'ensayoId',
            constraints: constraint,
            as: 'ensayo'
        })

    //articulo-referencias 1:n referencias.idArticulo
    ModeloArticulo.hasMany(ModeloReferencias,
        {
            foreignKey: 'articuloId',
            constraints: constraint
        })

    ModeloReferencias.belongsTo(ModeloArticulo,
        {
            foreignKey: 'articuloId',
            constraints: constraint,
            as: 'articulo'
        })

    //estrofa-tipos 1:n estrofa.idTipo
    //---estrofa-cat-tipo 1:1 estrofa.idTipo()
    ModeloEstrofa.belongsTo(ModeloTipo)



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
        {nombre: 'Nombre1', numeroVersos: 1, rima: 1},
        {nombre: 'Nombre2', numeroVersos: 2, rima: 2},
        {nombre: 'Nombre3', numeroVersos: 3, rima: 3}
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