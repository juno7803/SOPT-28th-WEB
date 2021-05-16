import React from "react";
import styled from "styled-components";
import { Calender, Footer, Header, Title } from "./";

const Container: React.FC = ({ children }) => {
  return (
    <ContainerWrap>
      <Header />
      <Calender />
      <Title />
      {children}
      <Footer />
    </ContainerWrap>
  );
};

export default Container;

const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
