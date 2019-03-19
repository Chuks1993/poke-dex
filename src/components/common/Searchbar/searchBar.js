import React from 'react';

import './searchbar.scss';

const SearchBar = ({handleSubmit, handleChange, handleSearchClick, pokeSearch }) => (
    <div className="searchCntr">
        <form action="#" onSubmit={handleSubmit} className="searchBar">
            <input value={pokeSearch} onChange={handleChange} type="text" className="searchBar__input" placeholder="Try pikachu" />
            <button className="search__button" type="submit" onClick={handleSearchClick}>
                <svg className="searchBar__icon">
                    <use xlinkHref='../src/style/sprite.svg#icon-search' />
                </svg>
            </button>
        </form>
    </div>
);

export default  SearchBar;