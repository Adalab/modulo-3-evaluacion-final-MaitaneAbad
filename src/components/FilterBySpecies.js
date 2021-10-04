const FilterBySpecies = (props) => {
  return (
    <>
      <label htmlFor='species' className='labelName'>
        Especie
      </label>
      <select
        className='selectSpecies'
        name='species'
        id='species'
        value={props.searchSpecies}
        onChange={props.handleSearchSpecies}
      >
        <option value='all'>Todos</option>
        <option value='Human'>Human</option>
        <option value='Alien'>Alien</option>
      </select>
    </>
  );
};
export default FilterBySpecies;
