import {
  URL_MEAL_BY_INGREDIENT,
  URL_MEAL_BY_NAME,
  URL_MEAL_BY_FL,
  URL_DRINK_BY_INGREDIENT,
  URL_DRINK_BY_NAME,
  URL_DRINK_BY_FL,
  URL_MEAL_CATEGORIES,
  URL_MEAL_CATEGORIES_FILTER,
  URL_DRINK_CATEGORIES,
  URL_DRINK_CATEGORIES_FILTER,
  URL_MEAL_ITEM_INFO,
  URL_DRINK_ITEM_INFO,
} from './variables';

// Get meals data:

export const fetchMealsByIngredient = async (ingredient) => fetch(
  `${URL_MEAL_BY_INGREDIENT}${ingredient}`,
)
  .then((response) => response.json())
  .then((data) => data.meals);

export const fetchMealsByName = async (name) => fetch(
  `${URL_MEAL_BY_NAME}${name}`,
)
  .then((response) => response.json())
  .then((data) => data.meals);

export const fetchMealsByFistLetter = async (fl) => fetch(
  `${URL_MEAL_BY_FL}${fl}`,
)
  .then((response) => response.json())
  .then((data) => data.meals);

// Get drinks data:

export const fetchDrinksByIngredient = async (ingredient) => fetch(
  `${URL_DRINK_BY_INGREDIENT}${ingredient}`,
)
  .then((response) => response.json())
  .then((data) => data.drinks);

export const fetchDrinksByName = async (name) => fetch(
  `${URL_DRINK_BY_NAME}${name}`,
)
  .then((response) => response.json())
  .then((data) => data.drinks);

export const fetchDrinksByFistLetter = async (fl) => fetch(
  `${URL_DRINK_BY_FL}${fl}`,
)
  .then((response) => response.json())
  .then((data) => data.drinks);

// Get meal categories data:

export const fetchMealCategories = async () => fetch(
  `${URL_MEAL_CATEGORIES}`,
)
  .then((response) => response.json())
  .then((data) => data.meals);

export const fetchMealCategoriesFilter = async (list) => fetch(
  `${URL_MEAL_CATEGORIES_FILTER}${list}`,
)
  .then((response) => response.json())
  .then((data) => data.meals);

// Get drink categories data:

export const fetchDrinkCategories = async () => fetch(
  `${URL_DRINK_CATEGORIES}`,
)
  .then((response) => response.json())
  .then((data) => data.drinks);

export const fetchDrinkCategoriesFilter = async (list) => fetch(
  `${URL_DRINK_CATEGORIES_FILTER}${list}`,
)
  .then((response) => response.json())
  .then((data) => data.drinks);

// item info:

export const fetchMealItemInfo = async (id) => fetch(
  `${URL_MEAL_ITEM_INFO}${id}`,
)
  .then((response) => response.json())
  .then((data) => data.meals);

export const fetchDrinkItemInfo = async (id) => fetch(
  `${URL_DRINK_ITEM_INFO}${id}`,
)
  .then((response) => response.json())
  .then((data) => data.drinks);
