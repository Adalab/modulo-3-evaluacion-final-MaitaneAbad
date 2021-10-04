import PropTypes from 'prop-types';
import '../styles/layout/form.scss';
const FilterByName = (props) => {
  return (
    <>
      <label className='labelName' htmlFor='name'>
        Buscar el personaje:
      </label>
      <input
        className='inputName'
        type={props.inputType}
        name='name'
        id='name'
        value={props.searchName}
        onChange={props.handleSearchName}
        placeholder='Ej: Morty'
      />
    </>
  );
};
FilterByName.defaultProps = {
  inputType: 'text',
};
FilterByName.propTypes = {
  inputValue: PropTypes.string,
  handleSearchName: PropTypes.func.isRequired,
};
export default FilterByName;
