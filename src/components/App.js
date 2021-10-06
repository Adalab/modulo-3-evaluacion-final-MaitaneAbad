import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import callToApi from '../services/callToApi';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Footer from './Footer';
import NotFoundPage from './PageNotFound';

const App = () => {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchStatus, setSearchStatus] = useState('');
  const [searchSpecies, setSearchSpecies] = useState('all');

  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []); // cuando esté vacio llamamos solo una vez a la api

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
  const handleSearchStatus = (ev) => {
    console.log(ev.currentTarget.value);
    setSearchStatus(ev.currentTarget.value);
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
    .filter((characterStatus) => {
      if (searchStatus !== '') {
        return characterStatus.status === searchStatus;
      } else {
        return true;
      }
    })

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
              inputType='text'
              searchName={searchName}
              searchSpecies={searchSpecies}
              searchStatus={setSearchStatus}
              handleForm={handleForm}
              handleSearchName={handleSearchName}
              handleSearchSpecies={handleSearchSpecies}
              handleSearchStatus={handleSearchStatus}
            />
            <CharacterList searchName={searchName} data={filteredData} />
          </main>
        </Route>
        <Route path='/'>
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
