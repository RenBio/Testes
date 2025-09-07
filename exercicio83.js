let tempo = {
    horas: 2,
    minutos: 30,
    segundos: 15,
    converterParaSegundos:function(){
        return this.horas* 3600 + this.minutos*60 + this.segundos;
    }
};

console.log(tempo.converterParaSegundos()); // Deve imprimir: 9015