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

let services, Estrofa, Obra, Tipo, Usuario

api.use('*', async (req, res, next) => {
    if(!services) {
        debug('Conectando a la Base de Datos')
        try {
            services = await db(config.db)
        } catch (e) {
            return next(e)
        }
        Estrofa = services.Estrofa
        Obra = services.Obra
        Tipo = services.Tipo
        Usuario = services.Usuario
    }
    next()
})

api.get('/ola', async(req, res, next) => {
    let nose = []

    try {
        debug('MEGUSTANLOSMEMEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEES')
        await Estrofa.findAll().then(tipo => {
            //debug(tipo[0].getTipos())
            tipo[0].getTipos().then(tipos => {
                nose = tipos
                res.send(nose)
                console.log(nose)
            }, err => {
                console.log('error2', err)
            })
        }, err => {
            console.log('error1', err)
        })

    } catch (e) {
        return next(e)
    }

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