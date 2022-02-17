import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { NutrientsListType } from '../../api/getNutrientsList';

interface Props {
  defaultNutrientsList: NutrientsListType[] | null;
  handleSubmitSearchValue(e: any): void;
}

const SearchBar = ({ defaultNutrientsList, handleSubmitSearchValue }: Props) => {
  /* const handleSubmitSearchValue = (e: any): void => {
    // React.FormEvent<HTMLFormElement> //any 타입 임시
    e.preventDefault();
    const { value } = e.target[0];
    const filteredNutrients = defaultNutrientsList?.filter((nutrients) => nutrients.name.includes(value));
    if (filteredNutrients) {
      changeNutrientsList(filteredNutrients);
    }
  }; */

  return (
    <>
      <SearchBarForm onSubmit={(e) => handleSubmitSearchValue(e)}>
        <SearchInput placeholder="Energy Balnace 제품 검색하기"></SearchInput>
        {/* <button type="submit">
          <SearchIcon alt="search-icon" src="/images/icon-search.jpg" />
        </button> */}
      </SearchBarForm>
    </>
  );
};

const SearchBarForm = styled.form`
  width: 561px;
  margin: 0 auto;
  padding: 20px 0;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 40px;
  border-radius: 22px;
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export default SearchBar;
