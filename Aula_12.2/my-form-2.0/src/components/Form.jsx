import React from 'react';
import './Form.css';
import InputComponent from './InputComponent';
import SelectComponent from './SelectComponent';
import ResultForm from './ResultForm';

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: 'AC',
      habitation: '',
      resume: '',
      job: '',
      'job-description': '',
      submit: false,
    }
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
    this.clear = this.clear.bind(this);

  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  }

  submit(event) {
    event.preventDefault();
    this.setState({
      submit: true
    });
  }

  clear(event) {
    event.preventDefault();
    this.setState({
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: 'AC',
      habitation: '',
      resume: '',
      job: '',
      jobDescription: '',
      submit: false,
    });
  }

  render() {
    return (
      <div>
        <form>
          <fieldset id="person" >
            <h3>Dados pessoais</h3>
            <InputComponent
              type="text"
              describe="Nome"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              maxLength={40}
            />
            <InputComponent
              type="email"
              describe="Email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              maxLength={50}
            />
            <InputComponent
              type="text"
              describe="CPF"
              name="cpf"
              value={this.state.cpf}
              onChange={this.onChange}
              maxLength={11}
            />
            <InputComponent
              type="text"
              describe="Endereço"
              name="adress"
              value={this.state.adress}
              onChange={this.onChange}
              maxLength={200}
            />
            <InputComponent
              type="text"
              describe="Cidade"
              name="city"
              value={this.state.city}
              onChange={this.onChange}
              maxLength={28}
            />
            <SelectComponent
              describe="Estado"
              name="state"
              value={this.state.state}
              onChange={this.onChange}
            />

            <label htmlFor="habitation">Moradia </label>
            <div className="habitation">
              <input
                type="radio"
                id="house"
                name="habitation"
                value="house"
                onChange={this.onChange}
              />
              <label htmlFor="house">Casa </label>

              <input
                type="radio"
                id="ap"
                name="habitation"
                value="ap"
                onChange={this.onChange}
              />
              <label htmlFor="ap">Apartamento </label>
            </div>
          </fieldset>

          <fieldset id="career">
            <h3>Carreira</h3>
            <label htmlFor="resume">Resumo</label>
            <textarea
              name="resume"
              id="resume"
              cols="30"
              rows="10"
              value={this.state.resume}
              onChange={this.onChange}
              maxLength={1000}
            />

            <label htmlFor="job">Cargo </label>
            <input
              type="text"
              id="job"
              name="job"
              value={this.state.job}
              onChange={this.onChange}
            />

            <label htmlFor="job-description">Descrição do cargo</label>
            <textarea
              name="job-description"
              id="job-description"
              cols="30"
              rows="10"
              value={this.state.jobDescription}
              onChange={this.onChange}
              maxLength={500}
            />

          </fieldset>
          <button onClick={this.submit} >Submit</button>
          <button onClick={this.clear} >Clear</button>
        </form>
        <div className="result">
        {this.state.submit && <ResultForm result={this.state} />}
        </div>
      </div>
    )
  }
}

export default Form;