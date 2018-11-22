'use strict'

const debug = require('debug')('rewrite:api:routes')
const express = require('express')
const asyncify = require('express-asyncify')
const bodyParser = require('body-parser')
const db = require('rewrite-db')
const config = require('./config')
const auth = require('./auth')

const api = asyncify(express.Router())

api.use(bodyParser.urlencoded({extended: true}))
api.use(bodyParser.json())

let services, Ensayo, Estrofa, Obra, Tipo, Usuario

api.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

api.use('*', async (req, res, next) => {
    if(!services) {
        debug('Conectando a la Base de Datos')
        try {
            services = await db(config.db)
        } catch (e) {
            return next(e)
        }
        Ensayo = services.Ensayo,
        Estrofa = services.Estrofa
        Obra = services.Obra
        Tipo = services.Tipo
        Usuario = services.Usuario
    }
    next()
})

//PRIMERO USUARIOS O SI NO NO FUNCIONA AAAAAAAAAAAAAAAAA    

api.get('/ola', async(req, res, next) => {
    let tipos = []
    let estrofasDeTipos = []
    try {
        debug('MEGUSTANLOSMEMEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEES')
        tipos = await Tipo.findAll()
        estrofasDeTipos = await tipos[0].getEstrofas()
        

    } catch (e) {
        return next(e)
    }
    res.send(estrofasDeTipos)
})

api.get('/ensayos', async(req, res, next) => {
    debug('A request has come to /ensayos GET')
    let ensayos = []
    try {
        ensayos = await Ensayo.findAll()
    } catch(e) {
        return next(e)
    }
    res.send(ensayos)
})

api.post('/ensayos', async(req, res, next) => {
    debug('A request has come to /ensayos POST')
    let ensayoReq = req.body
    let ensayo
    let obra
    let usr
    debug(req.body)
    try {
        debug('OLA', ensayoReq.obra.usuario)
        Usuario.findById(req.body.obra.usuario.id).then(usr => {
            debug('USUARIO', usr)
            usr.createObra(req.body.obra).then(obra => {
                debug('OBRA', obra)
                debug('ENSAYO', req.body)
                obra.createEnsayo(req.body).then(ens => {
                    debug('ENSAYO', ens)
                })
            })
        })

        //ensayo = await Ensayo.create(ensayoReq)

    } catch (e) {
        return next(e)
    }
    res.send(ensayoReq)
})

api.post('/articulos', async(req, res, next) => {
    debug('A request has come to /articulos POST')
    let articuloReq = req.body
    //debug('ROOT', req.body)
    try {
        debug('OLA', articuloReq.obra.usuario)
        Usuario.findById(req.body.obra.usuario.id).then(usr => {
            debug('USUARIO', usr)
            usr.createObra(req.body.obra).then(obra => {
                debug('OBRA', obra)
                debug('ARTICULO', req.body)
                obra.createArticulo(req.body).then(art => {
                    debug('ARTICULO', art)

                })
            })
        })
    } catch (e) {
        return next(e)
    }
    res.send(articuloReq)
})

api.post('/resumenes', async(req, res, next) => {
    debug('A request has come to /resumenes POST')
    let resumenReq = req.body
    //debug('ROOT', req.body)
    try {
        debug('OLA', resumenReq.obra.usuario)
        Usuario.findById(req.body.obra.usuario.id).then(usr => {
            debug('USUARIO', usr)
            usr.createObra(req.body.obra).then(obra => {
                debug('OBRA', obra)
                debug('Resumen', req.body)
                obra.createResumen(req.body).then(res => {
                    debug('Resumen', res)

                })
            })
        })
    } catch (e) {
        return next(e)
    }
    res.send(resumenReq)
})

api.post('/verify', async(req, res, next) => {
    debug('A request has come to /verify')
    let token = req.body
    let result
    try {
        auth.verify(token.token, config.auth.secret, (err, token) => {
            debug(token, err)
            if(err) {
                res.send( { status: false } )
            }
            res.send({ status: true })
        })
    } catch (e) {
        return next(e)
    }
    //debug('RESULT', result)
    res.send(result)
})

api.get('/usuarios', async(req, res, next) => {
    debug('A request has come to /users GET')
    let usuarios = []

    try {
        usuarios = await Usuario.findAll()
    } catch (e) {
        return next(e)
    }
    res.send(usuarios)
})

api.get('/usuarios/:id', async (req, res, next) => {
    //debug(`A request has come to /users/${req.params.id}`)
    let id = req.params.id
    let usuario
    try {
        usuario = await Usuario.findById(id)
       // debug('USUARIO', usuario)
    } catch (e) {
        return next(e)
    }
    res.send(usuario)
})

api.post('/usuarios/obras', async (req, res, next) => {
    debug(`A request has come to /users/OBRAS`)
    let id = req.body.id
    debug(req.body)
    debug('ID', req.body.id)
    //let obras = []
    try {
        Usuario.findById(id).then(usr => {
            usr.getObras().then(obras => {
                //this.obras = obras
                res.send(obras)
            })
        })
        // debug('USUARIO', usuario)
    } catch (e) {
        return next(e)
    }
    //res.send(usuario)
})

api.post('/usuarios', async (req, res, next) => {
    debug('A request has come to /users POST')

    let user = {
        usuario: req.body.usuario,
        contrasena: req.body.contrasena,
        avatar: req.body.avatar
    }

    try {
        await Usuario.createOrUpdate(user)
    } catch (e) {
        return next(e)
    }
    res.send(user)
})

module.exports = api