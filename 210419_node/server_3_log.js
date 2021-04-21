'use strict';

// Modul zum Zugriff auf das Dateisystem
const fs = require('fs');

// Webserver
const express = require('express');
const server = express();

server.use((request, response, next) => {
    /* Alternative 1: Log im Terminal (keine gute Idee)
    console.log(request.url, request.query);
    */

    // Alternative 2: Einfaches Logfile schreiben
    fs.appendFile(
        'access.log',
        `${new Date().toLocaleString()} - ${request.url}\n`,
        () => {
            // Die nächste Middleware soll erst aufgerufen werden,
            // Sobald das Log geschrieben wurde
            next();
        }
    )
})

server.use(express.static('htdocs'));

server.listen(80, err => console.log(err || 'Server läuft'));
