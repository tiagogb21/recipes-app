import React from 'react';

import PropTypes from 'prop-types';

function ButtonRecipes({
  onClick,
  buttonId,
  textButton,
  verify,
  imageButton,
}) {
  return (
    <button
      type="button"
      data-testid={ buttonId }
      onClick={ onClick }
      src={ imageButton }
      style={ verify ? {} : { position: 'fixed', bottom: '0px' } }
    >
      {
        verify
          ? (
            <img src={ imageButton } alt="share icon" />
          ) : (
            textButton
          )
      }
    </button>
  );
}

ButtonRecipes.propTypes = {
  buttonId: PropTypes.string,
  textButton: PropTypes.string,
}.isRequired;

export default ButtonRecipes;
