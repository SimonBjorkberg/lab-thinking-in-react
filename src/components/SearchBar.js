const SearchBar = (props) => {
  const { search, inStock } = props;

  return (
    <div class="search-bar">
      <h1 class="text-2xl font-bold mb-4">Search</h1>
      <input
        type="text"
        class="border rounded px-4 py-2 w-1/2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => search(e, false)}
        placeholder="Enter product name..."
      />
      <div class="flex items-center w-1/2 mx-auto">
        <input
          type="checkbox"
          id="checkbox"
          class="mr-2 h-4 w-4 text-blue-500 focus:ring-2 focus:ring-blue-500 cursor-pointer"
          onChange={(e) => inStock(e)}
        />
        <label for="checkbox" class="text-sm text-gray-700">
          Only show products in stock
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
