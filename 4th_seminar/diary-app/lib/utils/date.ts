export const getDateFormat = (date: number) => {
  const year = Math.floor((date % 10000) / 100);
  const day = date % 100;
  return `${year}월 ${day}일`;
};

export const getCurDate = () => {
  const now = new Date();
  const curYear = now.getFullYear();
  const curMonth = now.getMonth();
  return {
    year: curYear,
    month: curMonth,
  };
};
