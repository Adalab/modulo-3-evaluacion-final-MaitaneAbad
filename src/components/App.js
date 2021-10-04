import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import callToApi from '../services/callToApi';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Footer from './Footer';

const App = () => {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');

  const [searchSpecies, setSearchSpecies] = useState('all');

  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, [searchName]);

  const routeData = useRouteMatch('/character/:id');
  const characterId = routeData !== null ? routeData.params.id : '';
  const selectedCharacter = data.find(
    (character) => character.id === parseInt(characterId)
  );
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
    )
    .sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
  return (
    <div className='page'>
      <Header />
      <Switch>
        <Route path='/character/:id'>
          <CharacterDetail character={selectedCharacter} />
        </Route>
        <Route exact path='/'>
          <main>
            <Filters
              searchName={searchName}
              searchSpecies={searchSpecies}
              handleForm={handleForm}
              handleSearchName={handleSearchName}
              handleSearchSpecies={handleSearchSpecies}
            />
            <CharacterList data={filteredData} />
          </main>
        </Route>
      </Switch>
      <Footer />
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
    </div>
  );
};

export default App;
