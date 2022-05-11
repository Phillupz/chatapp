import React from "react";

function Search({search, handleSearch}) {
    return (
        <div className="searchBar">
            <label htmlFor="search">Search Messages:</label>
            <input
                type="text"
                id="search"
                placeholder="Type to search..."
                onChange={e => handleSearch(e)}
                value={search}
            />
        </div>
    );
}

export default Search;