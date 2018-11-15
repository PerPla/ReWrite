'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

    module.exports = function setupModeloNarrativo (config) {
    const sequelize =  setupDatabase(config)

    return sequelize.define('narrativo', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        exposicion: {
            type: Sequelize.STRING,
            allowNull: false
        },
        desarollo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        desenlace: {
            type: Sequelize.STRING,
            allowNull: false
        },
        climax: {
            type: Sequelize.STRING,
            allowNull: false
        }

    })
}