import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Card from './Card';

import {
  fetchMealItemInfo,
  fetchMealsByName,
  fetchDrinkItemInfo,
  fetchDrinksByName,
} from '../services/fetchApi';

import { MAX_RECIPES } from '../services/variables';

import ButtonRecipes from './ButtonRecipes';

import shareIcon from '../images/searchIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';

const copy = require('clipboard-copy');

function RecipeDetails() {
  const [data, setData] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [verifyLinkCopied, setVerifyLinkCopied] = useState(false);
  const [verifyFavorite, setVerifyFavorite] = useState(true);

  const { pathname } = useLocation();

  const getItemInfo = async () => {
    const id = pathname.split('/')[2];
    if (pathname.split('/')[1] === 'foods') {
      const getData = await fetchMealItemInfo(id);
      setData(getData);
      const getRecipes = await fetchDrinksByName('');
      return setRecipes(getRecipes);
    }
    const getData = await fetchDrinkItemInfo(id);
    setData(getData);
    const getRecipes = await fetchMealsByName('');
    return setRecipes(getRecipes);
  };

  // const getInfoFromLocalStorage = () => {
  //   localStorage.getItem('');
  // };

  useEffect(() => {
    getItemInfo();
  }, []);

  return (
    <>
      <ButtonRecipes
        buttonId="share-btn"
        textButton="Share"
        verify
        imageButton={ shareIcon }
        onClick={ () => {
          setVerifyLinkCopied(!verifyLinkCopied);
          copy(`http://localhost:3000${pathname}`);
        } }
      />
      <ButtonRecipes
        buttonId="favorite-btn"
        textButton="Start Recipe"
        verify
        imageButton={ verifyFavorite ? whiteHeart : blackHeart }
        onClick={ () => setVerifyFavorite(!verifyFavorite) }
      />
      {
        verifyLinkCopied
        && <p>Link copied!</p>
      }
      {
        (data !== null && data.length > 0)
      && (
        <article>
          <h3
            data-testid="recipe-title"
          >
            { data[0].strMeal || data[0].strDrink }
          </h3>
          <p
            data-testid="recipe-category"
          >
            {data[0].strCategory}
          </p>
          <img
            src={ data[0].strMealThumb || data[0].strDrinkThumb }
            alt={ data[0].strMeal || data[0].strDrink }
            data-testid="recipe-photo"
            style={ { width: '100%' } }
          />
          <p
            data-testid="instructions"
          >
            { data[0].strInstructions }
          </p>
          <ol>
            {
              Object.entries(data[0]).reduce((acc, curr) => {
                if (
                  curr[0].includes('Ingredient')
                  && curr[1] !== null
                  && curr[1] !== ''
                ) {
                  acc.push(curr[1]);
                }
                return acc;
              }, []).map((ingredient, index) => (
                <li
                  key={ index }
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {ingredient}
                </li>
              ))
            }
          </ol>
          {
            pathname.split('/')[1] === 'foods'
            && (
              <video
                controls
                src={ data[0].strYoutube }
                data-testid="video"
              >
                <track
                  default
                  kind="captions"
                  srcLang="en"
                  src={ data[0].strYoutube }
                />
                Sorry, your browser doesn&apost support embedded videos.
              </video>)
          }
        </article>
      )
      }
      <article style={ { display: 'flex' } }>
        {
          (recipes !== undefined && recipes.length > 0)
        && recipes.slice(0, MAX_RECIPES).map((item, index) => (
          <Card
            item={ item }
            index={ index }
            key={ index }
            data-testid={ `${index}-recomendation-card` }
          />
        ))
        }
      </article>
      <ButtonRecipes
        buttonId="start-recipe-btn"
        textButton="Start Recipe"
      />
    </>
  );
}

export default RecipeDetails;
