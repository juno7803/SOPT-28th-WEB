import { useRouter } from "next/router";
import styled from "styled-components";

const Title = () => {
  const router = useRouter();
  const title = router.pathname === "/" ? "이번 달 일기" : "오늘의 일기";

  return (
    <TitleWrap>
      <div className="title">{title}</div>
    </TitleWrap>
  );
};

export default Title;

const TitleWrap = styled.div`
  .title {
    width: 1200px;
    height: 92px;
    font-size: 36px;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;
