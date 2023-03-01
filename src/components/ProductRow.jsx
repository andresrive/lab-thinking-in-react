
function ProductRow({ product }) {



    return (
        <tr className="flexSpace">
            {product.inStock ? <td>{product.name}</td> : <td style={{ color: 'red' }}>{product.name}</td>}
            <td>{product.price}</td>
        </tr>
    )
}

export default ProductRow