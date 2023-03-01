import { useState } from "react"
import dataJSON from '../data.json'
import ProductTable from "./ProductTable"
import SearchBar from "./SearchBar"

function ProductsPage() {
    const [products, setProducts] = useState(dataJSON)

    const [copyProducts, setCopyProducts] = useState(dataJSON)

    const productFilter = (text) => {
        if (!text) { setProducts(copyProducts) }
        else setProducts(products.filter(product => product.name.toLowerCase().includes(text.toLowerCase())))
    }



    return (
        <div>
            <h1>IronStore</h1>
            <div className="flex">
                <SearchBar productFilter={productFilter} />
                <ProductTable products={products} />
            </div>
        </div>
    )
}

export default ProductsPage