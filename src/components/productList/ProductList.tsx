import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NutrientsListType } from '../../api/getNutrientsList';

interface Props {
  nutrientsList: NutrientsListType[] | null;
}

const ProductList = ({ nutrientsList }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage, setPostPerPage] = useState<number>(40);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  // const currentPosts = nutrientsList.slice(indexOfFirstPost, indexOfLastPost);
  // const paginate = pageNum => setCurrentPage(pageNum);
  if (nutrientsList) {
    return (
      <div>
        <div>
          {nutrientsList.map((post) => (
            <Layout>
              <Card key={post.id}>
                <div>
                  <CardImg src="/img/img-product1.png" alt="상품이미지" />
                </div>
                <Title>{post.name}</Title>
                {post.brand == null ? <Brand>브랜드 : 기타</Brand> : <Brand>브랜드 : {post.brand}</Brand>}
                <Price>
                  <DeletePrice>39000</DeletePrice>
                  <ProductPrice>39000</ProductPrice>
                </Price>
                <IconContainer>
                  <IconTag
                    src="//img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_product_soldout.gif"
                    alt="품절"
                  />
                  <IconTag
                    src="//img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_product_recommended.gif"
                    alt="추천"
                  />
                  <IconTag src="//img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_product_new.gif" alt="New" />
                </IconContainer>
              </Card>
            </Layout>
          ))}
        </div>
      </div>
    );
  } else return null;
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25%;
  padding: 20px;
`;
const Title = styled.div`
  font-size: 13px;
  font-weight: bold;
  font-family: Poppins;
`;
const Brand = styled.div`
  font-size: 13px;
  font-weight: bold;
  font-family: Poppins;
`;
const Price = styled.div``;
const CardImg = styled.img`
  max-width: 235px;
`;
const DeletePrice = styled.p`
  font-size: 13px;
  font-family: Poppins;
  text-decoration: line-through;
`;
const ProductPrice = styled.p`
  font-size: 13px;
  font-weight: bold;
  font-family: Poppins;
`;
const IconContainer = styled.div``;
const IconTag = styled.img`
  border: none;
  vertical-align: top;
`;

export default ProductList;
