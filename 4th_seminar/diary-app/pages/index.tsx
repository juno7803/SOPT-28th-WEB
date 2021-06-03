import React from "react";
import styled from "styled-components";
import { Card, Container, NewCard } from "../components";
import { useRecoilValue } from "recoil";
import { dateState } from "../states";
import useSWR from "swr";
import { client } from "../lib/api";
import { IDiary, IData } from "../types";

const Main = () => {
  const date = useRecoilValue(dateState);
  const fetcher = (url: string) => client.get(url);
  const { data, error }: any = useSWR("/posts", fetcher);
  const user: IDiary = data;

  return (
    <MainWrap>
      <Container>
        {!data && <div>Loading...</div>}
        {error && <div>Error!!</div>}
        <CardContainer>
          {user?.data?.data?.[date.year][date.month].map(
            (userData: IData, index: number) => (
              <Card userData={userData} key={index} />
            )
          )}
          <NewCard />
        </CardContainer>
      </Container>
    </MainWrap>
  );
};

export default Main;
// next라서 Header ~ Footer를 컴포넌트화 시켜야 할 듯

const MainWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 24px;
`;
