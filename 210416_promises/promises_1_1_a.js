'use strict';

import primeLib from './primeLib.js';


const init = () => {
    let anzahl = prompt('Wieviele Primzahlen möchten Sie?');
    primeLib.firstNPrimes(anzahl).then(
        data => {
            console.log(data);            
        }
    ).catch(
        console.log
    )

}

init();
