const myname = prompt ('Qual è il tuo nome?');
console.log ("Il nome dell'utente è: ", myname);
const mysurname = prompt('Qual è il tuo cognome?');
console.log("Il cognome dell'utente è: ", mysurname);
const favcolor = prompt('Qual è il tuo colore preferito?');
console.log("Il colore preferito dell'utente è: ", favcolor);

const pwdgen = myname + mysurname + favcolor + '21';
console.log('La password sarà: ', pwdgen);

document.writeln(pwdgen);