import { useEffect, useState } from 'react';
import '../styles/App.scss';
import localApi from '../api/localApi';
import ls from '../services/local-storage';

function App() {
  //States
  const [searchByName, setSearchByName] = useState('');
  const [contacts, setContacts] = useState(localApi);
  const [newContact, setNewContact] = useState(
    ls.get('newContact', {
      name: '',
      lastname: '',
      phone: '',
      email: '',
    })
  );

  //Effects
  useEffect(() => {
    ls.set('newContact', newContact);
  }, [newContact]);

  //Handlers
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleFilter = (ev) => {
    setSearchByName(ev.target.value);
    if (ev.target.value !== '') {
      const contactsByName = contacts.filter((eachContact) =>
        eachContact.name.toLowerCase().includes(ev.target.value.toLowerCase())
      );
      setContacts(contactsByName);
    } else {
      setContacts(localApi);
    }
  };

  const handleInput = (ev) => {
    const inputName = ev.target.name;
    const inputValue = ev.target.value;
    setNewContact({ ...newContact, [inputName]: inputValue });
  };

  const handleAdd = () => {
    setContacts([...contacts, newContact]);
  };

  //Render Helpers
  const renderContacts = () => {
    return contacts.map((eachContact, i) => {
      return (
        <li key={i} className='contact__item'>
          <p className='contact__name'>
            <label className='contact__label'>Nombre:</label>
            {eachContact.name}
            {eachContact.lastname}
          </p>
          <p className='contact__phone'>
            <label className='contact__label'>Teléfono:</label>
            <a href='tel:603256289' title='Pulsa aquí para llamar a Lola'>
              {eachContact.phone}
            </a>
          </p>
          <p className='contact__mail'>
            <label className='contact__label'>Email:</label>
            <a
              href='mailto:lmartinez@adalab.es'
              title='Pulsa aquí para escribir a Lola'
            >
              {eachContact.email}
            </a>
          </p>
        </li>
      );
    });
  };

  //Return
  return (
    <div className='page'>
      {/* header */}
      <header className='header'>
        <h1 className='header__title'>Mi agenda de contactos</h1>
        <form onSubmit={handleSubmit}>
          <input
            className='header__search'
            autoComplete='off'
            type='search'
            name='search'
            placeholder='Filtrar contactos por nombre'
            value={searchByName}
            onChange={handleFilter}
          />
        </form>
      </header>

      <main>
        {/* contact list */}
        <ul className='contact__list'>{renderContacts()}</ul>

        {/* new contact */}
        <form className='new-contact__form' onSubmit={handleSubmit}>
          <h2 className='new-contact__title'>Añade un nuevo contacto</h2>
          <input
            className='new-contact__input'
            type='text'
            name='name'
            id='name'
            placeholder='Nombre'
            value={newContact.name}
            onChange={handleInput}
          />
          <input
            className='new-contact__input'
            type='text'
            name='lastname'
            id='lastname'
            placeholder='Apellidos'
            value={newContact.lastname}
            onChange={handleInput}
          />
          <input
            className='new-contact__input'
            type='phone'
            name='phone'
            id='phone'
            placeholder='Teléfono'
            value={newContact.phone}
            onChange={handleInput}
          />
          <input
            className='new-contact__input'
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            value={newContact.email}
            onChange={handleInput}
          />
          <input
            className='new-contact__btn'
            type='submit'
            value='Añadir'
            onClick={handleAdd}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
