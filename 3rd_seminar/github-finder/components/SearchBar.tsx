import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const SearchBar = () => {
  const [userId, setUserId] = useState("");
  const router = useRouter();

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
          />
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 40rem;
  height: 20rem;
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
