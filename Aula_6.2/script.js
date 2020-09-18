let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ];

let sectionEstados = document.querySelector('#estados');

for (let index = 0; index < estados.length; index += 1) {
  let option = document.createElement('option');
  option.value = estados[index];
  option.innerText = estados[index];
  sectionEstados.appendChild(option);
}

window.DatePickerX.setDefaults({format: 'yyyy-mm-dd'})
let inicio = document.querySelector('#inicio').DatePickerX.init();

let formulario = document.querySelector('form')

formulario.addEventListener('submit', function(event) {
  let nome = document.querySelector('#nome');
  let email = document.querySelector('#email');
  let cpf = document.querySelector('#cpf');
  let endereco = document.querySelector('#endereco');
  let cidade = document.querySelector('#cidade');
  let estado = document.querySelector('#estados');
  let casa = document.querySelector('#casa');
  let ap = document.querySelector('#ap');

  let resumo = document.querySelector('#resumo');
  let cargo = document.querySelector('#cargo');
  let descCargo = document.querySelector('#desc-cargo');
  inicio = document.querySelector('#inicio');

  let result = document.querySelector('#resultado')
  let radio = ''
  if(casa.checked) {
    radio = casa.value;
  }
  else {
    radio = ap.value;
  }

  result.innerHTML = `
  <br>
  Nome completo: ${nome.value} <br>
  Email: ${email.value} <br>
  CPF: ${cpf.value} <br>
  Endereço: ${endereco.value} <br>
  Cidade: ${cidade.value} - Estado: ${estado.value} <br>
  Moradia: ${radio} <br>
  Resumo do currículo: ${resumo.value} <br>
  Cargo: ${cargo.value} <br>
  Descrição do cargo: ${descCargo.value} <br>
  Data de ínicio: ${inicio.value} <br>
  `
  event.preventDefault();
})