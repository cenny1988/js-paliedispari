/*
Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
Dare l’output relativo.
*/

//Chiedere all’utente di inserire una parola
let word = prompt('Inserisci qui la parola da verificare: ');

//Creare una funzione per capire se la parola inserita è palindroma.
    //scomporre la parola in lettere. NB (possiamo creare un funzione). 
    //NB trovato metodo split per scomporre la parola
let wordSplit = word.split('');
//console.log(wordSplit);

//copiare le lettere dalla parola in ordine inverso in un altro array x esempio.
let x = wordSplit.length-1;
let wordReverse = [];
for (i=0; i<wordSplit.length; i++){
    wordReverse[x] = wordSplit [i];
    x--;
}   
    //possiamo usare il metodo join per ricreare una stringa dall'array ottenuto
let newWord = wordReverse.join('');
console.log(newWord);

//confrontare i valori dei singoli elementi dei 2 array e vedere se sono tutti uguali.
//output risultato
if (word === newWord){
    console.log(`La parola ${word} inserita è palindroma.`);
}else {console.log(`La parola ${word} inserita NON è palindroma.`);}
