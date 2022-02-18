import React, { useState } from 'react';
import styled from 'styled-components';
import { NutrientsListType } from '../../api/getNutrientsList';
import Pagination from './Pagenation';

interface Props {
  nutrientsList: NutrientsListType[] | null;
}

const ProductList = ({ nutrientsList }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage, setPostPerPage] = useState<number>(40);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const paginate = (pageNum: number): void => setCurrentPage(pageNum);
  console.log(nutrientsList);

  if (nutrientsList) {
    const currentPosts = nutrientsList.slice(indexOfFirstPost, indexOfLastPost);
    const deletePriceTitle = Math.floor(Math.random() * 10000 + 1);
    const productPriceTitle = Math.floor(Math.random() * 1000 + 1);
    const randomPriceTitle = Math.floor(Math.random() * 10 + 1);

    return (
      <div>
        <Layout>
          {currentPosts.map((post) => (
            <Card key={post.id}>
              <CardImg src="/img/img-product1.png" alt="상품이미지" />
              <Title>{post.name}</Title>
              {post.brand == null ? <Brand>브랜드 : 기타</Brand> : <Brand>브랜드 : {post.brand}</Brand>}
              <Price>
                <DeletePrice>{Math.round((deletePriceTitle * post.id) / 1000) * 1000}원</DeletePrice>
                <ProductPrice>{Math.round((productPriceTitle * post.id) / 100) * 100}원</ProductPrice>
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
          <Pagination
            nutrientsList={nutrientsList}
            postPerPage={postPerPage}
            totalPosts={nutrientsList.length}
            paginate={paginate}
          ></Pagination>
        </Layout>
      </div>
    );
  } else return null;
};

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin-left: 100px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 235px;
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
