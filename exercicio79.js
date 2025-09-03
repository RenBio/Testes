let carro = {
    marca:'ford',
    modelo: 'Mustang',
    ano:'1969',
    velocidadeAtual: 0,

    acelerar:function(){
        this .velocidadeAtual += 10;
    },

    frear:function(){
        this .velocidadeAtual -= 10;
        if (this.velocidadeAtual < 0){
            this .velocidadeAtual = 0;
        }
    },

    obterVelocidadeAtual:function(){
        return this .velocidadeAtual;
    }
};

carro.acelerar();
console.log(carro.obterVelocidadeAtual()); // Deve imprimir: 10

carro.frear();
console.log(carro.obterVelocidadeAtual()); // Deve imprimir: 0
