import axios from 'axios';

export interface NutrientsListType {
  id: number;
  name: string;
  brand: string | null;
}

export const getNutrientsList = async () => {
  const { data } = await axios.get('http://localhost:8000/nutrientsList');
  //const { nutrientsList } = data; 수정
  return data;
};
