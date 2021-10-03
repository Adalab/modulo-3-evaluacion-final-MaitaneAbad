import '../styles/App.scss';
import { useState, useEffect } from 'react';
// import { Link, Route } from 'react-router-dom';
import callToApi from '../services/callToApi';
import Header from './Header';
import Filters from './Filters';
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
        <Filters
          searchName={searchName}
          searchSpecies={searchSpecies}
          handleForm={handleForm}
          handleSearchName={handleSearchName}
          handleSearchSpecies={handleSearchSpecies}
        />
      </main>
      <footer></footer>
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
