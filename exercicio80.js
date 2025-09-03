let estudante = {
    nome:'João',
    notas:[10,8,9,7],
    calcularMedia:function(){
        let soma = 0;
        for (let i = 0;i< this .notas.length;i++){
            soma += this .notas[i];
        }
        return soma/this .notas.length;
    }
};