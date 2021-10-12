const FilterBystatus = (props) => {
  return (
    <div className='divStatus'>
      <label className='labelName'> Estado: </label>
      <div className='divLabelInput'>
        <label htmlFor='Alive' className='labelStatus'>
          Vivo
          <input
            className='inputStatus'
            type='radio'
            id='Alive'
            name='status'
            value='Alive'
            onChange={props.handleSearchStatus}
          />
        </label>
        <label htmlFor='Dead' className='labelStatus'>
          Muerto
          <input
            className='inputStatus'
            type='radio'
            id='Dead'
            name='status'
            value='Dead'
            onChange={props.handleSearchStatus}
          />
        </label>
        <label htmlFor='unknown' className='labelStatus'>
          Desconocido
          <input
            className='inputStatus'
            type='radio'
            id='unknown'
            name='status'
            value='unknown'
            onChange={props.handleSearchStatus}
          />
        </label>
      </div>
    </div>
  );
};
export default FilterBystatus;
