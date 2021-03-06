import React, { useMemo } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import useSWR, { mutate } from "swr";
import post from "../../lib/api/post";
import { dateState } from "../../states";
import { ICardForm, IDiary } from "../../types";

const NewCard = () => {
  const { year, month } = useRecoilValue(dateState);
  const { data, error }: any = useSWR("/posts");
  const user: IDiary = data?.data?.data;

  const getDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate() + "";
    const monthFormat = month < 10 ? `0${month}` : month;
    const dayFormat = day.length < 2 ? 0 + day : day;
    return parseInt(`${year}${monthFormat}${dayFormat}`);
  };
  // NewCard 호출될 때 마다 새로 연산하는 것 방지
  const getDateMemo = useMemo(() => getDate, []);

  const createCard = async () => {
    const cardForm: ICardForm = {
      id: user?.[year][month].length + 1,
      date: getDateMemo(),
      title: "",
      image: "",
      weather: "",
      tags: [],
      summary: "",
      text: "",
    };
    if (user) {
      const newData = user[year][month].concat(cardForm);
      const userData = {
        ...user,
        [year]: {
          ...user[year],
          [month]: newData,
        },
      };
      // const userData = cloneDeep(user);
      // userData[year][month].push(cardForm);
      await post.postCard(userData);
      // post 한 결과로 자동 validation -> 기본 옵션 : true
      mutate("/posts", userData);
    }
  };

  if (!user) {
    <div>Loading...</div>;
  }
  if (error) {
    <div>Error!</div>;
  }
  return (
    <Styled.Card>
      <div className="card" onClick={createCard}>
        <div className="card__text">+ 추가해 주세요</div>
      </div>
    </Styled.Card>
  );
};

export default NewCard;

const Styled = {
  Card: styled.div`
    .card {
      width: 220px;
      height: 257px;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
      &__text {
        font-size: 20px;
        color: #cea0e3;
      }
    }
  `,
};
