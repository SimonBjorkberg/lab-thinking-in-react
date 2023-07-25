const SearchBar = (props) => {
  const { data, setNewData, newData } = props;

  function filterData(e) {
    const newArray = data.filter((item) => {
      return item.inStock;
    });
    e.target.checked ? setNewData(newArray) : setNewData(data)
  }

  function search(e) {
        
  }

  return (
    <div className="search-bar">
      <h1>Search</h1>
      <input type="text" className="border" onChange={(e) => search(e)} />
      <div>
        <input type="checkbox" onChange={(e) => filterData(e)} />
        <p>Only show products in stock</p>
      </div>
    </div>
  );
};

export default SearchBar;
