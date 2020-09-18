let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ];

let sectionEstados = document.querySelector('#estados');

for (let index = 0; index < estados.length; index += 1) {
  let option = document.createElement('option');
  option.value = estados[index];
  option.innerText = estados[index];
  sectionEstados.appendChild(option);
}

function reseumeForm(evt) {
  evt.preventDefault();
  const formData = document.querySelector('form').elements
  let result = document.querySelector('#resultado')
  let radio = ''
  if(formData[7].checked) {
    radio = formData[7].value;
  }
  else {
    radio = formData[8].value;
  }

  result.innerHTML = `
  <br>
  Nome completo: ${formData[1].value} <br>
  Email: ${formData[2].value} <br>
  CPF: ${formData[3].value} <br>
  Endereço: ${formData[4].value} <br>
  Cidade: ${formData[5].value} - Estado: ${formData[6].value} <br>
  Moradia: ${radio} <br>
  Resumo do currículo: ${formData[10].value} <br>
  Cargo: ${formData[11].value} <br>
  Descrição do cargo: ${formData[12].value} <br>
  Data de ínicio: ${formData[13].value} <br>
  `
}

let submitButton = document.querySelector('#submissao')
submitButton.addEventListener('click', reseumeForm)