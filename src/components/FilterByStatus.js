const FilterBystatus = (props) => {
  return (
    <>
      <label> Filtro status</label>
      <label htmlFor='Alive'>
        Vivo
        <input
          type='radio'
          id='Alive'
          name='status'
          value='Alive'
          onChange={props.handleSearchStatus}
        />
      </label>
      <label htmlFor='Dead'>
        Muerto
        <input
          type='radio'
          id='Dead'
          name='status'
          value='Dead'
          onChange={props.handleSearchStatus}
        />
      </label>
      <label htmlFor='unknown'>
        Desconocido
        <input
          type='radio'
          id='unknown'
          name='status'
          value='unknown'
          onChange={props.handleSearchStatus}
        />
      </label>
    </>
  );
};
export default FilterBystatus;
