import React from "react";
import styled from "styled-components";
import { Card, Container, NewCard } from "../components";
import { useRecoilValue } from "recoil";
import { dateState } from "../states";
import useSWR from "swr";
import { IDiary, IData } from "../types";

const Main = () => {
  const date = useRecoilValue(dateState);
  const { data, error }: any = useSWR("/posts");
  const user: IDiary = data;

  return (
    <Styled.Main>
      <Container>
        {!data && <div>Loading...</div>}
        {error && <div>Error!!</div>}
        <Styled.CardContainer>
          {user?.data?.data?.[date.year][date.month].map(
            (userData: IData, index: number) => (
              <Card userData={userData} key={index} />
            )
          )}
          <NewCard />
        </Styled.CardContainer>
      </Container>
    </Styled.Main>
  );
};

export default Main;

const Styled = {
  Main: styled.div`
    display: flex;
    justify-content: center;
  `,
  CardContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 24px;
  `,
};
