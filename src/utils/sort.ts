import { NutrientsListType } from '../api/getNutrientsList';

export const ascendKR = (a: NutrientsListType, b: NutrientsListType) => {
  return a.name > b.name ? -1 : b.name === a.name ? 0 : 1;
};
