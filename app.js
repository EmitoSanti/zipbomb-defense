var express = require('express');
var fileUpload = require('express-fileupload');
var fs = require('fs');
var path = require('fstream');
var unzipper = require('unzipper');
var app = express();
app.use(fileUpload());

// uncompress a file
app.post('/upload', function(req, res) {

    let EDFile = req.files.file;

    EDFile.mv(`./upload/${EDFile.name}`, err => {
        if(err) {
            console.log("Archivo no subido");
            res.status(500).send({ message : err });
        } else {
            console.log("Archivo subido");
            console.log("Se rompe todo?");
            descomprimir(); // ejecuta la descompresión
            res.status(200).send({ message : 'File upload' });
        }
    })
});

function descomprimir() {
    console.log("Función descomprimir");
    var directoryFiles = fs.readdirSync('./upload');
    console.log("Nombre del archivo a descomprimir: "+ directoryFiles);
    directoryFiles.forEach(filename => {
        // F:/unzipper/ directorio de descompresión, elegir un USB por recomendación.
        /* 
            Nota: si realizas esta prueba/ejemplo, no ingresar al directorio de descompresión al instante,
            por algun motivo que me falta investigar nodejs corta la ejecución de la función.
            Pero por motivos practicos y solo practicos de enseñanza y con fines didacticos este bug no afecta 
            el caso practico.
        */
        fs.createReadStream(`./upload/${filename}`).pipe(unzipper.Extract({ path: 'F:/unzipper/' }));
    });
}
// Que defensa montarias ?

app.listen(3200,() => console.log('Corriendo'))