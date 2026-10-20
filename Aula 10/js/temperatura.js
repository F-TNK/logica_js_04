const botao = document.querySelector("#convert");
const result = document.querySelector("#resultado");

const celsiusParaFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

const fahrenheitParaCelsius = (f) => {
  return ((f - 32) * 5) / 9;
};

botao.onclick = () => {
  const celsius = Number(document.querySelector("#tempC").value);

  const f = celsiusParaFahrenheit(celsius);
  const volta = fahrenheitParaCelsius(f);

  result.textContent =
    "Temperatura em °F = " +
    f.toFixed(1) +
    " (convertido de volta: " +
    volta +
    " °F)";
};
