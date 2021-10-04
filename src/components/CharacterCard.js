import { Link } from 'react-router-dom';
import '../styles/layout/characterList.scss';
const CharacterCard = (props) => {
  return (
    <Link to={`./character/${props.characterData.id}`}>
      <img
        className='imgApi'
        src={props.characterData.img}
        alt={`Foto de: ${props.characterData.name}`}
        title={`Foto de: ${props.characterData.name}`}
      />
      <h2 className='name'>{props.characterData.name}</h2>
      <p className='species'>
        {' '}
        {props.characterData.species === 'Alien' ? (
          <i class='fab fa-reddit-alien'></i>
        ) : (
          <i class='fas fa-user-alt'></i>
        )}
      </p>
    </Link>
  );
};
export default CharacterCard;
