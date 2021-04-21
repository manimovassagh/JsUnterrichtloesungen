'use strict';

const express = require('express');
const server = express();

// request enthält alle Informationen bzgl der Anfrage
// response enthält alle Methoden, um eine Antwort an den Client zu erzeugen
// next ruft die nächste Middleware/Route auf
server.use((request, response, next) => {
    console.log(request.url);
   
    next();

    // Wird auch aufgerufen, nachdem next() ausgeführt wurde
    console.log('Next wurde aufgerufen');

});

server.use((request, response, next) => {
    console.log('Ich bin die nächste Middleware');

    next();
})

server.use((request, response, next) => {
    console.log('Ich bin die dritte Middleware');

    next();
})

server.use(express.static('htdocs'));

server.listen(80, err => console.log(err || 'Server läuft'));
