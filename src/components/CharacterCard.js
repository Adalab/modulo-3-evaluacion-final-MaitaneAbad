const CharacterCard = (props) => {
  return (
    <>
      <img
        className='imgApi'
        src={props.characterData.img}
        alt={`Foto de: ${props.characterData.name}`}
        title={`Foto de: ${props.characterData.name}`}
      />
      <h2 className='h2'>{props.characterData.name}</h2>
      <p>{props.characterData.species}</p>
    </>
  );
};
export default CharacterCard;
