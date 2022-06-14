import React from 'react';

import { useHistory } from 'react-router-dom';

import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  const history = useHistory();

  const handleRedirect = (path) => {
    history.push(path);
  };

  return (
    <footer data-testid="footer" style={ { position: 'fixed', bottom: '0px' } }>
      <button
        type="button"
        data-testid="drinks-bottom-btn"
        onClick={ () => handleRedirect('/drinks') }
        src={ drinkIcon }
      >
        <img src={ drinkIcon } alt="drink icon" />
      </button>
      <button
        type="button"
        data-testid="food-bottom-btn"
        onClick={ () => handleRedirect('/foods') }
        src={ mealIcon }
      >
        <img src={ mealIcon } alt="meal icon" />
      </button>
    </footer>
  );
}

export default Footer;
