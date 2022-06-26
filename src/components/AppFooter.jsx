import React from "react";
import styled from "styled-components";
import Instagram from "../assets/instagram-brands.svg";
import LinkedIn from "../assets/linkedin-in-brands.svg";
import Youtube from "../assets/youtube-brands.svg";
import Twitter from "../assets/twitter-brands.svg";
import Facebook from "../assets/facebook-f-brands.svg";
import amex from "../assets/cc-amex-brands.svg";
import applePay from "../assets/cc-apple-pay-brands.svg";
import discover from "../assets/cc-discover-brands.svg";
import mastercard from "../assets/cc-mastercard-brands.svg";
import paypal from "../assets/cc-paypal-brands.svg";
import stripe from "../assets/cc-stripe-brands.svg";
import visa from "../assets/cc-visa-brands.svg";

function AppFooter() {
  return (
    <Container>
      <SocialContainer>
        <SocialImage src={Instagram} />
        <SocialImage src={LinkedIn} />
        <SocialImage src={Youtube} />
        <SocialImage src={Twitter} />
        <SocialImage src={Facebook} />
      </SocialContainer>
      <NewsLetterContainer>
        <NewsLetterTitle>NEWSLETTER</NewsLetterTitle>
        <NewsLetterText>
          Κάντε εγγραφή και κερδίστε 50% έπτωση στις πρώτες σας αγορές
        </NewsLetterText>
        <NewsLetterRegister>
          <NewsLetterInput
            type={"email"}
            id={"NewsLetterInput"}
            name={"NewsLetterInput"}
            value={"email@email.com"}
          ></NewsLetterInput>
          <NewsLetterLabel for={"NewsLetterInput"}>ΕΓΓΡΑΦΗ</NewsLetterLabel>
        </NewsLetterRegister>
      </NewsLetterContainer>
      <InfosContainer>
        <InfoContainerOne>
          <InfosText>Συχνές ερωτήσεις</InfosText>
          <InfosText>Επικοινωνία</InfosText>
          <InfosText>Πολιτική επιστροφών</InfosText>
        </InfoContainerOne>
        <InfoContainerTwo>
          <InfosText>Έξοδα αποστολής</InfosText>
          <InfosText>Σχετικά με εμάς</InfosText>
          <InfosText>GDPR</InfosText>
        </InfoContainerTwo>
        <InfoContainerThree>
          <InfosText>Ασφάλεια συναλλαγών</InfosText>
          <InfosText>Όροι χρήσης</InfosText>
        </InfoContainerThree>
      </InfosContainer>
      <PayWaysContainer>
        <PayWaysTitle>ΤΡΟΠΟΙ ΠΛΗΡΩΜΗΣ</PayWaysTitle>
        <PayWayImageContainer>
          <PayWayImage src={amex} />
          <PayWayImage src={applePay} />
          <PayWayImage src={discover} />
          <PayWayImage src={mastercard} />
          <PayWayImage src={paypal} />
          <PayWayImage src={stripe} />
          <PayWayImage src={visa} />
        </PayWayImageContainer>
      </PayWaysContainer>
      <CopyrightContainer>
        <Copyright>Copyright © 2021 SOFTLY PRODUCTION</Copyright>
        <CreatedBy>CREATED WITH SOFTLY</CreatedBy>
      </CopyrightContainer>
    </Container>
  );
}

export default AppFooter;

const Container = styled.div`
  display: grid;
  gap: 2rem;
  background-color: black;
  padding-top: 60px;
  padding-left: 15px;
  padding-right: 15px;
`;

const SocialContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  @media (min-width: 780px) {
    grid-template-columns: repeat(3, 1fr);
  }
  justify-items: center;
  max-width: 250px;
  margin: 0 auto;
  gap: 1rem;
  align-items: center;
`;
const SocialImage = styled.img``;

const NewsLetterContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 1rem;
`;
const NewsLetterTitle = styled.span`
  color: white;
  font-size: 26px;
  font-weight: 300;
`;
const NewsLetterText = styled.span`
  color: white;
  display: grid;
  text-align: center;
`;
const NewsLetterRegister = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  border-bottom: 1px solid grey;
  padding-bottom: 5px;
`;

const NewsLetterInput = styled.input`
  border: unset;
  background: transparent;
  color: #ffffff80;
`;
const NewsLetterLabel = styled.label`
  color: white;
  text-align: end;
`;

const InfosContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  font-size: 14px;
  justify-items: center;
  gap: 1rem;
`;
const InfoContainerOne = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`;
const InfoContainerTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`;
const InfoContainerThree = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
`;
const InfosText = styled.span`
  color: white;
`;

const PayWaysContainer = styled.div`
  text-align: center;
  display: grid;
  gap: 0.5rem;
  justify-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid gray;
`;
const PayWaysTitle = styled.span`
  color: white;
`;
const PayWayImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
`;
const PayWayImage = styled.img``;
const CopyrightContainer = styled.div`
  display: grid;
  justify-items: center;
  gap: 1rem;
  padding-bottom: 30px;
`;
const Copyright = styled.span`
  color: white;
`;

const CreatedBy = styled.span`
  color: white;
`;
