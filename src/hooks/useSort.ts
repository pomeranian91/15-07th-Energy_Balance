import { useState, useEffect } from 'react';

type SortType = { name: string; selected: boolean };

const useSort = () => {
  const [sortList, setSortList] = useState<SortType[]>([{ name: '가나다 순', selected: false }]);
  const [currentSort, setCurrentSort] = useState<string | null>('');

  const selectSort = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const currentSelectedSort = e.target as HTMLUListElement;

    if (sortList) {
      const newSortList = sortList?.map((sort) => {
        if (sort.name === currentSelectedSort.id) {
          return {
            ...sort,
            selected: !sort.selected,
          };
        }
      });

      newSortList && setSortList(newSortList as SortType[]);
    }
  };

  return { sortList, selectSort };
};

export default useSort;
