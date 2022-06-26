import React from "react";
import styled from "styled-components";
import man from "../assets/man.png";
import kids from "../assets/kids.png";
import secondMan from "../assets/man2.png";
import thirdMan from "../assets/man@2x.png";
import NewTrends from "./NewTrends";
import NewArrivals from "./NewArrivals";
import RecentlySeen from "./RecentlySeen";
import TopBrands from "./TopBrands";
import Usp from "./Usp";

export default function AppMain() {
  return (
    <div>
      <MainContainer>
        <MainImage src={man} />
        <ImageTitle>ΑΡΩΜΑΤΙΚΑ ΧΩΡΟΥ</ImageTitle>
        <ButtonContainer>
          <ImageButton>Ανακαλύψτε περισσότερα</ImageButton>
        </ButtonContainer>
      </MainContainer>

      <SubWrapper>
        <SubContainer>
          <SubImage src={kids} />
          <SubContainerTitle>ΗΛΕΚΤΡΙΚΟΙ ΑΡΩΜΑΤΙΣΤΕΣ</SubContainerTitle>
          <SubContainerButton>Ανακαλύψτε περισσότερα</SubContainerButton>
        </SubContainer>
        <SubContainer>
          <SubImage src={secondMan} />
          <SubContainerTitle>ΗΛΕΚΤΡΙΚΟΙ ΑΡΩΜΑΤΙΣΤΕΣ</SubContainerTitle>
          <SubContainerButton>Ανακαλύψτε περισσότερα</SubContainerButton>
        </SubContainer>
        <SubContainer>
          <SubImage src={thirdMan} />
          <SubContainerTitle>ΗΛΕΚΤΡΙΚΟΙ ΑΡΩΜΑΤΙΣΤΕΣ</SubContainerTitle>
          <SubContainerButton>Ανακαλύψτε περισσότερα</SubContainerButton>
        </SubContainer>
      </SubWrapper>
      <NewTrends />
      <NewArrivals />
      <RecentlySeen />
      <TopBrands />
      <Usp />
    </div>
  );
}

const MainContainer = styled.div`
  position: relative;
  margin-top: 78px;
`;
const MainImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ImageTitle = styled.h1`
  position: absolute;
  top: 32%;
  font-size: 50px;
  font-weight: 700;
  color: white;
  text-align: center;
`;
const ButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  display: grid;
  justify-items: center;
  top: 83%;
`;
const ImageButton = styled.button`
  padding: 10px 16px;
  border: unset;
  background-color: white;
  font-weight: 700;
  font-size: 12px;
`;
const SubContainer = styled.div`
  position: relative;
  max-height: 316px;
`;
const SubWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 0.2rem;
`;

const SubImage = styled.img`
  max-height: 316px;
  width: 100%;
`;
const SubContainerTitle = styled.span`
  position: absolute;
  bottom: 16%;
  font-size: 32px;
  color: white;
  left: 5%;
  font-weight: 300;
`;

const SubContainerButton = styled.span`
  position: absolute;
  bottom: 8%;
  font-size: 14px;
  color: white;
  left: 5%;
  font-weight: 400;
  text-decoration: underline;
`;
