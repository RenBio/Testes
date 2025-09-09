let quadrado = Object.create(retangulo);
quadrado.largura = 5;
quadrado.altura = 5;

quadrado.calcular.Area = function(){
    return this .largura*this .largura;
};

console.log(quadrado.calcularArea()); // Deve imprimir: 25