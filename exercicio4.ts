class Carro {
  marca: string;
  ano: number;

  constructor(marca: string, ano: number) {
    this.marca = marca;
    this.ano = ano;
  }

  exibirInfo(): void {
    console.log(`Carro: ${this.marca}, Ano: ${this.ano}`);
  }
}

const meuCarro = new Carro("Toyota", 2022);
meuCarro.exibirInfo();
