import React from 'react';
import { NutrientsListType } from '../../api/getNutrientsList';

interface CategoriesProps  {
  nutrientsList: NutrientsListType[] | null;
  changeNutrientsList(targetNutrientsList: NutrientsListType[] | undefined): void;
}

const Categories: React.FC<CategoriesProps> = ({nutrientsList, changeNutrientsList}: CategoriesProps) => {
  return (
    <Container>
      <SearchBar />
      <CategoryList>
              <Category>
                <CheckboxContainer className="checkboxContainer">
                  <HiddenCheckbox
                    defaultChecked={false}
                    type="checkbox"
                    className="checkbox"
                    // id={name}
                  />
                  <StyledCheckbox
                    checked={false}
                    // onClick={checkCurrentCategory}
                  >
                    <Icon viewBox="0 0 24 24">
                      <polyline points="19 7 10 17 5 12" />
                    </Icon>
                  </StyledCheckbox>
                </CheckboxContainer>
                <CheckboxName>test</CheckboxName>
              </Category>
        </CategoryList>
    </Container>
  );
};

export default Categories;
