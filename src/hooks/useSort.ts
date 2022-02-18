import { useState, useEffect } from 'react';
import { ascendKR, descendKR } from '../utils/sort';
import type { NutrientsListType } from '../api/getNutrientsList';

type SortType = { name: string; selected: boolean };

const useSort = (
  nuturientsList: NutrientsListType[] | null,
  changeNutrientsList: (targetNutrientsList: NutrientsListType[] | undefined) => void,
) => {
  const [initialNutrientsList, setInitialNutrientsList] = useState<NutrientsListType[] | null>(null);
  const [sortList, setSortList] = useState<SortType[]>([{ name: '역순(KR)', selected: false }]);

  const sortByCurrentSelectedElem = (sort: string, isSelected: boolean | undefined) => {
    let newNutrientsList: NutrientsListType[] | undefined = [];
    switch (sort) {
      case '역순(KR)':
        newNutrientsList = isSelected ? initialNutrientsList?.sort(descendKR) : initialNutrientsList?.sort(ascendKR);
        break;
      default:
        break;
    }
    newNutrientsList && changeNutrientsList(newNutrientsList);
  };

  const selectSort = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const currentSelectedSort = e.target as HTMLUListElement;
    let isSelected;

    if (sortList) {
      const newSortList = sortList?.map((sort) => {
        if (sort.name === currentSelectedSort.id) {
          isSelected = sort.selected;
          return {
            ...sort,
            selected: !sort.selected,
          };
        }
      });

      newSortList && setSortList(newSortList as SortType[]);

      sortByCurrentSelectedElem(currentSelectedSort.id, isSelected);
    }
  };

  useEffect(() => {
    if (nuturientsList) {
      setInitialNutrientsList([...nuturientsList]);
    }
  }, [nuturientsList]);

  return { sortList, selectSort };
};

export default useSort;
