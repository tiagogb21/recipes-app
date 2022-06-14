import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

import MyContext from "../../context/MyContext";

import {
  fetchMealCategories,
  fetchMealCategoriesFilter,
} from "../../services/fetchApi";
import { MAX_CATEGORIES, MAX, GLOBAL_MESSAGE } from "../../services/variables";

function Food() {
  const [categories, setCategories] = useState([]);
  const [verify, setVerify] = useState(true);
  const [verifyButton, setVerifyButton] = useState(true);

  const { data, setData, getMeals } = useContext(MyContext);

  const navigate = useNavigate();

  const getDataInfo = async () => {
    const getData = await getMeals("name", "");
    setData(getData);
  };

  const getCategories = async () => {
    const getData = await fetchMealCategories();
    setVerify(true);
    return setCategories(getData);
  };

  const getCategoriesList = async (list) => {
    const getData = await fetchMealCategoriesFilter(list);
    if (getData.length === 1) {
      setVerify(false);
      return setData(getData);
    }
    setVerify(true);
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

  return (
    <>
      <Header title="Foods" />
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
        verify &&
        navigate(`/foods/${data[0].idMeal}`)}
      {data !== undefined &&
        data !== null &&
        data.length >= 1 &&
        data
          .slice(0, MAX)
          .map((item, index) => <Card item={item} index={index} key={index} />)}
      <Footer />
    </>
  );
}

export default Food;
