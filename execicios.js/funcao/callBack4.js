function EntradaDados(nome, dia) {
  (this.nome = nome), (this.dia = dia);
}

const semana = new EntradaDados("Mário", "Sexta-feira");

console.log(semana);
