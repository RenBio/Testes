let circulo = {
    raio: 5,

    calcularArea: function(){
        return Math.PI*Math.pow(this.raio,2);
    },

    calcularCircunferencia:function(){
        return 2 *Math.PI*this.raio;
    }
};
console.log(circulo.calcularArea());// Deve imprimir 78.53981633974483
console.log(circulo.calcularCircunferencia()); // Deve imprimir 31.41592653589793