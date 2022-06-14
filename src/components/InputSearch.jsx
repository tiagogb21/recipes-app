import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import MyContext from '../context/MyContext';

function InputSearch() {
  const [option, setOption] = useState('');
  const [inputSearch, setInputSearch] = useState('');

  const { getMeals, getDrinks, setData } = useContext(MyContext);

  const { pathname } = useLocation();

  const getApiData = async () => {
    if (pathname === '/foods') {
      const getData = await getMeals(option, inputSearch);
      setData(getData);
    } else {
      const getData = await getDrinks(option, inputSearch);
      setData(getData);
    }
  };

  return (
    <>
      <label htmlFor="search-input">
        <input
          type="text"
          data-testid="search-input"
          onChange={ ({ target }) => setInputSearch(target.value) }
        />
      </label>
      <section>
        <label htmlFor="ingredient-search-radio">
          Ingredient
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            name="search"
            onClick={ () => setOption('ingredient') }
          />
        </label>
        <label htmlFor="name-search-radio">
          Name
          <input
            type="radio"
            data-testid="name-search-radio"
            name="search"
            onClick={ () => setOption('name') }
          />
        </label>
        <label htmlFor="first-letter-search-radio">
          First letter
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            name="search"
            onClick={ () => setOption('first letter') }
          />
        </label>
      </section>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => {
          if (option === 'first letter' && inputSearch.length > 1) {
            global.alert('Your search must have only 1 (one) character');
          }
          getApiData();
        } }
      >
        Search
      </button>
    </>
  );
}

export default InputSearch;
