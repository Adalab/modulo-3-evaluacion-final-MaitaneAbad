import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const list = props.data.map((characterData, i) => (
    <li key={characterData.id}>
      <CharacterCard characterData={characterData} />
    </li>
  ));
  return <ul>{list}</ul>;
};
export default CharacterList;
