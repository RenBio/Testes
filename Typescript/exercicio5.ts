function identidade<T>(valor: T): T {
return valor;
}

console.log(identidade<number>(123));
console.log(identidade<string>("Olá mundo"))