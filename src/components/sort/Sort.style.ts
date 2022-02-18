import styled from 'styled-components';
import { SortNameType } from './Sort.type';

export const Container = styled.div`
  display: flex;
  width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #949ba6;
  border-radius: 5px;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &: hover {
    box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 1), inset 3px 3px 5px rgba(0, 0, 0, 0.1);
    transform: scale(1.2);
    transition: all 1s;
  }
`;

export const Info = styled.div`
  padding-right: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #242326;
`;

export const SortList = styled.ul`
  display: flex;
`;

export const SortName = styled.li<SortNameType>`
  display: list-item;
  margin-right: 10px;
  font-size: 13px;
  font-weight: ${({ selected }) => (selected ? '600' : '400')};
  color: ${({ selected }) => (selected ? '#F8D09A' : '#242326')};
  cursor: pointer;
`;
