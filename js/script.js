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
let scontoSenior = totale * 0.4;

let totaleMinori = totale - scontoMinori;
let totaleSenior = totale - scontoSenior;
let totaleAdulti = totale;

if(etaPasseggero < 18){
  
}
else if (etaPasseggero > 65){
  
}
else{
  
}
