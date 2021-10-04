import { Link } from 'react-router-dom';
import '../styles/layout/characterDetail.scss';
import PageNotFound from './PageNotFound';

const CharacterDetail = (props) => {
  console.log(props);
  if (props.character !== undefined) {
    return (
      <div class='detail'>
        <Link to='/' className='characterDetail'>
          <p className='paragraphDetail'>Volver atrás</p>
        </Link>
        <section className='sectionDetail'>
          <img
            className='imgApiDetail'
            src={props.character.img}
            alt={`Foto de: ${props.character.name}`}
            title={`Foto de: ${props.character.name}`}
          />
          <div>
            <h2 className='nameDetail'>{props.character.name}</h2>
            <ul className='listDetail'>
              <li className='liDetail'>{props.character.species}</li>
              <li className='liDetail'>
                ¿Vivo o muerto?: {props.character.status}
              </li>
              <li className='liDetail'>Planeta: {props.character.planet}</li>
              <li className='liDetail'>Episodios: {props.character.episode}</li>
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
