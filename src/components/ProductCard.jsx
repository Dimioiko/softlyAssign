import styled from "styled-components";
import productImage from "../assets/200x200.png";
import heart from "../assets/heart-regular.svg";

export default function ProductCard() {
  return (
    <ProductCardContent>
      <Image src={productImage} />
      <ProductTitle>Grapefruit & Orange Sugar Scrub 550gr</ProductTitle>
      <ProductPriceContainer>
        <ProductPrice>8,00 €</ProductPrice>
        <ProductPriceFinal>10,00 €</ProductPriceFinal>
      </ProductPriceContainer>
      <ProductCategory>Scrub σώματος</ProductCategory>
      <HeartImage src={heart} />
      <NewText>NEW</NewText>
    </ProductCardContent>
  );
}

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductPrice = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const ProductPriceFinal = styled.span`
  font-size: 14px;
  color: #9b9b9b;
  text-decoration: line-through;
`;

const ProductCategory = styled.span`
  font-size: 10px;
`;

const ProductPriceContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ProductTitle = styled.span`
  font-size: 14px;
`;

const ProductCardContent = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: repeat(4, auto);
  gap: 0.2rem;
  padding-bottom: 15px;
`;

const HeartImage = styled.img`
  position: absolute;
  max-width: 16px;
  background-color: white;
  border-radius: 20px;
  padding: 8px;
  right: 10px;
  top: 10px;
`;

const NewText = styled.span`
  width: 35px;
  text-align: center;
  font-size: 10px;
  background-color: white;
  position: absolute;
  left: 10px;
  top: 10px;
`;
