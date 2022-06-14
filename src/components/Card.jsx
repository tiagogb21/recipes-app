import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

function Card({ item, index }) {
  const history = useHistory();

  const { pathname } = useLocation();

  const handleRedirect = (id) => {
    history.push(`${pathname}/${id}`);
  };

  return (
    <button
      key={ item.idMeal || item.idDrink }
      type="button"
      data-testid={ `${index}-recipe-card` }
      onClick={ () => handleRedirect(item.idMeal || item.idDrink) }
      style={ { width: '100%' } }
    >
      <h3
        data-testid={ `${index}-card-name` }
      >
        {item.strMeal || item.strDrink}
      </h3>
      <img
        src={ item.strMealThumb || item.strDrinkThumb }
        alt={ item.strMeal || item.strDrink }
        data-testid={ `${index}-card-img` }
        style={ { width: '100%' } }
      />
    </button>
  );
}

Card.propTypes = {
  item: PropTypes.string,
  index: PropTypes.string,
}.isRequired;

export default Card;
