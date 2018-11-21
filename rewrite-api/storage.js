'use strict'

const multer = require('multer')
const path = require('path')
const express = require('express')
const asyncify = require('express-asyncify')

const app = asyncify(express.Router())

app.use(express.static(path.join(__dirname, 'images')))

/*
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
*/

let storage = multer.diskStorage({
    // destino del fichero
    destination: function (req, file, cb) {
        cb(null, './assets/images/')
    },
    // renombrar fichero
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

let upload = multer({ storage: storage })

app.post("/upload", upload.array("uploads[]", 12), function (req, res) {
    console.log('files', req.files)
    res.send(req.files)
});

module.exports = app
