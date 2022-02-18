import type { NutrientsListType } from '../../api/getNutrientsList';

export interface SortProps {
  nutrientsList: NutrientsListType[] | null;
  changeNutrientsList(targetNutrientsList: NutrientsListType[] | undefined): void;
}

export interface SortNameType {
  selected: boolean;
}
