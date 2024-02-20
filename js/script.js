// 1 NUMERO CHILOMETRI PASSEGGERO
let chilometri = prompt('Quanti chilemtri vuoi percorrere?');
console.log(chilometri);

// 2 CHIEDERE ETA PASSEGGERO
let etaPasseggero = prompt('Quanti anni hai?');
console.log(etaPasseggero);

// 3 CONST EURO PER CHILOMETRO
const euroChilometro = 0.21;

// 4 CALCOLO COSTO TOTALE DEL BIGLIETTO
let totale = chilometri * euroChilometro;

// 5 SCONTO DEL 20% AI PASSEGGERI MINORI DI 18 ANNI
let scontoMinori = totale * 0.2;
let scontoSenior = totale * 0.4;

if(etaPasseggero < 18){
  
}