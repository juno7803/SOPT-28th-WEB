import React, { useState } from "react";
import styled from "styled-components";
import { Calender, Footer, Header, Title } from "./";

const Container: React.FC = ({ children }) => {
  // const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data } = await client.get("/posts");
  //       data[year] && setUserData(data[year][month]);
  //       console.log(userData);
  //     } catch (err) {
  //       throw err;
  //     }
  //   })();
  // }, [year, month, userData]);

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
