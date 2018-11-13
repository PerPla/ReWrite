'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupModeloTipo (config) {
    const sequelize =  setupDatabase(config)

    return sequelize.define('tipo', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        numeroVersos: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        rima: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    })
}