import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { NutrientsListType } from '../../api/getNutrientsList';

interface Props {
  defaultNutrientsList: NutrientsListType[] | null;
  handleSubmitSearchValue(e: any): void;
}

const SearchBar = ({ defaultNutrientsList, handleSubmitSearchValue }: Props) => {
  const [nutrientsList, setNutrientsList] = useState(defaultNutrientsList);
  const [isClientSearching, setIsClientSearching] = useState(false);
  /* const handleSubmitSearchValue = (e: any): void => {
    // React.FormEvent<HTMLFormElement> //any 타입 임시
    e.preventDefault();
    const { value } = e.target[0];
    const filteredNutrients = defaultNutrientsList?.filter((nutrients) => nutrients.name.includes(value));
    if (filteredNutrients) {
      changeNutrientsList(filteredNutrients);
    }
  }; */

  const handleChangeSearchValue = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value);
    if (event.target.value === '') {
      setIsClientSearching(false);
    } else {
      setIsClientSearching(true);
    }
    const filteredNutrients = defaultNutrientsList?.filter((nutrients) => nutrients.name.includes(event.target.value));
    if (filteredNutrients) {
      if (filteredNutrients.length > 10) {
        setNutrientsList(filteredNutrients.slice(0, 10));
      } else {
        setNutrientsList(filteredNutrients);
      }
    }
    console.log(filteredNutrients);
  };

  const clientSearching = () => {
    setIsClientSearching(true);
  };

  return (
    <SearchBarWrapper>
      <SearchBarForm onSubmit={(e) => handleSubmitSearchValue(e)}>
        <SearchInput onChange={handleChangeSearchValue} placeholder="Energy Balnace 제품 검색하기"></SearchInput>
        {/* <button type="submit">
          <SearchIcon alt="search-icon" src="/images/icon-search.jpg" />
        </button> */}
      </SearchBarForm>
      {isClientSearching && (
        <SerachResultUl>
          {nutrientsList?.map((nutrients) => (
            <li key={nutrients.id}>{nutrients.name}</li>
          ))}
        </SerachResultUl>
      )}
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBarForm = styled.form`
  width: 561px;
  padding-top: 40px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 40px;
  border-radius: 22px;
  background-color: #ffffff;
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const SerachResultUl = styled.ul`
  width: 561px;
  margin: 0;
  margin-top: 3px;
  padding: 20px;
  background-color: whitesmoke; //#ffffff;
  list-style: none;
`;

export default SearchBar;
