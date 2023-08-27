import React from 'react';

const Search = props => {
    const { placeholder } = props;

    return (
        <div className="search">
            <input className="search-input" placeholder={placeholder} />

            <img className="search-img" src="/assets/images/smallMagnifyingGlass.svg" alt="" />
        </div>
    );
};

export default Search;
