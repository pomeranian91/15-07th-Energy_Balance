import React from 'react';
import { NutrientsListType } from '../../api/getNutrientsList';

interface CategoriesProps  {
  nutrientsList: NutrientsListType[] | null;
  changeNutrientsList(targetNutrientsList: NutrientsListType[] | undefined): void;
}

const Categories: React.FC<CategoriesProps> = ({nutrientsList, changeNutrientsList}: CategoriesProps) => {
  return <div>카테고리</div>;
};

export default Categories;
