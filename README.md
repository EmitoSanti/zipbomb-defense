# Desbordamiento de buffer, caso practico/didactico
    Caso practico y didactico: cuando un servidor descomprime un archivo "zip" 
    dentro del entorno del mismo servidor para realizar "x" tarea, 
    el atacante puede vulnerar el sistema con un Zip-Bomb (tener en cuenta), este tipo 
    de ataque tiene como objetivo explotar la vulnerabilidad de "desbordamiento de buffer".

    Debemos aprender a estar un paso adelante y realizar un código limpio y seguro.

### Prerequisitos, tener instalado:
    * mongodb
    * nodejs


## Primer paso: no realizar esta actividad hasta proponer una linea de defenza.

## Segundo paso en la terminar apuntando al directorio donde esta app.js ejecutar: 
   * npm install
   * npm install unzipper
   * npm i -S express express-fileupload
   * npm i file-system

## Tercer paso elegir si utilizar descompresión segura o no segura seteando la variable "security" como true o false respectivamente.
    Actualmente no esta implementada ninguna contramedida o defenza.

## Cuarto paso crear los siguientes directorios:
    * una carpeta llamada "upload" en el mismo directorio donde se encuentra este caso practico/didactico.
    * en un pen-drive o sandbox la carpeta "unzipper", tener en cuenta modificar la ruta en el parametro path en el archivo app.js

## Quinto paso en el directorio de app.js ejecutar: node app

## Sextp paso abrir el index.html con un browser y subir un 42.zip o parecido en el campo correspondiente, luego tocar "Subir". 
    * si no hay seguridad y el zip es de tipo bomb colapsa todo
    * si hay seguridad y la descompresión no comienza

Fuentes: [https://www.npmjs.com/] [https://ed.team/blog/como-subir-archivos-al-servidor-con-nodejs]
