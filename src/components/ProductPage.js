import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import { useState } from 'react';
import productData from '../data.json';

const ProductPage = () => {
  const [data, setData] = useState(productData);

  function search(e) {
    const searchValue = e.target.value.toLowerCase();
    const isChecked = document.getElementById('checkbox').checked;

    const newArray = productData.filter((item) => {
      const nameMatches = item.name
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const inStock = isChecked ? item.inStock : true;

      return nameMatches && inStock;
    });

    console.log(newArray);

    setData(newArray);
  }

  function inStock(e) {
    const newArray = productData.filter((item) => {
      return item.inStock;
    });
    e.target.checked ? setData(newArray) : setData(productData);
  }

  return (
    <div className="product-page">
      <h1 className="text-3xl font-bold">IronStore</h1>
      <SearchBar search={search} inStock={inStock} />
      <ProductTable data={data} setData={setData} productData={productData} />
    </div>
  );
};

export default ProductPage;
