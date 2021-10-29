/*
Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
Dare l’output relativo.
*/

//Chiedere all’utente di inserire una parola
let wordUser = prompt('Inserisci qui la parola da verificare: ');

let verifedWord = isWordPalindorme(wordUser);

// output
if (!verifedWord){
    console.log(`La parola ${wordUser} inserita NON è palindroma.`);
} else{
    console.log(`La parola ${wordUser} inserita è palindroma.`);
}


// Creazione Funzione
function isWordPalindorme(word){
    //Variabile booleana con risultato da ritornare alla fine
    let isPalindroma = false;
    //scomporre la parola in lettere. 
    //NB trovato metodo  JS split() per scomporre la parola
    let wordSplit = word.split('');
    //console.log(wordSplit);
    
    //copiare le lettere dalla parola in ordine inverso in un altro array x esempio.
    //metodo 1
    let x = wordSplit.length-1;
    let wordReverse = [];
    for (i=0; i<wordSplit.length; i++){
        wordReverse[x] = wordSplit [i];
        x--;
    }   
    //metodo 2
    //esiste un medoto JS reverse()
    // let wordReverse = wordSplit.reverse();
    // console.log(wordReverse);
    
    
    //possiamo usare il metodo JS join() per ricreare una stringa dall'array ottenuto
    let newWord = wordReverse.join('');
    //console.log(newWord);
    
    //confrontare i valori dei singoli elementi dei 2 array e vedere se sono tutti uguali.
    if (word === newWord){
        isPalindroma = true;
    }

    return isPalindroma;
}    





