import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

import InputSearch from './InputSearch';

import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title, verify }) {
  const [verifyInput, setVerifyInput] = useState(false);

  const history = useHistory();

  const handleRedirect = (path) => {
    history.push(path);
  };

  return (
    <>
      <h1 data-testid="page-title">{title}</h1>
      <button
        data-testid="profile-top-btn"
        type="button"
        src={ profileIcon }
        onClick={ () => handleRedirect('/profile') }
      >
        <img
          src={ profileIcon }
          alt="profile icon"
        />
      </button>
      {
        !verify
        && (
          <button
            data-testid="search-top-btn"
            type="button"
            src={ searchIcon }
            onClick={ () => setVerifyInput(!verifyInput) }
          >
            <img
              src={ searchIcon }
              alt="search button"
            />
          </button>
        )
      }
      {
        verifyInput
        && (
          <InputSearch />
        )
      }
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  verift: PropTypes.bool,
}.isRequired;

export default Header;
