import React from 'react';

const SearchPanel = () => {
    const searchText = 'Looking for something?';
    const searchStyle = {
        fontSize: 20,
    };
    return (
        <input 
            placeholder={searchText}
            style={searchStyle} />
    );
}

export default SearchPanel;