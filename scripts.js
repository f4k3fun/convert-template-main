const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const footer = document.querySelector("main footer");
const description = document.querySelector("#description");
const result = document.querySelector("#result");

const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

// Manipulando o input amount para receber somente numeros.
amount.addEventListener("input", () => {
  const value = amount.value;
  
  const hasStringRegex = /\D+/g;

  amount.value = value.replace(hasStringRegex, "");
});


// Capturando o evento de submit do formulario. 
form.addEventListener("submit", (e) => {
  e.preventDefault();

  switch (currency.value) {
    case "USD":
      converterCurrency(amount.value, USD, "US$");
      break
    case "EUR":
      converterCurrency(amount.value, EUR, "€");
      break
    case "GBP":
      converterCurrency(amount.value, GBP, "£");
      break
    default :
      alert("Moeda invalida tente novamente");
  }

 
});

// Funcao para converter a moeda. 
function converterCurrency(amount, price, symbol){


  try{
    // Exibindo a cotacao da moeda selecionada. 
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;


    // Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result");
    
    // Calcula o total. 
    let total = amount + price;
    total = formatCurrencyBRL(total).replace("R$", "");


    

    result.textContent = total + " Reais";

  }catch(e){

    // remove a classe do footer removendo ele da tela.
    footer.classList.remove("show-result");

    console.log(e);
    alert("Nao foi possivel realizar a conversao tente novamente mais tarde");
  }


}


// Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value){

  if (isNaN(value)) {
    return alert("Por favor, digite o valor corretamente para converter.");
  } else { 

  // Converte para numero para utilizar o toLocaleString para formatar no padrao BRL (R$ 00,00). 
  return Number(value).toLocaleString("pt-BR",{
    style: "currency",
    currency: "BRl",
  })
}
}