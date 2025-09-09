let retangulo = {
    altura: 5,
    largura:10,

    calcularArea:function(){
        return this.altura* this.largura;
    }
};

console.log(retangulo.calcularArea()); // Deve imprimir: 50