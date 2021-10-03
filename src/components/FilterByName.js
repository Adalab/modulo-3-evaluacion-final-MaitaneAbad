const FilterByName = (props) => {
  return (
    <>
      <label htmlFor='name'>Buscar el personaje: </label>
      <input
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
