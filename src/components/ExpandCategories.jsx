import React from "react";
import styled from "styled-components";

export default function ExpandCategories({ goPreviousSideBar }) {
  return (
    <SideBar>
      <CategoryContainer>
        <Category onClick={goPreviousSideBar}>{"<   "} ΡΟΥΧΑ</Category>
      </CategoryContainer>
      <SubCategoriesContainer>
        <SubCategory>ΟΛΑ ΤΑ ΡΟΥΧΑ</SubCategory>
        <SubCategory>ΜΠΛΟΥΖΕΣ</SubCategory>
        <SubCategory>ΠΟΥΚΑΜΙΣΑ</SubCategory>
        <SubCategory>ΠΑΝΤΕΛΟΝΙΑ</SubCategory>
        <SubCategory>ΖΑΚΕΤΕΣ</SubCategory>
        <SubCategory>ΠΟΥΛΟΒΕΡ</SubCategory>
        <SubCategory>ΦΟΡΕΜΑΤΑ</SubCategory>
        <SubCategory>ΦΟΥΣΤΕΣ</SubCategory>
        <SubCategory>ΒΕΡΜΟΥΔΕΣ ΚΑΙ ΣΟΡΤΣ</SubCategory>
        <SubCategory>ΚΟΛΑΝ</SubCategory>
        <SubCategory>ΦΟΡΜΕΣ ΚΑΙ ΑΘΛΗΤΙΚΑ</SubCategory>
        <SubCategory>ΜΠΟΥΦΑΝ ΚΑΙ ΠΑΛΤΟ</SubCategory>
        <SubCategory>ΜΑΓΙΩ ΚΑΙ ΠΑΡΑΛΙΑ</SubCategory>
        <SubCategory>ΕΣΩΡΟΥΧΑ</SubCategory>
      </SubCategoriesContainer>
    </SideBar>
  );
}
const SideBar = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`;
const CategoryContainer = styled.div`
  border-bottom: 1px solid;
  width: 100%;
`;

const SubCategoriesContainer = styled.div`
  margin-top: 2rem;
  row-gap: 15px;
  display: grid;
`;

const Category = styled.span`
  padding-left: 1.5rem;
  font-size: 10px;
  font-weight: 600;
`;
const SubCategory = styled.span`
  padding-left: 1.5rem;
  font-size: 10px;
  font-weight: 600;
`;
