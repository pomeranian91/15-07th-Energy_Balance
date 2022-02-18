import React, { useState } from 'react';
import styled from 'styled-components';
import { NutrientsListType } from '../../api/getNutrientsList';

interface SearchBarProps {
  defaultNutrientsList: NutrientsListType[] | null;
  changeNutrientsList(targetNutrientsList: NutrientsListType[]): void;
  changeCurrentKyeword(value: string): void;
}

const SearchBar = ({ defaultNutrientsList, changeNutrientsList, changeCurrentKyeword }: SearchBarProps) => {
  const [nutrientsList, setNutrientsList] = useState<NutrientsListType[] | null>(defaultNutrientsList);
  const [searchName, setSearchName] = useState<string>('');
  const [isClientSearching, setIsClientSearching] = useState<boolean>(false);

  const getFilterNutrientsName = (searchValue: string): NutrientsListType[] | undefined => {
    const filteredNutrients = defaultNutrientsList?.filter((nutrients) => nutrients.name.includes(searchValue));
    return filteredNutrients;
  };

  const handleSubmitSearchValue = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formTarget = e.target as HTMLFormElement;
    const inputTarget = formTarget[0] as HTMLInputElement;
    const { value } = inputTarget;
    setIsClientSearching(false);
    changeCurrentKyeword(value); // PR 충돌
    if (!value || value === ' ') return;
    const filteredNutrients = getFilterNutrientsName(value);
    if (filteredNutrients?.length) {
      changeNutrientsList(filteredNutrients);
    } else {
      console.log(`"${value}"에 해당하는 제품을 찾을 수 없습니다.`);
    }
    setSearchName('');
  };

  const handleChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setSearchName(value);
    if (value === '') {
      setIsClientSearching(false);
    } else {
      setIsClientSearching(true);
    }
    const filteredNutrients = getFilterNutrientsName(value);
    if (filteredNutrients) {
      if (filteredNutrients.length > 10) {
        setNutrientsList(filteredNutrients.slice(0, 10));
      } else {
        setNutrientsList(filteredNutrients);
      }
    } else return;
  };

  const liClickChangeList = (e: React.MouseEvent<HTMLLIElement>) => {
    const listElement = e.target as HTMLLIElement;
    const filteredNutrients = getFilterNutrientsName(listElement.innerText);
    if (filteredNutrients) {
      changeNutrientsList(filteredNutrients);
      setIsClientSearching(false);
      setSearchName('');
    }
  };

  return (
    <SearchBarWrapper>
      <SearchBarForm onSubmit={(e) => handleSubmitSearchValue(e)}>
        <SearchInput
          onChange={handleChangeSearchValue}
          value={searchName}
          placeholder="Energy Balnace 제품명 검색하기"
        ></SearchInput>
        <SearchBtn type="submit">
          <SearchIcon alt="search-icon" src="/images/icon-search.jpg" />
        </SearchBtn>
      </SearchBarForm>
      {isClientSearching && (
        <SerachResultUl>
          {nutrientsList?.map((nutrients) => (
            <SearchResultLi onClick={liClickChangeList} key={nutrients.id}>
              {nutrients.name}
            </SearchResultLi>
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
  display: flex;
  width: 561px;
  padding-top: 40px;
  @media screen and (max-width: 768px) {
    width: 350px;
  }
`;

const SearchInput = styled.input`
  width: 561px;
  height: 44px;
  padding: 0 40px;
  border: none;
  border-radius: 22px;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(0, 0, 0, 0.1);
  background-color: #f2e9e4;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const SearchBtn = styled.button`
  position: relative;
  right: 50px;
  padding: 0;
  background-color: transparent;
  border-style: none;
  cursor: pointer;
`;

const SearchIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: none;
`;

const SerachResultUl = styled.ul`
  position: absolute;
  top: 85px;
  width: 480px;
  min-height: 200px;
  margin: 0;
  margin-right: 40px;
  padding: 10px 0;
  color: #f2e9e4;
  background-color: #3c3b40;
  border-radius: 10px;
  list-style: none;
  z-index: 99;
  @media screen and (max-width: 768px) {
    width: 280px;
  }
`;

const SearchResultLi = styled.li`
  padding: 6px 20px;
  cursor: pointer;
  &:hover {
    background: #242326;
  }
`;

export default SearchBar;
