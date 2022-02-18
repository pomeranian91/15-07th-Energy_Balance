import { useEffect, useState } from 'react';
import type { NutrientsListType } from '../api/getNutrientsList';

type CheckBoxInfoType = {
    checked: boolean, cnt: number
}

const useCategories = (nutrientsList: NutrientsListType[] | null) => {
    const [initialNutrientsList, setInitialNutientsList] = useState<NutrientsListType | null>(null);
    const [checkboxInfo, setCheckboxInfo] = useState<[string, CheckBoxInfoType][] | null>(null);

    const filterCheckboxInfo = (parseCategories: NutrientsListType[]) => {
        const filtedCheckboxInfo = new Map();

        for(const x of parseCategories) {
            const { brand } = x;
            if(!filtedCheckboxInfo.has(brand)) filtedCheckboxInfo.set(brand, { checked: false, cnt: 1 });
            else filtedCheckboxInfo.set(brand, {...filtedCheckboxInfo.get(brand), cnt: filtedCheckboxInfo.get(brand).cnt + 1});
        }

        return filtedCheckboxInfo;
    }

    useEffect(() => {
        if(nutrientsList) {
            const parseCategories = nutrientsList.filter((nutrients) => nutrients.brand);
            
            const newCheckboxInfo = Array.from(filterCheckboxInfo(parseCategories));
            
            setCheckboxInfo(newCheckboxInfo);
        }
    }, [nutrientsList]);

    return { checkboxInfo };
}

export default useCategories;