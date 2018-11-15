'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupModeloDialogo (config) {
    const sequelize =  setupDatabase(config)

    return sequelize.define('dialogo', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        acotaciones: {
            type: Sequelize.STRING,
            allowNull: false
        },
        contenido: {
            type: Sequelize.STRING,
            allowNull: false
        }

    })
}