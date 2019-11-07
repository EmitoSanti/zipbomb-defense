var express = require('express');
var fileUpload = require('express-fileupload');
var fs = require('fs');
var path = require('fstream');
var unzipper = require('unzipper');
var app = express();
app.use(fileUpload());

//unzip / uncompress a file
app.post('/upload', function(req, res) {

    let EDFile = req.files.file;

    EDFile.mv(`./upload/${EDFile.name}`, err => {
        if(err) {
            console.log("Archivo no subido");
            res.status(500).send({ message : err });
        } else {
            console.log("Archivo subido");
            console.log("Se rompe todo?");
            descomprimir();
            res.status(200).send({ message : 'File upload' });
        }
    })
});

function descomprimir() {
    console.log("Función descomprimir");
    var directoryFiles = fs.readdirSync('./upload');
    console.log("Nombre del archivo a descomprimir: "+ directoryFiles);
    directoryFiles.forEach(filename => {
        fs.createReadStream(`./upload/${filename}`).pipe(unzipper.Extract({ path: './unzipper/' }));
    });
}
// Que defensa montarias ?

app.listen(3000,() => console.log('Corriendo'))