import '../styles/App.scss';
import { useState, useEffect } from 'react';
// import { Link, Route } from 'react-router-dom';
import callToApi from '../services/callToApi';
import Header from './Header';
import CharacterList from './CharacterList';

const App = () => {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');

  const [searchSpecies, setSearchSpecies] = useState('all');

  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, [searchName]);

  const handleForm = (ev) => {
    ev.preventDefault();
  };

  const handleSearchName = (ev) => {
    setSearchName(ev.currentTarget.value);
  };
  const handleSearchSpecies = (ev) => {
    setSearchSpecies(ev.currentTarget.value);
  };

  const filteredData = data
    .filter((character) =>
      character.name
        .toLocaleLowerCase()
        .includes(searchName.toLocaleLowerCase())
    )
    .filter(
      (characterSpecies) =>
        searchSpecies === 'all' || characterSpecies.species === searchSpecies
    );
  return (
    <div className='page'>
      <Header />
      <main>
        <h1>Personajes</h1>
        <form onSubmit={handleForm}>
          <label htmlFor='name'>Buscar el personaje: </label>
          <input
            type='text'
            name='name'
            id='name'
            value={searchName}
            onChange={handleSearchName}
            placeholder='Ej: Morty'
          />
          <label htmlFor='species'></label>
          <select
            name='species'
            id='species'
            value={searchSpecies}
            onChange={handleSearchSpecies}
          >
            <option value='all'>Todos</option>
            <option value='Human'>Human</option>
            <option value='Alien'>Alien</option>
          </select>
        </form>
      </main>
      {/* <Route path='/contacto'></Route>

      <nav>
        <ul>
          <li>
            <Link to='/'></Link>
          </li>
          <li>
            <Link to='/contacto'></Link>
          </li>
        </ul>
      </nav> */}
      <CharacterList data={filteredData} />
    </div>
  );
};

export default App;
