'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupModelEnsayo(config) {
    const sequelize =  setupDatabase(config)

    return sequelize.define('ensayo', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        intro: {
            type: Sequelize.STRING,
            allowNull: false
        },
        desarollo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        conclusion: {
            type: Sequelize.STRING,
            allowNull: false
        }

    })
}