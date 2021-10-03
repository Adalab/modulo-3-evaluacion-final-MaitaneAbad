const FilterByName = (props) => {
  return (
    <>
      <label className='labelName' htmlFor='name'>
        Buscar el personaje:
      </label>
      <input
        className='inputName'
        type='text'
        name='name'
        id='name'
        value={props.searchName}
        onChange={props.handleSearchName}
        placeholder='Ej: Morty'
      />
    </>
  );
};
export default FilterByName;
