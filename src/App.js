import './App.css';
import { useState } from 'react';
import SearchBar from './components/Search'
import ProductTable from './components/Table'
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions/counter'
function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const dataJson = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]
  const [filterText, setFilterText] =useState('')
  const [inStockOnly, setInStockOnly] = useState(false)

  return (
    <>
    <button onClick={()=> dispatch(increment()) } >Add</button>
    <button onClick={()=> dispatch(decrement()) } >Minus</button>
    <h2>{counter}</h2>
      {/* <div>Table Search!!!</div>
   <SearchBar  filterText={filterText} 
    inStockOnly={inStockOnly}
    onFilterTextChange={setFilterText} 
     onInStockOnlyChange={setInStockOnly} />
     
   <ProductTable products={dataJson}  filterText={filterText} 
    inStockOnly={inStockOnly} /> */}
    </>
 
  );
  
}

export default App;
