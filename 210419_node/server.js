'use strict';

// Modul zum Zugriff auf das Dateisystem
const fs = require('fs');

// Webserver
const express = require('express');
const server = express();

// Filenames
const pathToAccessLog = () => `logs/access_${new Date().toLocaleDateString()}.log`;

server.use((request, response, next) => {
    pathToAccessLog(),
    fs.appendFile(
        pathToAccessLog(),    // Der Pfad wird von der Funktion jedes Mal neu erzeugt
        `${new Date().toLocaleString()} - ${request.url}\n`,
        () => {
            next();
        }
    )
})

server.use(express.static('htdocs'));

server.listen(80, err => console.log(err || 'Server läuft'));
