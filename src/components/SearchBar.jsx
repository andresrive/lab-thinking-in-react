import { useState } from "react";

function SearchBar({ productFilter }) {

    const [filtro, setFiltro] = useState('')

    const filtroHandler = (e) => {
        setFiltro(e.target.value)
        productFilter(e.target.value)

    }

    return (

        <form role="search">
            <label htmlFor="search">Search</label>
            <input type="text" id="search" placeholder="Search" value={filtro} onChange={filtroHandler} />
        </form>

    )
}

export default SearchBar