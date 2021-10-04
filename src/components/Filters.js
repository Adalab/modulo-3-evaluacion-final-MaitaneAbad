import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import '../styles/layout/form.scss';

const Filters = (props) => {
  return (
    <form className='form' onSubmit={props.handleForm}>
      <FilterByName
        searchName={props.searchName}
        handleSearchName={props.handleSearchName}
      />
      <FilterBySpecies
        searchSpecies={props.FilterBySpecies}
        handleSearchSpecies={props.handleSearchSpecies}
      />
    </form>
  );
};
export default Filters;
