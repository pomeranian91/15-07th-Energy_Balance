import { useEffect, useState } from 'react';
import type { NutrientsListType } from '../api/getNutrientsList';
import { getTarget } from '../utils/getTarget';

type checkboxInfo = { checked: boolean; cnt?: number };

const useCategories = (nutrientsList: NutrientsListType[] | null) => {
  const [initialNutrientsList, setInitialNutientsList] = useState<NutrientsListType | null>(null);
  const [checkboxInfoList, setCheckboxInfoList] = useState<[any, checkboxInfo][] | null>(null);
  const [checkboxInfo, setCheckboxInfo] = useState<Map<any, checkboxInfo> | null | undefined>(null);

  const filterCheckboxInfo = (nutrientsList: NutrientsListType[]) => {
    const parseCategories = nutrientsList.filter((nutrients) => nutrients.brand);
    const filtedCheckboxInfo = new Map();

    for (const prodcut of parseCategories) {
      const { brand } = prodcut;
      if (!filtedCheckboxInfo.has(brand)) filtedCheckboxInfo.set(brand, { checked: false, cnt: 1 });
      else
        filtedCheckboxInfo.set(brand, { ...filtedCheckboxInfo.get(brand), cnt: filtedCheckboxInfo.get(brand).cnt + 1 });
    }

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

  useEffect(() => {
    if (nutrientsList) {
      const newCheckboxInfo = filterCheckboxInfo(nutrientsList);

      setCheckboxInfo(newCheckboxInfo);
    }
  }, [nutrientsList]);

  useEffect(() => {
    console.log(checkboxInfo);
    if (checkboxInfo) {
      const newCheckboxInfoList = checkboxInfo && Array.from(checkboxInfo);
      setCheckboxInfoList(newCheckboxInfoList);
    }
  }, [checkboxInfo]);

  return { checkboxInfoList, checkCurrentCategory };
};

export default useCategories;
