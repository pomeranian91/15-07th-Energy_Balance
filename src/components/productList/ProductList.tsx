import React from 'react';
import styled from 'styled-components';
import { NutrientsListType } from '../../api/getNutrientsList';

interface Props {
  nutrientsList: NutrientsListType[] | null;
}

const ProductList = ({ nutrientsList }: Props) => {
  return (
    <div>
      <div>
        <Card>
          <div>가상이미지</div>
          <div>그 제목</div>
          <div>
            가격
            <span>39000</span>
          </div>
          <div>
            <IconTag src="//img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_product_soldout.gif" alt="품절" />
            <IconTag src="//img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_product_recommended.gif" alt="추천" />
            <IconTag src="//img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_product_new.gif" alt="New" />
          </div>
        </Card>
      </div>
    </div>
  );
};

const Card = styled.div`
  width: 25%;
  padding: 20px;
`;

const IconTag = styled.img`
  border: none;
  vertical-align: top;
`;

export default ProductList;
