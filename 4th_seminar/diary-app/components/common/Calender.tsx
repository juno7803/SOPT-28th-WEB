import React from "react";
import { useRecoilState } from "recoil";
import { dateState } from "../../states";
import styled from "styled-components";
import LeftOff from "../../assets/leftoff.svg";
import LeftOn from "../../assets/left.svg";
import RightOff from "../../assets/rightoff.svg";
import RightOn from "../../assets/right.svg";
import useSWR from "swr";

const monthList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const Calender = () => {
  const [date, setDate] = useRecoilState(dateState);
  const minusYear = () => {
    setDate({ ...date, year: date.year - 1 });
  };

  const plusYear = () => {
    setDate({ ...date, year: date.year + 1 });
  };

  return (
    <CalendarWrap>
      <div className="calender">
        <div className="calender__year">
          <img
            className="calender__year--left"
            src={LeftOff}
            alt=""
            onClick={minusYear}
            // Todo: e의 type 찾기(e.target.src에 접근 가능한)
            onMouseEnter={(e: any) => (e.target.src = LeftOn)}
            onMouseLeave={(e: any) => (e.target.src = LeftOff)}
          />
          <div className="calender__year--title">{date.year}년</div>
          <img
            className="calender__year--right"
            src={RightOff}
            alt=""
            onClick={plusYear}
            onMouseEnter={(e: any) => (e.target.src = RightOn)}
            onMouseLeave={(e: any) => (e.target.src = RightOff)}
          />
        </div>
        <div className="calender__month">
          {monthList.map((mon: number, index: number) => (
            <div
              className="calender__month--button"
              onClick={() => setDate({ ...date, month: mon })}
              style={
                mon === date.month
                  ? { fontSize: "22px", fontWeight: "bold" }
                  : {}
              }
              key={index}
            >
              {mon + 1}월
            </div>
          ))}
        </div>
      </div>
    </CalendarWrap>
  );
};

export default Calender;

const CalendarWrap = styled.div`
  .calender {
    width: 1200px;
    height: 118px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__year {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 61px;
      font-weight: 700;
      font-size: 36px;

      &--title {
        margin-left: 25px;
        margin-right: 25px;
      }
      &--left:hover,
      &--right:hover {
        cursor: pointer;
      }

      &--number {
        font-size: 36px;
        font-weight: bold;
        margin: 0 25px;
        line-height: 1;
      }
    }

    &__month {
      height: 57px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 1025px;

      &--button {
        font-size: 18px;
        width: 52px;
        &:hover {
          font-size: 22px;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
  }
`;
