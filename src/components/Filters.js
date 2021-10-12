import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import FilterByStatus from './FilterByStatus';
import '../styles/layout/form.scss';

const Filters = (props) => {
  return (
    <form className='form' onSubmit={props.handleForm}>
      <FilterByName
        searchName={props.searchName}
        handleSearchName={props.handleSearchName}
        inputType={props.inputType}
      />
      <FilterBySpecies
        searchSpecies={props.FilterBySpecies}
        handleSearchSpecies={props.handleSearchSpecies}
      />
      <FilterByStatus
        searchStatus={props.FilterByStatus}
        handleSearchStatus={props.handleSearchStatus}
      />
    </form>
  );
};
export default Filters;
