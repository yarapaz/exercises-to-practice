import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [ingredients, setIngredients] = useState({
    macarrones: true,
    patatas: false,
    nueces: false,
    huevos: false,
    cebolla: false,
    cerveza: false,
  });

  const handleChange = (ev) => {
    const checkboxName = ev.target.name;
    const checkboxValue = ev.target.checked;
    setIngredients({ ...ingredients, [checkboxName]: checkboxValue });
  };

  const renderMessage = () => {
    if (
      ingredients.patatas === true &&
      ingredients.huevos === true &&
      ingredients.cebolla === true
    ) {
      return 'Eres una persona concebollista';
    } else {
      return 'Eres un robot sin paladar';
    }
  };

  return (
    <div className='App'>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form action=''>
        <label htmlFor=''>Macarrones</label>
        <input
          type='checkbox'
          name='macarrones'
          id=''
          onChange={handleChange}
        />
        <label htmlFor=''>Patatas</label>
        <input type='checkbox' name='patatas' id='' onChange={handleChange} />
        <label htmlFor=''>Nueces</label>
        <input type='checkbox' name='nueces' id='' onChange={handleChange} />
        <label htmlFor=''>Huevos</label>
        <input type='checkbox' name='huevos' id='' onChange={handleChange} />
        <label htmlFor=''>Cebolla</label>
        <input type='checkbox' name='cebolla' id='' onChange={handleChange} />
        <label htmlFor=''>Cerveza</label>
        <input type='checkbox' name='cerveza' id='' onChange={handleChange} />
      </form>
      <p>{renderMessage()}</p>
    </div>
  );
}

export default App;
