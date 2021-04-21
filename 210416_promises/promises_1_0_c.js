'use strict';

import primeLib from './primeLib.js';


const init = () => {
    let checkMe = prompt('Welche Zahl soll geprüft werden?');
    primeLib.checkWithPromise(checkMe).then(
        data => {
            if (data.isPrime) console.log(`${checkMe} ist prim.`);
            else console.log(`${checkMe} hat einen Teiler.\nDer erste Teiler ist ${data.teiler}`);
        }
    ).catch(
        console.log
    )

}

init();
