import styled from 'styled-components';
import type { StyledCheckboxType } from './Categories.type';

export const Container = styled.div`
  max-width: 300px;
  max-height: 400px;
  margin-top: 50px;
  margin-left: 100px;
  padding: 30px;
  border-radius: 50px;
  background-color: #fff;
  box-shadow: -4px -4px 8px rgba(250, 250, 250, 1), 6px 6px 5px rgba(0, 0, 0, 0.3);
  &: hover {
    box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 1), inset 3px 3px 5px rgba(0, 0, 0, 0.2);
  }

  /* text-align: center; */
`;

export const SearchBar = styled.input`
  height: 35px;
  margin-bottom: 10px;
  padding: 0 11px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

export const InfoForEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #f8d09a;
`;

export const CategoryList = styled.ul``;

export const Category = styled.li`
  display: flex;
  align-items: center;
  margin-right: 250px;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  max-width: 24px;
  max-height: 24px;

  vertical-align: middle;
  margin-right: 20px;
`;

export const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const StyledCheckbox = styled.div<StyledCheckboxType>`
  display: inline-block;
  width: 24px;
  height: 24px;
  border: ${({ checked }) => (checked ? 'none' : 'solid 0.1rem #dddddd')};
  background: ${({ checked }) => (checked ? '#F39519' : '#ffffff')};
  border-radius: 0.4rem;
  transition: all 150ms;
  cursor: pointer;

  ${Icon} {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`;

export const CheckboxName = styled.span`
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;

  & .productNum {
    font-weight: 400;
    color: #8c8c8c;
  }
`;
