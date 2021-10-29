/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// Utente inserisce un numero da 1 a 5
let userNum = parseInt(prompt('Inserisci un numero da 1 a 5: '));
console.log('Il numero scelto user è: ',userNum);

// Utente sceglie PARI o DISPARI
let userChose = prompt('Scegli tra pari o dispari: ');
console.log(`hai scelto ${userChose}!`);

// Generiamo e salviamo un numero random sempre da 1 a 5 per il PC
let pcNum = numRandom();
console.log('Il numero del pc è: ',pcNum);

// Sommiamo il numero del Utente e del PC
let sumTot = somma(userNum, pcNum);
console.log('La somma totale è: ',sumTot);

// Controlliamo se il valore della somma ottenuta è pari o dispari ---> NB creare poi una FUNZIONE per questo!!!

// Output Vincitore.

// FUNZIONI
// funzione 
function numRandom(){
    return x = Math.floor(Math.random() * 5) + 1;
}

function somma(x, y){
    return sum = x + y;
}