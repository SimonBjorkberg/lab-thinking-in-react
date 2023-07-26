const SearchBar = (props) => {
  const { search, inStock } = props;

  return (
    <div className="search-bar">
      <h1>Search</h1>
      <input type="text" className="border" onChange={(e) => search(e, false)} />
      <div>
      <label htmlFor="inStockCheckbox">
        <input type="checkbox" id="inStockCheckbox" onChange={(e) => inStock(e)}/>
        Only show products in stock
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
