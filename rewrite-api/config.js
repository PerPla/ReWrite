'use strict'

const debug = require('debug')('rewrite:api:db')

module.exports = {
    db: {
        database: process.env.DB_NAME || 'rewrite',
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'n0m3l0',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
        loggin: s=> debug(s)
    }
}