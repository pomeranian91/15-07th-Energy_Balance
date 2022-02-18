import React from 'react';
import { NutrientsListType } from '../../api/getNutrientsList';
import styled from 'styled-components';

interface Props {
  nutrientsList: NutrientsListType[] | null;
  postPerPage: number;
  totalPosts: number;
  paginate: any;
}

const Pagination = ({ paginate, postPerPage, nutrientsList, totalPosts }: Props) => {
  const pageNumbers: number[] = [];
  console.log(1);
  for (let i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  if (nutrientsList) {
    return (
      <div>
        {pageNumbers != [] ? (
          <ListContainer>
            {pageNumbers.map((pageNum: number) => (
              <List key={pageNum} onClick={() => paginate(pageNum)}>
                <span>{pageNum}</span>
              </List>
            ))}
          </ListContainer>
        ) : (
          <div>test</div>
        )}
      </div>
    );
  } else return null;
};
const ListContainer = styled.ul`
  display: flex;
`;
const List = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  width: 40px;
  height: 40px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &: hover {
    box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 1), inset 3px 3px 5px rgba(0, 0, 0, 0.1);
    transform: scale(0.95);
  }
  & span {
    font-size: 20px;
  }
`;
export default Pagination;
