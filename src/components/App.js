import '../styles/App.scss';
import { useState, useEffect } from 'react';
// import { Link, Route } from 'react-router-dom';
import callToApi from '../services/callToApi';
import CharacterList from './CharacterList';

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, [search]);
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  const handleSearchInput = (ev) => {
    setSearch(ev.target.value);
  };
  return (
    <div>
      <h1>Personajes</h1>
      <form onSubmit={handleForm}>
        <label htmlFor='name'>Buscar el personaje: </label>
        <input type='text' name='name' onChange={handleSearchInput} />
      </form>
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
      <CharacterList data={data} />
    </div>
  );
};

export default App;
