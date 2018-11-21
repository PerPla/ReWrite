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
//const setupModeloReferencias = require ('./models/referencias')
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
    //const ModeloReferencias = setupModeloReferencias(config)
    const ModeloResumen = setupModeloResumen(config)
    const ModeloTipo = setupModeloTipo(config)
    const ModeloUsuario = setupModeloUsuario(config)

    let constraint = true;

    //usuario-obras 1:n obras.idUsuario
    await ModeloUsuario.hasMany(ModeloObra,
        {
            foreignKey: 'usuarioId',
            constraints: constraint
        })

    await ModeloObra.belongsTo(ModeloUsuario,
        {
            foreignKey: 'usuarioId',
            constraints: constraint,
            as: 'usuario'
        })

    //articulo.ts-obra 1:n
    await ModeloObra.hasMany(ModeloArticulo,
        {
            foreignKey: 'obraId',
            constraints: constraint
        })

    await ModeloArticulo.belongsTo(ModeloObra,
        {
            foreignKey: 'obraId',
            constraints: constraint,
            as: 'obra'
        })

    //ensayo-obra 1:n
    await ModeloObra.hasMany(ModeloEnsayo,
        {
            foreignKey: 'obraId',
            constraints: constraint
        })

    await ModeloEnsayo.belongsTo(ModeloObra,
        {
            foreignKey: 'obraId',
            constraints: constraint,
            as: 'obra'
        })

    //resumen-obra 1:n
    await ModeloObra.hasMany(ModeloResumen,
        {
            foreignKey: 'obraId',
            constraints: constraint
        })

    await ModeloResumen.belongsTo(ModeloObra,
        {
            foreignKey: 'obraId',
            constraints: constraint,
            as: 'obra'
        })

    //dramatico-obra 1:n
    await ModeloObra.hasMany(ModeloDramatico,
        {
            foreignKey: 'obraId',
            constraints: constraint
        })

    await ModeloDramatico.belongsTo(ModeloObra,
        {
            foreignKey: 'obraId',
            constraints: constraint,
            as: 'obra'
        })

    //obra-narrativo 1:n
    await ModeloObra.hasMany(ModeloNarrativo,
        {
            foreignKey: 'obraId',
            constraints: constraint
        })

    await ModeloNarrativo.belongsTo(ModeloObra,
        {
            foreignKey: 'obraId',
            constraints: constraint,
            as: 'obra'
        })

    //narrativo-personajes 1:m
    await ModeloNarrativo.hasMany(ModeloPersonaje,
        {
            foreignKey: 'narrativoId',
            constraints: constraint
        })

    await ModeloPersonaje.belongsTo(ModeloNarrativo,
        {
            foreignKey: 'narrativoId',
            constraints: constraint,
            as: 'narrativo'
        })

    //dialogo-personaje 1:n
    await ModeloDialogo.hasMany(ModeloPersonaje,
        {
            foreignKey: 'dialogoId',
            constraints: constraint
        })

    await ModeloPersonaje.belongsTo(ModeloDialogo,
        {
            foreignKey: 'dialogoId',
            constraints: constraint,
            as: 'dialogo'
        })

    //dramatico-pesonaje 1:n personaje.idDramatico
    await ModeloDramatico.hasMany(ModeloPersonaje,
        {
            foreignKey: 'dramaticoId',
            constraints: constraint
        })

    await ModeloPersonaje.belongsTo(ModeloDramatico,
        {
            foreignKey: 'dramaticoId',
            constraints: constraint,
            as: 'dramatico'
        })

    //lirico-estrofa 1:n estrofa.idLirico
    await ModeloLirico.hasMany(ModeloEstrofa,
        {
            foreignKey: 'liricoId',
            constraints: constraint
        })

    await ModeloEstrofa.belongsTo(ModeloLirico,
        {
            foreignKey: 'liricoId',
            constraints: constraint,
            as: 'lirico'
        })

    //dramatico-actos 1:n actos.idDramatico
    await ModeloDramatico.hasMany(ModeloActos,
        {
            foreignKey: 'dramaticoId',
            constraints: constraint
        })

    await ModeloActos.belongsTo(ModeloDramatico,
        {
            foreignKey: 'dramaticoId',
            constraints: constraint,
            as: 'dramatico'
        })

    //resumen-refrencias 1:n referencias.idResumen
    /*ModeloReferencias.hasMany(ModeloResumen,
        {
            foreignKey: 'referenciaId',
            constraints: constraint
        })

    ModeloResumen.belongsTo(ModeloReferencias,
        {
            foreignKey: 'referenciaId',
            constraints: constraint,
            as: 'referencia'
        })

    //ensayo-referencias 1:n referencias.idEnsayo
    ModeloReferencias.hasMany(ModeloEnsayo,
        {
            foreignKey: 'referenciaId',
            constraints: constraint
        })

    ModeloEnsayo.belongsTo(ModeloReferencias,
        {
            foreignKey: 'referenciaId',
            constraints: constraint,
            as: 'referencia'
        })

    //articulo.ts-referencias 1:n referencias.idArticulo
    ModeloReferencias.hasMany(ModeloArticulo,
        {
            foreignKey: 'referenciaId',
            constraints: constraint
        })

    ModeloArticulo.belongsTo(ModeloReferencias,
        {
            foreignKey: 'referenciaId',
            constraints: constraint,
            as: 'referencia'
        })
        */

    //estrofa-tipos 1:n estrofa.idTipo
    //---estrofa-cat-tipo 1:1 estrofa.idTipo()
    await ModeloTipo.hasMany(ModeloEstrofa,
        {
            foreignKey: 'tipoId',
            constraints: constraint
        })

    await ModeloEstrofa.belongsTo(ModeloTipo,
        {
            foreignKey: 'tipoId',
            constraints: constraint,
            as: 'tipo'
        })

    await sequelize.authenticate()

    if(config.setup) {
        await sequelize.sync({force: true})
    }

    const Actos = setupActos(ModeloActos)
    const Articulo = setupArticulo(ModeloArticulo)
    const Dialogo = setupDialogo(ModeloDialogo)
    const Dramatico = setupDramatico(ModeloDramatico)
    const Ensayo = setupEnsayo(ModeloEnsayo, ModeloObra, ModeloUsuario)
    const Estrofa = setupEstrofa(ModeloEstrofa, ModeloTipo)
    const Lirico = setupLirico(ModeloLirico)
    const Narrativo = setupNarrativo(ModeloNarrativo)
    const Obra = setupObra(ModeloObra, ModeloUsuario)
    const Personaje = setupPersonaje(ModeloPersonaje)
    //const Referencias = setupReferencias(ModeloReferencias)
    const Resumen = setupResumen(ModeloResumen)
    const Tipo = setupTipo(ModeloTipo)
    const Usuario = setupUsuario(ModeloUsuario)

    await ModeloUsuario.bulkCreate([
        {usuario: 'Angelito', contrasena: 'angelito123', avatar: 'pornhub.com'},
        {usuario: 'Cabezon', contrasena: 'megustanlosmemes', avatar: 'xvideos.com'}
    ])

    await ModeloObra.bulkCreate([
        {titulo: 'TITULO1', numero_errores: 0, usuarioId:1},
        {titulo: 'TITULO2', numero_errores: 0, usuarioId:1},
        {titulo: 'TITULO3', numero_errores: 0, usuarioId:2},
    ])

    await ModeloEnsayo.bulkCreate([
        {introduccion: 'INTRODUCCION1', desarrollo: 'DESARROLLO1', conclusion: 'CONCLUSION1', referencia: 'REFERENCIA1', obraId:1},
        {introduccion: 'INTRODUCCION1', desarrollo: 'DESARROLLO2', conclusion: 'CONCLUSION1', referencia: 'REFERENCIA1', obraId:1},
        {introduccion: 'INTRODUCCION1', desarrollo: 'DESARROLLO3', conclusion: 'CONCLUSION1', referencia: 'REFERENCIA1', obraId:2},
    ])

    await ModeloTipo.bulkCreate([
        {nombre: 'Nombre1', numeroVersos: 1, rima: 1},
        {nombre: 'Nombre2', numeroVersos: 2, rima: 2},
        {nombre: 'Nombre3', numeroVersos: 3, rima: 3}
    ])

    await ModeloEstrofa.bulkCreate([
        {versos: 'VERSOS1', tipoId: 1},
        {versos: 'VERSOS2', tipoId: 1},
        {versos: 'VERSOS3', tipoId: 2}
    ])

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
        //Referencias,
        Resumen,
        Tipo,
        Usuario
    }
}