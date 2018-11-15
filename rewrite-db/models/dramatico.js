'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupModeloDramatico(config) {
    const sequelize =  setupDatabase(config)

    return sequelize.define('dramatico', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }

    })
}