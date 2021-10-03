import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const list = props.data.map((characterData) => (
    <li className='characterLi' key={characterData.id}>
      <CharacterCard characterData={characterData} />
    </li>
  ));
  return <ul className='list'>{list}</ul>;
};
export default CharacterList;
