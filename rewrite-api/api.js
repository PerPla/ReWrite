'use strict'

const debug = require('debug')('rewrite:api:routes')
const express = require('express')
const asyncify = require('express-asyncify')
const bodyParser = require('body-parser')
const db = require('rewrite-db')
const config = require('./config')

const api = asyncify(express.Router())

api.use(bodyParser.urlencoded({extended: true}))
api.use(bodyParser.json())

let services, Ensayo, Estrofa, Obra, Tipo, Usuario

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
    debug(req.body)
    try {
        ensayo = await Ensayo.create(ensayoReq)
    } catch (e) {
        return next(e)
    }
    res.send(ensayo)
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
    debug(`A request has come to /users/${req.params.id}`)
    let id = req.params.id
    let usuario
    try {
        usuario = await Usuario.findById(id)
    } catch (e) {
        return next(e)
    }
    res.send(usuario)
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