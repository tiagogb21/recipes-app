import React, { useState } from 'react';

import PropTypes from 'prop-types';

import MyContext from './MyContext';

import {
  fetchMealsByIngredient,
  fetchMealsByName,
  fetchMealsByFistLetter,
  fetchDrinksByIngredient,
  fetchDrinksByName,
  fetchDrinksByFistLetter,
} from '../services/fetchApi';

function Provider({ children }) {
  const [data, setData] = useState([]);

  const getMeals = async (option, search) => {
    switch (option) {
    case 'ingredient':
      return fetchMealsByIngredient(search);
    case 'name':
      return fetchMealsByName(search);
    case 'first letter':
      return fetchMealsByFistLetter(search);
    default:
    }
  };

  const getDrinks = async (option, search) => {
    switch (option) {
    case 'ingredient':
      return fetchDrinksByIngredient(search);
    case 'name':
      return fetchDrinksByName(search);
    case 'first letter':
      return fetchDrinksByFistLetter(search);
    default:
    }
  };

  const stateHook = {
    getMeals,
    getDrinks,
    data,
    setData,
  };

  return (
    <MyContext.Provider value={ stateHook }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
