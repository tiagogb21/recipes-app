import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import MyContext from "../../context/MyContext";

import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

import {
  fetchDrinkCategories,
  fetchDrinkCategoriesFilter,
} from "../../services/fetchApi";
import { MAX_CATEGORIES, MAX, GLOBAL_MESSAGE } from "../../services/variables";

function Drinks() {
  const [categories, setCategories] = useState([]);
  const [verifyButton, setVerifyButton] = useState(true);

  const { data, setData, getDrinks } = useContext(MyContext);

  const getDataInfo = async () => {
    const getData = await getDrinks("name", "");
    setData(getData);
  };

  const getCategories = async () => {
    const getData = await fetchDrinkCategories();
    return setCategories(getData);
  };

  const getCategoriesList = async (list) => {
    const getData = await fetchDrinkCategoriesFilter(list);
    return setData(getData);
  };

  const handleToogleClick = (option) => {
    if (verifyButton) {
      setVerifyButton(!verifyButton);
      return getCategoriesList(option);
    }
    setVerifyButton(!verifyButton);
    return getDataInfo();
  };

  useEffect(() => {
    getDataInfo();
    getCategories();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Header title="Drinks" />
      <article>
        {categories !== undefined &&
          categories.slice(0, MAX_CATEGORIES).map((cat) => (
            <button
              key={cat.strCategory}
              type="button"
              data-testid={`${cat.strCategory}-category-filter`}
              onClick={() => handleToogleClick(cat.strCategory)}
            >
              {cat.strCategory}
            </button>
          ))}
        <button
          data-testid="All-category-filter"
          type="button"
          onClick={() => getDataInfo()}
        >
          All
        </button>
      </article>
      {data === null && global.alert(GLOBAL_MESSAGE)}
      {data !== undefined &&
        data !== null &&
        data.length === 1 &&
        navigate(`/drinks/${data[0].idDrink}`)}
      {data !== undefined &&
        data !== null &&
        data.length > 1 &&
        data
          .slice(0, MAX)
          .map((item, index) => <Card item={item} index={index} key={index} />)}
      <Footer />
    </>
  );
}

export default Drinks;
