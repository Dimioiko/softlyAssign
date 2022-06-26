import styled from "styled-components";
import ProductCard from "./ProductCard";
import man from "../assets/man.png";
import kids from "../assets/kids.png";

export default function NewArrivals() {
  return (
    <>
      <Container>
        <Title>ΝΕΕΣ ΑΦΙΞΕΙΣ</Title>
        <ProductCardContainer>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductCardContainer>
        <ButtonContainer>
          <Button>ΑΓΟΡΑ ΝΕΩΝ ΕΙΔΩΝ</Button>
        </ButtonContainer>
      </Container>
      <AfterArrivalsContainer>
        <ImageContainer>
          <Image src={kids} />
          <ImageTitle>ΗΛΕΚΤΡΙΚΟΙ ΑΡΩΜΑΤΙΣΤΕΣ</ImageTitle>
          <ImageButton>Ανακαλυψτε περισσότερα</ImageButton>
        </ImageContainer>
        <ImageContainer>
          <Image src={man} />
          <ImageTitle>ΗΛΕΚΤΡΙΚΟΙ ΑΡΩΜΑΤΙΣΤΕΣ</ImageTitle>
          <ImageButton>Ανακαλυψτε περισσότερα</ImageButton>
        </ImageContainer>
      </AfterArrivalsContainer>
    </>
  );
}

const Container = styled.div`
  position: relative;
  margin-top: 4rem;
`;
const Title = styled.span`
  font-weight: 20;
  font-size: 32px;
  color: #000000a3;
  margin-bottom: 1.5rem;
  display: grid;
  padding-left: 15px;
`;
const ProductCardContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.1rem;
  padding-left: 15px;
  padding-right: 15px;
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
  font-size: 12px;
  border: 0.1rem solid #000000;
`;
const AfterArrivalsContainer = styled.div`
  display: grid;
  gap: 1rem;
  padding-top: 60px;
  padding-bottom: 60px;
  background: #f5f5f5;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 60px;
`;
const ImageContainer = styled.div`
  position: relative;
`;
const Image = styled.img`
  max-height: 220px;
  width: 100%;
`;
const ImageTitle = styled.span`
  position: absolute;
  left: 15px;
  top: 95px;
  color: white;
  font-size: 28px;
  font-weight: 300;
`;
const ImageButton = styled.span`
  position: absolute;
  top: 185px;
  left: 15px;
  color: white;
  font-size: 14px;
  text-decoration: underline;
`;
