
function SearchBar( {filerText, inStockOnly,onFilterTextChange,onInStockOnlyChange}){
    return (
        <>
        <form>
            <input type='search' value={filerText} placeholder="Search here..."  onChange = {(e)=>onFilterTextChange(e.target.value)}/>
            
           
            <label>
            <input value={inStockOnly} type='checkbox'  onChange={(e) => onInStockOnlyChange(e.target.checked)} />
            {' '}
            Only show products in stock</label>
        </form>
        </>
    )

}

export default SearchBar;