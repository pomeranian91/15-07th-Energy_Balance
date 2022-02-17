import React, { FC, useEffect } from 'react';
import { NutrientsListType } from '../../api/getNutrientsList';

interface Props {
  nutrientsList: NutrientsListType[] | null;
  changeNutrientsList(targetNutrientsList: NutrientsListType[] | undefined): void;
  handleSubmitSearchValue(e: any): void;
}

const SearchBar = ({ nutrientsList, changeNutrientsList, handleSubmitSearchValue }: Props) => {
  /* useEffect(() => {
    // console.log(nutrientsList);
  }, [nutrientsList]); */

  /* const handleSubmitSearchValue = (e: any): void => {
    // React.FormEvent<HTMLFormElement> //any 타입 임시
    e.preventDefault();
    const { value } = e.target[0]; //string
    console.log(value);
    const filteredNutrients = nutrientsList?.filter((nutrients) => nutrients.name.includes(value));
    console.log(filteredNutrients);
    // changeNutrientsList(filteredNutrients);
  }; */

  return (
    <div>
      <form onSubmit={(e) => handleSubmitSearchValue(e)}>
        <input placeholder="Energy Balnace 제품 검색하기"></input>
      </form>
    </div>
  );
};

export default SearchBar;
