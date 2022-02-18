import { useEffect, useMemo, useState } from 'react';
import type { NutrientsListType } from '../api/getNutrientsList';
import type { CategoriesProps } from '../components/categories/Categories.type';
import { getTarget } from '../utils/getTarget';

type checkboxInfo = { checked: boolean; cnt?: number };

const useCategories = ({ nutrientsList, changeNutrientsList, currentKeyword }: CategoriesProps) => {
  const [initialNutrientsList, setInitialNutrientsList] = useState<NutrientsListType[] | null>(null);
  const [checkboxInfoList, setCheckboxInfoList] = useState<[any, checkboxInfo][] | null>(null);
  const [searchCheckboxInfoList, setSearchCheckboxInfoList] = useState<[any, checkboxInfo][] | null | undefined>(null);
  const [checkboxInfo, setCheckboxInfo] = useState<Map<any, checkboxInfo> | null | undefined>(null);
  const [prevKeyword, setPrevKeyword] = useState<string>('initial');

  const filterCheckboxInfo = (nutrientsList: NutrientsListType[]) => {
    const parseCategories = nutrientsList.filter((nutrients) => nutrients.brand);
    const filtedCheckboxInfo = new Map();

    for (const prodcut of parseCategories) {
      const { brand } = prodcut;
      if (!filtedCheckboxInfo.has(brand)) filtedCheckboxInfo.set(brand, { checked: false, cnt: 1 });
      else
        filtedCheckboxInfo.set(brand, { ...filtedCheckboxInfo.get(brand), cnt: filtedCheckboxInfo.get(brand).cnt + 1 });
    }

    setPrevKeyword('');

    return filtedCheckboxInfo;
  };

  const checkCurrentCategory = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const currentClickedTarget = e.target;

    const currentCheckbox = getTarget(currentClickedTarget, 'checkboxContainer').id;
    const newCheckboxInfo =
      checkboxInfo &&
      new Map(
        Array.from(
          checkboxInfo?.set(currentCheckbox, {
            ...checkboxInfo.get(currentCheckbox),
            checked: !checkboxInfo.get(currentCheckbox)?.checked,
          }),
        ),
      );

    setCheckboxInfo(newCheckboxInfo);
  };

  const updateNutrientsList = (checkboxInfoList: [any, checkboxInfo][] | null) => {
    const selectedBrands = checkboxInfoList?.filter(([_, val]) => val.checked).map((info) => info[0]);

    const newNutrientsList = initialNutrientsList?.filter((nutrients) => selectedBrands?.includes(nutrients.brand));

    return newNutrientsList;
  };

  const searchTargetBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    const searchCheckboxInfoList = checkboxInfoList?.filter(
      (brand) => brand[0].toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) > -1,
    );

    setSearchCheckboxInfoList(searchCheckboxInfoList);
  };

  useEffect(() => {
    if (currentKeyword !== prevKeyword || prevKeyword === 'initial') {
      setInitialNutrientsList(nutrientsList);
    }
  }, [nutrientsList]);

  useEffect(() => {
    if (initialNutrientsList) {
      const newCheckboxInfo = filterCheckboxInfo(initialNutrientsList);

      setCheckboxInfo(newCheckboxInfo);
    }

    if (prevKeyword !== 'initial') setPrevKeyword(currentKeyword);
  }, [currentKeyword, initialNutrientsList]);

  useEffect(() => {
    if (checkboxInfo) {
      const newCheckboxInfoList = checkboxInfo && Array.from(checkboxInfo);

      setCheckboxInfoList(newCheckboxInfoList);

      if (searchCheckboxInfoList) {
        const _newCheckboxInfoList = [];

        for (const product of newCheckboxInfoList) {
          for (const filteredProduct of searchCheckboxInfoList) {
            if (filteredProduct[0] === product[0]) _newCheckboxInfoList.push(product);
          }
        }
        console.log(_newCheckboxInfoList);
        setSearchCheckboxInfoList(_newCheckboxInfoList);
      }
    }
  }, [checkboxInfo]);

  useEffect(() => {
    if (checkboxInfoList) {
      const updatedNutrientsList = updateNutrientsList(checkboxInfoList);
      const emptyNutrientsList = updatedNutrientsList?.length === 0;

      if (emptyNutrientsList) {
        if (currentKeyword === 'initial') return;
        changeNutrientsList(initialNutrientsList as NutrientsListType[]);
      } else changeNutrientsList(updatedNutrientsList);
    }
  }, [checkboxInfoList]);

  return { checkboxInfoList, searchCheckboxInfoList, checkCurrentCategory, searchTargetBrand };
};

export default useCategories;
