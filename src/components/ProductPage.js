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
      const nameMatches = product.name.toLowerCase().includes(searchValue.toLowerCase());
      const inStock = isChecked ? product.inStock : true;

      console.log(inStock)

      return nameMatches && inStock;
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
      <h1 className="text-3xl font-bold">IronStore</h1>
      <SearchBar search={search} inStock={inStock} />
      <ProductTable data={data} setData={setData} productData={productData} />
    </div>
  );
};

export default ProductPage;
