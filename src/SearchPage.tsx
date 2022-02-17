import React, { useCallback } from 'react';
import { useState } from 'react';
import Categories from './components/categories/Categories';
import ProductList from './components/productList/ProductList';
import SearchBar from './components/searchBar/SearchBar';
import { getNutrientsList, NutrientsListType } from './api/getNutrientsList';
import { useEffect } from 'react';

const SearchPage = () => {
  const [defaultNutrientsList, setDefaultNutrientsList] = useState<NutrientsListType[] | null>(null); // 고정된 nuetrientsList mount이외에 setNutrientsList
  const [nutrientsList, setNutrientsList] = useState<NutrientsListType[] | null>(null); // 용우님이 실제 mapping하실 때 사용할 useState

  const changeNutrientsList = (targetNutrientsList: NutrientsListType[]): void => {
    console.log('용우님이 쓰실 필터된 객체배열입니다.', targetNutrientsList);
    setNutrientsList(targetNutrientsList);
  };

  const handleSubmitSearchValue = useCallback(
    (e: any): void => {
      //any 타입 임시
      // => React.FormEvent<HTMLFormElement>
      e.preventDefault();
      console.dir(e.target);
      const { value } = e.target[0];
      if (!value || value === ' ') return;
      const filteredNutrients = defaultNutrientsList?.filter((nutrients) => nutrients.name.includes(value));
      if (filteredNutrients?.length) {
        changeNutrientsList(filteredNutrients); //이 함수 안에 setState값이 들어있어서 일단 밖으로
      } else {
        console.log(`"${value}"에 해당하는 제품을 찾을 수 없습니다.`);
      }
    },
    [changeNutrientsList],
  );

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
      <SearchBar defaultNutrientsList={defaultNutrientsList} handleSubmitSearchValue={handleSubmitSearchValue} />
      <Categories />
      <ProductList />
    </div>
  );
};

export default SearchPage;
