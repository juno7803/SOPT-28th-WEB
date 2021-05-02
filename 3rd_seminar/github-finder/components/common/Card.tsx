import styled from "styled-components";

const Card: React.FC = ({ children }) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default Card;

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
