let chilometri=prompt('Inserisci i Km da percorrere: ');

let eta=prompt('Inserisci la tua età: ');

let prezzo_biglietto=0.21*chilometri

let prezzo_totale;

if(eta<18){
    prezzo_totale=(prezzo_biglietto*0.8);
} else(eta>65){
    prezzo_totale=(prezzo_biglietto*0.6);
}

console.log(prezzo_totale);