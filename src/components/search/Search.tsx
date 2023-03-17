import React from 'react'
import { useState } from 'react'
import "./Search.scss"
export const Search = () => {
    const [query, setQuery] = useState<string>(" ");
    return (
        <div className='placeSearchWrapper'>
            <div className='placeSearchContainer d-flex p-2'>
                <div>
                    <i className="bi bi-truck-flatbed" style={{ color: "white" }} />
                </div>
                <div className='placeInput'>
                    <input  type={"text"} value={query} onChange={(e) => setQuery(e.target.value)}></input>
                </div>
            </div>
        </div>
    )
}

export default Search