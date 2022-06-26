import React from "react";
import styled from "styled-components";
import bsbLogo from "../assets/logo1.png";
import lynneLogo from "../assets/logo2.png";
import supergaLogo from "../assets/logo3.png";

export default function TopBrands() {
  return (
    <Container>
      <TitleContainer>
        <Title>TOP BRANDS</Title>
      </TitleContainer>

      <BrandsContainer>
        <ImagesContainer>
          <BrandImage src={bsbLogo} />
        </ImagesContainer>
        <ImagesContainer>
          <BrandImage src={lynneLogo} />
        </ImagesContainer>
        <ImagesContainer>
          <BrandImage src={supergaLogo} />
        </ImagesContainer>
        <ImagesContainer>
          <BrandImage src={bsbLogo} />
        </ImagesContainer>
        <ImagesContainer>
          <BrandImage src={lynneLogo} />
        </ImagesContainer>
        <ImagesContainer>
          <BrandImage src={supergaLogo} />
        </ImagesContainer>
        <ImagesContainer>
          <BrandImage src={bsbLogo} />
        </ImagesContainer>
        <ImagesContainer>
          <BrandImage src={lynneLogo} />
        </ImagesContainer>
      </BrandsContainer>

      <ButtonContainer>
        <Button>ΟΛΑ ΤΑ BRANDS</Button>
      </ButtonContainer>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  padding-top: 60px;
`;
const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;
const Title = styled.span`
  font-size: 28px;
  font-weight: 300;
`;
const ImagesContainer = styled.div`
  border: 1px solid gray;
  justify-content: center;
  display: grid;
  align-items: center;
  padding: 2rem;
`;
const BrandImage = styled.img`
  height: auto;
  max-width: 100%;
`;

const BrandsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  position: relative;
  display: grid;
  justify-items: center;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  padding-left: 15px;
  padding-right: 15px;
`;

const Button = styled.button`
  padding: 10px 16px;
  width: 100%;
  background-color: white;
  font-weight: 700;
  font-size: 14px;
  border: 0.1rem solid #000000;
`;
