import styled from 'styled-components';
import { SortNameType } from './Sort.type';

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

export const SortName = styled.li<SortNameType>`
  display: list-item;
  margin-right: 10px;
  font-size: 13px;
  font-weight: ${({ selected }) => (selected ? '600' : '400')};
  color: ${({ selected }) => (selected ? '#F8D09A' : '#999999')};
  cursor: pointer;
`;
