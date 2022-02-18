import type { NutrientsListType } from '../../api/getNutrientsList';

export interface CategoriesProps {
  nutrientsList: NutrientsListType[] | null;
  changeNutrientsList(targetNutrientsList: NutrientsListType[] | undefined): void;
  currentKeyword: string;
}

export interface StyledCheckboxType {
  checked: boolean;
}
