import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NutrientsListType } from '../../api/getNutrientsList';
import Pagination from './Pagenation';

interface Props {
  nutrientsList: NutrientsListType[] | null;
}

const ProductList = ({ nutrientsList }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage, setPostPerPage] = useState<number>(40);
  const [currentPosts, setCurrentPosts] = useState<any>(null);
  const deletePriceTitle = Math.floor(Math.random() * 10000 + 1);
  const productPriceTitle = Math.floor(Math.random() * 1000 + 1);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const paginate = (pageNum: number): void => setCurrentPage(pageNum);
  useEffect(() => {
    setCurrentPosts(nutrientsList?.slice(indexOfFirstPost, indexOfLastPost));
  }, [nutrientsList, currentPage]);

  return (
    <div>
      <Layout>
        {currentPosts?.map((post: any) => (
          <Card key={post.id}>
            <CardImg src="/images/img-product1.png" alt="상품이미지" />
            <Title>{post.name}</Title>
            {post.brand == null ? <Brand>브랜드 : 기타</Brand> : <Brand>브랜드 : {post.brand}</Brand>}
            <Price>
              <DeletePrice>
                {(Math.round((deletePriceTitle * post.id) / 1000) * 1000).toLocaleString('ko-KR')} 원
              </DeletePrice>
              <ProductPrice>
                {(Math.round((productPriceTitle * post.id) / 100) * 100).toLocaleString('ko-KR')}원
              </ProductPrice>
            </Price>
            <IconContainer>
              <IconTag src="//img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_product_soldout.gif" alt="품절" />
              <IconTag
                src="//img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_product_recommended.gif"
                alt="추천"
              />
              <IconTag src="//img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_product_new.gif" alt="New" />
            </IconContainer>
          </Card>
        ))}
      </Layout>
      <Pagination
        nutrientsList={nutrientsList}
        postPerPage={postPerPage}
        totalPosts={nutrientsList?.length}
        paginate={paginate}
      ></Pagination>
    </div>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;
  margin: 20px;
  padding: 20px;
  color: #242326;
  background-color: #f2e9e4;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &: hover {
    box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 1), inset 3px 3px 5px rgba(0, 0, 0, 0.1);
    transform: scale(1.2);
    transition: all 1s;
  }
`;
const Title = styled.div`
  margin-top: 5px;
  font-size: 13px;
  font-weight: bold;
  font-family: Poppins;
`;
const Brand = styled.div`
  margin-top: 2px;
  font-size: 13px;
  font-weight: bold;
  font-family: Poppins;
`;
const Price = styled.div`
  margin-top: 2px;
  color: #242326;
`;
const CardImg = styled.img`
  width: 260px;
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
const IconContainer = styled.div`
  margin-top: 2px;
`;
const IconTag = styled.img`
  margin: 2px;
  border: none;
  vertical-align: top;
`;

export default ProductList;
