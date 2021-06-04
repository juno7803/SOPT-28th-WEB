import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { DiaryCard } from "../../components";
import useSWR from "swr";
import { useRecoilValue } from "recoil";
import { dateState } from "../../states";
import { ICardForm } from "../../types";
import { Container } from "../../components";

const Diary = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { year, month } = useRecoilValue(dateState);
  const { data, error } = useSWR("/posts");

  const diaryData = data?.data?.data[year][month].find(
    (el: ICardForm) => el.id === parseInt(id)
  );
  const rawData = data?.data?.data;

  if (!data) <div>Loading...</div>;
  if (error) <div>Error...</div>;
  return (
    <DiaryWrapper>
      <Container>
        <DiaryCard data={diaryData} rawData={rawData} />
      </Container>
    </DiaryWrapper>
  );
};

export default Diary;

const DiaryWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
