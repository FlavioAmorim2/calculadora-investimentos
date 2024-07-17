import { generateReturnArray } from "./src/investmentGoals.js";

const form = document.getElementById("investment-form");
const clearFormButton = document.getElementById('clear-form')
// const calculateButton = document.getElementById("calculate-results");

function renderProgression(evt) {
  evt.preventDefault();
  if(document.querySelector('.error')){
    return;
  }
  // form startingAmount = Number(form['startin-agmount']);
  const startingAmount = Number(
    document.getElementById("starting-amount").value.replace(",", ".")
  );
  const aditionalContribution = Number(
    document.getElementById("aditional-contribution").value.replace(",", ".")
  );
  const timeAmount = Number(document.getElementById("time-amount").value);
  const timeAmountPeriod = document
    .getElementById("time-amount-period")
    .value.replace(",", ".");
  const returnRate = Number(
    document.getElementById("return-rate").value.replace(",", ".")
  );
  const returnRatePeriod = document.getElementById("evaluation-period").value;
  const textRate = Number(document.getElementById("text-rate").value);

  const returnsArray = generateReturnArray(
    startingAmount,
    timeAmount,
    timeAmountPeriod,
    aditionalContribution,
    returnRate,
    returnRatePeriod
  );
  console.log(returnsArray);
}

function clearForm() {
  form['starting-amount'].value ='';
  form['aditional-contribution'].value ='';
  form['time-amount'].value ='';
  form['return-rate'].value ='';
  form['text-rate'].value ='';

  const errorInputContainers = document.querySelectorAll('.error');

  for(const errorInputContainer of errorInputContainers ) {
    errorInputContainer.classList.remove('error');
    errorInputContainer.parentElement.querySelectorAll('p').remove();
  }
}
function validateInput(evt) {
  const inputValue = evt.target.value.replace(",", ".");
  const parentElement = evt.target.parentElement;
  const grandParentElement = parentElement.parentElement;

  // Remover mensagem de erro anterior, se existir
  const existingError = grandParentElement.querySelector(".text-red-500");
  if (existingError) {
      grandParentElement.removeChild(existingError);
  }

  if (isNaN(inputValue) || Number(inputValue) <= 0) {
      const errorTextElement = document.createElement('p');
      errorTextElement.classList.add('text-red-500');
      errorTextElement.innerText = 'Insira um valor numérico maior que zero';
      grandParentElement.appendChild(errorTextElement);
      parentElement.classList.add("error");
  } else {
      parentElement.classList.remove("error");
  }
}

if (form) {
  const formInputs = form.querySelectorAll("input[name]");
  for (const formInput of formInputs) {
      formInput.addEventListener("blur", validateInput);
  }

  form.addEventListener("submit", function(event) {
      renderProgression(event);
  });
}

clearFormButton.addEventListener("click", clearForm);























// function validadeInput(evt) {
//   const inputValue = evt.target.value.replace(",", ".");
//   const parentElement = evt.target.parentElement;
//   const grandParentElement = parentElement.parentElement;

//     if ( !parentElement.classList.contains("error") && isNaN(inputValue) || Number(inputValue) <= 0 ) {
//     const errorTextElement = document.createElement('p');
//     errorTextElement.classList.add('text-red-500');
//     errorTextElement.innerText = 'Insira um valor numérico maior que zero';
//     } else {
//     parentElement.classList.remove("error");
//     const errorElement = grandParentElement.querySelector(".text-red-500");
//     if (errorElement) {
//       grandParentElement.removeChild(errorElement);
//     }
//   }
// }
// if (form) {
//   const formInputs = form.querySelectorAll("input[name]");
//   for (const formInput of formInputs) {
//     formInput.addEventListener("blur", validadeInput);
//   }

// }
// form.addEventListener("submit", function (event) {
//     renderProgression(event);
// });

// clearFormButton.addEventListener("click", clearForm);
// --------------------------------------------------------------------------------




// function validadeInput(evt) {
//   const inputValue = evt.target.value.replace(",", ".");
//   const parentElement = evt.target.parentElement;
//   const grandParentElement = evt.target.parentElement.parentElement;

//   if ( isNaN(inputValue) || Number(inputValue) <= 0 && !parentElement.classList.contains("error")) {
//     const errorTextElement = document.createElement('p');
//     errorTextElement.classList.add('text-red-500');
//     errorTextElement.innerText = 'Insira um valor numérico maior que zero';

//     parentElement.classList.add('error');
//     grandParentElement.appendChild(errorTextElement);
//   } else if (parentElement.classList.remove('error') && !isNaN(inputValue) && Number(inputValue) > 0){
//       parentElement.classList.remove('error');
//       grandParentElement.querySelector('p').remove();
//   }
// }

// const formInputs = form.querySelectorAll('input[name]');
// for (const formInput of formInputs) {
//   formInput.addEventListener('blur', validadeInput);
// }

// form.addEventListener("submit", renderProgression);
