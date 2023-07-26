import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import { useState } from 'react';
import productData from '../data.json';

const ProductPage = () => {
  const [data, setData] = useState(productData);

  function search(e) {
    const searchValue = e.target.value.toLowerCase();
    const isChecked = document.getElementById('checkbox').checked;

    const productArray = productData.filter((product) => {
      if (!isChecked) {
        return product.name.toLowerCase().includes(searchValue);
      } 
      else {
        return product.inStock && product.name.toLowerCase().includes(searchValue);
      }
    });

    setData(productArray);
  }

  function inStock(e) {
    const productArray = productData.filter((product) => {
      return product.inStock;
    });
    e.target.checked ? setData(productArray) : setData(productData);
  }

  return (
    <div className="product-page">
      <h1 className="text-3xl font-bold text-green-600">IronStore</h1>
      <SearchBar search={search} inStock={inStock} />
      <ProductTable data={data} setData={setData} productData={productData} />
    </div>
  );
};

export default ProductPage;
