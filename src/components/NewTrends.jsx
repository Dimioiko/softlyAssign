import React from "react";
import styled from "styled-components";
import imageOne from "../assets/DSC_8824-600x600.png";
import imageTwo from "../assets/DSC_8852-scaled.png";
import imageThree from "../assets/DSC_9774-600x600.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function NewTrends() {
  return (
    <Container>
      <TitleContainer>
        <Title>ΟΙ ΝΕΕΣ ΤΑΣΕΙΣ ΑΥΤΗ ΤΗ ΣΤΙΓΜΗ</Title>
      </TitleContainer>
      <SwiperContainer>
        <Swiper
          spaceBetween={60}
          slidesPerView={2.6}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Image src={imageOne} />
            <ImageTitle>ΑΦΡΌΛΟΥΤΡΑ</ImageTitle>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={imageTwo} />
            <ImageTitle>ΚΡΈΜΕΣ ΣΏΜΑΤΟΣ</ImageTitle>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={imageThree} />
            <ImageTitle>ΚΡΈΜΕΣ ΧΕΡΙΏΝ</ImageTitle>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={imageOne} />
            <ImageTitle>ΚΡΕΜΟΣΆΠΟΥΝΑ</ImageTitle>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={imageTwo} />
            <ImageTitle>ΑΝΤΗΛΙΑΚΑ ΠΡΟΣΩΠΟΥ ΚΑΙ ΣΩΜΑΤΟΣ</ImageTitle>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={imageThree} />
            <ImageTitle>ΛΑΔΙΑ ΣΩΜΑΤΟΣ</ImageTitle>
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 4rem;
`;
const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
const Title = styled.span`
  font-weight: 300;
  font-size: 32px;
`;
const TitleContainer = styled.div`
  padding-left: 32px;
  padding-right: 32px;
  margin-bottom: 2rem;
`;

const ImageTitle = styled.span`
  width: 100%;
  font-size: 10px;
  font-weight: 700;
`;
const SwiperContainer = styled.div`
  text-align: center;
  padding-left: 1rem;
`;
