let livro = {
    titulo: 'o Ladrão de Raios - Percy Jackson e os Olimpianos',
    autor: 'Rick Riordan',
    numeroDePaginas:400,
    descricao: function(){
        console.log(`O livro ${this .titulo}, escrito por ${this .autor}, tem ${this .numeroDePaginas} páginas.`);

    }
};