import React from 'react';

class ResultForm extends React.Component {
  render() {
    const {
    name,
    email,
    cpf,
    adress,
    city,
    state, 
    habitation, 
    resume, 
    job, 
    jobDescription
  } = this.props.result
    return (
      <div>
        <h3>Resumo</h3>
        <p>Nome: {name}</p>
        <p>Email: {email}</p>
        <p>CPF: {cpf}</p>
        <p>Endereço: {adress}</p>
        <p>Cidade: {city}</p>
        <p>Estado: {state}</p>
        <p>Moradia: {habitation}</p>
        <p>Resumo: {resume}</p>
        <p>Cargo: {job}</p>
        <p>Descrição do cargo: {jobDescription}</p>
      </div>
    )
  }
}

export default ResultForm;