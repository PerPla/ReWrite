'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupModelPersonaje(config) {
    const sequelize =  setupDatabase(config)

    return sequelize.define('personaje', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        personalidad: {
            type: Sequelize.STRING,
            allowNull: false
        },
        apariencia: {
            type: Sequelize.STRING,
            allowNull: false
        },
        motivaciones: {
            type: Sequelize.STRING,
            allowNull: false
        },
        habitos: {
            type: Sequelize.STRING,
            allowNull: false
        }

    })
}