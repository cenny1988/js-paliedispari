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

// Utente sceglie PARI o DISPARI
let userChose = prompt('Scegli tra pari o dispari: ');

// Generiamo e salviamo un numero random sempre da 1 a 5 per il PC
let pcNum = pariDispari();
console.log(pcNum);

// Sommiamo il numero del Utente e del PC

// Controlliamo se il valore della somma ottenuta è pari o dispari ---> NB creare poi una FUNZIONE per questo!!!

// Output Vincitore.

// FUNZIONI
function pariDispari(){
    return x = Math.floor(Math.random() * 5) + 1;
}