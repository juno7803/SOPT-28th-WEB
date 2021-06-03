import React, { useEffect, useState } from "react";
import { Container } from "../../components";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
// import { getCurDate, getDateFormat } from "../../lib/utils/date";
import { dateState } from "../../states";

const Diary = () => {
  const router = useRouter();
  // const id = router.pathname;
  // const date = useRecoilValue(dateState);
  // const [diaryData, setDiaryData] = useState(null);

  // data fetching!
  return <Container>Diary</Container>;
};

export default Diary;
