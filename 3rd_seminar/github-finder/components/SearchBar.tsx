import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";

const MAX_NUM = 3;

interface IList {
  id: Date;
  userId: string;
}

const SearchBar = () => {
  const [userId, setUserId] = useState("");
  const [userList, setUserList] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const handleReomveItem = (id: Date) => {
    const newList = userList.filter((list: IList) => list.id !== id);
    setUserList(newList);
    localStorage.setItem("userId", JSON.stringify(newList));
  };

  useEffect(() => {
    setUserList(JSON.parse(localStorage.getItem("userId") || "[]"));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserId(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: "result",
      query: { userId },
    });

    // localStorage 배열 안에 id와 userId를 가진 객체를 두기 위함
    const listItem = {
      id: Date.now(),
      userId,
    };
    // filter로 같은 아이디의 중복 제거
    const filterList = JSON.parse(
      localStorage.getItem("userId") || "[]"
    ).filter((list: IList) => list.userId !== userId);
    // 검색어 추가 : 가장 최근 검색 3개 까지만 유지
    const newList = [...filterList, listItem];
    if (newList.length > MAX_NUM) {
      localStorage.setItem("userId", JSON.stringify(newList.slice(1, 4)));
    } else {
      localStorage.setItem("userId", JSON.stringify(newList));
    }
  };

  const handleClickHistory = (userId: string) => {
    router.push({
      pathname: "result",
      query: { userId },
    });
  };

  return (
    <Container>
      <Wrapper>
        <div>아이디 입력하기</div>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userId}
            onChange={handleChange}
            placeholder="아이디를 입력하세요!"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </Form>
        <HistoryContainer isFocused={isFocused}>
          {userList.map((list: IList, index: number) => (
            <HistoryWrapper>
              <History
                key={index}
                onClick={() => handleClickHistory(list.userId)}
              >
                {list.userId}
              </History>
              <HistoryDelButton onClick={() => handleReomveItem(list.id)}>
                x
              </HistoryDelButton>
            </HistoryWrapper>
          ))}
        </HistoryContainer>
      </Wrapper>
    </Container>
  );
};

export default SearchBar;

const HistoryContainer = styled.div<{ isFocused: boolean }>`
  ${(props) =>
    props.isFocused
      ? css`
          display: flex;
          flex-direction: column;
        `
      : css`
          display: none;
        `}
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const HistoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HistoryDelButton = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.orange};
  color: ${({ theme }) => theme.color.white};
  :hover {
    box-shadow: rbga(0, 0, 0, 0.25);
    background-color: ${({ theme }) => theme.color.orange_hover};
  }
`;

const History = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 400;
  height: 100%;
  border-radius: 1rem;
  padding: 0.5rem;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.color.orange};
  cursor: pointer;
  :hover {
    box-shadow: rbga(0, 0, 0, 0.25);
    color: ${({ theme }) => theme.color.orange_hover};
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 40rem;
  height: 25rem;
  font-size: 2rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.color.gray_2};
  border-radius: 1.6rem;
  padding: 3.4rem 3.2rem;
`;

const Form = styled.form`
  margin-top: 2rem;
  width: 10rem;
  input {
    width: 20rem;
    height: 5rem;
    font-size: 1.6rem;
    ::placeholder {
      font-size: 1.6rem;
    }
  }
`;
