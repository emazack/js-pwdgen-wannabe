// Chiedi all’utente il suo nome:
// 1 crea una variabile nome
// 2 fornisci un input che dia un valore alla variabile nome
var nome;
nome = prompt("Inserisci il tuo nome");

// chiedi il suo cognome:
// 3 crea una variabile cognome
// 4 fornisci un input che dia un valore alla variabile cognome
var cognome;
cognome = prompt("Inserisci il tuo cognome");


// chiedi il suo colore preferito:
// 5 crea una variabile colore
// 6 fornisci un input che dia un valore alla variabile colore
var colore;
colore = prompt("Inserisci il tuo colore preferito");


// scrivi sulla pagina il nome cognome e colore preferito + 19
// utilizza una funzione che faccia comparire in pagina la "password"

document.getElementById('password').innerHTML = nome + cognome + colore + "19";
