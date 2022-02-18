import React, { useEffect } from 'react';
import { useState } from 'react';
import Sort from './components/sort/Sort';
import Categories from './components/categories/Categories';
import ProductList from './components/productList/ProductList';
import SearchBar from './components/searchBar/SearchBar';
import { getNutrientsList, NutrientsListType } from './api/getNutrientsList';
import { DefaultDeserializer } from 'v8';

const SearchPage: React.FC = () => {
  const [defaultNutrientsList, setDefaultNutrientsList] = useState<NutrientsListType[] | null>(null); // 고정된 nuetrientsList mount이외에 setNutrientsList
  const [nutrientsList, setNutrientsList] = useState<NutrientsListType[] | null>(null); // 용우님이 실제 mapping하실 때 사용할 useState
  const [currentKeyword, setCurrentKeyword] = useState<string>('');

  const changeNutrientsList = (targetNutrientsList: NutrientsListType[]): void => {
    console.log('용우님이 쓰실 필터된 객체배열입니다.', targetNutrientsList);
    setNutrientsList(targetNutrientsList);
  };

  const handleSubmitSearchValue = (e: any): void => {
    // React.FormEvent<HTMLFormElement> //any 타입 임시
    e.preventDefault();
    const { value } = e.target[0];

    setCurrentKeyword(value);

    const filteredNutrients = defaultNutrientsList?.filter((nutrients) => nutrients.name.includes(value));
    if (filteredNutrients) {
      changeNutrientsList(filteredNutrients);
    }
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
    <div className="App">
      <SearchBar
        nutrientsList={nutrientsList}
        changeNutrientsList={changeNutrientsList}
        handleSubmitSearchValue={handleSubmitSearchValue}
      />
      <Sort changeNutrientsList={changeNutrientsList} />
      <Categories
        nutrientsList={nutrientsList}
        changeNutrientsList={changeNutrientsList}
        currentKeyword={currentKeyword}
      />
      <ProductList />
    </div>
  );
};

export default SearchPage;
