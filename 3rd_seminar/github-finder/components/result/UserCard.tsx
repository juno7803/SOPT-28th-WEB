import React, { useEffect, useState } from "react";
import { IUserData } from "../../types";
import { client } from "../../lib/api";
import { AxiosResponse, AxiosError } from "axios";
import { useRouter } from "next/router";
import styled, { ThemeContext } from "styled-components";
import useSWR from "swr";

interface IUserCardData {
  data?: AxiosResponse<IUserData>;
  error?: any;
}
// Todo: Card 컴포넌트화 -> 여기 페이지 이름 Result.tsx 로 바꾸기
const UserCard = () => {
  const router = useRouter();
  const fetcher = (url: string) => client.get(url);
  // Todo: getStaticProps로도 해보기
  const { data: user, error: userError }: IUserCardData = useSWR(
    `/${router.query.userId}`,
    fetcher,
    {
      // 404 에러일 땐, error retry 하지 않기 - input이 잘못되었기 때문
      onErrorRetry: (error) => {
        if (error.status === 404) return;
      },
    }
  );
  const { data: repos, error: reposError } = useSWR(
    `/${router.query.userId}/repos`,
    fetcher
  );

  const handleClickButton = () => {
    // route to home
    router.push("/");
  };
  const handleClickGithubBtn = () => {
    window.open(user?.data.html_url);
  };

  if (userError || reposError) {
    return (
      <Container>
        <Wrapper>User Not Found!</Wrapper>
      </Container>
    );
  }
  if (!user || !repos) {
    return (
      <Container>
        <Wrapper>Loading ...</Wrapper>
      </Container>
    );
  }

  return (
    <Container>
      <Wrapper>
        <Header>
          <div className="card__title">
            {user?.data.name} ({user?.data.login})
          </div>
          <div className="card__button" onClick={handleClickButton}>
            닫기
          </div>
        </Header>
        <Content>
          <img className="card__img" src={user?.data.avatar_url} />
          <div className="card__desc" style={{ marginTop: "2rem" }}>
            <div className="card__desc bio">{user?.data.bio}</div>
            <a
              className="card__desc blog"
              href={user?.data.blog}
              target="_blank"
            >
              {user?.data.blog}
            </a>
            {/* {repos?.data.slice(0, 10).map((repo: any, index: number) => (
              <>
                <Repository href={repo.html_url} key={index}>
                  {repo.name}
                </Repository>
                <br />
              </>
            ))} */}
          </div>
          <GithubButton onClick={handleClickGithubBtn}>
            깃허브 방문하기
          </GithubButton>
        </Content>
        <Footer>
          <div className="item">Followers :{user?.data.followers}</div>
          <div className="item">Following :{user?.data.following}</div>
          <div className="item">Repos :{user?.data.public_repos}</div>
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default UserCard;

const GithubButton = styled.div`
  transition: all 0.3s;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 16rem;
  height: 4rem;
  border-radius: 2.5rem;
  border: 0.2rem solid ${({ theme }) => theme.color.orange};
  color: ${({ theme }) => theme.color.orange};
  font-size: 1.4rem;
  font-weight: 500;
  :hover {
    background-color: ${({ theme }) => theme.color.orange};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    color: ${({ theme }) => theme.color.white};
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.black_1};
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  min-height: 60rem;
  padding: 3rem 3rem;
  background-color: #f3f3f3;
  border-radius: 1.6rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .card {
    &__title {
      font-weight: 500;
      font-size: 2rem;
      color: ${({ theme }) => theme.color.black_1};
    }
    &__button {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 7rem;
      height: 4.6rem;
      background-color: ${({ theme }) => theme.color.orange};
      color: #ffffff;
      border-radius: 2.6rem;
      font-size: 1.6rem;
      font-weight: 500;
      transition: all 0.3s;
      :hover {
        background-color: ${({ theme }) => theme.color.orange_hover};
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      }
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .card {
    &__img {
      display: flex;
      justify-content: center;
      margin-top: 4rem;
      border-radius: 15rem;
      width: 30rem;
      height: 30rem;
    }
    &__desc {
      line-height: 2.6rem;
      font-weight: 500;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.color.black_1};
    }
  }
`;

const Repository = styled.a`
  margin-top: 1rem;
  font-size: 1.6rem;
`;
