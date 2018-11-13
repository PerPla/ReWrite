'use strict'

const debug = require('debug')('rewrite:db:setup')
const chalk = require('chalk')
const minimist = require('minimist')
const inquirer = require('inquirer')
const db = require('./')

const args = minimist(process.argv)
const prompt = inquirer.createPromptModule()

async function setup () {
    const answer = await prompt([
        {
            type: 'confirm',
            name: 'setup',
            message: 'Oye estas seguro?'
        }
    ])

    if(!answer.setup) {
        return console.log('No paso nada ')
    }

    const config = {
        database: process.env.DB_NAME || 'rewrite',
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'n0m3l0',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
        logging: s => debug(s),
        setup: true,
        pool: {
            max: 5,
            min: 0,
            acquire: 50000,
            idle: 1000
        }
    }

    await db(config).catch(errorHandler)

    console.log('Exito!!')
    process.exit(0)

    function errorHandler (err) {
        console.error(`${chalk.red('[fatal error]')} ${err.message}`)
        console.error(err.stack)
        process.exit(1)
    }
}
setup()
