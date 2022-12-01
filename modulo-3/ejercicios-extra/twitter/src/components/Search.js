import '../styles/components/Search.scss';

const Search = (props) => {
  const handleSearchInput = (ev) => {
    props.handleSearchInput(ev.target.value);
  };

  return (
    <form className='search'>
      <input
        className='search__input'
        type='search'
        name='search'
        id='search'
        placeholder='Buscar en Twitter'
        value={props.searchText}
        onChange={handleSearchInput}
      />
    </form>
  );
};

export default Search;
