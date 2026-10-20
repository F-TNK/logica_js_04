const botao = document.querySelector("#calcular");
const result = document.querySelector("#resultado");

const NOTAS = [7, 5.5, 9, 4, 8, 6.5];

botao.onclick = () => {
  let texto = "";
  let soma = 0;
  let maior = NOTAS[0];

  NOTAS.forEach((nota, i) => {
    soma += nota;
    texto += "Nota " + (i + 1) + ": " + nota + "\n";
    maior = nota > maior ? nota : maior;
  });
  const media = soma / NOTAS.length;
  texto += "\nMaior nota: " + maior;
  texto += "\nSoma: " + soma;
  texto += "\nMédia: " + media;

  mostrar(texto, "ok");
};
