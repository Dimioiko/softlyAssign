import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ExpandMenu({ showSideBar }) {
  return (
    <SideBar onClick={showSideBar}>
      <SwiperContainer>
        <Swiper
          style={{ maxWidth: "100%" }}
          spaceBetween={25}
          slidesPerView={3.6}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <SliderCategories>ΓΥΝΑΙΚΑ</SliderCategories>
          </SwiperSlide>
          <SwiperSlide>
            <SliderCategories>ΑΝΔΡΑΣ</SliderCategories>
          </SwiperSlide>
          <SwiperSlide>
            <SliderCategories>ΠΑΙΔΙ</SliderCategories>
          </SwiperSlide>
          <SwiperSlide>
            <SliderCategories>BRANDS</SliderCategories>
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>
      <MainCategoriesContainer>
        <MainCategoryContainer>
          <MainCategory>ΡΟΥΧΑ</MainCategory>
          <RightArrow>{">"}</RightArrow>
        </MainCategoryContainer>
        <MainCategoryContainer>
          <MainCategory>ΠΑΠΟΥΤΣΙΑ</MainCategory>
          <RightArrow>{">"}</RightArrow>
        </MainCategoryContainer>
        <MainCategoryContainer>
          <MainCategory>ΑΞΕΣΟΥΑΡ</MainCategory>
          <RightArrow>{">"}</RightArrow>
        </MainCategoryContainer>
        <MainCategoryContainer>
          <MainCategory>ΟΜΟΡΦΙΑ</MainCategory>
          <RightArrow>{">"}</RightArrow>
        </MainCategoryContainer>
        <MainCategoryContainer>
          <MainCategory>ΔΗΜΟΦΙΛΕΙΣ ΜΑΡΚΕΣ</MainCategory>
          <RightArrow>{">"}</RightArrow>
        </MainCategoryContainer>
      </MainCategoriesContainer>
      <OtherCategoriesContainer>
        <SecondaryCategory>ΝΕΕΣ ΑΦΙΞΕΙΣ </SecondaryCategory>
        <SecondaryCategory>BEACHWEAR</SecondaryCategory>
        <SecondaryCategory>ΑΠΑΡΑΙΤΗΤΑ ΓΙΑ ΤΗ ΔΟΥΛΕΙΑ</SecondaryCategory>
        <SecondaryCategory>ΓΥΝΑΙΚΕΙΑ ΣΕΤ</SecondaryCategory>
        <SecondaryCategory>ΤΕΛΕΥΤΑΙΑ ΕΥΚΑΙΡΙΑ</SecondaryCategory>
        <SecondaryCategory>FAQ</SecondaryCategory>
      </OtherCategoriesContainer>
      <FooterContainer>
        <FooterCategoryContainer>
          <FooterCategory>Σύνδεση / Δημιουργία λογαργιασμού</FooterCategory>
        </FooterCategoryContainer>
        <FooterCategoryContainer>
          <FooterCategory>Οι Παραγγελιες μου</FooterCategory>
        </FooterCategoryContainer>
        <FooterCategoryContainer>
          <FooterCategory>Αγαπημένα</FooterCategory>
        </FooterCategoryContainer>
      </FooterContainer>
    </SideBar>
  );
}

const SideBar = styled.div`
  position: fixed;
  display: grid;
  width: 100vw;
  gap: 15px;
  transition: all 0.3s ease-in-out;
`;

const SliderCategories = styled.span`
  font-size: 12px;
  font-weight: 500;
`;
const SwiperContainer = styled.div`
  max-width: 100%;
  text-align: center;
  display: grid;
  border-top: 1px solid #80808099;
  border-bottom: 1px solid #80808099;
  height: 100%;
  align-items: center;
  align-content: center;
  padding-bottom: 5px;
`;
const MainCategoriesContainer = styled.div`
  padding-left: 1.5rem;
  display: grid;
  row-gap: 15px;
  border-bottom: 1px solid #80808099;
  padding-right: 1rem;
  height: 100%;
  align-items: center;
  align-content: center;
  padding-bottom: 15px;
`;

const MainCategory = styled.span`
  font-size: 10px;
  font-weight: 700;
`;
const OtherCategoriesContainer = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: grid;
  row-gap: 15px;
  border-bottom: 1px solid #80808099;
  height: 100%;
  align-items: center;
  align-content: center;
  padding-bottom: 15px;
  padding-top: 5px;
`;
const MainCategoryContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  height: 100%;
`;
const RightArrow = styled.span`
  display: grid;
  justify-self: end;
`;
const SecondaryCategory = styled.span`
  font-size: 10px;
  font-weight: 700;
  color: #838384;
`;
const FooterContainer = styled.div`
  padding-left: 1.5rem;
  display: grid;
  padding-bottom: 15px;
  padding-top: 15px;
`;
const FooterCategoryContainer = styled.div``;
const FooterCategory = styled.span`
  font-size: 10px;
  font-weight: 700;
`;
