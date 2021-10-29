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
let betUser = null;
let betPC = null;
let userChose = prompt('Scegli tra pari o dispari: ');

console.log(`hai scelto ${userChose}!`);
if (userChose === 'pari'){
    betUser = true;
    betPC = false;   
} else{
    betUser = false;
    betPC = true;
}

// Generiamo e salviamo un numero random sempre da 1 a 5 per il PC
let pcNum = numRandom();
console.log('Il numero del pc è: ',pcNum);

// Sommiamo il numero del Utente e del PC
let sumTot = somma(userNum, pcNum);

// Controlliamo se il valore della somma ottenuta è pari o dispari ---> NB creare poi una FUNZIONE per questo!!!
let result = pariDispari(sumTot);
//console.log(result);

// Output Vincitore.
    // Se il valore di result === al valore di userChose allora il vincitore è user, altrimenti il PC.
if (result === betUser){
    console.log(`Il risultato della somma è: ${sumTot}, ed il vincitore è User`);
} else {
    console.log(`Il risultato della somma è: ${sumTot}, ed il vincitore è PC`);
}

// FUNZIONI
// funzione numero random
function numRandom(){
    return x = Math.floor(Math.random() * 5) + 1;
}

//funzione somma numeri
function somma(x, y){
    return sum = x + y;
}

//funzione numero pari o dispari
function pariDispari(totale){
    let pari = null;
    if (totale % 2 === 0){
        pari = true;
    }else pari = false;
    console.log('la somma è pari? ',pari);
    return pari;
}