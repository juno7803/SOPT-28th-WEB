import React from "react";
import styled from "styled-components";
import { getDateFormat } from "../../lib/utils/date";
import EmptyImage from "../../assets/photo.svg";
import { IData } from "../../types";

interface ICard {
  userData: IData;
}

const Card = ({ userData }: ICard) => {
  return (
    <CardWrap>
      <div className="card">
        <div className="card__image">
          {userData ? (
            <img className="card__image--photo" src={userData.image} alt="" />
          ) : (
            <img className="card__image--empty" src={EmptyImage} alt="" />
          )}
        </div>
        <div className="card__top">
          <div className="card__top--date">{getDateFormat(userData.date)}</div>
          <div className="card__top--weather">{userData.weather}</div>
        </div>
        <div className="card__title">{userData.title}</div>
        <div className="card__tags">
          {userData.tags.map((tag: string, index: number) => {
            // tag가 list 형식으로 저장되어있기 때문에 map을 사용합니다
            return (
              <div key={index} className="card__tags--tag">
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </CardWrap>
  );
};

export default Card;

const CardWrap = styled.div`
  .card {
    box-sizing: border-box;
    width: 220px;
    height: 257px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;

    &__image {
      width: 220px;
      height: 148px;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      background-color: #c4c4c4;
      display: flex;
      justify-content: center;
      align-items: center;

      &--photo {
        width: inherit;
        height: inherit;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
      }
    }

    &__top {
      margin: 9px 12px;
      font-size: 14px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      &--weather {
        color: #cea0e3;
      }
    }

    &__title {
      font-size: 18px;
      height: 25px;
      margin: 0 12px;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__tags {
      margin: 9px 12px;
      margin-right: 5px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #cea0e3;

      &--tag {
        font-size: 14px;
        color: white;
        background-color: #cea0e3;
        padding: 4px 11px;
        border-radius: 5px;
        margin-right: 7px;
        max-width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;
