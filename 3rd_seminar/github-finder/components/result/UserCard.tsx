import { IUserData } from "../../types";
import { client } from "../../lib/api";
import { AxiosResponse, AxiosError } from "axios";
import { useRouter } from "next/router";
import styled from "styled-components";
import useSWR from "swr";

interface IUserCardData {
  data?: AxiosResponse<IUserData>;
  error?: AxiosError;
}

const UserCard = () => {
  const router = useRouter();
  // Todo: getStaticProps로도 해보기
  const { data, error }: IUserCardData = useSWR(
    `/${router.query.userId}`,
    (url: string) => client.get(url)
  );

  const handleClickButton = () => {
    // route to home
    router.push("/");
  };

  if (!data) {
    <div>Loading ...</div>;
  }

  if (error) {
    <div>Error!</div>;
  }

  return (
    <Container>
      <Wrapper>
        <Header>
          <div className="card__title">{data?.data.name}</div>
          <div className="card__button" onClick={handleClickButton}>
            닫기
          </div>
        </Header>
        <Content>
          <img className="card__img" src={data?.data.avatar_url} />
          <div className="card__desc">
            <div className="card__desc bio">BIO : {data?.data.bio}</div>
            <div className="card__desc blog">BLOG : {data?.data.blog}</div>
            <div className="card__desc followers">
              FOLLOWERS : {data?.data.followers}
            </div>
            <div className="card__desc following">
              FOLLOWING : {data?.data.following}
            </div>
          </div>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default UserCard;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 50rem;
  height: 66rem;
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
    }
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .card {
    &__img {
      display: flex;
      justify-content: center;
      margin-top: 4rem;
      border-radius: 1rem;
      width: 40rem;
      height: 40rem;
    }
    &__desc {
      margin-top: 1rem;
      font-weight: 500;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.color.black_1};
    }
  }
`;
