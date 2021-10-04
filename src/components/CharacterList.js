import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const list = props.data.map((characterData) => {
    return (
      <li className='characterLi' key={characterData.id}>
        <CharacterCard characterData={characterData} />
      </li>
    );
  });
  return (
    <>
      {props.data.length !== 0 ? (
        <ul className='list'>{list}</ul>
      ) : (
        <p className='error'>{`El personaje ${props.searchName} no existe en esta dimensión.`}</p>
      )}
    </>
  );
};
export default CharacterList;
