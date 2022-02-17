import React from 'react';
import { useState } from 'react';
import Categories from './components/categories/Categories';
import ProductList from './components/productList/ProductList';
import SearchBar from './components/searchBar/SearchBar';
import { getNutrientsList, NutrientsListType } from './api/getNutrientsList';
import { useEffect } from 'react';
import console from 'console';

const SearchPage = () => {
  const [nutrientsList, setNutrientsList] = useState<NutrientsListType[] | null>(null);

  const changeNutrientsList = (targetNutrientsList: NutrientsListType[]) => {
    setNutrientsList(targetNutrientsList);
  };
  useEffect(() => {
    const getAsyncNutrientsList = async () => {
      const nutrientsList = await getNutrientsList();
      console.log(nutrientsList);
      setNutrientsList(nutrientsList);
    };
  }, []);

  return (
    <div className="App">
      <SearchBar />
      <Categories />
      <ProductList />
    </div>
  );
};

export default SearchPage;
