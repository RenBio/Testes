interface Produto {
  nome: string;
  preco: number;
  disponivel: boolean;
}

const produto1: Produto = {
  nome: "Teclado Mecânico",
  preco: 199.99,
  disponivel: true,
};

console.log(produto1);