import { useState, useEffect } from 'react';
import { ascendKR } from '../utils/sort';
import type { NutrientsListType } from '../api/getNutrientsList';

type SortType = { name: string; selected: boolean };

const useSort = (nuturientsList: NutrientsListType[] | null) => {
  const [initialNutrientsList, setInitialNutrientsList] = useState<NutrientsListType[] | null>(null);
  const [sortList, setSortList] = useState<SortType[]>([{ name: '가나다 순(역순)', selected: false }]);

  const sortByCurrentSelectedElem = (sort: string) => {
    let newNutrientsList: NutrientsListType[] | undefined = [];
    switch (sort) {
      case '가나다 순(역순)':
        newNutrientsList = initialNutrientsList?.sort(ascendKR);
        break;
      default:
        break;
    }
    console.log(newNutrientsList);
    return newNutrientsList;
  };

  const selectSort = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const currentSelectedSort = e.target as HTMLUListElement;
    let isSelected: boolean;

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

      sortByCurrentSelectedElem(currentSelectedSort.id);
    }
  };

  useEffect(() => {
    if (nuturientsList) {
      setInitialNutrientsList(nuturientsList);
    }
  }, [nuturientsList]);

  return { sortList, selectSort };
};

export default useSort;
