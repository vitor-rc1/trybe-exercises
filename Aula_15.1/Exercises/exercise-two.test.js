import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const {getByLabelText, queryByText} = render(<App />) // Caso precise de uma nova query adicione no object destructuring
    const input = getByLabelText('Tarefa:');
    const button = queryByText('Adicionar');
    fireEvent.change(input, { target: {value: listTodo[0] } } );
    fireEvent.click(button);
    fireEvent.change(input, { target: {value: listTodo[1] } } );
    fireEvent.click(button);
    fireEvent.change(input, { target: {value: listTodo[2] } } );
    fireEvent.click(button);
    expect(queryByText(listTodo[0])).toHaveTextContent('Realizar CR')
    expect(queryByText(listTodo[1])).toHaveTextContent('Ler Post no Medium')
    expect(queryByText(listTodo[2])).toHaveTextContent('Beber água')
  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const {queryByText} = render(<Item content='Comprar algo'/>);
    expect(queryByText('Comprar algo')).toHaveTextContent('Comprar algo')
  })
})
