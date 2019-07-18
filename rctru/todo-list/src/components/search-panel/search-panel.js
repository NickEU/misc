import React from 'react';

const SearchPanel = () => {
    const searchText = 'Looking for something?';
    return (
        <input 
            className="form-control search-input"
            placeholder={searchText}/>
    );
}

export default SearchPanel;