'use strict'

const debug = require('debug')('rewrite:api')
const http = require('http')
const chalk = require('chalk')
const express = require('express')
const asyncify = require('express-asyncify')
const cors = require('cors')

const api = require('./api')
const port = process.env.PORT || 3000
const app = asyncify(express())
const server = http.createServer(app)

app.use('/api', api)
app.use(cors())

//Error Hanlder
app.use((err, req, res, next) => {
    debug(`Error: ${err.message}`)

    if(err.message.match(/not found/)) {
        return res.status(404).send({error: err.message})
    }
    return res.status(500).send({error: err.message})
})

function errorHandler (err) {
    console.error(`${chalk.red('[fatal error]')} ${err.message}`)
    console.error(err.stack)
    process.exit(1)
}

if(!module.parent) {
    process.on('uncaughtException', errorHandler)
    process.on('unhandledRejection', errorHandler)

    server.listen(port, () => {
        console.log(`${chalk.green('[rewrite-api]')} server iniciado en el puerto ${port}`)
    })
}

module.exports = server