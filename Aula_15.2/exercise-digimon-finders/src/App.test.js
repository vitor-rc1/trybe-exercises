import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

describe('Teste da aplicação toda', () => {

  it('renders App', async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('exist elements and input change value', () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId('input');
    const button = getByTestId('buttonSearch');

    expect(input).toHaveValue('');
    fireEvent.change(input, {target: {value: 'Agumon'}})
    expect(input).toHaveValue('Agumon');
  });

  it('should fetch digimon', async () => {
    const digimon = [{"name":"Agumon","img":"https://digimon.shadowsmith.com/img/agumon.jpg","level":"Rookie"}]
    global.fetch = jest.fn(
      () => Promise.resolve({
        json: () => Promise.resolve(digimon)
      })
    )

    const { getByTestId, findByTestId } = render(<App />);
    const input = getByTestId('input');
    const button = getByTestId('buttonSearch');
    fireEvent.change(input, {target: {value: 'Agumon'}})
    fireEvent.click(button);
    const digimonName = await findByTestId('digimonName');
    const digimonLevel = await findByTestId('digimonLevel');
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(`https://digimon-api.vercel.app/api/digimon/name/${digimon[0].name}`)
    expect(digimonName).toHaveTextContent('Agumon');
    expect(digimonLevel).toHaveTextContent('Rookie');
  })
  it('mensage error occurs', async () => {
    const erroMsg = {"ErrorMsg":"Joaquin is not a Digimon in our database."};
    global.fetch = jest.fn(
      () => Promise.resolve({
        json: () => Promise.resolve(erroMsg)
      })
    );
    const { getByTestId, findByText } = render(<App />);
    const input = getByTestId('input');
    const button = getByTestId('buttonSearch');
    fireEvent.change(input, {target: {value: 'Joaquin'}})
    fireEvent.click(button);
    const pageError = await findByText('Joaquin is not a Digimon in our database.');
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(`https://digimon-api.vercel.app/api/digimon/name/Joaquin`)
    expect(pageError).toBeInTheDocument();

  })

});