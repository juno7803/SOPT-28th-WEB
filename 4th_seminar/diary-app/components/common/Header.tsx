import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Menu } from "../../assets";

const Header = () => {
  const router = useRouter();
  const onClickTitle = () => {
    router.push("/");
  };
  return (
    <HeaderWrap>
      <div className="header">
        <img className="header__menu" src={Menu} alt="" />
        <div className="header__title" onClick={onClickTitle}>
          Diary App
        </div>
        <img className="header__profile" src={""} alt="" />
      </div>
      <div className="header__hr"></div>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 91px;

    &__title {
      font-size: 36px;
      font-weight: bold;
      font-style: italic;
      color: #cea0e3;
      &:hover {
        cursor: pointer;
      }
    }

    &__profile {
      margin-right: 10px;
    }

    &__hr {
      width: 1200px;
      height: 13px;
      background: linear-gradient(90deg, white, #cea0e3);
    }
  }
`;
