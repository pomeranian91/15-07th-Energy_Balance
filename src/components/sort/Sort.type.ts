import type { NutrientsListType } from '../../api/getNutrientsList';

export interface SortProps {
  changeNutrientsList(targetNutrientsList: NutrientsListType[] | undefined): void;
}
