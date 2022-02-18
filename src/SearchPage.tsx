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

  return (
    <Container>
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
        <ProductLayout>
          <ProductList nutrientsList={nutrientsList} />
        </ProductLayout>
      </Layout>
    </Container>
  );
};
const Container = styled.div`
  min-height: 1000px;
  background: #f2e9e4;
`;
const Layout = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 20px;
  padding-left: 30px;
  margin-right: 20px;
  padding-right: 30px;
  border-radius: 10px;
  background: #d9c7c1;
  box-shadow: -2px -2px 5px rgba(245, 245, 245, 0.9), 3px 3px 5px rgba(3, 3, 3, 0.2);
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
const ProductLayout = styled.div``;
export default SearchPage;
