function CombineandFilter(Pares,impares){
    return Pares.concat(impares).filter (num=> num % 5 === 0); 

}

const pares = [2,4,10,12,20];
const impares = [1,3,5,15,25];
console.log(CombineandFilter(pares,impares)); // Deve imprimir: [10,20,5,15,25]