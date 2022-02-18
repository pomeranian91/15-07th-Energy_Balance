import React from 'react';
import useSort from '../../hooks/useSort';
import * as S from './Sort.style';
import type { SortProps } from './Sort.type';

const Sort: React.FC<SortProps> = ({ nutrientsList, changeNutrientsList }: SortProps) => {
  const { sortList, selectSort } = useSort(nutrientsList);

  return (
    <S.Container>
      <S.Info>정렬</S.Info>
      <S.SortList onClick={selectSort}>
        {sortList.map((sort, index) => {
          return (
            <S.SortName key={index} id={sort.name} selected={sort.selected}>
              {sort.name}
            </S.SortName>
          );
        })}
      </S.SortList>
    </S.Container>
  );
};

export default Sort;
