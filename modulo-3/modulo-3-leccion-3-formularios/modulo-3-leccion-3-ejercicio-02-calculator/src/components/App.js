import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  let [operation, setOperation] = useState('');

  const handleNumberA = (ev) => {
    setNumberA(ev.target.value);
  };

  const handleNumberB = (ev) => {
    setNumberB(ev.target.value);
  };

  const handleSelect = (ev) => {
    operation = ev.target.value;
    setOperation(operation);
  };

  const renderTotal = () => {
    if (operation === 'Sumar') {
      return parseInt(numberA) + parseInt(numberB);
    } else if (operation === 'Restar') {
      return parseInt(numberA) - parseInt(numberB);
    } else if (operation === 'Multiplicar') {
      return parseInt(numberA) * parseInt(numberB);
    } else if (operation === 'Dividir') {
      if (numberB !== 0) {
        return parseInt(numberA) / parseInt(numberB);
      }
    }
  };

  return (
    <div>
      <h1>La calculadora:</h1>
      <select onChange={handleSelect}>
        <option>Sumar</option>
        <option>Restar</option>
        <option>Multiplicar</option>
        <option>Dividir</option>
      </select>
      <form>
        <label>
          Escribe un número:
          <input type='number' name='name' onChange={handleNumberA} />
        </label>
        <label>
          Escribe otro número:
          <input type='number' name='email' onChange={handleNumberB} />
        </label>
      </form>
      <p>
        El resultado de {operation} <strong>{numberA}</strong> y{' '}
        <strong>{numberB}</strong> es
        <strong>{renderTotal()}</strong>.
      </p>
    </div>
  );
}

export default App;
