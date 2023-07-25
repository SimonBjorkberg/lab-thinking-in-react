import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from 'react'
import data from '../data.json'

const ProductPage = () => {

    const [ newData, setNewData ] = useState(data)


    return ( <div className="product-page">
        <h1 className="text-3xl font-bold">IronStore</h1>
        <SearchBar data={data} newData={newData} setNewData={setNewData} />
        <ProductTable data={data} newData={newData} setNewData={setNewData} />
    </div> );
}
 
export default ProductPage;