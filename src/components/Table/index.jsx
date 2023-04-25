
      function ProductCategory({category}){
        return (
            <>
            <tr>
                <th colSpan='2'>{category}</th>
            </tr>
            </>
        )
      }

      function ProductRow({product}){
return( <> <tr> <td>{product.name}</td> <td>{product.price}</td></tr></>)
      }

     export default function ProductTable({products, filterText, inStockOnly}){
        const rows = [];
        let lastCategory = null
        products.forEach(product => {
            if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
              }
            if(product.category !== lastCategory){
                rows.push(<ProductCategory category = {product.category} key= {product.category} />)
            }
            rows.push(<ProductRow product= {product}
                key = {product.name} />)
                lastCategory = product.category;
            
        });
        return(
            <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
            </>
        )

      }