'use strict';

const primeLib = {
    checkWithPromise(zahl) {
        // Promise als Rückgabe erzeugen
        return new Promise((resolve, reject) => {
            for (let i = 2; i <= Math.sqrt(zahl); i++) {
                // Als Return ein Objekt erzeugen, damit mehr Infos zurückgehen können und 
                // alle Rückgaben denselben Datentypen (und -struktur) haben
                if (zahl % i == 0) resolve({
                    isPrime: false,
                    teiler: i
                });
            }
            resolve({
                isPrime: true
            });
        })
    },

    checkSynchron(zahl) {
        for (let i = 2; i <= Math.sqrt(zahl); i++) {
            if (zahl % i == 0) return ({
                isPrime: false,
                teiler: i,
                zahl
            });
        }
        return ({
            isPrime: true,
            zahl
        });
    },

    firstNPrimes(anzahl) {
        return new Promise((resolve, reject) => {
            let primes = [];
            let counter = 3;
            
            while (primes.length < anzahl) {
                if (primeLib.checkSynchron(counter).isPrime) {
                    primes.push(counter);
                }
                counter++;
            }
            
            resolve(primes.join(' '));
        })
    }
}

export default primeLib;