function objetoParaJson (obj) {
    return JSON.stringify(obj);
}

const objetoTeste = {nome:"João, idade:25"};

console.log(objetoParaJson(objetoTeste)); //"{'nome':'João','idade':25"