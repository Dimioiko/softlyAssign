import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import RecentlySeenProduct from "./RecentlySeenProduct";

export default function RecentlySeen() {
  return (
    <Container>
      <Title>ΕΙΔΑΤΕ ΠΡΟΣΦΑΤΑ</Title>
      <SwiperContainer>
        <Swiper
          spaceBetween={10}
          slidesPerView={2.3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <RecentlySeenProduct />
          </SwiperSlide>
          <SwiperSlide>
            <RecentlySeenProduct />
          </SwiperSlide>
          <SwiperSlide>
            <RecentlySeenProduct />
          </SwiperSlide>
          <SwiperSlide>
            <RecentlySeenProduct />
          </SwiperSlide>
          <SwiperSlide>
            <RecentlySeenProduct />
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 80px;
  padding-left: 15px;
`;
const Title = styled.span`
  font-size: 28px;
  font-weight: 300;
`;

const SwiperContainer = styled.div`
  padding-top: 25px;
  grid-row-gap: 1rem;
`;
