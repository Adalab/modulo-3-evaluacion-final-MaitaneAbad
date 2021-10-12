import { Link } from 'react-router-dom';
import '../styles/layout/characterList.scss';
const CharacterCard = (props) => {
  function changeStatus() {
    const status = props.characterData.status;
    if (status === 'Alive') {
      return (
        <>
          <i class='fas fa-heart' title='Vivo'></i>
        </>
      );
    } else if (status === 'Dead') {
      return (
        <>
          <i class='fas fa-skull-crossbones' title='Muerto'></i>
        </>
      );
    } else {
      return (
        <>
          <i class='far fa-question-circle' title='En paradero desconocido'></i>
        </>
      );
    }
  }
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
          <i class='fab fa-reddit-alien' title='Alien'></i>
        ) : (
          <i class='fas fa-user-alt' title='Humano'></i>
        )}
        <span className='status'>{changeStatus()}</span>
      </p>
    </Link>
  );
};
export default CharacterCard;
