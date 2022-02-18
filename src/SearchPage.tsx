import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Sort from './components/sort/Sort';
import Categories from './components/categories/Categories';
import ProductList from './components/productList/ProductList';
import SearchBar from './components/searchBar/SearchBar';
import { getNutrientsList, NutrientsListType } from './api/getNutrientsList';

const SearchPage: React.FC = () => {
  const [defaultNutrientsList, setDefaultNutrientsList] = useState<NutrientsListType[] | null>(null); // 고정된 nuetrientsList mount이외에 setNutrientsList
  const [nutrientsList, setNutrientsList] = useState<NutrientsListType[] | null>(null); // 용우님이 실제 mapping하실 때 사용할 useState
  const [currentKeyword, setCurrentKeyword] = useState<string>('');

  const changeNutrientsList = (targetNutrientsList: NutrientsListType[]): void => {
    setNutrientsList(targetNutrientsList);
  };

  const changeCurrentKyeword = (value: string) => {
    setCurrentKeyword(value);
  };

  useEffect(() => {
    const getAsyncNutrientsList = async () => {
      const nutrientsList = await getNutrientsList();
      setNutrientsList(nutrientsList);
      setDefaultNutrientsList(nutrientsList);
    };
    getAsyncNutrientsList();
  }, []);
  useEffect(() => {
    console.log(nutrientsList);
  }, [nutrientsList]);
  return (
    <div className="App">
      <SearchBar
        defaultNutrientsList={defaultNutrientsList}
        changeNutrientsList={changeNutrientsList}
        changeCurrentKyeword={changeCurrentKyeword}
      />
      <Sort nutrientsList={nutrientsList} changeNutrientsList={changeNutrientsList} />
      <Layout>
        <Categories
          nutrientsList={nutrientsList}
          changeNutrientsList={changeNutrientsList}
          currentKeyword={currentKeyword}
        />
        <ProductList nutrientsList={nutrientsList} />
      </Layout>
    </div>
  );
};

const Layout = styled.div`
  display: flex;
  z-index: 5;
  background-color: ;
`;
// const Test = styled.video`
//   // position: absolute;
//   // top: 0;
//   // left: 0;
//   // width: 100%;
//   // height: 100%;
//   // background: url(https://source.unsplash.com/random/1920x1080);
//   // background-size: cover;
// `;
export default SearchPage;
