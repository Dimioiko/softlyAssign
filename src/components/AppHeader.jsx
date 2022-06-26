import React, { useState } from "react";
import styled from "styled-components";
import times from "../assets/times.svg";
import shoppingBag from "../assets/shopping-bag.svg";
import logo from "../assets/LOGOHERE.svg";
import menu from "../assets/Menu.svg";
import heart from "../assets/heart-regular.svg";
import search from "../assets/search.svg";

export default function AppHeader({ showSideBar, sidebarStatus, hideSideBar }) {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const showSearchBarHandler = () => {
    if (showSearchBar) {
      setShowSearchBar(false);
      return;
    }
    setShowSearchBar(true);
  };
  return (
    <HeaderContainer>
      <PreHeader>
        <PreHeaderContent>
          ΔΩΡΕΑΝ ΜΕΤΑΦΟΡΙΚΑ ΜΕ ΑΓΟΡΕΣ ΑΠΟ 39€ ΚΑΙ ΑΝΩ!
        </PreHeaderContent>
        <TimesImage src={times} />
      </PreHeader>
      <Header>
        <HeaderIconWrapper>
          {sidebarStatus ? (
            <HideSideBar onClick={hideSideBar}>X</HideSideBar>
          ) : (
            <HeaderImage src={menu} onClick={showSideBar} />
          )}

          <HeartImageContainer>
            <HeaderImage src={heart} />
            <Circle>0</Circle>
          </HeartImageContainer>
        </HeaderIconWrapper>

        <LogoImage src={logo} />

        <HeaderIconWrapper>
          <HeaderImage src={search} onClick={showSearchBarHandler} />
          <BagImageContainer>
            <HeaderImage src={shoppingBag} />
            <Circle>0</Circle>
          </BagImageContainer>
        </HeaderIconWrapper>
      </Header>
      {showSearchBar && (
        <SearchBar>
          <SearchBarContainer>
            <SearchImage src={search} />
            <SearchInput
              type={"text"}
              id={"SearchInput"}
              name={"SearchInput"}
              value={"Αναζήτηση"}
            ></SearchInput>
          </SearchBarContainer>
        </SearchBar>
      )}
    </HeaderContainer>
  );
}
const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
`;

const PreHeader = styled.div`
  width: 100%;
  background: #000000 0% 0% no-repeat padding-box;
  display: grid;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-items: center;
  position: relative;
`;
const HeartImageContainer = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  justify-items: center;
`;
const BagImageContainer = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  justify-items: center;
`;
const PreHeaderContent = styled.span`
  font-size: 12px;
  color: white;
`;
const TimesImage = styled.img`
  position: absolute;
  right: 25px;
  bottom: 12px;
`;
const Header = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  align-items: center;
  max-width: 100%;
  justify-items: center;
  background-color: white;
`;
const Circle = styled.span`
  position: absolute;
  top: 10px;
  right: -8px;
  width: 16px;
  height: 16px;
  font-size: 10px;
  background: #fa6363;
  color: #fff;
  border-radius: 50%;
  line-height: 16px;
  text-align: center;
`;
const HeaderImage = styled.img`
  max-width: 100%;
  min-width: 18px;
  min-height: 18px;
`;

const LogoImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const HeaderIconWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const HideSideBar = styled.div`
  max-width: 100%;
  font-size: 18px;
  width: 22px;
  height: 19px;
`;

const SearchBarContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem;
  margin: 10px 20px;
  padding: 10px;
  background-color: #f5f5f5;
`;

const SearchBar = styled.div`
  z-index: 20;
  width: 100%;
  position: absolute;
  background-color: white;
`;
const SearchImage = styled.img``;
const SearchInput = styled.input`
  border: unset;
  background: transparent;
  color: black;
  padding: 0;
  font-size: 12px;
`;
