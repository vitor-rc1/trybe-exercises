import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  )
}

const compromisos = ['Tomar água', 'Comer doce', 'Limpar o quarto'];

function App() {
  return (
    <div className="App">
      {compromisos.map((taskItem) => task(taskItem))}
    </div>
  );
}

export default App;
