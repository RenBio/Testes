let contaBancaria = {
saldo:1000,

depositar:function(valor){
    this .saldo += valor;
},

sacar:function(valor){
    if(valor <= this .saldo){
        this .saldo -= valor;
    } else {
        console .log('Saldo insuficiente.');
    }
},

obterSaldo:function(){
    return this .saldo;
}
};

contaBancaria.depositar(500);
console .log(contaBancaria.obterSaldo());// Deve imprimir: 1500

contaBancaria.sacar(200);
console .log(contaBancaria.obterSaldo());// Deve imprimir: 1300