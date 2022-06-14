import React from "react";

import { Routes, Route } from "react-router-dom";
// import { Container } from './styles';

import Login from "../../page/login/Login";

import Foods from "../../page/food/Foods";
import DetailedFood from "../../page/food/DetailedFood";
import DetailedFoodInProgress from "../../page/food/DetailedFoodInProgress";

import Drinks from "../../page/drink/Drinks";
import DetailedDrink from "../../page/drink/DetailedDrink";
import DetailedDrinkInProgress from "../../page/drink/DetailedDrinkInProgress";

import Profile from "../../page/profile/Profile";

import DoneRecipes from "../../page/recipes/DoneRecipes";
import FavoriteRecipes from "../../page/recipes/FavoriteRecipes";

function PathRoutes() {
  return (
    <Routes>
      {/* Login */}
      <Route exact path="/" element={<Login />} />
      {/* foods */}
      <Route exact path="/foods" element={<Foods />} />
      <Route exact path="/foods/:id" element={<DetailedFood />} />
      <Route
        exact
        path="/foods/:id/in-progress"
        element={<DetailedFoodInProgress />}
      />
      {/* drinks */}
      <Route exact path="/drinks" element={<Drinks />}>
        <Route exact path="/drinks/:id" element={<DetailedDrink />} />
        <Route
          exact
          path="/drinks/:id/in-progress"
          element={<DetailedDrinkInProgress />}
        />
        {/* Profile */}
        <Route exact path="/profile" element={<Profile />} />
        {/* Recipes */}
        <Route exact path="/done-recipes" element={<DoneRecipes />} />
      </Route>
      <Route exact path="/favorite-recipes" element={<FavoriteRecipes />} />
    </Routes>
  );
}

export default PathRoutes;
