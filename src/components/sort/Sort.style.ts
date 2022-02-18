import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 400px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 5px;
`;

export const Info = styled.div`
  padding-right: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #999999;
`;

export const SortList = styled.ul`
  display: flex;
`;

export const SortName = styled.li`
  display: list-item;
  margin-right: 10px;
  font-size: 13px;
  font-weight: 400;
  color: #999999;
  cursor: pointer;
`;
