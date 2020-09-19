// Inicializando os estados
let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

let sectionEstados = document.querySelector('#estados');

for (let index = 0; index < estados.length; index += 1) {
  let option = document.createElement('option');
  option.value = estados[index];
  option.innerText = estados[index];
  sectionEstados.appendChild(option);
}
// Date Picker para validação do campo data
window.DatePickerX.setDefaults({ format: 'yyyy-mm-dd' })
let inicio = document.querySelector('#inicio').DatePickerX.init();

// Carrega o formulário
let formulario = document.querySelector('form')

formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(document.querySelector('form'))
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
  if (casa.checked) {
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
  `;

})

// Validação dos campos

new window.JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      maxLength: 40
    },
    email: {
      required: true,
      maxLength: 50,
      email: true
    },
    cpf: {
      required: true,
      maxLength: 11
    },
    endereco: {
      required: true,
      maxLength: 200
    },
    cidade: {
      required: true,
      maxLength: 28
    },
    estado: {
      required: true
    },
    radio: {
      required: true
    },
    resumo: {
      required: true,
      maxLength: 1000
    },
    cargo: {
      required: true,
      maxLength: 40
    },
    descCargo: {
      required: true,
      maxLength: 500
    },
    inicio: {
      required: true
    }
  },
  focusWrongField: true,

  submitHandler: function (form, values, ajax) {

    ajax({
      url: 'http://127.0.0.1:5500/Aula_6.2',
      method: 'GET',
      data: values,
      async: true,
      callback: function () {
        console.log('sucesso')
      },
    })
  },
  invalidFormCallback: function () {
    console.log('Falhou')
    document.querySelector('#resultado').innerHTML=''
  },

})