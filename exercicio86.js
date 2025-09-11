let livro = {
    titulo: '1984',
    autor: 'George Orwell',
    paginas:328,

    exibirLivro: function(){
        console.log( this .titulo + 'escrito por' + this .autor +', com' + this .paginas + 'páginas');
    }
};

livro.exibirLivro();// Deve imprimir: 1984, escrito por George Orwell, com 328 paginas