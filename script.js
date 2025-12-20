const button = document.getElementById("btn-converter");
const select = document.getElementById("select-moeda");

const dolar = 5.54;
const euro = 6.47;

const converterValor = () => {
  const inputReal = document.getElementById("input-real").value;
  const textoValorReal = document.getElementById("texto-valor-real");
  const textoValorMoeda = document.getElementById("texto-valor-moeda");

  textoValorReal.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReal);

  switch (select.value) {
    case "USD":
      textoValorMoeda.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(inputReal / dolar);
      break;
    case "EUR":
      textoValorMoeda.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(inputReal / euro);
  }
};

const changeMoeda = () => {
  const textoMoeda = document.getElementById("texto-moeda");
  const moedaImagem = document.getElementById("moeda-img");

  if (select.value === "US$ Dólar americano") {
    textoMoeda.innerHTML = "Dólar americano";
    moedaImagem.src = "./assets/img/bandeira-eua.png";
  }

  if (select.value === "€ Euro") {
    textoMoeda.innerHTML = "Euro";
    moedaImagem.src = "./assets/img/bandeira-euro.png";
  }
  converterValor();
};

button.addEventListener("click", converterValor);
select.addEventListener("change", changeMoeda);
