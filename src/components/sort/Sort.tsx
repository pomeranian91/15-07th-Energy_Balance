import React from 'react';
import * as S from './Sort.style';
import type { SortProps } from './Sort.type';

const Sort: React.FC<SortProps> = ({ changeNutrientsList }: SortProps) => {
  return (
    <S.Container>
      <S.Info>정렬</S.Info>
      <S.SortList>
        <S.SortName>가나다 순</S.SortName>
        <S.SortName>가격 순</S.SortName>
      </S.SortList>
    </S.Container>
  );
};

export default Sort;
