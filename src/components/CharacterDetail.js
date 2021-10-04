import { Link } from 'react-router-dom';

import PageNotFound from './PageNotFound';

const CharacterDetail = (props) => {
  console.log(props);
  if (props.character !== undefined) {
    return (
      <div>
        <Link to='/' className='characterDetail__link'>
          <p>Volver atrás</p>
        </Link>
        <section>
          <img
            className='imgApi'
            src={props.character.img}
            alt={`Foto de: ${props.character.name}`}
            title={`Foto de: ${props.character.name}`}
          />
          <div>
            <h2 className='h2'>{props.character.name}</h2>
            <ul>
              <li>{props.character.species}</li>
              <li>¿Vivo o muerto?: {props.character.status}</li>
              <li>Planeta: {props.character.planet}</li>
              <li>Episodios: {props.character.episode}</li>
            </ul>
          </div>
        </section>
      </div>
    );
  } else {
    return <PageNotFound />;
  }
};
export default CharacterDetail;
