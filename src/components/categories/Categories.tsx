import React from 'react';
import * as S from './Categories.style';
import useCategories from '../../hooks/useCategories';
import type { CategoriesProps } from './Categories.type';

const Categories: React.FC<CategoriesProps> = ({
  nutrientsList,
  changeNutrientsList,
  currentKeyword,
}: CategoriesProps) => {
  const { checkboxInfoList, searchCheckboxInfoList, checkCurrentCategory, searchTargetBrand } = useCategories({
    nutrientsList,
    changeNutrientsList,
    currentKeyword,
  });

  const checkCurrentCheckboxSort = () => {
    if ((searchCheckboxInfoList && searchCheckboxInfoList.length === 0) || !searchCheckboxInfoList) return true;
    else return false;
  };

  return (
    <S.Container>
      <S.SearchBar placeholder="브랜드로 검색하기" onChange={searchTargetBrand} />
      <S.CategoryList>
        {checkCurrentCheckboxSort()
          ? checkboxInfoList &&
            checkboxInfoList.map(([name, val], index) => {
              return (
                <S.Category key={index}>
                  <S.CheckboxContainer className="checkboxContainer">
                    <S.HiddenCheckbox defaultChecked={val.checked} type="checkbox" className="checkbox" id={name} />
                    <S.StyledCheckbox checked={val.checked} onClick={checkCurrentCategory}>
                      <S.Icon viewBox="0 0 24 24">
                        <polyline points="19 7 10 17 5 12" />
                      </S.Icon>
                    </S.StyledCheckbox>
                  </S.CheckboxContainer>
                  <S.CheckboxName>
                    {name} <span className="productNum">({val.cnt})</span>
                  </S.CheckboxName>
                </S.Category>
              );
            })
          : searchCheckboxInfoList &&
            searchCheckboxInfoList.map(([name, val], index) => {
              return (
                <S.Category key={index}>
                  <S.CheckboxContainer className="checkboxContainer">
                    <S.HiddenCheckbox defaultChecked={val.checked} type="checkbox" className="checkbox" id={name} />
                    <S.StyledCheckbox checked={val.checked} onClick={checkCurrentCategory}>
                      <S.Icon viewBox="0 0 24 24">
                        <polyline points="19 7 10 17 5 12" />
                      </S.Icon>
                    </S.StyledCheckbox>
                  </S.CheckboxContainer>
                  <S.CheckboxName>
                    {name} <span className="productNum">({val.cnt})</span>
                  </S.CheckboxName>
                </S.Category>
              );
            })}
      </S.CategoryList>
    </S.Container>
  );
};

export default Categories;
