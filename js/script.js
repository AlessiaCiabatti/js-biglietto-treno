// 1 NUMERO CHILOMETRI PASSEGGERO
let chilometri = parseInt(prompt('Quanti chilemtri vuoi percorrere?'));
console.log(chilometri);

// 2 CHIEDERE ETA PASSEGGERO
let etaPasseggero = parseInt(prompt('Quanti anni hai?'));
console.log(etaPasseggero);

// 3 CONST EURO PER CHILOMETRO
const euroChilometro = 0.21;

// 4 CALCOLO COSTO TOTALE DEL BIGLIETTO
let totale = chilometri * euroChilometro;

// 5 SCONTO DEL 20% AI PASSEGGERI MINORI DI 18 ANNI
let scontoMinori = totale * 0.2;

// 6 SCONTO DEL 40% AI PASSEGGERI MINORI DI 18 ANNI
let scontoSenior = totale * 0.4;

// 7 OUTPUT DEL PREZZO FINALE
let totaleMinori = totale - scontoMinori;
let totaleSenior = totale - scontoSenior;
let totaleAdulti = totale;

if(etaPasseggero < 18){
  prezzoFinale = totaleMinori;
}
else if (etaPasseggero > 65){
  prezzoFinale = totaleSenior;
}
else{
  prezzoFinale = totaleAdulti;
}

console.log(prezzoFinale);

document.getElementById('prezzo').innerHTML = prezzoFinale.toFixed(2);

console.log(prezzoFinale.toFixed(2));