import React from 'react';
import { render } from '@testing-library/react';
import Digimon from './Digimon';

describe('Teste da tela do Digimon', () => {
  it('renders Digimon', async () => {
    const digimon = {"name":"Agumon","img":"https://digimon.shadowsmith.com/img/agumon.jpg","level":"Rookie"};
    const { findByTestId } = render(<Digimon digimon={digimon} />)
    const digimonName = await findByTestId('digimonName');
    const digimonLevel = await findByTestId('digimonLevel')
    expect(digimonName).toHaveTextContent('Agumon');
    expect(digimonLevel).toHaveTextContent('Rookie');

  });
});