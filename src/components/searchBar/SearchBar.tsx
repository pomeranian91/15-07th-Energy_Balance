import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { NutrientsListType } from '../../api/getNutrientsList';

interface Props {
  defaultNutrientsList: NutrientsListType[] | null;
  changeNutrientsList(targetNutrientsList: NutrientsListType[]): void;
  changeCurrentKyeword(value: string): void;
}

const SearchBar = ({ defaultNutrientsList, changeNutrientsList, changeCurrentKyeword }: Props) => {
  const [nutrientsList, setNutrientsList] = useState(defaultNutrientsList);
  const [isClientSearching, setIsClientSearching] = useState(false);

  const handleSubmitSearchValue = (e: any): void => {
    //any 타입 임시
    // => React.FormEvent<HTMLFormElement>
    e.preventDefault();
    const { value } = e.target[0];
    setIsClientSearching(false);
    changeCurrentKyeword(value); // PR 충돌
    if (!value || value === ' ') return;
    const filteredNutrients = defaultNutrientsList?.filter((nutrients) => nutrients.name.includes(value));
    if (filteredNutrients?.length) {
      changeNutrientsList(filteredNutrients); //이 함수 안에 setState값이 들어있어서 일단 밖으로
    } else {
      console.log(`"${value}"에 해당하는 제품을 찾을 수 없습니다.`);
    }
  };

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

  const liClickChangeList = (e: any) => {
    console.dir(e.target.innerText); // string
    const filteredNutrients = defaultNutrientsList?.filter((nutrients) => nutrients.name.includes(e.target.innerText));
    if (filteredNutrients) {
      changeNutrientsList(filteredNutrients);
      setIsClientSearching(false);
    }
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
  position: absolute;
  min-height: 200px;
  z-index: 99;
  top: 84px;
  width: 561px;
  margin: 0;
  margin-top: 3px;
  padding: 20px;
  background-color: whitesmoke; //#ffffff;
  list-style: none;
`;

const SearchResultLi = styled.li`
  margin: 5px 0;
  &:hover {
    background-color: greenyellow;
  }
`;

export default SearchBar;
