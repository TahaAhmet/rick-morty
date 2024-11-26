const SearchBar = ({ onSearch }) => {
    const handleSearch = (e) => {
      e.preventDefault();
      const query = e.target.elements.query.value;
      onSearch(query);
    };
  
    return (
      <form onSubmit={handleSearch}>
        <input name="query" type="text" placeholder="Search characters..." />
        <button type="submit">Search</button>
      </form>
    );
  };
  
  export default SearchBar;
  