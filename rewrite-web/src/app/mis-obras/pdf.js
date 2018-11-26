'use strict'

let pdf = require('html-pdf')
let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "n0m3l0",
    database: "rewrite"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM articulo", function (err, result, fields) {
        if (err) throw err;
        console.log(fields);
    })
})

let contenido = `
<h1>Esto es un pdf</h1>
<p>`+fields+`</p>
`

pdf.create(contenido).toFile('./salida.pdf', function(err, res) {
    if (err){
        console.log(err);
    } else {
        console.log(res);
    }
})

