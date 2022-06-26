import React from "react";
import styled from "styled-components";
import fastLogo from "../assets/fast.svg";
import returnLogo from "../assets/return.svg";
import commentLogo from "../assets/comment.svg";

export default function Usp() {
  return (
    <Container>
      <UspContainer>
        <UspItem>
          <Image src={fastLogo} />
          <Title>Αποστολή σε όλη την Ελλάδα</Title>
        </UspItem>
        <UspItem>
          <Image src={returnLogo} />
          <Title>Επιστροφές από το σπίτι δωρεάν</Title>
        </UspItem>
        <UspItem>
          <Image src={commentLogo} />
          <Title>Ασφαλείς πληρωμές με κάρτα και paypal</Title>
        </UspItem>
      </UspContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;
const UspContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  padding-left: 15px;
  padding-right: 15px;
`;
const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
const Title = styled.div`
  width: 100%;
`;

const UspItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 20% 74%;
  background-color: #f5f5f5;
  align-items: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
  justify-items: center;
  gap: 1rem;
`;
